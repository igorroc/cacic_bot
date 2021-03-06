module.exports = [
	{
		question: "Qual o seu nome?",
		name: "Nome",
	},
	{
		question: "Qual o modelo da camisa?",
		placeholder: "Selecione o modelo",
		customId: "Modelo",
		options: [
			{
				label: "Modelo 1",
				value: "Modelo 1",
				emoji: "ð²",
			},
			{
				label: "Modelo 2",
				value: "Modelo 2",
				emoji: "ð",
			},
			{
				label: "Modelo 3",
				value: "Modelo 3",
				emoji: "ð¥ï¸",
			},
		],
	},
	{
		question: "Qual a cor da gola da camisa?",
		placeholder: "Selecione a cor da gola",
		customId: "Gola",
		options: [
			{
				label: "Branca",
				value: "Branca",
				emoji: "â¬",
			},
			{
				label: "Preta",
				value: "Preta",
				emoji: "â¬",
			},
			{
				label: "Roxa",
				value: "Roxa",
				emoji: "ðª",
			},
			{
				label: "Azul",
				value: "Azul",
				emoji: "ð¦",
			},
		],
	},
	{
		question: "Qual a cor da manga da camisa?",
		placeholder: "Selecione a cor da manga",
		customId: "Manga",
		options: [
			{
				label: "Branca",
				value: "Branca",
				emoji: "â¬",
			},
			{
				label: "Mista",
				value: "Mista",
				emoji: "ð",
			},
			{
				label: "Roxa",
				value: "Roxa",
				emoji: "ðª",
			},
			{
				label: "Azul",
				value: "Azul",
				emoji: "ð¦",
			},
		],
	},
	{
		question: "Qual nome vocÃª quer no fundo?",
		name: "Titulo",
	},
	{
		question: "Qual nÃºmero vocÃª quer no fundo?",
		name: "Numero",
		minValues: 0,
		maxValues: 99,
	},
	{
		question: "Qual o tamanho da camisa?",
		placeholder: "Selecione o tamanho",
		customId: "Tamanho",
		options: [
			{
				label: "P",
				value: "P",
				description: "120cm x 240cm",
				emoji: "ð¶",
			},
			{
				label: "M",
				value: "M",
				description: "150cm x 250cm",
				emoji: "ð",
			},
			{
				label: "G",
				value: "G",
				description: "200cm x 340cm",
				emoji: "ð¬",
			},
			{
				label: "GG",
				value: "GG",
				description: "520cm x 640cm",
				emoji: "ð",
			},
		],
	},
]
