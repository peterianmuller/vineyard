insert into "addresses" (city, country, state, street, street_2, zip) 
values ('324234', '2343', 'sdf', 'sdf', 'sdf', 'sdf');

insert into "organizations" (address_id, name, phone_number, tier) 
values(1, '234', '234', 'Basic');

insert into "users" (account_restrictions, birthdate, email, firstname, lastname, organization_id, password, phone_number, username)
values ('Employee', '0008-09-08T07:00:00.000Z', '324234', 'a','a',1, 1, 's', 'i');

insert into "users" (account_restrictions, birthdate, email, firstname, lastname, organization_id, password, phone_number, username)
values ('Employee', '0008-09-08T07:00:00.000Z', '4339508', '3','3',1, 1, 's', 'kljlkj');

