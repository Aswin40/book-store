import { MigrationInterface, QueryRunner } from "typeorm";

export class BooksNewColumn1733288925890 implements MigrationInterface {
    name = 'BooksNewColumn1733288925890'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` ADD \`publisherId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`book\` ADD CONSTRAINT \`FK_b8988524dd01b5dcb67b4b3ede7\` FOREIGN KEY (\`publisherId\`) REFERENCES \`publisher\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book\` DROP FOREIGN KEY \`FK_b8988524dd01b5dcb67b4b3ede7\``);
        await queryRunner.query(`ALTER TABLE \`book\` DROP COLUMN \`publisherId\``);
    }

}
