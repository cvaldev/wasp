CREATE SCHEMA WASP;
use WASP;
create table REGION
(zip	varchar(6)		not null primary key);

CREATE TABLE  SENIOR
(seniorID 	varchar(10)		not null primary key,
name		varchar(45) 	not null,
email		varchar(45)		not null,
rzip			varchar(45)	not null,
foreign key(rzip) references WASP.REGION(zip));

CREATE TABLE GUARDIAN
(guardianID 	varchar(10)			not null primary key,
name			varchar(45)	 	not null,
email			varchar(45)		not null,
SID				varchar(10)			not null,
foreign key(SID) references WASP.SENIOR(seniorID));

create table VOLUNTEER
(volunteerID	varchar(10)	not null primary key,
name			varchar(45)		not null,
email			varchar(45)		not null,
phone			varchar(45)		not null,
rzip			varchar(6)		not null,
foreign key(rzip) references WASP.REGION(zip));

create table INCHARGE
(VID	varchar(10)	not null,
SID		varchar(10) 	not null,
primary key (VID, SID),
foreign key(VID) references WASP.VOLUNTEER(volunteerID),
foreign key(SID) references WASP.SENIOR(seniorID));

insert into REGION values ('m3j');
insert into SENIOR values ('0123456789', 'welt yang','oldperson123@gmail.com"', 'm3j');