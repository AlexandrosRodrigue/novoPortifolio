document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const toggleSwitch = document.getElementById('toggleSwitch');

    document.documentElement.setAttribute('data-theme', savedTheme);

    if (savedTheme === 'dark') {
        toggleSwitch.checked = true;
    } else {
        toggleSwitch.checked = false;
    }
});

function toggleTheme() {
    const toggleSwitch = document.getElementById('toggleSwitch');
    const newTheme = toggleSwitch.checked ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

let dropdownEventAdded = false; 

function toggleLanguageDropdown(event) {
    event.preventDefault();
    const languageDropdown = document.getElementById('languageDropdown');

    languageDropdown.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!languageDropdown.contains(event.target) && !event.currentTarget.contains(event.target)) {
            languageDropdown.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            dropdownEventAdded = false;
        }
    }

    if (!dropdownEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
        dropdownEventAdded = true;
    }
}

let certificadoEventAdded = false; 

function toggleCertificado(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleConteudo');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            certificadoEventAdded = false; 
        }
    }

    if (!certificadoEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
    }
}

let experienciaEventAdded = false; 

function toggleExperiencia(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleExperiencia');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            experienciaEventAdded = false; 
        }
    }

    if (!experienciaEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
    }
}

let ferramentasEventAdded = false; 

function toggleFerramentas(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleFerramentas');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            ferramentasEventAdded = false; 
        }
    }

    if (!ferramentasEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
    }
}

let projetosEventAdded = false; 

function toggleProjetos(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleProjetos');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            projetosEventAdded = false; 
        }
    }

    if (!projetosEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
    }
}

let sobreEventAdded = false;

function toggleSobre(event) {
    event.preventDefault();
    const conteudo = document.getElementById('toggleSobre');

    conteudo.classList.toggle('show-dropdown');

    function removeClassesOnClickOutside(event) {
        if (!conteudo.contains(event.target) && !event.currentTarget.contains(event.target)) {
            conteudo.classList.remove('show-dropdown');
            document.removeEventListener('click', removeClassesOnClickOutside);
            sobreEventAdded = false; 
        }
    }

    if (!sobreEventAdded) {
        document.addEventListener('click', removeClassesOnClickOutside);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulos");
    const subtitulo = document.getElementById("subTitulos");

    function mostrarTexto() {
        titulo.style.opacity = "1";
        subtitulo.style.opacity = "1";
        titulo.classList.add("luz-verde");
        subtitulo.classList.add("luz-verde");

        setTimeout(() => {
            titulo.classList.remove("luz-verde");
            subtitulo.classList.remove("luz-verde");
        }, 700);

        setTimeout(() => {
            titulo.style.opacity = "0";
            subtitulo.style.opacity = "0";
        }, 6750);
    }

    setTimeout(() => {
        mostrarTexto(); 
        setInterval(mostrarTexto, 14000);
    }, 5000);
});

