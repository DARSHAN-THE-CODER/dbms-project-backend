const modelConfiguration = {

    // use camelcase for automatically added attributes but underscore style
    // so updatedAt will not be updated_at
    underscored: false,

    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,

    // timestamps: true add these attributes to each model, although we have still added
    createdAt: true,
    updatedAt: true,
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
}

module.exports = modelConfiguration