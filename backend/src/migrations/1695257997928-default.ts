import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1695257997928 implements MigrationInterface {
    name = 'Default1695257997928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`physios\` (\`idPhysio\` int NOT NULL AUTO_INCREMENT, \`namePhysio\` text NOT NULL, \`emailPhysio\` text NOT NULL, PRIMARY KEY (\`idPhysio\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`patients\` (\`idPatient\` int NOT NULL AUTO_INCREMENT, \`namePatient\` text NOT NULL, \`anamnesis\` text NOT NULL, \`physio_id\` int NULL, PRIMARY KEY (\`idPatient\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`patients\` ADD CONSTRAINT \`FK_6916e9141f4eed51724e521d85e\` FOREIGN KEY (\`physio_id\`) REFERENCES \`physios\`(\`idPhysio\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`patients\` DROP FOREIGN KEY \`FK_6916e9141f4eed51724e521d85e\``);
        await queryRunner.query(`DROP TABLE \`patients\``);
        await queryRunner.query(`DROP TABLE \`physios\``);
    }

}
