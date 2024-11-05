
module.exports = async () => {
    // const env = process.env.TEST_ENV; // default to UAT if not specified
    // const lob = process.env.TEST_LOB; // default to LOB1 if not specified
    console.log("EXECUTING");

    // Set environment variables for later use in tests
    process.env.BASE_URL = "https://www.saucedemo.com/";

    console.log('BASE_URL:', process.env.BASE_URL);
};
