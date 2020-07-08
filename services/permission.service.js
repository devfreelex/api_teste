const permissionFactory = () => {
    const permissions = [
        {code: 1, type:'admin', label:'Administrador', level: 7},
        {code: 2, type:'secretary', label:'Secretário', level: 4},
        {code: 4, type:'seller', label:'Vendedor', level: 3},
        {code: 5, type:'tutor', label:'Professor', level: 2},
        {code: 6, type:'pupil', label:'Aluno', level: 1},
    ]

    const getByType = (type) => {
        return permissions.find( permission => {
            if(permission.type === type) return permission
        })
    }

    const isValid = (type) => {
        return permissions.some( permission => {
            return permission.type === type
        })
    }

    return {
        getByType,
        isValid
    }

}

module.exports = { permissionFactory }