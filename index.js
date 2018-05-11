function GoL(universe, step) {

    return


}




function Universe(size = 10) {
    let values;
    let previousValues;

    const isAlive = function(previousValues, i, j)  {
        return 1;
    } 

    const obj = {
        initValues: function () {
            const fillEmpty = function () {
                const createFalsyArray = (size) => Array.from(new Array(size), () => 0)
                return Array.from(new Array(size), () => createFalsyArray(size))
            }
            values = fillEmpty();
            values[0][0] = 1;
            values[0][1] = 1
        },

        next: function () {
            previousValues = values;
            for (let i = 0; i < values.length; i++) {
                let fila = values[i]
                for (let j = 0; j < fila.length; j++) {
                    console.log(`value: ${fila[j]}`)
                    values[i][j] = isAlive(i,j)
                }
            }
            console.log('done')
        }
    }

    return obj;
}


const myUniverse = Universe();
myUniverse.initValues();
myUniverse.next();
myUniverse.next();