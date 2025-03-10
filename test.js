const fs = require("fs");
const csv = require("csv-parser");
const pgp = require("pg-promise")();

// PostgreSQL Connection
const db = pgp({
    host: "localhost",
    port: 5432,
    database: "your_database",
    user: "your_user",
    password: "your_password"
});

// Table Name
const tableName = "your_table";

const insertData = async () => {
    const records = [];
    
    fs.createReadStream("your_file.csv")
        .pipe(csv())
        .on("data", (row) => {
            // Convert empty strings to NULL
            for (let key in row) {
                if (row[key] === "") row[key] = null;
            }
            records.push(row);
        })
        .on("end", async () => {
            try {
                // Bulk insert (better than row-by-row)
                const query = pgp.helpers.insert(records, Object.keys(records[0]), tableName);
                await db.none(query);
                console.log("Data import completed successfully!");
            } catch (error) {
                console.error("Error inserting data:", error);
            } finally {
                pgp.end();
            }
        });
};

insertData();