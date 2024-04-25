const avatars =
    [
        {
            "name": "MANUEL ALEJANDRO LUQUE TREUPIL",
            "email": "mluque@utem.cl",
            "key": 0
        },
        {
            "name": "JOSÉ BRAULIO MALCA RODRIGUEZ",
            "email": "jmalca@utem.cl",
            "key": 1
        },
        {
            "name": "ENOC CAMIL GARCIA DE LA HUERTA SARIEGO",
            "email": "egarciadelahuerta@utem.cl",
            "key": 2
        },
        {
            "name": "CRISTOBAL ANDRES MARTINEZ SOPERREY",
            "email": "cmartinezs@utem.cl",
            "key": 3
        },
        {
            "name": "LUCAS BENJAMIN DROGUETT GARATE",
            "email": "ldroguett@utem.cl",
            "key": 4
        },
        {
            "name": "PABLO IVÁN VARGAS MAGNANI",
            "email": "pvargasm@utem.cl",
            "key": 5
        },
        {
            "name": "IVAN ALEJANDRO SILVA RODRIGUEZ",
            "email": "isilvaro@utem.cl",
            "key": 6
        },
        {
            "name": "BENJAMÍN HERNÁN ABARCA CÁCERES",
            "email": "babarca@utem.cl",
            "key": 7
        },
        {
            "name": "FABIÁN GERARDO YEFI CASTILLO",
            "email": "fyefi@utem.cl",
            "key": 8
        },
        {
            "name": "MAURICIO YASSEL REYNOSO RUIZ",
            "email": "mreynoso@utem.cl",
            "key": 9
        },
        {
            "name": "SIMON JESUS CARRASCO IBARRA",
            "email": "scarrascoi@utem.cl",
            "key": 10
        },
        {
            "name": "Pablo Gálvez Hernández",
            "email": "pgalvez@utem.cl",
            "key": 11
        },
        {
            "name": "ITALO ALEJANDRO ROJAS AREVALO",
            "email": "irojas@utem.cl",
            "key": 12
        },
        {
            "name": "Nicolas edgardo enrique sepulveda catalan",
            "email": "Nsepulvedac@utem.cl",
            "key": 13
        },
        {
            "name": "Gabriela Gonzalez",
            "email": "ggonzalezla@utem.cl",
            "key": 14
        },
        {
            "name": "BRUNO ANDRÉS MIRANDA ESCOBAR",
            "email": "bmirandae@utem.cl",
            "key": 15
        },
        {
            "name": "LUKAS LUIS MEDINA ROZAS",
            "email": "lmedinar@utem.cl",
            "key": 16
        }
    ]

// añadir capacity random
avatars.forEach((avatar) => {
    avatar.capacity = Math.floor(Math.random() * 17);
});

export default avatars;