function carregarIdioma() {
    const idiomaSalvo = localStorage.getItem('idiomaSelecionado');
    const titulos = document.getElementById('titulos');
    const subTitulos = document.getElementById('subTitulos');
    const certificados = document.getElementById('certificados');
    const subCertificados = document.getElementById('subCertificados');
    const experiencias = document.getElementById('experiencias');
    const subExperiencias = document.getElementById('subExperiencias');
    const ferramentas = document.getElementById('ferramentas');
    const subFerramentas = document.getElementById('subFerramentas');
    const projetos = document.getElementById('projetos');
    const subProjetos = document.getElementById('subProjetos');
    const sobre = document.getElementById('sobre');
    const subSobre = document.getElementById('subSobre');
    const escritoSobre = document.getElementById('escritoSobre');
    const estagio = document.getElementById('estagio');
    const desenvolvimento = document.getElementById('desenvolvimento');
    const colaboracao = document.getElementById('colaboracao');
    const suporte = document.getElementById('suporte');

    if (idiomaSalvo) {
        if (idiomaSalvo === 'Português') {
            titulos.innerText = 'Olá, Sou Alexandros';
            subTitulos.innerText = 'Desenvolvedor Fullstack.';
            certificados.innerHTML = 'Certificados';
            subCertificados.innerText = 'Veja meus certificados de formação';
            experiencias.innerText = 'Expêriencias Profissionais';
            subExperiencias.innerText = 'Confira minhas experiências profissionais';
            ferramentas.innerText = 'Ferramentas e Linguagens';
            subFerramentas.innerText = 'Confira minhas habilidades de programação';
            sobre.innerText = 'Sobre';
            subSobre.innerText = 'Conheça mais sobre mim';
            desenvolvimento.innerText = 'Desenvolvimento e manutenção de sistemas internos e externos.';
            colaboracao.innerText = 'Colaboração com equipes de TI para resolver problemas e implementar melhorias.';
            suporte.innerText = 'Suporte técnico para usuários internos.';
            estagio.innerText = 'Estagiário de Desenvolvimento Prefeitura Municipal de Florianópolis';
            escritoSobre.innerText = 'Olá, meu nome é Alexandros Rodrigues Kotzias, tenho 19 anos e sou apaixonado pela área de TI. Meu interesse pela área começou desde cedo, quando meu pai comprou um notebook, inicialmente, o que eu queria era somente jogar online com os meus amigos. Com o tempo passando, percebi que o universo da TI era muito maior do que eu imaginava e decidi explorar mais a fundo. Com 16 anos, me inscrevi no curso técnico em Desenvolvimento de Sistemas no SENAI, onde adquiri conhecimentos importantes sobre tecnologia. Durante o curso, tive a oportunidade de trabalhar na área de suporte técnico ao cliente na Life Tech, onde desenvolvi habilidades práticas como resolução de problemas técnicos, atendimento ao usuário e manutenção de sistemas. Essa experiência me mostrou a importância do suporte técnico para garantir que a tecnologia atenda às necessidades das pessoas. Mais tarde, fui contratado como estagiário de desenvolvimento de software na Prefeitura Municipal de Florianópolis. Em 2024, concluí o curso técnico e iniciei a faculdade Desenvolvimento de Sistemas na Uniasselvi para ampliar ainda mais meu conhecimento e me especializar como programador de software.';
            projetos.innerText = 'Projetos';
            subProjetos.innerText = 'Olhe meus projetos criados';
        } else if (idiomaSalvo === 'English') {
            titulos.innerText = 'Hello, I am Alexandros';
            subTitulos.innerText = 'Fullstack Developer.';
            certificados.innerHTML = 'Certificates';
            subCertificados.innerText = 'View my training certificates';
            experiencias.innerText = 'Professional Experiences';
            estagio.innerText = 'Development Intern at the City Hall of Florianópolis';
            desenvolvimento.innerText = 'Development and maintenance of internal and external systems.';
            colaboracao.innerText = 'Collaborating with IT teams to resolve issues and implement improvements.';
            suporte.innerText = 'Technical support for internal users.';
            subExperiencias.innerText = 'Check out my professional experiences';
            ferramentas.innerText = 'Tools and Languages';
            subFerramentas.innerText = 'Check out my programming skills';
            sobre.innerHTML = 'About me';
            subSobre.innerHTML = 'Get to know me better';
            escritoSobre.innerHTML = 'Hello, my name is Alexandros Rodrigues Kotzias, I am 19 years old and I am passionate about the IT field. I became interested in the field at an early age, when my father bought me a laptop. Initially, all I wanted to do was play online games with my friends. As time went by, I realized that the IT universe was much bigger than I imagined and decided to explore it further. hen I was 16, I enrolled in the technical course in Systems Development at SENAI, where I acquired important knowledge about technology. During the course, I had the opportunity to work in the area of ​​technical customer support at Life Tech, where I developed practical skills such as solving technical problems, providing user service and maintaining systems. This experience showed me the importance of technical support in ensuring that technology meets people s needs. Later, I was hired as a software development intern at the City Hall of Florianópolis. In 2024, I completed the technical course and started college in Systems Development at Uniasselvi to further expand my knowledge and specialize as a software programmer.';
            projetos.innerText = 'Projects';
            subProjetos.innerText = 'Look at my created projects';
        } else if (idiomaSalvo === 'Español') {
            titulos.innerText = 'Hola, Soy Alexandros';
            subTitulos.innerText = 'Desarrollador Fullstack.';
            certificados.innerHTML = 'Certificados';
            subCertificados.innerText = 'Ver mis certificados de formación';
            experiencias.innerText = 'Experiencias profesionales';
            subExperiencias.innerText = 'Conoce mis experiencias profesionales';
            estagio.innerText = 'Pasante de Desarrollo en la Alcaldía de Florianópolis';
            desenvolvimento.innerText = 'Desarrollo y mantenimiento de sistemas internos y externos.';
            colaboracao.innerText = 'Colaborar con los equipos de TI para resolver problemas e implementar mejoras.';
            suporte.innerText = 'Soporte técnico para usuarios internos.';
            ferramentas.innerText = 'Herramientas y lenguajes';
            subFerramentas.innerText = 'Mira mis habilidades de programación';
            sobre.innerHTML = 'Acerca de mí';
            subSobre.innerHTML = 'Conóceme mejor';
            escritoSobre.innerHTML = 'Hola, mi nombre es Alexandros Rodrigues Kotzias, tengo 19 años y me apasiona el campo de las TI. Mi interés por este ámbito empezó a temprana edad, cuando mi padre compró un cuaderno. Al principio lo único que quería hacer era jugar online con mis amigos. Con el paso del tiempo me di cuenta de que el universo informático era mucho más grande de lo que imaginaba y decidí explorarlo más a fondo. A los 16 años me matriculé en el curso técnico en Desarrollo de Sistemas del SENAI, donde adquirí importantes conocimientos sobre tecnología. Durante la carrera, tuve la oportunidad de trabajar en el área de soporte al cliente en Life Tech, donde desarrollé habilidades prácticas como resolución de problemas técnicos, servicio al usuario y mantenimiento de sistemas. Esta experiencia me mostró la importancia del soporte técnico para garantizar que la tecnología satisfaga las necesidades de las personas. Posteriormente me contrataron como pasante de desarrollo de software en el Ayuntamiento de Florianópolis. En 2024, finalicé la carrera técnica y comencé la carrera de Desarrollo de Sistemas en Uniasselvi para ampliar aún más mis conocimientos y especializarme como programador de software.';
            projetos.innerText = 'Proyectos';
            subProjetos.innerText = 'Mira mis proyectos creados';
        }
    }
}

