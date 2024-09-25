create policy "Policy with security definer functions"
on "public"."entities"
as permissive
for all
to public
using (true);


create policy "allow all"
on "public"."entities_fields"
as permissive
for all
to public
using (true);


create policy "allow all"
on "public"."field_types"
as permissive
for all
to public
using (true);


create policy "allow all"
on "public"."fields"
as permissive
for all
to public
using (true);



