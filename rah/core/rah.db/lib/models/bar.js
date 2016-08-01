var settings = requireCore('rah.utils').settings;

module.exports.model = function (seq) {
    return {
        columns: {
            //nome do módulo
            name: { type: seq.STRING, unique: true, allowNull: false },           
        },
        options: {
            tableName: 'tb_bars', 
            timestamps: true            
        }
    }
}