CREATE SCHEMA WASP;
use WASP;
CREATE TABLE  SENIOR
(seniorID 	LONG			NOT NULL PRIMARY KEY,
name		VARCHAR(45)	 	NOT NULL,
email		VARCHAR(45)		NOT NULL,
rzip			VARCHAR(6)		NOT NULL,
foreign key(rzip) references WASP.REGION(zip));

CREATE TABLE GUARDIAN
(guardianID 	long			not null primary key,
name			varchar(45)	 	not null,
email			varchar(45)		not null,
SID				LONG			not null,
foreign key(SID) references WASP.SENIOR(seniorID));

create table REGION
(zip	varchar(6)		not null primary key);

create table VOLUNTEER
(volunteerID	long	not null primary key,
name			varchar(45)		not null,
email			varchar(45)		not null,
phone			varchar(45)		not null,
rzip			varchar(6)		not null,
foreign key(rzip) references WASP.REGION(zip));

create table INCHARGE
(VID	long	not null primary key,
SID		long 	not null primary key,
foreign key(VID) references WASP.VOLUNTEER(volunteerID),
foreign key(SID) references WASP.VOLUNTEER(seniorID));
