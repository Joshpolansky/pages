function updateTable() {

    let orders = ['XYZ', 'XZY', 'YXZ', 'YZX', 'ZXY', 'ZYX']

    let table = '<table>'
    let deg_to_rad = Math.PI / 180;
    let rad_to_deg = 180 / Math.PI;

    let angles = [a_in.value * deg_to_rad, b_in.value * deg_to_rad, c_in.value * deg_to_rad]

    table += '<tr>'
    table += '<th>'
    table += 'Source -> Dest'
    table += '</th>'
    for (dest_order in orders) {
        table += '<th>'
        table += orders[dest_order]
        table += '</th>'
    }
    table += '<th>'
    table += 'Quaternion'
    table += '</th>'
    table += '</tr>'
    for (source_order in orders) {

        let in_order = orders[source_order];
        let x = angles[in_order.indexOf('X')]
        let y = angles[in_order.indexOf('Y')]
        let z = angles[in_order.indexOf('Z')]
        let vec = new THREE.Euler(x, y, z, in_order);
        table += '<tr>'
        table += '<th>'
        table += in_order
        table += '</th>'

        for (order in orders) {
            let out_order = orders[order]
            vec.reorder(out_order)
            table += '<td>'
            table += `x ${(rad_to_deg * vec._x).toPrecision(3)} <br/> y ${(rad_to_deg * vec._y).toPrecision(3)} <br/>z ${(rad_to_deg * vec._z).toPrecision(3)}`
            table += '</td>'
        }
        const quaternion = new THREE.Quaternion();
        quaternion.setFromEuler(vec)
        table += '<td>'
        table += `x ${(quaternion._x).toPrecision(3)} <br/> y ${(quaternion._y).toPrecision(3)} <br/>z ${(quaternion._z).toPrecision(3)} <br/>w ${(quaternion._w).toPrecision(3)}`
        table += '</td>'
        table += '</tr>'

    }
    table += '</table>'

    output.innerHTML = table
}

updateTable()