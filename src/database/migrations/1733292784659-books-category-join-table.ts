import { MigrationInterface, QueryRunner } from "typeorm";

export class BooksCategoryJoinTable1733292784659 implements MigrationInterface {
    name = 'BooksCategoryJoinTable1733292784659'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`book_categories_category\` (\`bookId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_3f2c919594cd1b6386240d6d46\` (\`bookId\`), INDEX \`IDX_83b564c6e2518a2af3c60ac9da\` (\`categoryId\`), PRIMARY KEY (\`bookId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`book_categories_category\` ADD CONSTRAINT \`FK_3f2c919594cd1b6386240d6d464\` FOREIGN KEY (\`bookId\`) REFERENCES \`book\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`book_categories_category\` ADD CONSTRAINT \`FK_83b564c6e2518a2af3c60ac9da6\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`book_categories_category\` DROP FOREIGN KEY \`FK_83b564c6e2518a2af3c60ac9da6\``);
        await queryRunner.query(`ALTER TABLE \`book_categories_category\` DROP FOREIGN KEY \`FK_3f2c919594cd1b6386240d6d464\``);
        await queryRunner.query(`DROP INDEX \`IDX_83b564c6e2518a2af3c60ac9da\` ON \`book_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_3f2c919594cd1b6386240d6d46\` ON \`book_categories_category\``);
        await queryRunner.query(`DROP TABLE \`book_categories_category\``);
    }

}
