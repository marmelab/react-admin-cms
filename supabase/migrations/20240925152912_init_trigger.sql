set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.trigger_entities_fields_table()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$DECLARE
    entity_table_name TEXT;
    field_name TEXT;
    field_type TEXT;
BEGIN
    -- Handle DELETE: Remove field from the entity's table
    IF TG_OP = 'DELETE' THEN
        -- Set the table name based on the entity
        SELECT name INTO entity_table_name FROM entities WHERE id = OLD.entity_id;
        -- Get field name and remove it from the entity table
        SELECT f.name INTO field_name FROM fields f WHERE f.id = OLD.field_id;
        IF entity_table_name IS NOT NULL AND field_name IS NOT NULL THEN
            EXECUTE format('ALTER TABLE %I DROP COLUMN IF EXISTS %I', entity_table_name, field_name);
        END IF;
        RETURN OLD;
    END IF;

    -- Handle INSERT: Add new field to the entity's table
    IF TG_OP = 'INSERT' THEN
        -- Set the table name based on the entity
        SELECT name INTO entity_table_name FROM entities WHERE id = NEW.entity_id;
        -- Get the field name and type
        SELECT f.name, ft.type INTO field_name, field_type
        FROM fields f
        JOIN field_types ft ON f.field_type_id = ft.id
        WHERE f.id = NEW.field_id;

        -- Add the field to the entity's table
        EXECUTE format('ALTER TABLE %I ADD COLUMN %I %s', entity_table_name, field_name, field_type);
        RETURN NEW;
    END IF;

    -- Safety return in case no match
    RETURN NULL;
END;$function$
;

CREATE OR REPLACE FUNCTION public.trigger_entity_table()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$DECLARE
    old_table_name TEXT;
    new_table_name TEXT;
BEGIN
    -- Handle DELETE case
    IF TG_OP = 'DELETE' THEN
        -- Set the table name to be deleted (based on the old entity name)
        old_table_name := OLD.name;

        -- Drop the table
        EXECUTE format('DROP TABLE IF EXISTS %I', old_table_name);
        RETURN OLD;
    END IF;

    -- Handle UPDATE case
    IF TG_OP = 'UPDATE' THEN
        -- If the name has changed, rename the table
        IF OLD.name IS DISTINCT FROM NEW.name THEN
            old_table_name := OLD.name;
            new_table_name := NEW.name;

            -- Rename the table
            EXECUTE format('ALTER TABLE %I RENAME TO %I', old_table_name, new_table_name);
        END IF;
        RETURN NEW;
    END IF;

    -- Handle INSERT case (create new table)
    IF TG_OP = 'INSERT' THEN
        -- Set the new table name
        new_table_name := NEW.name;

        -- Create the table
        EXECUTE format('CREATE TABLE %I ("id" bigint generated by default as identity not null, "created_at" timestamp with time zone not null default now())', new_table_name);

        RETURN NEW;
    END IF;
END;$function$
;

CREATE TRIGGER trigger_entity_table AFTER INSERT OR DELETE OR UPDATE ON public.entities FOR EACH ROW EXECUTE FUNCTION trigger_entity_table();

CREATE TRIGGER trigger_entities_fields_table AFTER INSERT OR DELETE ON public.entities_fields FOR EACH ROW EXECUTE FUNCTION trigger_entities_fields_table();


