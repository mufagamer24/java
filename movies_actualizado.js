const PELICULAS = [
  {
    "titulo": "Mad Max: Furia en el camino",
    "anio": 2015,
    "descripcion": "En un futuro apocalíptico, un hombre y una guerrera huyen a través del desierto mientras son perseguidos por un señor de la guerra y su ejército.",
    "generos": [
      "accion",
      "aventura",
      "scifi"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/fnY0VRsb31A5RLVCBjuR6EFUlo2.jpg"
  },
  {
    "titulo": "Indiana Jones y los cazadores del arca perdida",
    "anio": 1981,
    "descripcion": "El arqueólogo Indiana Jones debe encontrar el Arca de la Alianza antes de que caiga en manos nazis.",
    "generos": [
      "accion",
      "aventura"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Indiana+Jones"
  },
  {
    "titulo": "La momia",
    "anio": 1999,
    "descripcion": "Un grupo de arqueólogos desata accidentalmente la maldición de un sacerdote egipcio momificado en el desierto.",
    "generos": [
      "accion",
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/aGRMxB5ve2nSKsq8ww6PyUwhWpP.jpg"
  },
  {
    "titulo": "El último samurái",
    "anio": 2003,
    "descripcion": "Un capitán del ejército estadounidense es capturado por samurais en el Japón del siglo XIX y aprende a respetar su código de honor.",
    "generos": [
      "accion",
      "historico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/DfwutbQodAsYxdqJu7Cme5jifC.jpg"
  },
  {
    "titulo": "Piratas del Caribe: La maldición de la Perla Negra",
    "anio": 2003,
    "descripcion": "El excéntrico pirata Jack Sparrow se une a un joven herrero para rescatar a una joven secuestrada por una tripulación de piratas malditos.",
    "generos": [
      "accion",
      "aventura",
      "fantasia",
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/bVG48kmXuLaZYgPfSCmhs6EYFbX.jpg"
  },
  {
    "titulo": "John Wick",
    "anio": 2014,
    "descripcion": "Un exasesino sale del retiro para vengarse de los criminales que mataron a su perro y le robaron su auto.",
    "generos": [
      "accion",
      "thriller",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/tDl5ac1VJwMRvlgINDCsDCqg9CE.jpg"
  },
  {
    "titulo": "Top Gun: Maverick",
    "anio": 2022,
    "descripcion": "Treinta años después, el piloto Maverick regresa para entrenar a una nueva generación de pilotos de élite para una misión imposible.",
    "generos": [
      "accion",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/AlWpEpQq0RgZIXVHAHZtFhEvRgd.jpg"
  },
  {
    "titulo": "El señor de los anillos: La comunidad del anillo",
    "anio": 2001,
    "descripcion": "Un hobbit emprende un épico viaje para destruir un poderoso anillo que podría dar al señor oscuro el dominio del mundo.",
    "generos": [
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/9xtH1RmAzQ0rrMBNUMXstb2s3er.jpg"
  },
  {
    "titulo": "Las crónicas de Narnia: El león, la bruja y el armario",
    "anio": 2005,
    "descripcion": "Cuatro hermanos descubren un mundo mágico a través de un armario y deben luchar junto al noble León Aslan para derrotar a la Bruja Blanca.",
    "generos": [
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2Lv2wKf2YocOcRfzmvQYOUGRhFg.jpg"
  },
  {
    "titulo": "Harry Potter y la piedra filosofal",
    "anio": 2001,
    "descripcion": "Un niño huérfano descubre que es un mago y comienza su educación en la escuela de magia Hogwarts.",
    "generos": [
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/3MKK7vAJLtSkBTABMTjxf6TOCo3.jpg"
  },
  {
    "titulo": "La historia sin fin",
    "anio": 1984,
    "descripcion": "Un niño lector descubre que puede influir en los eventos del libro fantástico que está leyendo, donde un joven guerrero debe salvar su mundo.",
    "generos": [
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/rXAJUv3QfGxIEo8pVAjRPS58paB.jpg"
  },
  {
    "titulo": "El viaje de Chihiro",
    "anio": 2001,
    "descripcion": "Una niña de diez años queda atrapada en un mundo espiritual misterioso y debe trabajar en un baño de espíritus para salvar a sus padres.",
    "generos": [
      "aventura",
      "fantasia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2RcxjDykOssx4SfqshewyI9vfSl.jpg"
  },
  {
    "titulo": "La gran escapada",
    "anio": 1986,
    "descripcion": "Tres amigos inadaptados emprenden un accidental viaje lleno de enredos y situaciones absurdas por el sur de los Estados Unidos.",
    "generos": [
      "comedia",
      "aventura"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Gran+Escapada"
  },
  {
    "titulo": "Todo sobre mi madre",
    "anio": 1999,
    "descripcion": "Tras perder a su hijo, una mujer viaja a Barcelona para encontrar al padre del joven, cruzándose con personajes fascinantes y vulnerables.",
    "generos": [
      "comedia",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/evvT3HUwoQYoPQXWFO10R6AvhxG.jpg"
  },
  {
    "titulo": "El gran Lebowski",
    "anio": 1998,
    "descripcion": "Un fanático del bolos perezoso queda envuelto en un caso de secuestro por error de identidad con un millonario homónimo.",
    "generos": [
      "comedia",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/EJFkJD9BH400jfzKz3W5xLYHQa.jpg"
  },
  {
    "titulo": "Superbad",
    "anio": 2007,
    "descripcion": "Dos amigos inseparables intentan disfrutar su última noche del año escolar consiguiendo alcohol para una fiesta antes de ir a la universidad.",
    "generos": [
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/ftUDFRYywWzajElI2RT9NIno2PS.jpg"
  },
  {
    "titulo": "La vida de Brian",
    "anio": 1979,
    "descripcion": "Un hombre nacido el mismo día y lugar que Jesucristo es confundido constantemente con el Mesías con resultados caóticos.",
    "generos": [
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/b4JaQ2ZjPxblj3E3S9ga5ykTita.jpg"
  },
  {
    "titulo": "Muerto de risa",
    "anio": 1999,
    "descripcion": "La ascendente amistad y rivalidad entre dos comediantes españoles a lo largo de décadas de éxitos, fracasos y excesos.",
    "generos": [
      "comedia",
      "drama"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Muerto+de+risa"
  },
  {
    "titulo": "Un americano en París",
    "anio": 2023,
    "descripcion": "Un joven músico norteamericano descubre el amor y la rivalidad artística mientras vive sus primeros meses en la capital francesa.",
    "generos": [
      "comedia",
      "romance"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/5Flzg1Ohy39kecNz4wp5SZJDk54.jpg"
  },
  {
    "titulo": "El padrino",
    "anio": 1972,
    "descripcion": "La historia del poderoso clan criminal Corleone, desde el patriarca hasta la nueva generación que toma las riendas de la familia.",
    "generos": [
      "drama",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/ApiEfzSkrqS4m1L5a2GwWXzIiAs.jpg"
  },
  {
    "titulo": "Cadena perpetua",
    "anio": 1994,
    "descripcion": "Un banquero inocente condenado a cadena perpetua forja una amistad especial en prisión mientras mantiene viva la esperanza de libertad.",
    "generos": [
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg"
  },
  {
    "titulo": "Forrest Gump",
    "anio": 1994,
    "descripcion": "Un hombre de baja inteligencia pero gran corazón recorre sin querer los momentos más importantes de la historia americana del siglo XX.",
    "generos": [
      "drama",
      "romance",
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/azV6hV99lYkdhydsQbJCI6FqMl4.jpg"
  },
  {
    "titulo": "La lista de Schindler",
    "anio": 1993,
    "descripcion": "Un empresario alemán arriesga todo para salvar la vida de más de mil judíos polacos durante el Holocausto.",
    "generos": [
      "drama",
      "historico",
      "belico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/3Ho0pXsnMxpGJWqdOi0KDNdaTkT.jpg"
  },
  {
    "titulo": "El pianista",
    "anio": 2002,
    "descripcion": "Un pianista judío-polaco sobrevive la Segunda Guerra Mundial escondiéndose en las ruinas de Varsovia con la ayuda de un oficial alemán.",
    "generos": [
      "drama",
      "historico",
      "belico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/mxfLOWnHnSlbdraKfzRn5mqoqk7.jpg"
  },
  {
    "titulo": "Requiem por un sueño",
    "anio": 2000,
    "descripcion": "Cuatro personas caen en espirales de adicción que destruyen sus sueños y esperanzas en el Coney Island de los años 90.",
    "generos": [
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2B5brHMhaHN1d9KmdeZI6RlU3aE.jpg"
  },
  {
    "titulo": "Manchester frente al mar",
    "anio": 2016,
    "descripcion": "Un hombre regresa a su pueblo natal para hacerse cargo de su sobrino tras la muerte de su hermano, y debe enfrentar un pasado doloroso.",
    "generos": [
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/A3yR6Mdz48elRI1pBOzbIbDyCRi.jpg"
  },
  {
    "titulo": "Boyhood",
    "anio": 2014,
    "descripcion": "Filmada a lo largo de doce años reales, sigue el crecimiento de un niño desde los 6 hasta los 18 años junto a su familia.",
    "generos": [
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/7wB1OG7YrJRolO74PhvzikeWVCv.jpg"
  },
  {
    "titulo": "Antes del amanecer",
    "anio": 1995,
    "descripcion": "Un joven americano y una estudiante francesa se conocen en un tren y pasan una noche paseando por Viena antes de separarse.",
    "generos": [
      "romance",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/uw9vx5M0qwkU1QnBNG4CXCgwYB3.jpg"
  },
  {
    "titulo": "Eterno resplandor de una mente sin recuerdos",
    "anio": 2004,
    "descripcion": "Una pareja decide borrar recuerdos el uno del otro, pero durante el proceso de borrado se reencuentran con lo que realmente significaron.",
    "generos": [
      "romance",
      "drama",
      "scifi"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2bHEXzzccUsBNOS6rn9uvi3vAGW.jpg"
  },
  {
    "titulo": "Orgullo y prejuicio",
    "anio": 2005,
    "descripcion": "En la Inglaterra del siglo XIX, Elizabeth Bennet y el orgulloso señor Darcy superan sus propios prejuicios para encontrar el amor.",
    "generos": [
      "romance",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/oixzLjpyaLagLa8UREts1NiHr6F.jpg"
  },
  {
    "titulo": "Cuando Harry conoció a Sally",
    "anio": 1989,
    "descripcion": "A lo largo de doce años, dos amigos debaten si hombres y mujeres pueden ser sólo amigos mientras se enamoran sin querer.",
    "generos": [
      "romance",
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/dHUhjAPViRGTU9CFBt4JoANWHiK.jpg"
  },
  {
    "titulo": "La La Land",
    "anio": 2016,
    "descripcion": "Una aspirante a actriz y un pianista de jazz se enamoran en Los Ángeles mientras persiguen sus sueños artísticos.",
    "generos": [
      "romance",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/7pFsAaJmiOppVHcldBzg8JKBHwe.jpg"
  },
  {
    "titulo": "Titanic",
    "anio": 1997,
    "descripcion": "Una joven de clase alta y un artista vagabundo se enamoran a bordo del transatlántico más famoso de la historia en su viaje inaugural.",
    "generos": [
      "romance",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/rBTJZrf5UWaxzg5YJd2eqpeaSvm.jpg"
  },
  {
    "titulo": "El resplandor",
    "anio": 1980,
    "descripcion": "Un escritor con bloqueo creativo lleva a su familia a cuidar un hotel aislado durante el invierno, donde fuerzas sobrenaturales lo enloquecen.",
    "generos": [
      "terror",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/mm003Mj2e9kJRsrxiVdPn2BSBPh.jpg"
  },
  {
    "titulo": "Hereditary",
    "anio": 2018,
    "descripcion": "Tras la muerte de su madre, una familia comienza a desmoronarse cuando descubren oscuros secretos sobre su linaje y un poder maligno.",
    "generos": [
      "terror",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/oE5TS72U6tNdXKK42HpF2NULv4u.jpg"
  },
  {
    "titulo": "El exorcista",
    "anio": 1973,
    "descripcion": "Una madre desesperada busca ayuda de dos sacerdotes cuando su hija adolescente empieza a mostrar señales de posesión demoníaca.",
    "generos": [
      "terror"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/hwJvgHQ4tf9eRQec1ouAgg33dPV.jpg"
  },
  {
    "titulo": "Midsommar",
    "anio": 2019,
    "descripcion": "Una pareja viaja a un festival de verano en Suecia que aparentemente sólo ocurre cada 90 años, con rituales que esconden un horror ancestral.",
    "generos": [
      "terror",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/a4Uwb4vnep76r1HRNduFgT9MRez.jpg"
  },
  {
    "titulo": "It: Eso",
    "anio": 2017,
    "descripcion": "Un grupo de niños en un pueblo de Maine son aterrorizados por una entidad maligna que adopta la forma de un payaso para cazar a sus víctimas.",
    "generos": [
      "terror",
      "aventura"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/sSrj4lnhrb113DOPEPTaO2jaDk3.jpg"
  },
  {
    "titulo": "Noche de brujas",
    "anio": 1978,
    "descripcion": "Un niño que asesinó a su hermana es internado quince años en un psiquiátrico, del que escapa para regresar a su pueblo el Día de Brujas.",
    "generos": [
      "terror",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/6bsDpDL312h6vEGPOPWoweaZWUG.jpg"
  },
  {
    "titulo": "El silencio de los inocentes",
    "anio": 1991,
    "descripcion": "Una joven agente del FBI debe colaborar con un brillante psiquiatra caníbal encarcelado para atrapar a otro asesino en serie.",
    "generos": [
      "thriller",
      "suspenso",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/8FdQQ3cUCs9goEOr1qUFaHackoJ.jpg"
  },
  {
    "titulo": "Psicosis",
    "anio": 1960,
    "descripcion": "Una secretaria en fuga se hospeda en el solitario Motel Bates, cuyo perturbado dueño vive bajo la sombra dominante de su madre.",
    "generos": [
      "thriller",
      "suspenso",
      "terror"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/xFbnc2QPG5H5gYWsGbZT4q8Akya.jpg"
  },
  {
    "titulo": "Vértigo",
    "anio": 1958,
    "descripcion": "Un detective con acrofobia es contratado para seguir a una misteriosa mujer y queda obsesionado con ella de forma enfermiza.",
    "generos": [
      "thriller",
      "suspenso",
      "romance"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/r94qq1BK2VE3z9i5agO3llvvIp8.jpg"
  },
  {
    "titulo": "Memento",
    "anio": 2000,
    "descripcion": "Un hombre que no puede formar nuevos recuerdos investiga el asesinato de su esposa usando tatuajes y notas Polaroid como guía.",
    "generos": [
      "thriller",
      "suspenso",
      "misterio"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/neHrQLVfT3KPqvv30pNPyRb6chQ.jpg"
  },
  {
    "titulo": "Primal Fear",
    "anio": 1996,
    "descripcion": "Un abogado defensor ambicioso toma el caso de un joven acusado del brutal asesinato de un arzobispo de Chicago.",
    "generos": [
      "thriller",
      "suspenso",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/8EkX8965Hb2hZdkpEcFShrlrklw.jpg"
  },
  {
    "titulo": "La huésped",
    "anio": 2013,
    "descripcion": "Un extraño misterioso se instala en casa de una familia tras la guerra y va ganando la confianza de todos mientras esconde un secreto oscuro.",
    "generos": [
      "thriller",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2BcXskV3zyySAomN3xObv6O4SUt.jpg"
  },
  {
    "titulo": "Nocturnal Animals",
    "anio": 2016,
    "descripcion": "Una galerista recibe el manuscrito de una novela violenta escrita por su ex marido que parece contener un mensaje oculto para ella.",
    "generos": [
      "thriller",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/tRia5btRjsE9kOW2Zl3HgyFlqOn.jpg"
  },
  {
    "titulo": "Parasite",
    "anio": 2019,
    "descripcion": "Una familia pobre se infiltra astutamente en los empleos del hogar de una familia adinerada hasta que los secretos enterrados salen a la luz.",
    "generos": [
      "thriller",
      "drama",
      "crimen"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Parasite"
  },
  {
    "titulo": "Pulp Fiction",
    "anio": 1994,
    "descripcion": "Varias historias del bajo mundo criminal de Los Ángeles se entrelazan de forma no lineal: matones, boxeadores y un gánster con su esposa.",
    "generos": [
      "crimen",
      "thriller",
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg"
  },
  {
    "titulo": "Los intocables",
    "anio": 1987,
    "descripcion": "El agente federal Eliot Ness forma un pequeño grupo de policías incorruptibles para derribar al gánster Al Capone en el Chicago de la Prohibición.",
    "generos": [
      "crimen",
      "drama",
      "historico",
      "accion"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/pVcWaUbFDL76ObIsReIBQ5ILMHv.jpg"
  },
  {
    "titulo": "Ciudad de Dios",
    "anio": 2002,
    "descripcion": "En las favelas de Río de Janeiro, un joven fotógrafo narra el ascenso y caída de las bandas criminales que dominan su barrio a lo largo de décadas.",
    "generos": [
      "crimen",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/zYjngc6yGUO1IEuAwk0yAhg8CKh.jpg"
  },
  {
    "titulo": "Goodfellas",
    "anio": 1990,
    "descripcion": "La historia real de Henry Hill, quien desde niño soñó con ser gánster y ascendió dentro de la mafia neoyorquina hasta su inevitable caída.",
    "generos": [
      "crimen",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/3Yy0zBO9AlyAZH1cTI8Ko2ouCi.jpg"
  },
  {
    "titulo": "Sin lugar para los débiles",
    "anio": 2007,
    "descripcion": "Un cazador encuentra una valija con millones de dólares de un narco muerto y es perseguido sin piedad por un implacable asesino a sueldo.",
    "generos": [
      "crimen",
      "thriller",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/x9sQnOXhvec93L6cfWMGIx7BS4h.jpg"
  },
  {
    "titulo": "Seven",
    "anio": 1995,
    "descripcion": "Dos detectives rastrean a un asesino en serie que modela sus crímenes según los siete pecados capitales en una ciudad oscura y lluviosa.",
    "generos": [
      "crimen",
      "thriller",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/uVPcVz4b2hnSGrXYLdIGRXwcivs.jpg"
  },
  {
    "titulo": "Chinatown",
    "anio": 1974,
    "descripcion": "Un detective privado es contratado para espiar a un funcionario de aguas y acaba envuelto en una red de corrupción, asesinato e incesto.",
    "generos": [
      "crimen",
      "thriller",
      "misterio",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/1wO2OmUCWButQyVPGWQEZn5twca.jpg"
  },
  {
    "titulo": "2001: Una odisea del espacio",
    "anio": 1968,
    "descripcion": "Una expedición al espacio descubre una misteriosa inteligencia artificial que podría ser la próxima etapa de la evolución humana.",
    "generos": [
      "scifi"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/sln50uQYigvu5AvN72JfYfu1ckq.jpg"
  },
  {
    "titulo": "Blade Runner",
    "anio": 1982,
    "descripcion": "En un Los Ángeles del futuro, un detective especializado en cazar androides rebeldes cuestiona su propia humanidad.",
    "generos": [
      "scifi",
      "thriller",
      "accion"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/pBA2J6iQMiP5Zd4ewMKdOWfq1HV.jpg"
  },
  {
    "titulo": "Interstellar",
    "anio": 2014,
    "descripcion": "Un grupo de astronautas viaja a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad moribunda.",
    "generos": [
      "scifi",
      "aventura",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/9cTfZWP5TfdnmAjiD6ZBXWIJ7O9.jpg"
  },
  {
    "titulo": "La llegada",
    "anio": 2016,
    "descripcion": "Una lingüista es reclutada para comunicarse con extraterrestres que han aterrizado en doce puntos distintos del planeta.",
    "generos": [
      "scifi",
      "drama",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/tbVITeytclB4JKx2LxxasrCCmZx.jpg"
  },
  {
    "titulo": "Matrix",
    "anio": 1999,
    "descripcion": "Un programador descubre que la realidad que conoce es una simulación creada por máquinas y se une a la resistencia humana.",
    "generos": [
      "scifi",
      "accion"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/8rT9kG2EYkZpJmYCuTJNnPDEube.jpg"
  },
  {
    "titulo": "Dune",
    "anio": 2021,
    "descripcion": "El heredero de una noble familia es enviado al planeta más peligroso del universo para proteger la única sustancia que hace posible el viaje espacial.",
    "generos": [
      "scifi",
      "aventura",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/szcew6yyjcDvaL0isaPBk2e3nkF.jpg"
  },
  {
    "titulo": "Señales",
    "anio": 2002,
    "descripcion": "Un ex sacerdote y ex agricultor encuentra círculos en sus cosechas y debe proteger a su familia de una amenaza extraterrestre.",
    "generos": [
      "scifi",
      "terror",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/r4q93grfe8xO28bY6MFMOZdffoo.jpg"
  },
  {
    "titulo": "Ex Machina",
    "anio": 2014,
    "descripcion": "Un programador es seleccionado para evaluar a una inteligencia artificial con aspecto femenino en una mansión remota con resultados inquietantes.",
    "generos": [
      "scifi",
      "thriller",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/mQohkAkV1m7yT43UnYkgvmyKUoa.jpg"
  },
  {
    "titulo": "La princesa prometida",
    "anio": 1987,
    "descripcion": "Un abuelo cuenta a su nieto la historia de un joven que rescata a la mujer que ama de un matrimonio forzado con un príncipe maléfico.",
    "generos": [
      "fantasia",
      "aventura",
      "romance",
      "comedia"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/dYgsPYY3sI6Zvie8NaJeA0vo1PF.jpg"
  },
  {
    "titulo": "El laberinto del fauno",
    "anio": 2006,
    "descripcion": "En la España de la posguerra franquista, una niña escapa de la brutal realidad refugiándose en un laberinto habitado por criaturas mágicas.",
    "generos": [
      "fantasia",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/gWPkUFGlO7ZIiArUcWRBmvAwVjB.jpg"
  },
  {
    "titulo": "Big Fish",
    "anio": 2003,
    "descripcion": "Un hijo intenta conocer la verdad sobre su moribundo padre repasando las fantásticas historias de su vida que siempre consideró exageradas.",
    "generos": [
      "fantasia",
      "drama",
      "aventura"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/m4gYCeV4GfGDw4PpMgU9kFIaNxP.jpg"
  },
  {
    "titulo": "Pan's Labyrinth adaptación",
    "anio": 2021,
    "descripcion": "Una joven actriz descubre que el guión de teatro que está ensayando la conecta con un mundo alternativo donde debe elegir su destino.",
    "generos": [
      "fantasia",
      "drama",
      "suspenso"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Laberinto"
  },
  {
    "titulo": "El mago de Oz",
    "anio": 1939,
    "descripcion": "Una niña de Kansas es arrastrada por un tornado al mágico mundo de Oz y debe encontrar el camino de vuelta a casa.",
    "generos": [
      "fantasia",
      "aventura"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/ymUY2iIm8IuSYuIX1SsABgPyB48.jpg"
  },
  {
    "titulo": "Gladiador",
    "anio": 2000,
    "descripcion": "Un general romano traicionado por el hijo del emperador es convertido en esclavo gladiador y busca venganza desde la arena.",
    "generos": [
      "accion",
      "historico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg"
  },
  {
    "titulo": "Lincoln",
    "anio": 2012,
    "descripcion": "Los últimos meses de la presidencia de Abraham Lincoln mientras lucha por abolir la esclavitud antes del fin de la Guerra Civil.",
    "generos": [
      "historico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/p9YQr5NfAgklYUY1niHZp9CKl7i.jpg"
  },
  {
    "titulo": "El discurso del rey",
    "anio": 2010,
    "descripcion": "El rey Jorge VI de Inglaterra trabaja con un fonoaudiólogo para superar su tartamudez antes de liderar a su nación en la Segunda Guerra Mundial.",
    "generos": [
      "historico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/ayrDCichVVOovfAikiS5NTmq8Wb.jpg"
  },
  {
    "titulo": "María Antonieta",
    "anio": 2006,
    "descripcion": "La vida de la joven archiduquesa austriaca que se convierte en reina de Francia a los catorce años, retratada con una estética moderna y pop.",
    "generos": [
      "historico",
      "drama",
      "romance"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/tbOUqNXg3FpQTDexgZZ6OFQSakA.jpg"
  },
  {
    "titulo": "Braveheart",
    "anio": 1995,
    "descripcion": "El guerrero escocés William Wallace lidera una rebelión popular contra la brutal ocupación inglesa a finales del siglo XIII.",
    "generos": [
      "historico",
      "accion",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/cDMYybBU4COJfTwcPgnihwY5EiP.jpg"
  },
  {
    "titulo": "Lawrence de Arabia",
    "anio": 1962,
    "descripcion": "La épica historia real del oficial británico T.E. Lawrence y su papel en unificar las tribus árabes durante la Primera Guerra Mundial.",
    "generos": [
      "historico",
      "aventura",
      "belico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/UmgjvObk7ugIDLLcwJsqNF1TIC.jpg"
  },
  {
    "titulo": "Apocalypse Now",
    "anio": 1979,
    "descripcion": "Un capitán del ejército es enviado a la jungla vietnamita para asesinar a un coronel que se ha vuelto un dios para una tribu indígena.",
    "generos": [
      "belico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/zJXRrkJTlcb5x87v4VWN1zZX0Xk.jpg"
  },
  {
    "titulo": "Rescatando al soldado Ryan",
    "anio": 1998,
    "descripcion": "Tras el desembarco en Normandía, un capitán y su escuadrón arriesgan sus vidas para rescatar a un soldado cuyo paradero se desconoce.",
    "generos": [
      "belico",
      "accion",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/dcKfD8xWf8XnS3tHVp7v331wdNT.jpg"
  },
  {
    "titulo": "Dunkerque",
    "anio": 2017,
    "descripcion": "La evacuación de los soldados aliados atrapados en las playas de Dunkerque durante la Segunda Guerra Mundial, narrada desde tierra, mar y aire.",
    "generos": [
      "belico",
      "historico",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/to21T9dJtVoHDQbhHTpcugx7cgf.jpg"
  },
  {
    "titulo": "Hacksaw Ridge",
    "anio": 2016,
    "descripcion": "La historia real del único médico de combate en la Segunda Guerra Mundial que se negó a portar un arma y salvó a 75 soldados en Okinawa.",
    "generos": [
      "belico",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/m3jj8IJ7uP5p4MqMzgtGW5l4ECd.jpg"
  },
  {
    "titulo": "El gran dictador",
    "anio": 1940,
    "descripcion": "Chaplin interpreta a un barbero judío que es confundido con el dictador Adenoid Hynkel, una sátira directa a Hitler y el nazismo.",
    "generos": [
      "belico",
      "comedia",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/aM2fdyNhsa3UYYCtkm9pGXQ0Q1R.jpg"
  },
  {
    "titulo": "La delgada línea roja",
    "anio": 1998,
    "descripcion": "La batalla de Guadalcanal en la Segunda Guerra Mundial narrada con un enfoque filosófico y poético sobre la naturaleza humana en la guerra.",
    "generos": [
      "belico",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/234oXaXKIcyXpWMMFISsZ94tas9.jpg"
  },
  {
    "titulo": "Tiburón blanco: El rey de los mares",
    "anio": 2013,
    "descripcion": "Un documental que sigue a investigadores marinos durante dos años para estudiar el comportamiento del gran tiburón blanco.",
    "generos": [
      "documental"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Tiburon+Blanco"
  },
  {
    "titulo": "Amy",
    "anio": 2015,
    "descripcion": "Documental sobre la vida y la trágica muerte de la cantante Amy Winehouse, usando material de archivo íntimo nunca visto.",
    "generos": [
      "documental",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/AjzrnMUZsEYfXwDjkzzxq6ODRxC.jpg"
  },
  {
    "titulo": "Bowling for Columbine",
    "anio": 2002,
    "descripcion": "Michael Moore investiga las causas de la masacre de Columbine y la cultura estadounidense de las armas de fuego.",
    "generos": [
      "documental"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2ZIvlZm9PDXJowWLObwXyWqryYt.jpg"
  },
  {
    "titulo": "March of the Penguins",
    "anio": 2005,
    "descripcion": "El increíble viaje anual de los pingüinos emperadores a través de la Antártida para aparearse y criar a sus polluelos.",
    "generos": [
      "documental",
      "aventura"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/qTycREpa9mkspyRndPrsHi6YX0l.jpg"
  },
  {
    "titulo": "13th",
    "anio": 2016,
    "descripcion": "Una exploración de la enmienda 13 de la constitución americana y cómo el sistema de justicia penal ha perpetuado la esclavitud racial.",
    "generos": [
      "documental"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/wLdUNsyeSd9OvKmM0CeXF6n13IL.jpg"
  },
  {
    "titulo": "El planeta de los océanos",
    "anio": 2012,
    "descripcion": "Un recorrido visual único por los océanos del mundo que revela ecosistemas y criaturas marinas nunca antes filmadas.",
    "generos": [
      "documental"
    ],
    "imagen": "https://placehold.co/180x260/1a1a2e/e0e0ff?text=Oceanos"
  },
  {
    "titulo": "Origen",
    "anio": 2010,
    "descripcion": "Un ladrón que roba secretos del subconsciente recibe un encargo imposible: plantar una idea en la mente de un heredero empresarial.",
    "generos": [
      "scifi",
      "accion",
      "thriller",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg"
  },
  {
    "titulo": "El club de la pelea",
    "anio": 1999,
    "descripcion": "Un insomne insatisfecho forma un club de peleas clandestino con un enigmático vendedor de jabón, que evoluciona hacia algo mucho más oscuro.",
    "generos": [
      "thriller",
      "drama",
      "accion"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/sgTAWJFaB2kBvdQxRGabYFiQqEK.jpg"
  },
  {
    "titulo": "Joker",
    "anio": 2019,
    "descripcion": "Un comediante fracasado con una enfermedad mental se transforma gradualmente en el icónico villano del Joker en el Gotham de los años 80.",
    "generos": [
      "drama",
      "thriller",
      "crimen"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/g9l7iLYusH82bbEbwGCJzhVkOe2.jpg"
  },
  {
    "titulo": "Whiplash",
    "anio": 2014,
    "descripcion": "Un joven baterista obsesionado con la grandeza enfrenta al instructor más temido del conservatorio en una batalla de voluntades extrema.",
    "generos": [
      "drama",
      "thriller"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/uy36CPy5ARuC8qrH8Esg2ndFyJ5.jpg"
  },
  {
    "titulo": "Bajo la piel",
    "anio": 2013,
    "descripcion": "Una misteriosa mujer recorre Escocia seduciendo a hombres que nadie echará de menos y llevándolos a un destino inquietante.",
    "generos": [
      "scifi",
      "terror",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/u1k9LrMLcot2XsTaGLPblZ8Dmss.jpg"
  },
  {
    "titulo": "Camino a la perdición",
    "anio": 2002,
    "descripcion": "Un sicario de la mafia huye junto a su hijo de los mismos criminales para quienes trabajó, en una travesía de venganza y redención.",
    "generos": [
      "crimen",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/vnYLI3BFyaHX6XHSbE6mlcK4vbR.jpg"
  },
  {
    "titulo": "La red social",
    "anio": 2010,
    "descripcion": "La historia de cómo Mark Zuckerberg creó Facebook en Harvard y las demandas y traiciones que vinieron tras el éxito.",
    "generos": [
      "drama",
      "thriller"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/2GtDmIdxkJ5NZG97yhJQtM8Wn1H.jpg"
  },
  {
    "titulo": "Zodiac",
    "anio": 2007,
    "descripcion": "Un periodista y un detective dedican años de sus vidas a la obsesión de identificar al asesino serial Zodiac que aterrorizó California.",
    "generos": [
      "crimen",
      "thriller",
      "misterio",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/gmoypdRU7rCJZZrZFKGirONbgrI.jpg"
  },
  {
    "titulo": "No es país para viejos",
    "anio": 2007,
    "descripcion": "Tres hombres cruzan sus caminos en el oeste de Texas: un cazador que encuentra dinero de un narco, un sheriff viejo y un asesino implacable.",
    "generos": [
      "crimen",
      "thriller",
      "suspenso",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/x9sQnOXhvec93L6cfWMGIx7BS4h.jpg"
  },
  {
    "titulo": "Her",
    "anio": 2013,
    "descripcion": "Un hombre solitario se enamora del sistema operativo con inteligencia artificial de su computadora en un futuro cercano.",
    "generos": [
      "scifi",
      "romance",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/xPby6SuDafflEL7EWVHTFmhJsDp.jpg"
  },
  {
    "titulo": "La tumba de las luciérnagas",
    "anio": 1988,
    "descripcion": "Dos hermanos japoneses tratan de sobrevivir los últimos meses de la Segunda Guerra Mundial tras perder a su madre en un bombardeo.",
    "generos": [
      "belico",
      "drama",
      "historico"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/juKTAn2AuoE9MvCNvf3kwZrt1t4.jpg"
  },
  {
    "titulo": "Persépolis",
    "anio": 2007,
    "descripcion": "Una niña iraní narra en blanco y negro su infancia y adolescencia durante la Revolución Islámica y su posterior exilio en Europa.",
    "generos": [
      "historico",
      "drama",
      "aventura"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/1XSTjORhsqSQgdYTzHrAuPDVC2.jpg"
  },
  {
    "titulo": "Prisioneros",
    "anio": 2013,
    "descripcion": "Cuando sus hijas pequeñas desaparecen, un padre desesperado toma la justicia en sus propias manos mientras un detective sigue la pista.",
    "generos": [
      "thriller",
      "suspenso",
      "crimen",
      "drama"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/i6CcmOvJxBFH3mfhCHa3Njtelix.jpg"
  },
  {
    "titulo": "El proyecto Blair Witch",
    "anio": 1999,
    "descripcion": "Tres estudiantes de cine se internan en un bosque para documentar la leyenda de la Bruja de Blair y nunca regresan.",
    "generos": [
      "terror",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/4VkdY6GlFchXcHgg3Bsl1A73jsH.jpg"
  },
  {
    "titulo": "Get Out",
    "anio": 2017,
    "descripcion": "Un joven negro visita a los padres blancos de su novia y descubre que su comportamiento amable esconde algo profundamente perturbador.",
    "generos": [
      "terror",
      "thriller",
      "suspenso"
    ],
    "imagen": "https://image.tmdb.org/t/p/w342/xiMoqa0bmjuyuXYqKGwrTSJL8nI.jpg"
  }
];
