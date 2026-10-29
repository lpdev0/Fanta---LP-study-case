//Criacao de uma timeline do GSAP com animacoes sincronizadas com o scroll
var tl = gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, // DEPURACAO
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', // MOVE O ELEMENTO COM ID FANTA PARA  120% DO TOPO
        left: '0%',
    },
    'orange'
    // NOMEANDO ESTE TRECHO DE ANIMACAO COMO 'orange' para sincronizacao
)

tl.to(
    '#laranja-cortada',
    {
        top: '160%',//move o elemento com id 'orange-cut' para 1605 do topo
        left: '23%',// move o elemento para 23% a esquerda
    },
    'orange'
)

tl.to(
    '#laranja',
    {
        width: '15%',// REDUZ A LARGURA DO ELEMENTO COM ID 'orange' PARA 15%
        top: '165%',// move o elemento para 160% do topo
        right: '10%',// move o elemento para 10% a direita
    },
    'orange'
);

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '250deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        top: '110%',
        rotate: '250deg',
        left: '0%',
    },
    'orange'
);

// CRIANDO OUTRA TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: true, // DEPURACAO
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);


tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        top: '205%',//move o elemento com id 'orange-cut' para 1605 do topo
        left: '41%',// move o elemento para 23% a esquerda
    },
    'ca'
)


tl2.to("#fanta",{
    width:"35%",
    top: "215%",
    left: "33%",
}, 'ca')