window.onload = carregarIdioma;


function idiomaSelecionado(idioma) {
    const titulos = document.getElementById('titulos');
    const subTitulos = document.getElementById('subTitulos');
    const certificados = document.getElementById('certificados');
    const subCertificados = document.getElementById('subCertificados');
    const experiencias = document.getElementById('experiencias');
    const subExperiencias = document.getElementById('subExperiencias');
    const ferramentas = document.getElementById('ferramentas');
    const subFerramentas = document.getElementById('subFerramentas');
    const projetos = document.getElementById('projetos');
    const subProjetos = document.getElementById('subProjetos');
    const sobre = document.getElementById('sobre');
    const subSobre = document.getElementById('subSobre');
    const escritoSobre = document.getElementById('escritoSobre');
    const estagio = document.getElementById('estagio');
    const desenvolvimento = document.getElementById('desenvolvimento');
    const colaboracao = document.getElementById('colaboracao');
    const suporte = document.getElementById('suporte');

    if (idioma === 'Português') {
        titulos.innerText = 'Olá, Sou Alexandros';
        subTitulos.innerText = 'Desenvolvedor Fullstack.';
        certificados.innerHTML = 'Certificados';
        subCertificados.innerText = 'Veja meus certificados de formação';
        experiencias.innerText = 'Expêriencias Profissionais';
        subExperiencias.innerText = 'Confira minhas experiências profissionais';
        estagio.innerText = 'Estagiário de Desenvolvimento Prefeitura Municipal de Florianópolis';
        ferramentas.innerText = 'Ferramentas e Linguagens';
        subFerramentas.innerText = 'Confira minhas habilidades de programação';
        sobre.innerText = 'Sobre';
        subSobre.innerText = 'Conheça mais sobre mim';       
        desenvolvimento.innerText = 'Desenvolvimento e manutenção de sistemas internos e externos.';
        colaboracao.innerText = 'Colaboração com equipes de TI para resolver problemas e implementar melhorias.';
        suporte.innerText = 'Suporte técnico para usuários internos.';
        escritoSobre.innerText = 'Olá, meu nome é Alexandros Rodrigues Kotzias, tenho 19 anos e sou apaixonado pela área de TI. Meu interesse pela área começou desde cedo, quando meu pai comprou um notebook, inicialmente, o que eu queria era somente jogar online com os meus amigos. Com o tempo passando, percebi que o universo da TI era muito maior do que eu imaginava e decidi explorar mais a fundo. Com 16 anos, me inscrevi no curso técnico em Desenvolvimento de Sistemas no SENAI, onde adquiri conhecimentos importantes sobre tecnologia. Durante o curso, tive a oportunidade de trabalhar na área de suporte técnico ao cliente na Life Tech, onde desenvolvi habilidades práticas como resolução de problemas técnicos, atendimento ao usuário e manutenção de sistemas. Essa experiência me mostrou a importância do suporte técnico para garantir que a tecnologia atenda às necessidades das pessoas. Mais tarde, fui contratado como estagiário de desenvolvimento de software na Prefeitura Municipal de Florianópolis. Em 2024, concluí o curso técnico e iniciei a faculdade Desenvolvimento de Sistemas na Uniasselvi para ampliar ainda mais meu conhecimento e me especializar como programador de software.';       
        projetos.innerText = 'Projetos';
        subProjetos.innerText = 'Olhe meus projetos criados';
    } else if (idioma === 'English') {
        titulos.innerText = 'Hello, I am Alexandros';
        subTitulos.innerText = 'Fullstack Developer.';
        certificados.innerHTML = 'Certificates';
        subCertificados.innerText = 'View my training certificates';
        experiencias.innerText = 'Professional Experiences';
        subExperiencias.innerText = 'Check out my professional experiences';
        estagio.innerText = 'Development Intern at the City Hall of Florianópolis';
        desenvolvimento.innerText = 'Development and maintenance of internal and external systems.';
        colaboracao.innerText = 'Collaborating with IT teams to resolve issues and implement improvements.';
        suporte.innerText = 'Technical support for internal users.';
        ferramentas.innerText = 'Tools and Languages';
        subFerramentas.innerText = 'Check out my programming skills';
        sobre.innerHTML = 'About me';
        subSobre.innerHTML = 'Get to know me better';
        escritoSobre.innerHTML = 'Hello, my name is Alexandros Rodrigues Kotzias, I am 19 years old and I am passionate about the IT field. I became interested in the field at an early age, when my father bought me a laptop. Initially, all I wanted to do was play online games with my friends. As time went by, I realized that the IT universe was much bigger than I imagined and decided to explore it further. hen I was 16, I enrolled in the technical course in Systems Development at SENAI, where I acquired important knowledge about technology. During the course, I had the opportunity to work in the area of ​​technical customer support at Life Tech, where I developed practical skills such as solving technical problems, providing user service and maintaining systems. This experience showed me the importance of technical support in ensuring that technology meets people s needs. Later, I was hired as a software development intern at the City Hall of Florianópolis. In 2024, I completed the technical course and started college in Systems Development at Uniasselvi to further expand my knowledge and specialize as a software programmer.';
        projetos.innerText = 'Projects';
        subProjetos.innerText = 'Look at my created projects';
    } else if (idioma === 'Español') {
        titulos.innerText = 'Hola, Soy Alexandros';
        subTitulos.innerText = 'Desarrollador Fullstack.';
        certificados.innerHTML = 'Certificados';
        subCertificados.innerText = 'Ver mis certificados de formación';
        experiencias.innerText = 'Experiencias profesionales';
        subExperiencias.innerText = 'Conoce mis experiencias profesionales';
        estagio.innerText = 'Pasante de Desarrollo en la Alcaldía de Florianópolis';
        desenvolvimento.innerText = 'Desarrollo y mantenimiento de sistemas internos y externos.';
        colaboracao.innerText = 'Colaborar con los equipos de TI para resolver problemas e implementar mejoras.';
        suporte.innerText = 'Soporte técnico para usuarios internos.';
        ferramentas.innerText = 'Herramientas y lenguajes';
        subFerramentas.innerText = 'Mira mis habilidades de programación';
        sobre.innerHTML = 'Acerca de mí';
        subSobre.innerHTML = 'Conóceme mejor';
        escritoSobre.innerHTML = 'Hola, mi nombre es Alexandros Rodrigues Kotzias, tengo 19 años y me apasiona el campo de las TI. Mi interés por este ámbito empezó a temprana edad, cuando mi padre compró un cuaderno. Al principio lo único que quería hacer era jugar online con mis amigos. Con el paso del tiempo me di cuenta de que el universo informático era mucho más grande de lo que imaginaba y decidí explorarlo más a fondo. A los 16 años me matriculé en el curso técnico en Desarrollo de Sistemas del SENAI, donde adquirí importantes conocimientos sobre tecnología. Durante la carrera, tuve la oportunidad de trabajar en el área de soporte al cliente en Life Tech, donde desarrollé habilidades prácticas como resolución de problemas técnicos, servicio al usuario y mantenimiento de sistemas. Esta experiencia me mostró la importancia del soporte técnico para garantizar que la tecnología satisfaga las necesidades de las personas. Posteriormente me contrataron como pasante de desarrollo de software en el Ayuntamiento de Florianópolis. En 2024, finalicé la carrera técnica y comencé la carrera de Desarrollo de Sistemas en Uniasselvi para ampliar aún más mis conocimientos y especializarme como programador de software.';
        projetos.innerText = 'Proyectos';
        subProjetos.innerText = 'Mira mis proyectos creados';
    }

    localStorage.setItem('idiomaSelecionado', idioma);
}

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".customModalUniasselvi");
    const openModalBtn = document.querySelector(".modalUniasselvi");
    const closeModalBtns = document.querySelectorAll(".close-modal");
  
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".customModalSenai");
    const openModalBtn = document.querySelector(".modalSenai");
    const closeModalBtns = document.querySelectorAll(".close-modal");
  
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
  });

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".custom-modal");
    const openModalBtn = document.querySelector(".open-modal");
    const closeModalBtns = document.querySelectorAll(".close-modal");
  
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
    // modal.addEventListener("click", function (event) {
    //   if (event.target === modal) {
    //     modal.style.display = "none";
    //   }
    // });
  });
  