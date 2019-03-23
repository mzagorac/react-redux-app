module.exports = {
  db: "mongodb",
  host: "127.0.0.1",
  port: 27017,
  dbName: "contact",
  username: "admin",
  password: "ads",
  getUrl: function() {
    return `${this.db}://${this.host}:${this.port}/${this.dbName}`;
  }
};
