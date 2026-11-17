// ==========================================
// 1. BANCO DE QUESTÕES OFICIAIS (EXIN) - 40 QUESTÕES
// ==========================================
const officialQuestions = [
    // 1 - OFICIAL EXIN
    {
        q: "Um banco de dados contém alguns milhões de transações de uma empresa telefônica. Uma fatura foi gerada e enviada a um cliente. O que essa fatura contém para esse cliente?",
        options: [
            "Dados",
            "Informação",
            "Dados e informação"
        ],
        answer: 1,
        explanations: [
            "O banco de dados contém dados brutos. No entanto, quando uma fatura é gerada e enviada a um destinatário, deixa de ser apenas dado e passa a ser informação.",
            "O valor da informação é determinado pelo destinatário. A fatura contém dados valiosos para o destinatário e processados num contexto, portanto, é informação.",
            "A fatura contém apenas informação (dados já organizados com significado) para o destinatário."
        ]
    },
    // 2 - OFICIAL EXIN
    {
        q: "Qual é a diferença entre dados e informação?",
        options: [
            "Dados podem ser quaisquer fatos ou números. Informação são dados que têm significado.",
            "Dados são compostos por números não estruturados. Informação consiste em números estruturados.",
            "Dados não exigem segurança. Informação exige segurança.",
            "Dados não têm valor. Informação, que são dados processados, tem valor."
        ],
        answer: 0,
        explanations: [
            "Informação origina-se de dados quando se dá a eles um significado num certo contexto.",
            "Dados podem ser estruturados ou não estruturados. A diferença real está no significado.",
            "Tanto dados brutos quanto a informação exigem segurança.",
            "Tanto dados quanto informação têm valor para a organização."
        ]
    },
    // 3 - OFICIAL EXIN
    {
        q: "Qual é o foco do gerenciamento da informação?",
        options: [
            "Permitir que atividades e processos de negócios continuem sem interrupção",
            "Assegurar que o valor da informação seja identificado e aproveitado",
            "Evitar que pessoas não autorizadas tenham acesso a sistemas automatizados",
            "Entender como a informação flui através de uma organização"
        ],
        answer: 1,
        explanations: [
            "Este é o foco do gerenciamento da continuidade de negócios (BCM).",
            "O gerenciamento da informação planeia, controla e organiza a informação, assegurando que o seu valor seja identificado e aproveitado ao máximo.",
            "Este é o foco restrito da gestão de acessos lógicos.",
            "Este é o foco da análise da informação ou mapeamento de processos, não da gestão corporativa."
        ]
    },
    // 4 - OFICIAL EXIN
    {
        q: "Uma organização precisa entender os riscos que enfrenta antes que possa tomar medidas apropriadas. O que deve ser conhecido para determinar o risco?",
        options: [
            "A probabilidade de algo acontecer e suas consequências para a organização.",
            "Os perigos mais comuns e como mitigá-los, conforme definido nas melhores práticas.",
            "As ameaças que a organização enfrenta e o quão vulnerável a organização é a elas.",
            "Os eventos não planejados que uma organização enfrenta e o que fazer em caso de tais eventos."
        ],
        answer: 0,
        explanations: [
            "Dois fatores principais determinam o risco: a probabilidade de algo acontecer e o seu impacto (consequências) no negócio.",
            "Fazer o que outras organizações fazem não torna a sua organização segura; o risco depende do seu contexto.",
            "Isso apenas descreve a Ameaça e a Vulnerabilidade, mas falta o impacto no negócio.",
            "Isso descreve a Gestão de Incidentes (o que fazer quando ocorrer), e não a determinação (avaliação) prévia do risco."
        ]
    },
    // 5 - OFICIAL EXIN
    {
        q: "Além de integridade e confidencialidade, qual é o terceiro aspecto da confiabilidade da informação?",
        options: [
            "Exatidão",
            "Disponibilidade",
            "Completude",
            "Valor"
        ],
        answer: 1,
        explanations: [
            "A exatidão é, na verdade, uma parte do princípio da Integridade.",
            "Os três aspetos fundamentais (Tríade CIA) são Disponibilidade, Integridade e Confidencialidade.",
            "A completude também faz parte do pilar da Integridade.",
            "O valor é um atributo do negócio, não um dos três pilares clássicos da segurança técnica."
        ]
    },
    // 6 - OFICIAL EXIN
    {
        q: "Uma organização tem, em sua recepção, uma impressora ligada à rede. Muitos funcionários não recuperam suas impressões de imediato, deixando-as na impressora. Qual é a consequência disso para a confiabilidade da informação?",
        options: [
            "Não se pode garantir a disponibilidade da informação.",
            "Não se pode garantir a confidencialidade da informação.",
            "Não se pode garantir a integridade da informação."
        ],
        answer: 1,
        explanations: [
            "A informação ainda está totalmente disponível no sistema que foi utilizado para a criar e imprimir.",
            "Ao ficarem expostos na impressora da receção, os documentos podem acabar nas mãos de, ou ser lidos por, pessoas não autorizadas, quebrando a confidencialidade.",
            "A integridade da informação impressa no papel não foi afetada ou alterada."
        ]
    },
    // 7 - OFICIAL EXIN
    {
        q: "Qual é a diferença entre responsabilização e auditabilidade?",
        options: [
            "Responsabilização significa que uma organização tem suas contas financeiras bem administradas. Auditabilidade significa que uma organização foi aprovada em uma auditoria.",
            "Responsabilização significa ser responsável pelos resultados das atividades de uma organização. Auditabilidade se refere à prontidão de uma organização para ser submetida a uma avaliação independentemente.",
            "Responsabilização significa ter responsabilidade pelas ações de uma pessoa. Auditabilidade significa ter responsabilidade pelas ações de uma organização.",
            "Responsabilização significa que a organização está em conformidade com a Sarbanes-Oxley (SOX). Auditabilidade se refere a uma organização estar em conformidade com a ISO/IEC 27001."
        ],
        answer: 1,
        explanations: [
            "Responsabilização na ISO não tem relação com contabilidade financeira, nem auditabilidade se resume a ser 'aprovado'.",
            "Responsabilização (*Accountability*) é responder pelos resultados; Auditabilidade é possuir evidências prontas para avaliações independentes.",
            "Auditabilidade não tem nada a ver com ser responsável pelas ações da organização, mas sim com prová-las.",
            "Estes termos da segurança da informação são genéricos e não estão atrelados exclusivamente à SOX ou ISO."
        ]
    },
    // 8 - OFICIAL EXIN
    {
        q: "Como melhor se descreve a finalidade de uma política de segurança da informação?",
        options: [
            "Uma política de segurança da informação documenta a análise dos riscos e a busca por controles apropriados.",
            "Uma política de segurança da informação dá orientação e suporte à organização com relação à segurança da informação.",
            "Uma política de segurança da informação concretiza o plano de segurança ao lhe fornecer os detalhes necessários.",
            "Uma política de segurança da informação fornece uma visão sobre as ameaças e suas eventuais consequências."
        ],
        answer: 1,
        explanations: [
            "A análise dos riscos e a busca por controlos são a finalidade do processo de 'gestão de riscos', e não da Política.",
            "Com a política de segurança, a gestão de topo (direção) dá o direcionamento, orientação e suporte com relação à segurança da informação corporativa.",
            "Pelo contrário, é o plano de segurança que concretiza a política, possuindo os detalhes operacionais.",
            "A finalidade da 'análise de ameaças' (Risk Assessment) é que fornece esta visão sobre ameaças, não a política."
        ]
    },
    // 9 - OFICIAL EXIN
    {
        q: "Sara ficou encarregada de assegurar que a organização cumpra com a legislação de proteção de dados pessoais. Qual é a primeira medida que ela deve tomar?",
        options: [
            "Nomear uma pessoa responsável por apoiar os gerentes na adesão à política",
            "Proibir a coleta e o armazenamento de informações pessoais",
            "Tornar os funcionários responsáveis pelo envio de seus dados pessoais",
            "Converter a legislação de proteção de dados pessoais em uma política de privacidade"
        ],
        answer: 3,
        explanations: [
            "Nomear alguém para apoio não é o requisito inicial. A política base deve alinhar-se à legislação primeiro.",
            "Proibir a coleta de dados paralisaria o negócio; esta não é a forma correta de cumprir a legislação.",
            "Isso não assegura de todo o cumprimento legal das regras de privacidade da organização.",
            "O primeiro e principal passo para o cumprimento legal (como RGPD) é traduzir e criar uma política de privacidade interna para a organização."
        ]
    },
    // 10 - OFICIAL EXIN
    {
        q: "Uma organização decide terceirizar parte de sua TI. Qual a melhor forma de garantir segurança da informação quando se trabalha com um fornecedor?",
        options: [
            "Nomear um novo information security officer (ISO) na organização do fornecedor",
            "Formalizar os requisitos de segurança da informação para o fornecedor em um acordo",
            "Manter as duas organizações totalmente separadas para tornar todos responsáveis por seus dados",
            "Exigir que o fornecedor siga os processos e os procedimentos da organização do cliente"
        ],
        answer: 1,
        explanations: [
            "Não é necessário ou papel do cliente nomear um ISO dentro da estrutura do fornecedor.",
            "Formalizar os requisitos contratuais num acordo/SLA é a forma prática mais eficaz e obrigatória de gerir o risco do fornecedor.",
            "O cliente continua a ser o responsável final legal pelos dados (não há como 'separar' essa responsabilidade).",
            "O fornecedor pode e deve ter o seu próprio processo certificado de segurança, desde que atenda ao SLA, não sendo obrigado a copiar os procedimentos do cliente."
        ]
    },
    // 11 - OFICIAL EXIN
    {
        q: "Quem é responsável por converter a estratégia e os objetivos de negócio em estratégia e objetivos de segurança?",
        options: [
            "Chief information security officer (CISO)",
            "Gestão geral",
            "Information security officer (ISO)",
            "Information security policy officer"
        ],
        answer: 0,
        explanations: [
            "O CISO ocupa o nível de gestão mais alto da organização e foca no desenvolvimento da estratégia de segurança geral em linha com o negócio.",
            "A Gestão geral/Conselho apenas aprova a estratégia global, mas a tradução tática para segurança cabe ao CISO.",
            "O ISO foca-se geralmente na aplicação prática da política ao nível de unidades de negócios ou departamentos específicos.",
            "Este profissional atua apenas na manutenção do texto da política, e não na formulação estratégica."
        ]
    },
    // 12 - OFICIAL EXIN
    {
        q: "Qual é o melhor exemplo de uma ameaça humana?",
        options: [
            "Um vazamento que provoca uma falha no fornecimento de energia.",
            "Um pen drive que transmite um vírus para a rede.",
            "Há muito pó na sala dos servidores."
        ],
        answer: 1,
        explanations: [
            "Inundações ou vazamentos de água são considerados ameaças não humanas / naturais.",
            "Um pen drive é sempre inserido de forma intencional ou acidental por uma pessoa. Portanto, se causa a entrada de um vírus, a ameaça de origem é humana.",
            "Pó ou poeira excessiva no servidor constitui uma ameaça não humana (ambiental)."
        ]
    },
    // 13 - OFICIAL EXIN
    {
        q: "Um sistema de banco de dados não possui os patches de segurança mais recentes e foi hackeado. Os hackers conseguiram acessar os dados e eliminá-los. Que conceito de segurança da informação descreve a falta de patches de segurança?",
        options: [
            "Impacto",
            "Risco",
            "Ameaça",
            "Vulnerabilidade"
        ],
        answer: 3,
        explanations: [
            "O impacto foi a consequência do ataque (os dados serem eliminados).",
            "O risco seria a probabilidade de o evento acontecer multiplicada pelo impacto.",
            "A ameaça externa neste cenário foram os hackers.",
            "A falta de uma proteção, falha de segurança ou ausência de patches de atualização representa estritamente uma Vulnerabilidade."
        ]
    },
    // 14 - OFICIAL EXIN
    {
        q: "Houve um incêndio em uma empresa. Os bombeiros chegaram rapidamente ao local e conseguiram apagar o fogo antes que ele se espalhasse e atingisse todas as instalações da empresa. Entretanto, o incêndio destruiu o servidor. As fitas de backup (cópia de segurança) que ficavam em outra sala derreteram e muitos outros documentos foram perdidos. Que dano indireto foi causado por esse incêndio?",
        options: [
            "Sistemas de computadores queimados",
            "Documentos queimados",
            "Fitas de backup derretidas",
            "Danos causados pela água"
        ],
        answer: 3,
        explanations: [
            "O sistema queimado pelas chamas representa um dano direto causado pelo incêndio.",
            "Os papéis queimados são um dano físico direto.",
            "As fitas derretidas pelo calor irradiado no local também representam um dano direto primário.",
            "Os danos causados pela água dos extintores/mangueiras são danos colaterais indiretos ocorridos no processo de combater o perigo inicial."
        ]
    },
    // 15 - OFICIAL EXIN
    {
        q: "Empresas podem ter diferentes estratégias de risco dependendo do tipo de negócio. Que estratégia de risco é mais adequada para um hospital?",
        options: [
            "Aceitar o risco",
            "Evitar o risco",
            "Suportar o risco",
            "Reduzir o risco"
        ],
        answer: 1,
        explanations: [
            "Aceitar falhas num ambiente clínico envolve o risco de mortes de pacientes ou multas massivas.",
            "Sempre que se lida com a vida humana em hospitais, a diretriz prioritária em gestão de risco é Evitar o Risco ao máximo.",
            "Suportar é o mesmo que aceitar; algo inviável quando se trata da segurança de doentes nos hospitais.",
            "Reduzir/Mitigar é usado em riscos corporativos normais, mas sempre que possível em ambiente de saúde, a norma exige Evitação completa de riscos críticos."
        ]
    },
    // 16 - OFICIAL EXIN
    {
        q: "Uma análise de risco bem realizada fornece muita informação útil. Uma análise de risco tem diferentes objetivos principais. O que não é um objetivo principal de uma análise de risco?",
        options: [
            "Balancear os custos de um incidente e os custos de um controle",
            "Determinar vulnerabilidades e ameaças importantes",
            "Identificar os ativos e seu valor",
            "Implementar medidas e controles"
        ],
        answer: 3,
        explanations: [
            "Calcular o custo-benefício financeiro das opções é uma parte essencial da análise (Análise Quantitativa).",
            "Cruzamento de ameaças vs vulnerabilidades é o passo central da análise de riscos.",
            "A identificação e valoração dos ativos (Asset Value) é a primeira etapa de qualquer análise.",
            "A implementação de medidas (controlos) acontece apenas na fase de Tratamento de Risco ('Do'), ou seja, logicamente após a Análise estar já concluída."
        ]
    },
    // 17 - OFICIAL EXIN
    {
        q: "Em caso de incêndio, qual é um controle repressivo?",
        options: [
            "Extinção do incêndio após sua detecção",
            "Reparação dos danos causados pelo incêndio",
            "Contratação de um seguro contra incêndio"
        ],
        answer: 0,
        explanations: [
            "Um controlo repressivo age DE IMEDIATO para limitar e minimizar os danos enquanto o incidente ocorre (ex: extintores apagando as chamas).",
            "Reparar as paredes após o rescaldo é classificado como um controlo Corretivo (ou de Recuperação).",
            "Contratar um seguro faz parte da Transferência/Compartilhamento financeiro do Risco."
        ]
    },
    // 18 - OFICIAL EXIN
    {
        q: "Qual é o objetivo da classificação da informação?",
        options: [
            "Rotular a informação para facilitar seu reconhecimento",
            "Criar um manual sobre como lidar com dispositivos móveis",
            "Estruturar a informação de acordo com sua sensibilidade"
        ],
        answer: 2,
        explanations: [
            "Colocar o rótulo é a 'Designação' (ação física), não o objetivo da etapa estratégica de classificação em si.",
            "A gestão de dispositivos móveis é abrangida pelas Políticas de Uso Aceitável, não pela classificação.",
            "O verdadeiro objetivo da classificação é categorizar a informação em diferentes níveis de sensibilidade e impacto corporativo (ex: Confidencial, Interno, Público)."
        ]
    },
    // 19 - OFICIAL EXIN
    {
        q: "Qual é a razão mais importante para pôr em prática a segregação de funções?",
        options: [
            "Assegurar que os funcionários não realizem o mesmo trabalho ao mesmo tempo",
            "Responsabilizar conjuntamente todos os funcionários pelos erros que cometem",
            "Tornar claro quem é responsável por quais tarefas e atividades",
            "Minimizar a possibilidade de alterações não autorizadas ou não intencionais"
        ],
        answer: 3,
        explanations: [
            "A segregação não é sobre cronograma ou paralelismo de trabalho.",
            "Pelo contrário, ao separar as tarefas previne-se o conluio, mas as pessoas têm responsabilidades individuais, não conjuntas.",
            "Tornar responsabilidades claras é papel do descritivo de funções e matriz RACI, não do princípio de segregação técnica.",
            "A segregação impede que uma única pessoa tenha controlo suficiente para cometer uma fraude/erro de princípio a fim sem que seja detetado por outro."
        ]
    },
    // 20 - OFICIAL EXIN
    {
        q: "Qual é a melhor forma de assegurar um acesso apropriado à informação?",
        options: [
            "Automatizar fluxos de trabalho",
            "Definir procedimentos operacionais",
            "Desenvolver instruções de trabalho para todas as tarefas",
            "Fornecer treinamento"
        ],
        answer: 1,
        explanations: [
            "A automação sem regras prévias definidas pode apenas acelerar procedimentos inseguros.",
            "O uso de procedimentos operacionais e políticas documentadas é a ferramenta formal para orientar quem, como e onde acede de forma estruturada.",
            "Microgerir com instruções de trabalho exaustivas 'para tudo' é irrealista na ISO e não lida focado no perfil de acesso geral.",
            "Treinamento é fundamental, mas sem um procedimento documentado prévio para basear a formação, não se assegura o controlo."
        ]
    },
    // 21 - OFICIAL EXIN
    {
        q: "Houve um incêndio em uma filial de uma organização. Os funcionários foram transferidos para filiais próximas para continuar seu trabalho. No ciclo de vida de um incidente, onde se localiza a mudança para um stand-by arrangement?",
        options: [
            "Entre as etapas de dano e de recuperação",
            "Entre as etapas de incidente e de dano",
            "Entre as etapas de recuperação e de ameaças",
            "Entre as etapas de ameaças e de incidente"
        ],
        answer: 1,
        explanations: [
            "Dano e recuperação são na verdade as etapas seguintes que são estritamente limitadas pelo uso de instalações suplentes.",
            "O uso imediato de instalações alternativas (stand-by arrangement) é uma medida ativa (repressiva) para interromper o impacto, localizada logo a seguir ao incidente estalar e antes do dano escalar gravemente.",
            "Cronologicamente errado no ciclo de incidente e BCP.",
            "Mover pessoal antes de o incidente acontecer requereria poderes de previsão; os sites alternativos ativam-se pós-desastre."
        ]
    },
    // 22 - OFICIAL EXIN
    {
        q: "Uma funcionária descobre que a data de validade de uma política foi alterada sem seu conhecimento. Ela é a única pessoa autorizada a fazer essa alteração e notifica esse incidente de segurança ao help desk. O funcionário do help desk registra as seguintes informações sobre esse incidente: data e hora, descrição do incidente, eventuais consequências do incidente. Que informação importante sobre o incidente não foi registrada?",
        options: [
            "O nome da pessoa que notifica o incidente",
            "O nome do pacote de software",
            "O número do computador"
        ],
        answer: 0,
        explanations: [
            "Os registos fundamentais iniciais exigidos incluem quem, quando e o quê. Faltou efetivamente documentar o nome de quem notificou o desvio.",
            "A identificação exata do software pode não ser imediatamente relevante no primeiro contacto e é adicionada pela triagem depois.",
            "O número físico da máquina é irrelevante neste instante se o ataque for focado em acesso de utilizador remoto à documentação."
        ]
    },
    // 23 - OFICIAL EXIN
    {
        q: "Por que é importante auditar regularmente o sistema de gestão de segurança da informação (SGSI) da organização?",
        options: [
            "Auditorias são um requisito comum em contratos de clientes para garantir segurança da informação.",
            "Auditorias são um elemento necessário para estar em conformidade com requisitos legais ou regulatórios.",
            "Auditorias detectam problemas relacionados à capacidade de cumprir os objetivos financeiros da organização.",
            "Auditorias detectam fragilidades na implementação de controles de segurança da informação."
        ],
        answer: 3,
        explanations: [
            "Os contratos de fornecimento raramente cobram auditorias de segurança específicas ao invés de SLAs rigorosos.",
            "A lei RGPD e equivalentes pedem boas práticas, mas não tornam as auditorias uma obrigatoriedade penal genérica.",
            "O objetivo da ISO 27001 não está centrado diretamente em medir desempenho financeiro de negócios.",
            "Auditorias (fase 'Check' do PDCA) servem estritamente para apontar brechas e avaliar se os controlos desenhados estão mesmo a ser seguidos e a funcionar."
        ]
    },
    // 24 - OFICIAL EXIN
    {
        q: "Que documento contém uma regra que proíbe o uso do e-mail da empresa para fins pessoais?",
        options: [
            "Certificado de boa índole",
            "Código de conduta",
            "Regulamento Geral sobre a Proteção de Dados (GDPR)",
            "Acordo de não divulgação (NDA)"
        ],
        answer: 1,
        explanations: [
            "O Registo Criminal de um colaborador não contém normas de acesso da empresa.",
            "As restrições de comportamento aceitável no escritório estão tipicamente consagradas no Código de Conduta ou Política de Uso Aceitável.",
            "O RGPD/GDPR não estipula como uma empresa gere o limite pessoal das ferramentas informáticas internas.",
            "O NDA (Termo de Sigilo) proíbe apenas vazamento de segredos, e não o simples uso civil da ferramenta."
        ]
    },
    // 25 - OFICIAL EXIN
    {
        q: "Quando um funcionário detecta um incidente, normalmente quem ele deve notificar primeiro?",
        options: [
            "Help desk",
            "Information security manager (ISM)",
            "Information security officer (ISO)",
            "Gerente"
        ],
        answer: 0,
        explanations: [
            "Incidentes devem ser notificados ao nível de suporte operacional (Help Desk/Service Desk) centralizado para realizar a primeira triagem técnica e categorização rápida.",
            "Escalamento imediato direto a gestores superiores (ISM) quebra o protocolo hierárquico e satura a gestão.",
            "O ISO atua numa camada normativa de supervisão e não na triagem operacional a frio.",
            "O chefe do departamento não é a área técnica especializada para conter o dano inicial (ex: formatar vírus)."
        ]
    },
    // 26 - OFICIAL EXIN
    {
        q: "Qual é a forma mais eficaz de criar conscientização sobre segurança da informação entre os funcionários?",
        options: [
            "Ter como foco treinamento sobre conscientização para o time de gestão",
            "Enviar todos os funcionários para um treinamento externo sobre segurança da informação",
            "Criar um programa de conscientização específico para a organização",
            "Utilizar um curso de treinamento genérico online sobre segurança da informação"
        ],
        answer: 2,
        explanations: [
            "Se treinar apenas a gestão, a base de funcionários continuará a ser a principal porta de entrada para ataques sociais.",
            "Formações de prateleira ou conferências externas geralmente omitem as particularidades de infraestrutura, termos e cultura da sua empresa específica.",
            "Na ISO 27001, a máxima eficácia acontece quando o plano reflete precisamente a política, a realidade e as funções internas específicas (Programa Específico).",
            "Treinamento online genérico perde apelo, interesse e não ensina como usar o processo disciplinar interno."
        ]
    },
    // 27 - OFICIAL EXIN
    {
        q: "Que controle físico gerencia o acesso às informações de uma organização?",
        options: [
            "Instalação de ar-condicionado",
            "Proibição do uso de pen drives",
            "Exigência de nome de usuário e senha",
            "Uso de vidro inquebrável"
        ],
        answer: 3,
        explanations: [
            "Ar condicionado é controlo ambiental, que gere temperatura, não restrição ao acesso da informação em si.",
            "A proibição documental de pen drives cai na categoria de 'Controlo Administrativo/Organizacional'.",
            "Senhas informáticas pertencem estritamente à classe de 'Controlos Lógicos/Técnicos'.",
            "Instalar paredes de alvenaria, biometria ou vidros blindados (inquebráveis) restringe fisicamente os indivíduos, enquadrando-se em Controlo Físico perimetral."
        ]
    },
    // 28 - OFICIAL EXIN
    {
        q: "Um centro de dados usa bancos de baterias, mas não tem gerador de energia. Qual é o risco associado a essa situação para a disponibilidade do centro de dados?",
        options: [
            "A energia principal pode não voltar automaticamente quando a energia for restabelecida, pois é preciso ter um gerador de energia para isso.",
            "O corte da energia principal pode durar mais do que alguns minutos ou horas, o que causará falta de energia.",
            "A vida útil dos bancos de baterias é limitada, então eles podem ficar sem diesel e parar de funcionar após alguns dias.",
            "Após algumas horas, os bancos de baterias devem ser alimentados pelo gerador de energia, logo eles oferecem apenas proteção limitada."
        ],
        answer: 1,
        explanations: [
            "A funcionalidade de retornar a infraestrutura quando a rede elétrica volta é automática e não carece de um gerador para comutar.",
            "Os bancos de UPS (No-breaks/baterias) suportam a carga apenas para oscilações ou para permitir um encerramento seguro (durando no máximo alguns minutos). A falta do gerador compromete apagões mais longos.",
            "A alternativa comete um erro primário: misturar 'bateria' com 'gasóleo/diesel', combustível usado apenas por geradores mecânicos.",
            "A formulação está incorreta; a bateria esgota rapidamente, quem protege de cortes de longa duração ativamente é unicamente o gerador."
        ]
    },
    // 29 - OFICIAL EXIN
    {
        q: "Por que há ar-condicionado na sala dos servidores?",
        options: [
            "As fitas de backup (cópia de segurança) são feitas de um plástico fino que não resiste a altas temperaturas.",
            "Os funcionários que trabalham na sala dos servidores não devem trabalhar no calor.",
            "Na sala dos servidores, o ar deve ser refrigerado e o calor produzido pelos equipamentos deve ser removido. O ar-condicionado também desumidifica e filtra o ar da sala.",
            "A sala dos servidores é a melhor forma de refrigerar o ar do escritório."
        ],
        answer: 2,
        explanations: [
            "Fitas de backup NUNCA devem estar guardadas fisicamente na mesma sala do servidor principal, pois um sinistro destruiria ambas.",
            "A prioridade regulatória do ar ambiente no Data Center centra-se nos equipamentos caros e não no conforto dos operadores.",
            "O hardware informático intensivo emite quantias perigosas de calor. O AC regula a temperatura (arrefecimento) e mantem as taxas de humidade apropriadas para prevenir estática (secos demais) e condensação (húmidos demais).",
            "Centralizar o AC de um edifício corporativo num Data Center isolado não faz qualquer sentido mecânico."
        ]
    },
    // 30 - OFICIAL EXIN
    {
        q: "Na segurança física, diversos anéis de proteção podem ser usados, nos quais diferentes medidas podem ser tomadas. O que não é um anel de proteção?",
        options: [
            "Prédio",
            "Área intermediária",
            "Área segura",
            "Anel externo"
        ],
        answer: 1,
        explanations: [
            "O perímetro/estrutura base do Prédio é o segundo anel típico da defesa em profundidade física.",
            "A literatura da EXIN descreve especificamente Anel externo, Prédio, Espaço de trabalho e Área Segura. Não existe nenhuma designação oficial de 'área intermediária'.",
            "A 'Área Segura' (como a Sala Cofre e Datacenter) representa o anel final mais protegido e restrito.",
            "O Anel Externo (Ex: cancelas, luzes, muros) é a primeira barreira do conceito."
        ]
    },
    // 31 - OFICIAL EXIN
    {
        q: "O controle para proteger um ativo depende do tipo de ativo. Qual é a forma mais apropriada de proteger o ativo?",
        options: [
            "Proteger um formulário preenchendo-o e assinando-o",
            "Proteger um laptop alocando-o a um único usuário",
            "Proteger um pen drive com criptografia",
            "Proteger uma conexão de internet com um backup (cópia de segurança)"
        ],
        answer: 2,
        explanations: [
            "Um preenchimento de papel em si não fornece defesa contra desastres, apenas validade administrativa (não protege confidencialidade, nem furto).",
            "Atrelar o portátil a uma só pessoa ajuda no inventário (Accounting), mas não impede a máquina de ser intercetada e os seus dados expostos.",
            "A criptografia de armazenamento em massa (Full-disk / Flash encryption) é o controlo universal aceite para anular o risco inerente à perda física ou roubo de pendrives portáteis.",
            "Os links de internet protegem-se com Links Redundantes de telecomunicações de diferentes vias, e não realizando um 'backup' da conexão."
        ]
    },
    // 32 - OFICIAL EXIN
    {
        q: "Que controle de segurança da informação ajuda a desenvolver sistemas tendo em conta a segurança da informação?",
        options: [
            "Garantir redundância dos servidores",
            "Implementar controles físicos nas entradas",
            "Verificar os antecedentes dos funcionários",
            "Utilizar classificação de dados nos ativos de informação"
        ],
        answer: 0,
        explanations: [
            "A redundância da arquitetura central deve ser considerada e incorporada logo na génese e desenvolvimento estrutural dos sistemas (Security by Design) para evitar quedas e SPOF (pontos únicos de falha).",
            "Isto está associado à infraestrutura predial física e RH, e não às diretrizes focadas no ciclo de programação e desenvolvimento de sistemas.",
            "Background checks lidam com segurança de Recursos Humanos (Controlo Administrativo), exterior ao código/sistema.",
            "A classificação de dados afeta quem acede ao dado, e não no desenvolvimento inicial arquitetónico da resistência estrutural do sistema per se."
        ]
    },
    // 33 - OFICIAL EXIN
    {
        q: "Uma organização muda sua política. A partir de agora, os funcionários estão autorizados a trabalhar remotamente. Que controle deve ser implementado agora?",
        options: [
            "Criar V-LANs para segmentar a rede corporativa",
            "Criptografar as informações da rede corporativa",
            "Instalar firewalls na rede corporativa",
            "Usar uma VPN para se conectar à rede corporativa"
        ],
        answer: 3,
        explanations: [
            "A segmentação por VLAN protege a lateralização interna, que deveria já estar feita independentemente da adição de escritórios em casa.",
            "A criptografia central na base de dados (Storage) é essencial sempre, não sendo uma especificidade apenas ativada pelo novo regime de teletrabalho.",
            "Os firewalls já deveriam ser a barreira padrão entre a empresa e o resto da Internet desde o dia 1 de operação corporativa.",
            "A adoção de VPN (Rede Privada Virtual) torna-se mandatória e essencial para que a via de comunicação (em trânsito) entre o router doméstico exposto do funcionário e o servidor corporativo seja blindada."
        ]
    },
    // 34 - OFICIAL EXIN
    {
        q: "Os funcionários de uma organização trabalham com laptops protegidos por criptografia assimétrica. Todos os consultores usam o mesmo par de chaves para manter barato o gerenciamento das chaves. Se alguma informação for comprometida, novas chaves devem ser fornecidas. Em que caso novas chaves devem ser fornecidas?",
        options: [
            "Quando a chave privada se torna conhecida",
            "Quando a chave pública se torna conhecida",
            "Quando a infraestrutura de chave pública (ICP) se torna conhecida"
        ],
        answer: 0,
        explanations: [
            "No algoritmo Assimétrico (Ex: RSA), o secretismo total da Chave Privada é o único sustentáculo da segurança da cifragem. Se vaza, os dados podem ser expostos em segundos e exige revogação e emissão instantânea.",
            "O nome diz tudo: a Chave Pública já é conhecida globalmente por definição; ela é entregue publicamente de propósito.",
            "A infraestrutura central tecnológica de emissão (ICP/PKI) não é secreta e tem métodos operacionais conhecidos globalmente (ex: Autoridades Certificadoras)."
        ]
    },
    // 35 - OFICIAL EXIN
    {
        q: "Que tipo de segurança uma infraestrutura de chave pública (ICP) oferece?",
        options: [
            "Uma ICP garante que os backups (cópias de segurança) dos dados da empresa sejam feitos regularmente.",
            "Uma ICP mostra aos clientes que um negócio na internet é seguro.",
            "Uma ICP verifica qual pessoa ou sistema pertence a uma chave pública específica."
        ],
        answer: 2,
        explanations: [
            "Os processos de backup referem-se à Continuidade do Negócio / Availability e não têm vinculação nenhuma com algoritmos ICP.",
            "Mostrar o cadeado da internet indica a presença de cifragem, mas um cibercriminoso pode comprar um certificado, logo a infraestrutura por si só não garante ao utilizador um 'negócio honesto'.",
            "A finalidade única de uma ICP (PKI - Public Key Infrastructure) e de uma Autoridade de Certificação (CA) é auditar e atestar indiscutivelmente (Não-Repúdio) a quem, pessoa ou IP de servidor, pertence o código público associado."
        ]
    },
    // 36 - OFICIAL EXIN
    {
        q: "Que tipo de malware é um programa que, além da função que aparentemente desempenha, realiza propositalmente atividades secundárias?",
        options: [
            "Bomba lógica",
            "Spyware",
            "Trojan",
            "Worm"
        ],
        answer: 2,
        explanations: [
            "A bomba de lógica acorda em silêncio ao atingir uma data ou condição paramétrica; não se mascara habitualmente através de um uso inofensivo simultâneo.",
            "Spywares operam maioritariamente escondidos sem oferecer nenhuma função primária de 'aparente utilidade' ao utilizador.",
            "O Cavalo de Troia (*Trojan*) disfarça-se enganadoramente como um ficheiro útil e apetecível (ex: um jogo inofensivo ou folha de cálculo), e paralelamente solta a sua carga maliciosa indesejada.",
            "O foco principal do Worm é arrastar-se lateralmente entre computadores por fraquezas de SMB, e não enganar pessoas simulando atividades úteis."
        ]
    },
    // 37 - OFICIAL EXIN
    {
        q: "Que tipo de malware cria uma rede de computadores contaminados ao se replicar?",
        options: [
            "Bomba lógica",
            "Spyware",
            "Trojan",
            "Worm"
        ],
        answer: 3,
        explanations: [
            "As bombas lógicas são detonadas localmente pela verificação de uma determinada cláusula e não atuam como agentes infeciosos espalhando-se.",
            "O spyware regista passivamente e transmite informações em formato de Keylogger, e não se propaga para redes infetadas com poder viral autônomo.",
            "O Trojan, como mencionado, requer a ação humana por desatenção para interagir com a camuflagem maliciosa, incapaz de voar sozinho de rede em rede.",
            "O Worm (Verme) tira partido autônomo de vulnerabilidades abertas em infraestrutura para multiplicar-se silenciosamente (replicação agressiva) por todas as máquinas adjacentes de rede."
        ]
    },
    // 38 - OFICIAL EXIN
    {
        q: "Qual é o ato legislativo ou regulatório relacionado à segurança da informação que pode ser imposto a todas as organizações?",
        options: [
            "Regulamento Geral sobre a Proteção de Dados (GDPR)",
            "Direitos de propriedade intelectual (PI)",
            "ISO/IEC 27001",
            "ISO/IEC 27002"
        ],
        answer: 0,
        explanations: [
            "Todas as organizações comerciais ou não comerciais são obrigadas a submeterem-se, pela força das coimas governamentais e normativas vigentes, aos princípios de Privacidade estipulados pela Lei (GDPR ou equivalentes estatais como a LGPD).",
            "Envolve infrações civis, mas não compele estruturalmente à segurança cibernética em todos os seus procedimentos vitais.",
            "A Norma ISO 27001 não detém caráter coercivo punitivo da lei – trata-se de um sistema de avaliação voluntária que uma corporação segue (ou não) por objetivos de qualidade / certificação competitiva.",
            "Representando o Manual Prático de Boas Ações, ninguém sofre repercussões judiciais ou fechamento de portas legais apenas por discordar da ISO 27002."
        ]
    },
    // 39 - OFICIAL EXIN
    {
        q: "Que norma ISO tem como foco a implementação de controles de segurança da informação?",
        options: [
            "ISO/IEC 27000",
            "ISO/IEC 27001",
            "ISO/IEC 27002",
            "ISO/IEC 27005"
        ],
        answer: 2,
        explanations: [
            "Serve meramente como vocabulário, definindo glossários terminológicos para a família de normas.",
            "A 27001 prescreve as obrigatoriedades mandatárias e os passos do Sistema SGSI a certificar (Foco na Gestão/Cláusulas).",
            "A Norma 27002 providencia as diretrizes não sancionáveis, sugestões detalhadas e as melhores táticas operacionais para guiar quem necessita de Implementar (na prática) os controlos selecionados do Anexo A.",
            "Esta está vocacionada estritamente e especializada apenas nos cálculos quantitativos e métodos de Avaliação de Risco."
        ]
    },
    // 40 - OFICIAL EXIN
    {
        q: "Que organização tem as normas mais comumente usadas na Europa?",
        options: [
            "Instituto Nacional Americano de Padrões (ANSI)",
            "Organização Internacional de Padronização (ISO)",
            "Instituto Nacional de Padrões e Tecnologia (NIST)"
        ],
        answer: 1,
        explanations: [
            "Como sugere o título, é um órgão restrito ao continente Norte Americano e às jurisdições regulatórias dos EUA.",
            "Devido à unificação global do seu código e ao alinhamento com a Comissão Europeia de Normalização, as matrizes suíças da ISO predominam expressamente sobre todos os procedimentos de governação do Continente Europeu.",
            "Referência gigante global de cibernética e agência civil vinculada ao Departamento de Comércio dos EUA, sendo padronização de compliance massiva, mas tipicamente mandatória e primária para o Estado Americano."
        ]
    }
];


// ==========================================
// 2. BANCO DE QUESTÕES DESAFIO — PADRÃO ESTRITO EXIN (60 QUESTÕES)
// Substitua "const extraQuestions = [];" por este bloco completo
// ==========================================
const extraQuestions = [
    // 1 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Durante o inventário de ativos, um analista avalia um repositório contendo milhões de registros de chamadas ainda não processados e um relatório executivo de faturamento enviado à diretoria. Sobre esses dois elementos na literatura da EXIN, é correto afirmar que:",
        options: [
            "O repositório contém apenas dados sem valor intrínseco, passando a exigir controles de segurança apenas após ser convertido em relatório.",
            "O repositório contém dados brutos e o relatório contém informação contextualizada, sendo que ambos possuem valor e exigem proteção.",
            "Ambos são classificados estritamente como informação, pois qualquer registro armazenado em banco de dados eletrônico já possui significado.",
            "O relatório contém dados estruturados para armazenamento, enquanto o repositório contém informação exclusiva para análise de fluxo."
        ],
        answer: 1,
        explanations: [
            "Incorreta: dados brutos também possuem valor para a organização e exigem controles de segurança antes mesmo do processamento.",
            "Correta: dados são fatos brutos e informação são dados dotados de significado e contexto para o destinatário; ambos têm valor e exigem segurança.",
            "Incorreta: registros brutos sem contexto atribuído a um destinatário são dados, e não informação.",
            "Incorreta: os conceitos foram invertidos; o relatório entregue ao destinatário é informação."
        ]
    },
    // 2 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Uma organização decide iniciar duas frentes de trabalho: a primeira visa mapear como os documentos tramitam entre os setores comercial e financeiro; a segunda visa garantir que o valor estratégico desses documentos seja identificado e explorado pelo negócio. Essas frentes correspondem, respectivamente, a:",
        options: [
            "Gerenciamento da Informação e Classificação da Informação.",
            "Classificação da Informação e Designação de Ativos.",
            "Análise da Informação e Gerenciamento da Informação.",
            "Análise de Impacto no Negócio (BIA) e Gestão de Riscos."
        ],
        answer: 2,
        explanations: [
            "Incorreta: mapear o fluxo através da organização é o foco da Análise da Informação, e não do Gerenciamento.",
            "Incorreta: Classificação estrutura pela sensibilidade e Designação aplica rótulos.",
            "Correta: a Análise da Informação foca em entender como a informação flui pela organização; o Gerenciamento da Informação foca em identificar e aproveitar o seu valor.",
            "Incorreta: BIA e Gestão de Riscos tratam de continuidade e ameaças, não do fluxo e valor informacional primário."
        ]
    },
    // 3 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Em uma auditoria de banco de dados, constatou-se que os registros financeiros não sofreram qualquer acesso externo indevido e o servidor operou com 100% de tempo ativo. Contudo, uma falha de script truncou as casas decimais das transações e omitiu os registros do último turno. Quais conceitos foram diretamente comprometidos?",
        options: [
            "Disponibilidade e Autenticidade, que compõem o controle de acesso lógico.",
            "Exatidão e Completude, que são subaspectos diretos do pilar da Integridade.",
            "Posse e Utilidade, que substituem a Integridade na norma ISO/IEC 27001.",
            "Confidencialidade e Não-repúdio, devido à omissão de transações no relatório."
        ],
        answer: 1,
        explanations: [
            "Incorreta: o servidor operou com 100% de disponibilidade e a origem dos dados não foi falsificada.",
            "Correta: a precisão dos valores (Exatidão) e a presença integral de todos os registros (Completude) são os dois componentes fundamentais da Integridade.",
            "Incorreta: o Hexagrama Parkeriano não substitui a Integridade na ISO 27001, e o problema descrito é de alteração/omissão de dados.",
            "Incorreta: não houve vazamento a terceiros nem negação de autoria."
        ]
    },
    // 4 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Um cofre portátil contendo fitas LTO de backup criptografadas com AES-256 é furtado durante o transporte externo. Considerando que a chave de descriptografia permaneceu exclusiva na matriz e que existe uma segunda cópia das fitas no servidor principal, qual atributo do Hexagrama Parkeriano foi imediatamente violado no furto?",
        options: [
            "Confidencialidade da informação armazenada nas fitas.",
            "Utilidade dos dados mantidos na sede da organização.",
            "Posse ou Controle sobre o suporte físico furtado.",
            "Autenticidade da origem dos registros de backup."
        ],
        answer: 2,
        explanations: [
            "Incorreta: como as fitas estão fortemente criptografadas e a chave não foi levada, o conteúdo permanece ilegível para o ladrão.",
            "Incorreta: a sede possui cópia e a chave correspondente, mantendo a utilidade operacional na matriz.",
            "Correta: a perda da custódia física da mídia, mesmo sem quebra do sigilo criptográfico, viola imediatamente o atributo de Posse ou Controle.",
            "Incorreta: a autenticidade dos registros não é alterada pela perda física do cofre."
        ]
    },
    // 5 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Após uma atualização de sistema, uma base histórica de contratos continuou armazenada de forma íntegra, acessível na rede interna e protegida por controle de acesso, mas a tabela de conversão de caracteres foi corrompida, exibindo apenas símbolos indecifráveis para os analistas. Segundo o Hexagrama Parkeriano, houve perda primária de:",
        options: [
            "Disponibilidade da infraestrutura de rede.",
            "Posse ou Controle sobre o banco de dados.",
            "Confidencialidade perimetral do servidor.",
            "Utilidade da informação para a sua finalidade."
        ],
        answer: 3,
        explanations: [
            "Incorreta: o servidor e os arquivos continuam online e acessíveis na rede.",
            "Incorreta: a organização mantém total detenção física e lógica do servidor.",
            "Incorreta: não houve exposição dos dados a usuários não autorizados.",
            "Correta: quando a informação está disponível e íntegra na origem, mas em formato ininterpretável ou inútil na prática, compromete-se a Utilidade."
        ]
    },
    // 6 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "Na gestão de ativos de informação segundo a ISO/IEC 27002, qual é a distinção exata entre a finalidade da 'Classificação da Informação' e a da 'Designação (Rotulagem)'?",
        options: [
            "A Classificação estrutura a informação conforme sua sensibilidade e criticidade; a Designação aplica a marcação física ou eletrônica para permitir seu reconhecimento.",
            "A Classificação é executada tecnicamente pelo Custodiante de TI; a Designação é aprovada estrategicamente pelo Proprietário do Ativo.",
            "A Classificação aplica-se exclusivamente a bancos de dados digitais; a Designação aplica-se exclusivamente a documentos impressos em papel.",
            "A Classificação define o tempo de retenção legal para descarte; a Designação criptografa automaticamente o conteúdo do arquivo."
        ],
        answer: 0,
        explanations: [
            "Correta: classificar categoriza o ativo pelo grau de sensibilidade; designar (rotular) materializa visualmente ou por metadados essa categoria.",
            "Incorreta: quem define a classificação é o Proprietário do Ativo, nunca o Custodiante.",
            "Incorreta: ambas as etapas aplicam-se tanto a meios físicos quanto digitais.",
            "Incorreta: rotular um arquivo não criptografa seu conteúdo automaticamente."
        ]
    },
    // 7 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM1",
        q: "O Diretor Jurídico classificou os autos de uma fusão empresarial como 'Altamente Confidencial'. Concluída a operação e divulgado o fato relevante à bolsa de valores, o documento precisa ser reclassificado como 'Público'. Quem possui autoridade formal para autorizar essa alteração?",
        options: [
            "O Administrador de Sistemas (Custodiante) responsável pelo servidor de arquivos.",
            "O Auditor Líder responsável pela certificação ISO/IEC 27001 da organização.",
            "O Diretor Jurídico na qualidade de Proprietário do Ativo (Asset Owner).",
            "O Analista de Políticas (Information Security Policy Officer) do SGSI."
        ],
        answer: 2,
        explanations: [
            "Incorreta: o Custodiante apenas implementa tecnicamente a mudança determinada pelo Proprietário.",
            "Incorreta: auditores verificam conformidade e não têm autoridade executiva sobre ativos.",
            "Correta: somente o Proprietário do Ativo detém autoridade para definir, revisar ou rebaixar o nível de classificação da informação sob sua responsabilidade.",
            "Incorreta: o Policy Officer mantém o texto das políticas corporativas, não gerenciando ativos individuais de negócio."
        ]
    },
    // 8 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Na estrutura de governança da segurança da informação, quatro papéis interagem com as diretrizes corporativas. Assinale a alternativa que relaciona corretamente o papel à sua responsabilidade exata segundo a literatura da EXIN:",
        options: [
            "A Gestão Geral converte os objetivos de negócio em objetivos de segurança, enquanto o CISO executa os backups diários.",
            "O CISO converte a estratégia de negócios em estratégia de segurança, enquanto o ISO desenvolve e aplica a política no nível da sua unidade de negócios.",
            "O Information Security Policy Officer aprova o orçamento global do SGSI, enquanto o LISO emite a certificação ISO/IEC 27001 das filiais.",
            "O LISO define a estratégia global da matriz, enquanto o Custodiante determina o valor comercial e a classificação dos ativos."
        ],
        answer: 1,
        explanations: [
            "Incorreta: quem converte a estratégia de negócio em estratégia de segurança é o CISO, e backups cabem ao Custodiante.",
            "Correta: o CISO atua na tradução estratégica corporativa global, e o ISO desdobra e supervisiona a política dentro da unidade de negócios específica.",
            "Incorreta: o Policy Officer apenas redige/mantém o documento da política, e o LISO cuida da adesão às leis locais e segurança física da filial.",
            "Incorreta: a estratégia global vem da matriz (Gestão Geral/CISO) e a classificação cabe ao Proprietário do Ativo."
        ]
    },
    // 9 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Ao analisar a documentação de um SGSI, um auditor lê dois documentos: o Documento X declara o direcionamento e o apoio da alta administração para a segurança da informação; o Documento Y concretiza esse direcionamento detalhando os controles selecionados, prazos, orçamentos e responsáveis. Os Documentos X e Y são, respectivamente:",
        options: [
            "Plano de Segurança da Informação e Política de Segurança da Informação.",
            "Declaração de Aplicabilidade (SoA) e Código de Conduta.",
            "Política de Segurança da Informação e Plano de Segurança da Informação.",
            "Diretriz de Segurança (Guideline) e Procedimento Operacional Padrão."
        ],
        answer: 2,
        explanations: [
            "Incorreta: a ordem está invertida; quem dá orientação geral é a Política e quem concretiza em detalhes é o Plano.",
            "Incorreta: a SoA lista a aplicabilidade do Anexo A e o Código de Conduta rege o comportamento dos colaboradores.",
            "Correta: a Política fornece orientação e suporte da direção; o Plano concretiza a política com o detalhamento tático/operacional.",
            "Incorreta: Diretrizes são apenas recomendações opcionais e Procedimentos são passos operacionais de tarefas."
        ]
    },
    // 10 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Na hierarquia normativa interna, qual é a diferença fundamental entre um 'Procedimento Operacional' e uma 'Diretriz de Segurança' (Guideline)?",
        options: [
            "O Procedimento Operacional descreve passos obrigatórios para executar uma atividade; a Diretriz tem caráter orientativo e recomendatório, sem obrigatoriedade estrita.",
            "A Diretriz é um documento estratégico assinado pelo Presidente; o Procedimento é uma recomendação opcional criada por usuários finais.",
            "O Procedimento aplica-se exclusivamente a fornecedores externos; a Diretriz aplica-se exclusivamente a auditores internos.",
            "A Diretriz possui força de lei governamental; o Procedimento substitui a Política de Segurança da Informação."
        ],
        answer: 0,
        explanations: [
            "Correta: procedimentos são mandatórios e determinam o 'como fazer' passo a passo; diretrizes (guidelines) oferecem aconselhamento e boas práticas flexíveis.",
            "Incorreta: o documento estratégico da alta direção é a Política, e procedimentos são obrigatórios.",
            "Incorreta: ambos são documentos internos voltados às operações da organização.",
            "Incorreta: nenhum documento interno tem força de lei estatal nem substitui a Política de Segurança."
        ]
    },
    // 11 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Sobre o escopo e a finalidade das normas que compõem a família ISO/IEC 27000, assinale a afirmação tecnicamente correta:",
        options: [
            "A ISO/IEC 27001 fornece diretrizes opcionais para implementação de controles, enquanto a ISO/IEC 27002 especifica os requisitos obrigatórios para certificação do SGSI.",
            "A ISO/IEC 27000 estabelece a metodologia de cálculo de riscos, enquanto a ISO/IEC 27005 define exclusivamente o vocabulário e os termos da série.",
            "A ISO/IEC 27001 especifica os requisitos normativos certificáveis do SGSI, enquanto a ISO/IEC 27002 fornece diretrizes e boas práticas para a implementação dos controles.",
            "Tanto a ISO/IEC 27001 quanto a ISO/IEC 27002 são normas de certificação obrigatória impostas por força de lei a todas as empresas europeias."
        ],
        answer: 2,
        explanations: [
            "Incorreta: os papéis da 27001 e da 27002 foram invertidos.",
            "Incorreta: os papéis da 27000 (vocabulário) e da 27005 (gestão de riscos) foram invertidos.",
            "Correta: apenas a 27001 contém requisitos ('deve') auditáveis para certificação do SGSI; a 27002 atua como catálogo de diretrizes para implementar controles.",
            "Incorreta: normas ISO são de adoção voluntária (não são leis) e a 27002 não é certificável."
        ]
    },
    // 12 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma organização em processo de certificação ISO/IEC 27001 deseja excluir determinados itens normativos alegando que não são aplicáveis ao seu modelo de negócios. De acordo com as regras da norma, o que é permitido excluir?",
        options: [
            "Qualquer requisito das cláusulas 4 a 10, desde que autorizado pelo CISO no manual interno.",
            "Apenas os controles do Anexo A, desde que a exclusão seja formalmente justificada na Declaração de Aplicabilidade (SoA).",
            "Apenas a etapa de Auditoria Interna (Cláusula 9.2), caso a empresa já possua auditoria externa contratada.",
            "Nenhum item da norma ou do Anexo A pode ser excluído sob qualquer justificativa."
        ],
        answer: 1,
        explanations: [
            "Incorreta: as cláusulas 4 a 10 são obrigatórias em sua totalidade e não admitem exclusão.",
            "Correta: controles do Anexo A podem ser excluídos se não forem aplicáveis aos riscos ou processos da empresa, mediante justificativa documentada na SoA.",
            "Incorreta: a Auditoria Interna faz parte da Cláusula 9 e é estritamente obrigatória mesmo havendo auditoria externa.",
            "Incorreta: o Anexo A é flexível e permite exclusões justificadas na SoA."
        ]
    },
    // 13 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "No ciclo PDCA aplicado ao Sistema de Gestão de Segurança da Informação (SGSI), em quais fases ocorrem, respectivamente: (1) a elaboração da Declaração de Aplicabilidade; (2) a execução do Plano de Tratamento de Riscos; (3) a Análise Crítica pela Direção; e (4) a implementação de ações corretivas?",
        options: [
            "1: Plan; 2: Plan; 3: Check; 4: Do.",
            "1: Do; 2: Plan; 3: Act; 4: Check.",
            "1: Plan; 2: Do; 3: Check; 4: Act.",
            "1: Check; 2: Do; 3: Plan; 4: Act."
        ],
        answer: 2,
        explanations: [
            "Incorreta: a execução prática do plano de tratamento ocorre na fase Do, e ações corretivas pertencem à fase Act.",
            "Incorreta: a SoA é elaborada no planejamento (Plan), e a Análise Crítica pela Direção pertence à verificação (Check).",
            "Correta: SoA = Plan; Implantar controles/plano de tratamento = Do; Auditoria e Análise Crítica da Direção = Check; Ações corretivas = Act.",
            "Incorreta: a SoA pertence à fase Plan, e não à fase Check."
        ]
    },
    // 14 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Um analista de riscos documentou todas as ameaças que cercam o data center da empresa e mapeou todas as vulnerabilidades existentes nos servidores. Com base apenas nessas duas listas, por que ele ainda NÃO consegue determinar o nível de risco para a organização?",
        options: [
            "Porque o risco só pode ser determinado após a compra e instalação física dos controles preventivos.",
            "Porque ameaças e vulnerabilidades indicam apenas a probabilidade de ocorrência, faltando avaliar as consequências (impacto) do evento para o negócio.",
            "Porque a norma ISO/IEC 27001 exige que a análise seja feita exclusivamente por auditores externos independentes.",
            "Porque vulnerabilidades técnicas não fazem parte do cálculo de risco, devendo ser substituídas pelo custo das licenças de software."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a determinação do risco ocorre antes da escolha e compra dos controles.",
            "Correta: conforme a EXIN, determinar o risco exige conhecer dois fatores: a probabilidade de algo acontecer (ameaça × vulnerabilidade) e as suas consequências (impacto) para a organização.",
            "Incorreta: a avaliação de riscos é conduzida internamente pela própria organização na fase Plan.",
            "Incorreta: vulnerabilidades são essenciais para estimar a probabilidade na equação do risco."
        ]
    },
    // 15 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Considere três situações que ameaçam a sala de servidores: (I) infiltração de água por rompimento de tubulação predial; (II) introdução de malware através de um pen drive conectado por um técnico; (III) falha de refrigeração por acúmulo de poeira nos filtros. Quanto à origem, essas ameaças classificam-se como:",
        options: [
            "I: Não humana; II: Não humana (técnica); III: Humana acidental.",
            "I: Humana acidental; II: Humana intencional; III: Não humana.",
            "I: Não humana; II: Humana; III: Não humana.",
            "I: Vulnerabilidade física; II: Ameaça lógica; III: Dano indireto."
        ],
        answer: 2,
        explanations: [
            "Incorreta: um pen drive nunca se conecta sozinho; por exigir ação de uma pessoa, é sempre uma ameaça humana.",
            "Incorreta: rompimento hidráulico/inundação é classificado como ameaça não humana na literatura da EXIN.",
            "Correta: vazamentos/inundações (I) e poeira ambiental (III) são ameaças não humanas; o uso de pen drive infectado (II) é ameaça humana.",
            "Incorreta: todas as três situações descrevem causas potenciais de incidentes (Ameaças)."
        ]
    },
    // 16 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Um curto-circuito provoca um incêndio na sala de telecomunicações. As chamas destroem dois roteadores e derretem os cabos de fibra óptica. O sistema de combate a incêndio dispara água, que escorre para o andar inferior e queima a central telefônica. Além disso, a empresa perde clientes na semana seguinte pela demora no atendimento. Nesse cenário, são classificados como Danos Indiretos:",
        options: [
            "Os dois roteadores destruídos pelas chamas e os cabos de fibra óptica derretidos pelo calor.",
            "Apenas os cabos derretidos, pois os roteadores e a central telefônica são ativos de hardware.",
            "A queima da central telefônica pela água do combate ao incêndio e a perda subsequente de clientes/reputação.",
            "Apenas a perda de clientes, pois qualquer dano físico a equipamentos dentro do prédio é classificado como dano direto."
        ],
        answer: 2,
        explanations: [
            "Incorreta: equipamentos queimados ou derretidos diretamente pelo fogo/calor são Danos Diretos.",
            "Incorreta: cabos derretidos pelo calor do incêndio também são Danos Diretos.",
            "Correta: tanto os danos colaterais causados pela água usada para apagar o fogo quanto a perda comercial/reputacional secundária são Danos Indiretos.",
            "Incorreta: na prova da EXIN, os danos causados pela água dos bombeiros/extintores são o exemplo clássico de Dano Indireto físico."
        ]
    },
    // 17 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Durante a etapa de Análise de Riscos, a equipe de segurança realiza diversas atividades diagnósticas. Assinale a alternativa que apresenta uma atividade que NÃO pertence aos objetivos da Análise de Riscos, mas sim a uma etapa posterior:",
        options: [
            "Identificar os ativos de informação da empresa e determinar o seu valor para os processos de negócio.",
            "Mapear as principais ameaças e vulnerabilidades que afetam o escopo definido.",
            "Balancear os custos estimados de um possível incidente contra os custos de aquisição de um controle.",
            "Implementar as medidas de proteção e os controles técnicos selecionados na infraestrutura."
        ],
        answer: 3,
        explanations: [
            "Incorreta: identificar e valorar ativos é o primeiro objetivo da análise de riscos.",
            "Incorreta: determinar ameaças e vulnerabilidades faz parte do núcleo da análise de riscos.",
            "Incorreta: avaliar o equilíbrio custo-benefício entre o dano potencial e o custo do controle faz parte da análise de riscos.",
            "Correta: a implementação prática de medidas e controles não faz parte da Análise de Riscos; ocorre posteriormente na execução do Tratamento de Riscos."
        ]
    },
    // 18 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Na comparação entre os métodos de avaliação de riscos, qual característica distingue corretamente a 'Análise Quantitativa' da 'Análise Qualitativa'?",
        options: [
            "A análise quantitativa calcula métricas monetárias objetivas (como SLE e ALE a partir do valor do ativo e frequência anual), enquanto a qualitativa utiliza escalas descritivas baseadas em cenários.",
            "A análise qualitativa exige dados históricos estatísticos de pelo menos dez anos, enquanto a quantitativa baseia-se apenas na intuição dos gestores.",
            "A análise quantitativa elimina a existência de risco residual, enquanto a análise qualitativa transfere o risco automaticamente.",
            "A análise qualitativa aplica-se exclusivamente a controles físicos, enquanto a análise quantitativa aplica-se apenas a controles criptográficos."
        ],
        answer: 0,
        explanations: [
            "Correta: a abordagem quantitativa expressa o risco financeiramente (AV, EF, SLE, ARO, ALE); a qualitativa usa categorias subjetivas/descritivas (Alto, Médio, Baixo).",
            "Incorreta: quem depende de séries históricas e estatísticas precisas (ARO) é a análise quantitativa.",
            "Incorreta: nenhum método de análise elimina riscos sozinho; ambos apenas medem o risco.",
            "Incorreta: ambos os métodos podem avaliar qualquer domínio de risco."
        ]
    },
    // 19 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Após concluir a avaliação de riscos, uma organização decide: (1) cancelar definitivamente um serviço online vulnerável que não trazia retorno; (2) instalar autenticação multifator no portal corporativo; (3) contratar uma apólice de seguro cibernético; e (4) documentar que não aplicará controles extras para pequenas oscilações na rede de visitantes. As estratégias (1), (2), (3) e (4) são, respectivamente:",
        options: [
            "Reduzir, Evitar, Aceitar e Transferir.",
            "Evitar, Reduzir (Mitigar), Transferir (Compartilhar) e Aceitar (Suportar).",
            "Transferir, Reduzir, Evitar e Suportar.",
            "Evitar, Transferir, Reduzir e Ignorar."
        ],
        answer: 1,
        explanations: [
            "Incorreta: encerrar a atividade é Evitar, e contratar seguro é Transferir.",
            "Correta: encerrar a atividade = Evitar (1); aplicar controle MFA = Reduzir (2); contratar seguro = Transferir (3); assumir formalmente sem novo controle = Aceitar/Suportar (4).",
            "Incorreta: cancelar o serviço não é transferir, mas sim evitar.",
            "Incorreta: instalar MFA reduz o risco, não o transfere; além disso, 'ignorar' não é uma estratégia válida na norma."
        ]
    },
    // 20 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "No ciclo de vida de um incidente (Ameaça ➔ Incidente ➔ Dano ➔ Recuperação), uma empresa analisa quatro medidas: (I) instalar portas blindadas no data center; (II) usar sensores infravermelhos (PIR) de presença; (III) ativar um acordo de contingência (stand-by arrangement) transferindo a equipe para outra filial logo após um sinistro; e (IV) consertar os servidores danificados. Como essas medidas são classificadas?",
        options: [
            "I: Preventiva; II: Repressiva; III: Corretiva; IV: Detectiva.",
            "I: Preventiva; II: Detectiva; III: Corretiva; IV: Repressiva.",
            "I: Preventiva; II: Detectiva; III: Repressiva; IV: Corretiva.",
            "I: Detectiva; II: Preventiva; III: Repressiva; IV: Transferência."
        ],
        answer: 2,
        explanations: [
            "Incorreta: sensores PIR apenas detectam (Detectiva) e o stand-by arrangement limita o dano durante a crise (Repressiva).",
            "Incorreta: na literatura oficial da EXIN, mudar para um stand-by arrangement (III) fica entre o Incidente e o Dano, sendo Repressiva; consertar danos (IV) é Corretiva.",
            "Correta: portas blindadas evitam a entrada (Preventiva); sensor PIR alerta (Detectiva); stand-by arrangement contém o impacto entre incidente e dano (Repressiva); reparo pós-dano restaura (Corretiva).",
            "Incorreta: portas blindadas são preventivas e consertar servidores é medida corretiva."
        ]
    },
    // 21 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Quatro organizações implementaram modelos distintos de controle de acesso lógico: na Empresa A, o criador de cada pasta decide livremente quem pode acessá-la; na Empresa B, o sistema bloqueia qualquer compartilhamento que viole os rótulos hierárquicos de sigilo atribuídos pelo administrador central; na Empresa C, os acessos são herdados automaticamente conforme o cargo ocupado no organograma; na Empresa D, o acesso é liberado dinamicamente avaliando declarações verificadas do solicitante. Os modelos A, B, C e D são:",
        options: [
            "A: MAC; B: DAC; C: RBAC; D: CBAC.",
            "A: DAC; B: MAC; C: RBAC; D: CBAC.",
            "A: RBAC; B: MAC; C: DAC; D: SoD.",
            "A: DAC; B: CBAC; C: MAC; D: RBAC."
        ],
        answer: 1,
        explanations: [
            "Incorreta: DAC e MAC foram invertidos nas empresas A e B.",
            "Correta: dono decide = Discricionário (DAC); sistema impõe por rótulos = Mandatório (MAC); baseado em cargo/função = RBAC; baseado em reivindicações/declarações = CBAC.",
            "Incorreta: RBAC baseia-se em papéis/cargos e SoD é segregação de funções.",
            "Incorreta: MAC e CBAC foram invertidos."
        ]
    },
    // 22 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Qual é a justificativa técnica primária definida pela literatura da EXIN para a implementação da 'Segregação de Funções' (Segregation of Duties) em processos críticos?",
        options: [
            "Distribuir a carga de trabalho igualmente para evitar gargalos de disponibilidade no atendimento.",
            "Responsabilizar solidariamente todos os membros do departamento caso ocorra uma auditoria interna.",
            "Minimizar a possibilidade de alterações não autorizadas ou não intencionais e o uso indevido dos ativos.",
            "Substituir a necessidade de monitorar trilhas de auditoria (logs) nas operações financeiras."
        ],
        answer: 2,
        explanations: [
            "Incorreta: distribuir carga para performance é gerenciamento de capacidade/escalabilidade, não segregação de funções.",
            "Incorreta: a responsabilização na ISO 27001 é individualizada (Accountability), e não solidária/coletiva.",
            "Correta: ao exigir que etapas críticas sejam divididas entre pessoas diferentes, reduz-se drasticamente o risco de fraude unilateral ou erro não detectado.",
            "Incorreta: a segregação de funções complementa, mas nunca substitui o registro e monitoramento de logs."
        ]
    },
    // 23 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "No fluxo técnico de controle de acesso lógico, um usuário digita sua matrícula funcional, apresenta seu token criptográfico dinâmico, recebe permissão de leitura apenas na pasta do seu projeto e tem a abertura do arquivo gravada em log. Se esse usuário for promovido a gerente de outro setor e receber o novo perfil sem que o administrador remova seu vínculo com o projeto antigo, ocorrerá:",
        options: [
            "Uma falha na etapa de Autenticação conhecida como Falsa Aceitação (FAR).",
            "Uma falha na etapa de Autorização conhecida como Acúmulo de Privilégios (Privilege Creep).",
            "Um ataque de Engenharia Social na etapa de Identificação.",
            "Uma violação do protocolo NTP na etapa de Auditoria (Accounting)."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a identidade do usuário é legítima (a autenticação funcionou); o problema está nas permissões excessivas.",
            "Correta: manter permissões antigas desnecessárias após mudança de cargo viola o Menor Privilégio na camada de Autorização, gerando o Privilege Creep.",
            "Incorreta: não houve manipulação psicológica nem falsidade na matrícula.",
            "Incorreta: o registro em log e o relógio do servidor funcionaram normalmente."
        ]
    },
    // 24 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Para fortalecer o login remoto, a equipe de TI avalia quatro propostas de combinação de credenciais: (I) senha alfanumérica + código PIN de 6 dígitos memorizado; (II) senha alfanumérica + resposta à pergunta 'cidade onde nasceu'; (III) cartão inteligente físico (Smartcard) + impressão digital; (IV) certificado digital instalado no token USB + código gerado por aplicativo autenticador no mesmo celular. Qual proposta implementa autenticamente a Autenticação Multifator (MFA) clássica?",
        options: [
            "Apenas a proposta I, pois utiliza caracteres alfabéticos combinados com dígitos numéricos.",
            "Apenas a proposta II, pois exige duas etapas sequenciais de validação no teclado.",
            "Apenas a proposta III, pois combina categorias de natureza distinta ('algo que você tem' e 'algo que você é').",
            "Apenas a proposta IV, pois utiliza dois dispositivos eletrônicos portáteis simultaneamente."
        ],
        answer: 2,
        explanations: [
            "Incorreta: senha e PIN memorizado pertencem ambos à mesma categoria ('algo que você sabe').",
            "Incorreta: senha e pergunta secreta também pertencem à mesma categoria ('algo que você sabe').",
            "Correta: a MFA exige combinar pelo menos duas categorias diferentes entre Conhecimento (sabe), Posse (tem - Smartcard) e Biometria (é - impressão digital).",
            "Incorreta: token USB e celular pertencem ambos à categoria de posse ('algo que você tem')."
        ]
    },
    // 25 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Na proteção física em profundidade de uma instalação corporativa, um auditor inspeciona as medidas do exterior para o interior: cercas e sensores no perímetro do terreno; portas blindadas e vidro inquebrável na fachada; controle de crachás nas salas administrativas; e eclusa (Mantrap) na entrada do data center. Esses quatro níveis correspondem exatamente aos anéis:",
        options: [
            "Anel externo, Área intermediária, Espaço de trabalho e Sala cofre.",
            "Perímetro público, Zona desmilitarizada (DMZ), Rede interna e Área segura.",
            "Anel externo, Prédio, Espaço de trabalho e Área segura.",
            "Anel perimetral, Fachada predial, Área intermediária e Área restrita."
        ],
        answer: 2,
        explanations: [
            "Incorreta: 'Área intermediária' não existe na classificação oficial dos 4 anéis da EXIN.",
            "Incorreta: DMZ e Rede interna são conceitos lógicos de topologia de rede.",
            "Correta: os quatro anéis físicos oficiais da literatura EXIN são: Anel externo, Prédio, Espaço de trabalho e Área segura.",
            "Incorreta: 'Área intermediária' é o distrator clássico cobrado pela EXIN para testar o conhecimento dos 4 anéis."
        ]
    },
    // 26 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Sobre os controles físicos e ambientais aplicados especificamente à Área Segura (sala de servidores / data center), assinale a alternativa que está integralmente alinhada à literatura oficial da EXIN:",
        options: [
            "O sistema de ar-condicionado tem como função principal refrigerar a sala para impedir que as fitas magnéticas de backup guardadas nos armários locais derretam.",
            "A supressão automática de incêndio deve utilizar gás inerte (como Argônio ou Inergen) com alarme prévio de evacuação humana, evitando-se o pó químico por ser corrosivo aos circuitos.",
            "Os bancos de baterias (UPS) substituem a necessidade de geradores a combustível, pois mantêm o data center operando por vários dias durante apagões regionais.",
            "Os crachás de acesso físico entregues aos administradores devem exibir em destaque o nome e o endereço completo da empresa para facilitar a devolução em caso de extravio."
        ],
        answer: 1,
        explanations: [
            "Incorreta: fitas de backup jamais devem ser armazenadas dentro da mesma sala dos servidores.",
            "Correta: gases inertes apagam o fogo sem danificar eletrônicos (diferente do pó químico que corrói placas), mas exigem aviso prévio de evacuação devido à redução de oxigênio.",
            "Incorreta: baterias (UPS) duram apenas minutos ou poucas horas; cortes longos exigem gerador.",
            "Incorreta: crachás não devem conter o logotipo ou endereço da empresa para não revelar qual instalação abrem caso sejam perdidos na rua."
        ]
    },
    // 27 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Durante uma análise forense, quatro artefatos maliciosos foram identificados em incidentes distintos: (1) um utilitário de compressão de arquivos que funcionava normalmente, mas abria silenciosamente uma conexão reversa; (2) uma rotina no código do ERP programada para corromper tabelas caso uma data específica fosse atingida; (3) um código que explorou uma falha SMB e copiou a si mesmo automaticamente para 200 máquinas da sub-rede sem intervenção humana; (4) um módulo que alterou chamadas do kernel do sistema operacional para esconder processos ativos. Esses artefatos são:",
        options: [
            "1: Vírus de macro; 2: Backdoor; 3: Trojan; 4: Spyware.",
            "1: Trojan; 2: Bomba lógica; 3: Worm; 4: Rootkit.",
            "1: Spyware; 2: Ransomware; 3: Vírus; 4: Bomba lógica.",
            "1: Trojan; 2: Backdoor; 3: Vírus; 4: Keylogger."
        ],
        answer: 1,
        explanations: [
            "Incorreta: autorreplicação autônoma em rede sem hospedeiro é Worm (3), e ocultação no kernel é Rootkit (4).",
            "Correta: função aparente útil + ação oculta = Trojan (1); disparo por condição/data = Bomba lógica (2); replicação autônoma em rede = Worm (3); ocultação profunda no kernel = Rootkit (4).",
            "Incorreta: nenhum dos itens descreve sequestro com pedido de resgate (Ransomware) ou necessidade de hospedeiro (Vírus).",
            "Incorreta: o item 2 é ativado por condição lógica (Bomba lógica) e o item 3 propaga-se sem arquivo hospedeiro (Worm)."
        ]
    },
    // 28 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Uma empresa já possui sua rede local protegida por firewalls de borda, segmentação em VLANs e servidores públicos isolados em uma DMZ. Ao alterar sua política de recursos humanos para permitir que os colaboradores trabalhem remotamente a partir de suas residências, qual controle técnico passa a ser especificamente exigido para proteger essa nova modalidade?",
        options: [
            "Implementação de uma Rede Privada Virtual (VPN) para cifrar o tráfego em trânsito entre o dispositivo remoto e a rede corporativa.",
            "Substituição do modelo de controle de acesso RBAC pelo modelo Discricionário (DAC) nas pastas compartilhadas.",
            "Transferência dos bancos de dados internos da LAN para dentro da Zona Desmilitarizada (DMZ).",
            "Desativação do bloqueio padrão (Default Deny) no firewall externo para permitir conexões dinâmicas domésticas."
        ],
        answer: 0,
        explanations: [
            "Correta: firewalls, VLANs e DMZ já protegiam a sede; a novidade do trabalho remoto exige proteger o canal através da internet pública por meio de túnel VPN.",
            "Incorreta: mudar para DAC enfraqueceria o controle de permissões interno.",
            "Incorreta: bancos de dados críticos nunca devem ser colocados na DMZ exposta.",
            "Incorreta: desativar o Default Deny abriria a rede para ataques externos."
        ]
    },
    // 29 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Na avaliação da eficácia de Sistemas de Detecção e Prevenção de Intrusão (IDS/IPS), qual afirmação descreve corretamente o comportamento arquitetônico e os erros de detecção dessas ferramentas?",
        options: [
            "O IDS opera em linha (in-line) descartando pacotes automaticamente, enquanto um Falso Positivo ocorre quando um ataque real passa sem gerar alerta.",
            "O IPS opera de forma passiva analisando apenas cópias de tráfego espelhado, enquanto a detecção por assinatura identifica ataques Dia-Zero (Zero-Day) inéditos.",
            "O IDS atua como controle detectivo gerando alertas e o IPS atua em linha bloqueando pacotes; já o Falso Negativo é o erro mais perigoso, pois um ataque real ocorre sem ser detectado.",
            "O Falso Negativo ocorre quando o IPS bloqueia o tráfego legítimo de um funcionário, comprometendo a confidencialidade da rede."
        ],
        answer: 2,
        explanations: [
            "Incorreta: quem opera em linha bloqueando pacotes é o IPS, e ataque real não detectado chama-se Falso Negativo.",
            "Incorreta: quem opera passivamente é o IDS, e ataques inéditos exigem detecção por anomalia (comportamental), pois ainda não possuem assinatura.",
            "Correta: o IDS detecta e alerta; o IPS previne bloqueando em linha; e no Falso Negativo o sensor falha em perceber uma intrusão real.",
            "Incorreta: bloquear tráfego legítimo por engano é um Falso Positivo (que afeta a disponibilidade)."
        ]
    },
    // 30 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Em uma comunicação protegida por criptografia assimétrica dentro de uma Infraestrutura de Chave Pública (ICP / PKI), a diretora Ana precisa enviar um arquivo confidencial para o gerente Bruno, garantindo simultaneamente o sigilo do conteúdo (Confidencialidade) e a prova irrefutável de que o arquivo partiu dela (Autenticidade e Não-repúdio). Quais chaves Ana deve utilizar?",
        options: [
            "Cifrar o arquivo com a chave privada de Ana e assinar digitalmente com a chave pública de Bruno.",
            "Assinar digitalmente o hash do arquivo com a chave privada de Ana e cifrar o conteúdo com a chave pública de Bruno.",
            "Assinar digitalmente com a chave pública de Ana e cifrar o conteúdo com a chave privada de Bruno.",
            "Cifrar e assinar o arquivo utilizando exclusivamente a chave pública emitida pela Autoridade de Registro (RA)."
        ],
        answer: 1,
        explanations: [
            "Incorreta: qualquer pessoa com a chave pública de Ana abriria o arquivo cifrado com a privada dela, perdendo-se a confidencialidade.",
            "Correta: a assinatura digital usa a Chave Privada do remetente (Ana) para garantir autenticidade/não-repúdio; a cifragem de sigilo usa a Chave Pública do destinatário (Bruno).",
            "Incorreta: Ana não possui nem deve ter acesso à chave privada de Bruno.",
            "Incorreta: a Autoridade de Registro apenas valida identidades, e usar apenas chave pública não gera assinatura do remetente."
        ]
    },
    // 31 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Considere três incidentes envolvendo criptografia corporativa: (I) o código-fonte do algoritmo matemático AES usado pela empresa foi publicado em um artigo acadêmico; (II) a chave pública dos consultores externos foi divulgada no site da empresa; (III) a chave privada de um servidor web vazou após uma falha. Segundo o Princípio de Kerckhoffs e as regras de ICP, em qual(is) caso(s) é obrigatório revogar e emitir novas chaves?",
        options: [
            "Nos casos I, II e III, pois qualquer exposição do algoritmo ou das chaves invalida a segurança.",
            "Apenas nos casos I e III, pois o algoritmo matemático e a chave privada devem ser mantidos em segredo.",
            "Apenas nos casos II e III, pois tanto a chave pública quanto a privada são restritas ao servidor interno.",
            "Apenas no caso III, pois o algoritmo pode ser público (Kerckhoffs) e a chave pública é aberta por definição, exigindo troca apenas quando a chave privada se torna conhecida."
        ],
        answer: 3,
        explanations: [
            "Incorreta: nem o algoritmo público nem a divulgação da chave pública comprometem o sistema.",
            "Incorreta: pelo Princípio de Kerckhoffs, o algoritmo deve ser público e conhecido; apenas a chave guarda o segredo.",
            "Incorreta: a chave pública é projetada exatamente para ser conhecida por todos.",
            "Correta: novas chaves assimétricas só precisam ser fornecidas quando a chave privada é comprometida (e publicada na CRL pela Autoridade Certificadora)."
        ]
    },
    // 32 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Analise as três ocorrências a seguir: (1) um colaborador nota que a política de senhas no servidor está com permissão de edição aberta a qualquer usuário, embora ninguém a tenha alterado; (2) o firewall registra e bloqueia uma varredura de portas vinda da internet sem afetar os serviços; (3) um servidor de banco de dados fica inacessível após a exploração bem-sucedida de uma falha. Segundo a ISO/IEC 27001, (1), (2) e (3) são, respectivamente:",
        options: [
            "1: Evento de segurança; 2: Incidente de segurança; 3: Desastre natural.",
            "1: Fraqueza de segurança (Weakness); 2: Evento de segurança; 3: Incidente de segurança.",
            "1: Incidente de segurança; 2: Falso positivo; 3: Fraqueza de segurança.",
            "1: Risco residual; 2: Fraqueza de segurança; 3: Evento de segurança."
        ],
        answer: 1,
        explanations: [
            "Incorreta: permissão mal configurada ainda não explorada é Fraqueza, e bloqueio normal de firewall sem dano é Evento.",
            "Correta: falha em controle não explorada = Fraqueza (1); ocorrência observável controlada = Evento (2); evento que compromete ou ameaça severamente a operação = Incidente (3).",
            "Incorreta: na ocorrência 1 ainda não houve exploração para configurar incidente.",
            "Incorreta: a queda real do servidor por ataque (3) já ultrapassou a condição de simples evento, configurando um Incidente."
        ]
    },
    // 33 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "No processo formal de Gerenciamento de Incidentes, um analista do Help Desk recebe a notificação de um usuário sobre alterações não autorizadas em planilhas contábeis. Após registrar o nome do notificante, data/hora, descrição e consequências, o analista percebe que a falha envolve comandos avançados de banco de dados que ele desconhece e transfere o chamado para a equipe de Administração de Segurança (Nível 2). Esse fluxo respeitou:",
        options: [
            "A notificação inicial ao ponto único de contato (Help Desk) seguida de um Escalonamento Funcional (Horizontal).",
            "O acionamento direto da Alta Direção seguido de um Escalonamento Hierárquico (Vertical).",
            "A transferência contratual do risco seguida da emissão da Declaração de Aplicabilidade.",
            "A etapa de Lições Aprendidas seguida da desativação preventiva do controle de acesso."
        ],
        answer: 0,
        explanations: [
            "Correta: o usuário acionou corretamente o Help Desk primeiro (com registro completo, incluindo o nome do notificante), e o analista realizou o escalonamento técnico/funcional (horizontal) para especialistas.",
            "Incorreta: o escalonamento foi por competência técnica (funcional/horizontal), e não por falta de autoridade executiva (hierárquico/vertical).",
            "Incorreta: atendimento de chamado não é transferência de risco nem SoA.",
            "Incorreta: Lições Aprendidas ocorre apenas no encerramento pós-recuperação do incidente."
        ]
    },
    // 34 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Uma instituição financeira definiu na sua Análise de Impacto no Negócio (BIA) que o módulo de compensação bancária possui RTO de 2 horas e RPO de 15 minutos. Durante a madrugada, ocorre uma falha severa às 04h00. O último backup havia sido concluído às 03h00, e a equipe técnica conseguiu restaurar e religar o sistema às 05h30. Avaliando as metas da BIA, conclui-se que:",
        options: [
            "Tanto o RTO quanto o RPO foram cumpridos com sucesso pela equipe técnica.",
            "O RTO foi violado (levou 1h30), mas o RPO de 15 minutos foi cumprido.",
            "O RTO de 2 horas foi cumprido (recuperou em 1h30), mas o RPO de 15 minutos foi violado (houve perda de 1 hora de dados entre 03h00 e 04h00).",
            "Tanto o RTO quanto o RPO foram violados, pois o sistema não utilizava um Cold Site."
        ],
        answer: 2,
        explanations: [
            "Incorreta: houve perda de 60 minutos de transações, o que estoura o limite máximo do RPO (15 minutos).",
            "Incorreta: 1h30 de parada é menor que o limite máximo do RTO (2h), portanto o RTO foi atendido.",
            "Correta: o sistema voltou em 1h30 (dentro do RTO de 2h), mas como o último backup era das 03h00 e a pane ocorreu às 04h00, perderam-se 60 minutos de dados, violando o RPO de 15 minutos.",
            "Incorreta: o RTO foi cumprido, e um Cold Site aumentaria o tempo de parada para semanas."
        ]
    },
    // 35 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Compare a mecânica de execução e restauração dos três métodos de backup (Completo/Full, Incremental e Diferencial) em uma rotina onde o Full roda no domingo à noite e os demais rodam de segunda a sexta-feira à noite:",
        options: [
            "O Incremental não limpa o atributo de arquivamento (archive bit), exigindo apenas duas mídias (Full + último Incremental) para restaurar na quinta-feira.",
            "O Diferencial limpa o archive bit diariamente, tornando o backup de sexta-feira o mais rápido de gravar, mas exigindo todas as mídias da semana para restaurar.",
            "O Incremental limpa o archive bit (exigindo o Full + todos os incrementais em sequência para restaurar), enquanto o Diferencial não limpa o archive bit (exigindo apenas o último Full + o último Diferencial para restaurar).",
            "O Backup Completo (Full) copia apenas os arquivos criados no próprio domingo, sem alterar o archive bit do sistema de arquivos."
        ],
        answer: 2,
        explanations: [
            "Incorreta: quem não limpa o archive bit e restaura com apenas duas mídias é o Diferencial.",
            "Incorreta: as características do Diferencial e do Incremental foram invertidas.",
            "Correta: Full e Incremental desmarcam o archive bit (por isso o Incremental exige toda a cadeia na restauração); o Diferencial mantém o bit marcado desde o último Full (restaurando com apenas 2 mídias).",
            "Incorreta: o Full copia todos os dados selecionados e limpa o archive bit."
        ]
    },
    // 36 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "No âmbito da segurança de recursos humanos e conformidade organizacional (ISO/IEC 27002), quatro instrumentos cumprem funções distintas: (I) atestar a ausência de antecedentes criminais na pré-contratação; (II) obrigar juridicamente a manutenção de segredo sobre informações estratégicas mesmo após a demissão; (III) estabelecer regras de comportamento diário, como a proibição do uso de e-mail corporativo para fins pessoais; (IV) conscientizar os colaboradores de forma eficaz sobre os riscos da empresa. Esses quatro instrumentos são:",
        options: [
            "I: NDA; II: Código de Conduta; III: GDPR; IV: Curso genérico online.",
            "I: Certificado de boa índole; II: Acordo de não divulgação (NDA); III: Código de conduta; IV: Programa de conscientização específico para a organização.",
            "I: Declaração de Aplicabilidade; II: SLA; III: Política de Privacidade; IV: Treinamento exclusivo para a diretoria.",
            "I: Certificado de boa índole; II: Código de conduta; III: Acordo de não divulgação (NDA); IV: Curso externo padronizado."
        ],
        answer: 1,
        explanations: [
            "Incorreta: NDA é termo de sigilo, e o GDPR não regula o uso pessoal de e-mail corporativo.",
            "Correta: antecedentes = Certificado de boa índole; sigilo contratual = NDA; regras de uso de e-mail = Código de conduta; conscientização eficaz = Programa específico para a organização.",
            "Incorreta: SoA e SLA não são instrumentos de RH, e treinar apenas a diretoria é ineficaz.",
            "Incorreta: NDA e Código de Conduta foram invertidos nos itens II e III, e cursos externos genéricos não são a forma mais eficaz."
        ]
    },
    // 37 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma organização decide terceirizar a administração de seus servidores críticos para um provedor de TI externo, o qual, meses depois, subcontrata o serviço de armazenamento em nuvem de uma terceira empresa. Sob a ótica da ISO/IEC 27002 e das leis de proteção de dados (GDPR/LGPD), qual afirmação é verdadeira?",
        options: [
            "Ao assinar o contrato de terceirização, a organização cliente transfere integralmente a responsabilização legal (Accountability) perante os titulares de dados para o fornecedor.",
            "A organização cliente deve nomear um novo CISO dentro da estrutura societária do fornecedor e obrigá-lo a copiar seus procedimentos internos de trabalho.",
            "A organização cliente mantém a responsabilidade final pelos dados, devendo formalizar os requisitos de segurança em um acordo (SLA) e exigir que o fornecedor principal garanta a conformidade de seus subcontratados.",
            "O Regulamento Geral sobre a Proteção de Dados (GDPR) aplica-se apenas à empresa contratante, sendo um padrão voluntário para empresas subcontratadas de tecnologia."
        ],
        answer: 2,
        explanations: [
            "Incorreta: transfere-se a execução operacional, mas a responsabilização legal final perante clientes e autoridades jamais pode ser transferida.",
            "Incorreta: conforme o gabarito oficial da EXIN, não cabe ao cliente nomear cargos no fornecedor nem impor seus manuais internos; formalizam-se os requisitos em um acordo.",
            "Correta: a contratante permanece responsável final, governa a relação via acordo formal/SLA e exige gestão de riscos sobre a cadeia de subcontratados.",
            "Incorreta: o GDPR/LGPD é um ato legislativo obrigatório imposto a todas as organizações (controladores e operadores/subcontratados)."
        ]
    },
    // 38 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Um Gerente de Sistemas e um Information Security Officer (ISO) discutem a aplicação imediata de um patch de segurança crítico recém-lançado pelo fabricante para corrigir uma vulnerabilidade ativa no servidor de produção. Por que o processo de Gerenciamento de Mudanças é essencial para resolver o dilema entre esses dois profissionais?",
        options: [
            "Porque o ISO prioriza manter o servidor desatualizado para economizar licenças, enquanto o Gerente de Sistemas exige formatar o servidor diariamente.",
            "Porque aplicar o patch sem testes prévios pode causar incompatibilidade e derrubar a disponibilidade do sistema (preocupação do Gerente), enquanto demorar a aplicar mantém a vulnerabilidade exposta (preocupação do ISO).",
            "Porque a norma ISO/IEC 27002 proíbe a aplicação de atualizações de segurança em servidores que estejam listados na Declaração de Aplicabilidade.",
            "Porque o Gerenciamento de Mudanças permite que os programadores publiquem o patch diretamente do ambiente de Desenvolvimento para o de Produção sem plano de Rollback."
        ],
        answer: 1,
        explanations: [
            "Incorreta: o interesse do ISO é justamente corrigir a vulnerabilidade o quanto antes.",
            "Correta: na literatura da EXIN, esse é o dilema clássico: segurança quer fechar a brecha rápido, operações teme que o patch trave a produção; o Gerenciamento de Mudanças concilia ambos com testes em homologação e plano de Rollback.",
            "Incorreta: a gestão de vulnerabilidades técnicas exige a aplicação controlada de patches.",
            "Incorreta: deve haver separação estrita entre desenvolvimento, teste e produção, além de plano de Rollback obrigatório."
        ]
    },
    // 39 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Para proteger contra a perda de registros de auditoria caso um invasor obtenha privilégios de administrador local em um servidor de aplicação, quais dois controles técnicos da ISO/IEC 27002 devem atuar em conjunto?",
        options: [
            "Armazenar os logs exclusivamente na partição local do servidor invadido e permitir que os administradores editem entradas incorretas.",
            "Sincronizar os relógios de todos os equipamentos via protocolo único (NTP) e transmitir os logs em tempo real para um servidor central isolado onde o administrador do servidor de origem não tenha permissão de exclusão.",
            "Aplicar Preenchimento de Tráfego (Traffic Padding) nos arquivos de log locais e desmagnetizar o disco rígido semanalmente.",
            "Configurar o sistema em espelhamento RAID 1 local e desativar o registro do nome de usuário nos eventos para preservar o anonimato."
        ],
        answer: 1,
        explanations: [
            "Incorreta: logs mantidos apenas localmente com permissão de edição serão apagados pelo invasor que ganhar acesso administrativo.",
            "Correta: a sincronização de relógios garante a linha cronológica forense entre sistemas, e o envio para repositório segregado/protegido impede a adulteração dos rastros.",
            "Incorreta: desmagnetizar o disco destruiria o servidor e todos os dados.",
            "Incorreta: RAID 1 replica exclusões maliciosas instantaneamente nos dois discos, e omitir o usuário destrói a responsabilização (Accountability)."
        ]
    },
    // 40 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma organização precisa realizar uma Auditoria Interna em seu SGSI antes de receber o organismo certificador externo. Ao designar o auditor interno responsável por avaliar os controles de backup e segurança de rede, qual critério da ISO/IEC 27001 (Cláusula 9.2) deve ser obrigatoriamente respeitado?",
        options: [
            "O auditor interno deve ser o próprio Administrador de Redes responsável pela operação diária dos backups, pois ele conhece melhor o sistema.",
            "O auditor deve ser selecionado de forma a garantir a objetividade e a imparcialidade do processo, não podendo auditar o seu próprio trabalho ou setor de subordinação direta.",
            "A auditoria interna deve avaliar se o SGSI garantiu o cumprimento das metas de lucro líquido e retorno financeiro dos acionistas no exercício.",
            "A auditoria interna só tem validade se for conduzida secretamente sem o conhecimento do CISO e da Alta Direção."
        ],
        answer: 1,
        explanations: [
            "Incorreta: auditar o próprio trabalho fere frontalmente o princípio da independência e imparcialidade.",
            "Correta: a norma exige independência de quem executa a atividade auditada para detectar fragilidades na implementação dos controles com isenção.",
            "Incorreta: auditorias de SGSI verificam a conformidade e eficácia dos controles de segurança, e não objetivos financeiros.",
            "Incorreta: o programa de auditoria é planejado, aprovado e reportado diretamente à direção e ao CISO."
        ]
    },
    // 41 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Ao final do contrato de leasing de 50 servidores e estações de trabalho que utilizavam tanto discos rígidos magnéticos (HDD) quanto unidades de estado sólido em chips de memória Flash (SSD), a empresa precisa sanitizar os equipamentos antes de devolvê-los. Qual procedimento técnico é adequado para cada tecnologia?",
        options: [
            "Executar apenas a formatação rápida do sistema operacional em ambos os tipos de disco, pois isso apaga fisicamente todos os setores.",
            "Aplicar um desmagnetizador (Degausser) tanto nos HDDs quanto nos SSDs, pois o campo magnético destrói memórias Flash.",
            "Utilizar sobrescrita segura (Wipe/Sanitização lógica) ou destruição física (trituração), observando que a desmagnetização (Degaussing) funciona apenas em mídias magnéticas (HDD/fitas) e não tem efeito sobre SSDs/pen drives.",
            "Mover os arquivos para a lixeira e remover os rótulos de classificação colados na parte externa dos gabinetes."
        ],
        answer: 2,
        explanations: [
            "Incorreta: a formatação rápida apaga apenas os ponteiros da tabela de arquivos, permitindo recuperação forense trivial.",
            "Incorreta: memórias de estado sólido (SSD/Pen drive) não são magnéticas e permanecem intactas após passar por um Degausser.",
            "Correta: o Degaussing destrói apenas domínios magnéticos (HDD/Fitas); SSDs exigem apagamento criptográfico/sobrescrita específica ou trituração física.",
            "Incorreta: esvaziar a lixeira e tirar adesivos deixa 100% dos dados confidenciais recuperáveis no disco."
        ]
    },
    // 42 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Em relação aos conceitos de 'Responsabilização' (Accountability) e 'Auditabilidade' (Auditability) cobrados na certificação EXIN ISFS, assinale a alternativa que apresenta a definição exata de ambos:",
        options: [
            "Responsabilização é a conformidade contábil com a lei Sarbanes-Oxley (SOX); Auditabilidade é a obtenção do certificado oficial ISO/IEC 27001.",
            "Responsabilização significa responder formalmente pelos resultados das atividades de uma organização; Auditabilidade refere-se à prontidão da organização (evidências e registros) para ser submetida a uma avaliação independente.",
            "Responsabilização aplica-se apenas a ações de fornecedores terceirizados; Auditabilidade aplica-se apenas a investigações policiais.",
            "Responsabilização é o ato de punir funcionários pelo Código de Conduta; Auditabilidade é o bloqueio preventivo de pacotes pelo firewall."
        ],
        answer: 1,
        explanations: [
            "Incorreta: os conceitos são fundamentos gerais de governança e não significam aprovação prévia em auditoria ou SOX.",
            "Correta: Responsabilização é ser responsável pelos resultados das atividades; Auditabilidade é estar pronto e documentado para ser verificado independentemente.",
            "Incorreta: ambos os conceitos aplicam-se primariamente à própria organização e seus processos internos.",
            "Incorreta: punição pertence ao processo disciplinar e bloqueio de pacotes é controle técnico de rede."
        ]
    },
    // 43 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Uma instituição financeira identifica que seu servidor de banco de dados legado possui uma falha crítica no sistema operacional para a qual o fabricante não lançará correção. Como o sistema é vital e não pode ser desligado, a equipe instala um IPS dedicado na frente desse servidor e restringe o acesso apenas a uma sub-rede isolada. Na gestão de riscos, a falha sem correção no sistema e a instalação do IPS representam, respectivamente:",
        options: [
            "Uma ameaça técnica não humana e uma estratégia de evitação total do risco.",
            "Uma vulnerabilidade persistente e um controle compensatório para redução (mitigação) do risco.",
            "Um risco inerente aceito sem tratamento e um controle corretivo pós-incidente.",
            "Um incidente de segurança ativo e uma medida de transferência de risco para a rede."
        ],
        answer: 1,
        explanations: [
            "Incorreta: falha de software é vulnerabilidade (não ameaça), e manter o servidor ligado não é evitar o risco.",
            "Correta: a ausência de patch é uma vulnerabilidade; como não pode ser corrigida na origem, usa-se segmentação e IPS como controles compensatórios para reduzir (mitigar) a probabilidade de exploração.",
            "Incorreta: houve aplicação de controles (logo não foi aceitação pura) e o IPS atua preventivamente/repressivamente, não como reparo pós-dano.",
            "Incorreta: a falha ainda não foi explorada (não é incidente) e não houve repasse a terceiros (seguro/terceirização)."
        ]
    },
    // 44 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Durante a elaboração da Declaração de Aplicabilidade (SoA) para certificação ISO/IEC 27001, o gestor de segurança decide excluir o controle do Anexo A referente à 'Segurança no Teletrabalho', justificando que todos os colaboradores trabalham presencialmente. Contudo, os diretores acessam e-mails e relatórios corporativos de seus smartphones pessoais à noite em casa. Qual será o parecer do auditor externo?",
        options: [
            "Aprovará a exclusão na SoA, pois smartphones pessoais pertencem ao escopo exclusivo da norma ISO/IEC 27002 e não entram na auditoria da ISO/IEC 27001.",
            "Aprovará a exclusão, visto que diretores estatutários possuem isenção formal dos controles operacionais do Anexo A.",
            "Apontará uma não conformidade, pois a exclusão de um controle do Anexo A só é válida se a justificativa refletir a realidade operacional e a análise de riscos da organização.",
            "Exigirá a exclusão da Cláusula 6 do SGSI para alinhar o escopo documental ao uso de dispositivos móveis pela diretoria."
        ],
        answer: 2,
        explanations: [
            "Incorreta: o acesso remoto a dados corporativos via BYOD faz parte do escopo do SGSI e é auditado na ISO/IEC 27001.",
            "Incorreta: diretores não possuem isenção de controles de segurança; pelo contrário, são alvos de alto valor (Whaling).",
            "Correta: controles do Anexo A podem ser excluídos na SoA, mas a justificativa precisa ser verdadeira e coerente com o contexto real; acessar dados de casa caracteriza teletrabalho/acesso móvel.",
            "Incorreta: nenhuma cláusula de 4 a 10 da ISO/IEC 27001 pode ser excluída."
        ]
    },
    // 45 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Um analista de inteligência captura o tráfego de rede de um concorrente. Como os pacotes estão cifrados com TLS 1.3, ele não consegue ler o conteúdo das mensagens. Mesmo assim, ao observar que o servidor de contabilidade do concorrente enviou 50 GB de pacotes para uma empresa de auditoria externa no domingo à noite, ele deduz que uma aquisição está em andamento. Qual controle técnico teria evitado especificamente essa dedução?",
        options: [
            "Substituição da criptografia simétrica da sessão por assinaturas digitais baseadas em curvas elípticas.",
            "Implementação de preenchimento de tráfego (Traffic Padding) para manter um fluxo constante e mascarar variações de volume.",
            "Aplicação de funções hash SHA-512 em cada pacote transmitido para ocultar os cabeçalhos de roteamento.",
            "Ativação de autenticação multifator (MFA) mútua entre o servidor de contabilidade e a auditoria externa."
        ],
        answer: 1,
        explanations: [
            "Incorreta: assinaturas digitais garantem autenticidade e integridade, mas não escondem o volume nem a frequência do tráfego.",
            "Correta: a análise de tráfego observa metadados (volume, horários e destinatários) mesmo sem ler o conteúdo; o Traffic Padding injeta tráfego contínuo falso para ocultar esses picos.",
            "Incorreta: funções hash verificam integridade e não ocultam cabeçalhos IP nem volume de dados.",
            "Incorreta: MFA valida a identidade no início da conexão, mas não altera a visibilidade do volume trafegado."
        ]
    },
    // 46 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Uma organização adota a seguinte política de backup: Backup Completo (Full) aos domingos às 23h; Backup Diferencial às segundas, terças, quartas e quintas-feiras às 23h; e um único Backup Incremental na sexta-feira às 23h. Se o armazenamento principal falhar totalmente no sábado pela manhã, quais mídias serão estritamente necessárias para restaurar o ambiente ao estado de sexta-feira às 23h?",
        options: [
            "Apenas o Backup Completo de domingo e o Backup Incremental de sexta-feira.",
            "O Backup Completo de domingo, todos os Diferenciais de segunda a quinta-feira e o Incremental de sexta-feira.",
            "Apenas o Backup Diferencial de quinta-feira e o Backup Incremental de sexta-feira.",
            "O Backup Completo de domingo, o Backup Diferencial de quinta-feira e o Backup Incremental de sexta-feira."
        ],
        answer: 3,
        explanations: [
            "Incorreta: faltariam todas as alterações ocorridas entre segunda e quinta-feira, pois o incremental de sexta copiou apenas o que mudou após o diferencial de quinta.",
            "Incorreta: backups diferenciais são cumulativos desde o último Full; portanto, o diferencial de quinta já contém tudo o que foi feito de segunda a quinta, tornando desnecessárias as fitas de segunda, terça e quarta.",
            "Incorreta: sem o Backup Completo de domingo, os arquivos base que não sofreram alteração na semana não poderiam ser restaurados.",
            "Correta: o Full de domingo traz a base; o Diferencial de quinta traz tudo o que mudou de segunda a quinta (pois o diferencial não limpa o archive bit); e o Incremental de sexta traz o que mudou na sexta."
        ]
    },
    // 47 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Na estrutura de governança descrita na literatura da EXIN ISFS, quatro profissionais interagem com as diretrizes corporativas: (1) a Gestão Geral, (2) o CISO, (3) o Information Security Policy Officer e (4) o ISO da unidade de negócios. Qual alternativa descreve corretamente a cadeia de responsabilidades entre eles?",
        options: [
            "O CISO define a estratégia de negócios da empresa; a Gestão Geral redige a política; o Policy Officer audita as filiais; e o ISO aprova o risco residual.",
            "A Gestão Geral estabelece a estratégia de negócios; o CISO a converte em estratégia de segurança; o Policy Officer mantém o documento da política; e o ISO a desdobra e supervisiona na sua unidade de negócios.",
            "O Policy Officer converte a estratégia de negócios em metas de segurança; o CISO atua exclusivamente na resposta técnica a incidentes; e a Gestão Geral configura os controles de acesso.",
            "O ISO define a política global da corporação; o CISO gerencia apenas o Help Desk; e o Policy Officer responde juridicamente pelas multas do GDPR."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a estratégia de negócios cabe à Gestão Geral, e quem aprova a política e o risco residual também é a direção.",
            "Correta: esta é a divisão exata da literatura EXIN: Gestão Geral (negócio) ➔ CISO (estratégia de segurança) ➔ Policy Officer (manutenção documental da política) ➔ ISO (aplicação na unidade de negócio).",
            "Incorreta: quem traduz a estratégia de negócios em estratégia de segurança é o CISO, não o Policy Officer.",
            "Incorreta: o ISO atua no nível local/unidade de negócio, subordinado às diretrizes corporativas do CISO."
        ]
    },
    // 48 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Em uma aplicação web corporativa de alta sensibilidade, a equipe de desenvolvimento aplicou o princípio do menor privilégio e exigiu autenticação multifator (MFA). No entanto, um teste de penetração (pentest) revela que um atacante conseguiu injetar comandos maliciosos diretamente nos campos de entrada de formulários, comprometendo a base de dados. Qual controle de desenvolvimento seguro falhou primariamente?",
        options: [
            "Validação rigorosa de dados de entrada (Input Validation) e sanitização contra injeção.",
            "Falta de redundância no balanceamento de carga dos servidores web.",
            "Ausência de sincronização de relógios via protocolo NTP entre os nós da rede.",
            "Inexistência de criptografia de disco completo (Full Disk Encryption) no servidor de homologação."
        ],
        answer: 0,
        explanations: [
            "Correta: falhas de injeção (como SQL Injection) ocorrem por falta de validação, filtragem e higienização adequada dos dados fornecidos nos campos de entrada.",
            "Incorreta: balanceamento de carga lida com capacidade e disponibilidade, e não com validação de código.",
            "Incorreta: o protocolo NTP ajusta relógios para correlação de logs, sem relação com injeção de parâmetros em formulários.",
            "Incorreta: criptografia de armazenamento protege dados em repouso contra furto físico, não validando entradas de formulários web."
        ]
    },
    // 49 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Um administrador de sistemas executa rotinas de manutenção em um servidor Linux utilizando o protocolo SSH. Para garantir a confidencialidade e a integridade da sessão remota, o SSH utiliza criptografia híbrida. Qual é a função exata da componente simétrica e da componente assimétrica nesta arquitetura?",
        options: [
            "A assimétrica cifra todo o tráfego de comandos em alta velocidade, enquanto a simétrica autentica a identidade do servidor no primeiro acesso.",
            "A simétrica é utilizada para autenticar o utilizador por meio de funções hash, e a assimétrica cifra os ficheiros em repouso no disco.",
            "A assimétrica realiza a troca segura inicial de chaves e a autenticação das partes, enquanto a simétrica cifra o fluxo contínuo de dados da sessão em alta performance.",
            "Ambas atuam de forma idêntica, sendo apenas nomes comerciais diferentes para o mesmo algoritmo de curva elíptica."
        ],
        answer: 2,
        explanations: [
            "Incorreta: a criptografia simétrica é que cifra o tráfego em alta velocidade, pois a assimétrica seria muito lenta para isso.",
            "Incorreta: funções hash não realizam cifragem simétrica de sessão.",
            "Correta: a criptografia assimétrica resolve a troca segura de chaves e autenticação inicial; em seguida, estabelece-se uma chave simétrica rápida para cifrar todo o volume de dados da sessão.",
            "Incorreta: algoritmos simétricos e assimétricos possuem fundamentos matemáticos totalmente distintos."
        ]
    },
    // 50 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma empresa contratou uma auditoria externa para verificar a conformidade do seu SGSI com a norma ISO/IEC 27001. O auditor concluiu que a organização atende a todos os requisitos obrigatórios das cláusulas 4 a 10 e possui controles adequados no Anexo A, exceto pelo fato de não manter registros documentados das análises críticas realizadas pela alta direção. O auditor deve registrar:",
        options: [
            "Uma oportunidade de melhoria voluntária, sem impacto na recomendação de certificação.",
            "Uma Não Conformidade formal, pois a realização e documentação da análise crítica pela direção é um requisito obrigatório da norma.",
            "Um alerta de conformidade legal perante o Regulamento Geral sobre a Proteção de Dados (GDPR).",
            "A revogação imediata da Declaração de Aplicabilidade (SoA) por falha na gestão de riscos."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a ausência de registros de um requisito mandatório da norma impede a certificação, não sendo opcional.",
            "Correta: a análise crítica pela direção é um requisito obrigatório da Cláusula 9.3 da ISO/IEC 27001, cuja ausência de evidência documentada configura uma Não Conformidade.",
            "Incorreta: o GDPR regula privacidade de dados pessoais, enquanto o requisito violado pertence à gestão SGSI da ISO 27001.",
            "Incorreta: a SoA lista controles do Anexo A e não é revogada por falha na Cláusula 9."
        ]
    },
    // 51 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "No contexto da gestão de incidentes de segurança da informação, qual é a principal finalidade operacional da fase de 'Contenção' logo após a confirmação de um ataque ativo por malware na rede corporativa?",
        options: [
            "Redigir o relatório final de lições aprendidas para apresentação aos acionistas.",
            "Isolar os sistemas afetados e interromper a propagação do vetor de ataque para limitar os danos à organização.",
            "Formatar permanentemente todos os servidores e reinstalar o sistema operacional do zero.",
            "Iniciar o processo de auditoria externa de conformidade com a ISO/IEC 27001."
        ],
        answer: 1,
        explanations: [
            "Incorreta: o relatório de lições aprendidas é a última etapa do ciclo de gerenciamento de incidentes.",
            "Correta: a contenção visa 'estancar o sangramento', isolando hosts ou cortando conexões para impedir que a ameaça se alastre pela rede antes da erradicação.",
            "Incorreta: formatar tudo imediatamente pode destruir evidências forenses vitais antes da análise de causa raiz.",
            "Incorreta: auditorias externas ocorrem independentemente da resposta operacional a incidentes."
        ]
    },
    // 52 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Um analista de suporte técnico recebe um chamado de um usuário que não consegue acessar uma pasta compartilhada na rede. O analista verifica que o usuário possui credenciais válidas e autenticadas, mas o sistema nega o acesso à pasta. Após verificar a matriz de permissões, o analista constata que o grupo ao qual o usuário pertence não possui direitos de leitura naquele diretório. Esta falha ocorreu em qual etapa do controle de acesso lógico?",
        options: [
            "Na etapa de Identificação, pois a matrícula do usuário estava incorreta.",
            "Na etapa de Autenticação, pois a senha expirou.",
            "Na etapa de Autorização, pois o usuário não possuía privilégios suficientes para o recurso solicitado.",
            "Na etapa de Auditoria (Accounting), pois o log não registrou a tentativa."
        ],
        answer: 2,
        explanations: [
            "Incorreta: a identificação (matrícula) foi reconhecida com sucesso pelo sistema.",
            "Incorreta: as credenciais foram validadas e o usuário estava autenticado.",
            "Correta: a autenticação confirmou quem era o usuário, mas a Autorização (verificação de privilégios e permissões) bloqueou o acesso à pasta por falta de direitos do grupo.",
            "Incorreta: o problema é de concessão de direitos, e não de gravação de trilha de auditoria."
        ]
    },
    // 53 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma empresa de comércio eletrônico pretende demonstrar aos seus parceiros comerciais que adota rigorosas práticas de segurança na gestão dos dados de pagamento. No entanto, a diretoria recusa submeter a empresa a uma auditoria por um organismo externo, preferindo emitir uma declaração assinada pelo próprio CISO atestando a conformidade. No contexto de certificação e auditoria, esta abordagem:",
        options: [
            "É plenamente válida, pois o CISO detém a autoridade máxima de auditoria técnica na norma ISO/IEC 27001.",
            "Configura uma avaliação de primeira parte (interna), mas não substitui uma auditoria de terceira parte realizada por organismo independente para fins de certificação oficial.",
            "Atende aos requisitos de auditoria de segunda parte exigidos por leis internacionais de proteção de dados.",
            "Invalida o ciclo PDCA, obrigando a empresa a retornar imediatamente à fase Plan."
        ],
        answer: 1,
        explanations: [
            "Incorreta: o CISO não pode emitir certificações oficiais independentes da sua própria empresa.",
            "Correta: avaliações feitas pela própria organização são de primeira parte; para obter um certificado formal reconhecido no mercado, exige-se uma auditoria de terceira parte independente.",
            "Incorreta: auditorias de segunda parte são feitas por clientes em fornecedores, e não autodeclarações gerenciais.",
            "Incorreta: o ciclo PDCA não é invalidado por falta de certificado, embora a conformidade externa fique sem chancela oficial."
        ]
    },
    // 54 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "No âmbito da análise quantitativa de riscos, um analista calcula a Expectativa Única de Perda (SLE) de um servidor crítico como sendo R$ 80.000,00. Sabendo que a Taxa Anual de Ocorrência (ARO) estimada para a ameaça é de 0,5 (ou seja, ocorre em média uma vez a cada 2 anos), qual é o valor da Expectativa Anual de Perda (ALE)?",
        options: [
            "R$ 160.000,00",
            "R$ 80.000,00",
            "R$ 40.000,00",
            "R$ 20.000,00"
        ],
        answer: 2,
        explanations: [
            "Incorreta: este valor resultaria de uma divisão por 0,5 em vez de multiplicação.",
            "Incorreta: R$ 80.000,00 é o valor da SLE para um único evento isolado.",
            "Correta: a fórmula da Expectativa Anual de Perda é ALE = SLE × ARO. Logo, R$ 80.000,00 × 0,5 = R$ 40.000,00.",
            "Incorreta: R$ 20.000,00 resultaria de uma ARO de 0,25 (uma vez a cada 4 anos)."
        ]
    },
    // 55 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "De acordo com os princípios de governança da ISO/IEC 27002, qual é a principal razão pela qual uma empresa não deve permitir que os programadores que escreveram o código-fonte de um sistema tenham permissão para publicá-lo diretamente no ambiente de Produção?",
        options: [
            "Para impedir que os programadores utilizem linguagens de programação obsoletas nos servidores centrais.",
            "Para cumprir o princípio da Segregação de Funções (SoD) e separação de ambientes, evitando fraudes, alterações não autorizadas ou inserção de rotinas maliciosas sem revisão independente.",
            "Para garantir que o consumo de largura de banda da rede interna permaneça equilibrado durante o dia.",
            "Para eliminar totalmente a necessidade de realizar cópias de segurança (backups) dos códigos."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a escolha de linguagem de programação é uma decisão técnica de arquitetura de software.",
            "Correta: a separação entre desenvolvimento, teste e produção combinada à segregação de funções impede que um único indivíduo altere e aprove código em produção sem supervisão.",
            "Incorreta: tráfego de rede e largura de banda são geridos por ferramentas de infraestrutura.",
            "Incorreta: testes e separação de ambientes não eliminam a obrigação de realizar backups."
        ]
    },
    // 56 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Uma instituição de saúde adota uma estratégia onde todos os dados de pacientes são replicados em tempo real para um data center secundário localizado em outra cidade. Caso ocorra uma pane catastrófica no prédio principal, o site secundário assume a operação em menos de 1 minuto sem perda de transações. Como é classificado este local alternativo de recuperação?",
        options: [
            "Cold Site (Site Frio).",
            "Warm Site (Site Morno).",
            "Hot Site (Site Quente) com espelhamento síncrono.",
            "Hotsite móvel sob demanda."
        ],
        answer: 2,
        explanations: [
            "Incorreta: um Cold Site é apenas uma sala vazia sem servidores ou dados sincronizados.",
            "Incorreta: um Warm Site possui hardware instalado, mas exige a recuperação manual de fitas de backup.",
            "Correta: um Hot Site ativo com replicação síncrona em tempo real atende a requisitos rigorosos de RTO quase zero e RPO nulo (zero perda de dados).",
            "Incorreta: hotsite móvel utiliza veículos que se deslocam após o sinistro, levando horas para operar."
        ]
    },
    // 57 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma empresa multinacional que processa dados de cidadãos na União Europeia nomeou um Diretor de Segurança (CISO), implementou um SGSI certificado na ISO/IEC 27001 e adotou políticas rigorosas de segurança. No entanto, a autoridade fiscalizadora aplica uma multa severa porque a empresa não notificou uma violação de dados pessoais dentro do prazo legal exigido pelo Regulamento Geral sobre a Proteção de Dados (GDPR). Esta ocorrência demonstra que:",
        options: [
            "A certificação ISO/IEC 27001 garante imunidade automática contra qualquer lei de proteção de dados.",
            "O cumprimento de normas técnicas voluntárias de segurança da informação (como a ISO 27001) não substitui o cumprimento obrigatório de exigências legais e regulatórias estatais (como o GDPR).",
            "O CISO assume legalmente a culpa exclusiva como pessoa física por todas as multas administrativas aplicadas pelo governo à empresa.",
            "A norma ISO/IEC 27002 proíbe a notificação de incidentes a órgãos governamentais externos."
        ],
        answer: 1,
        explanations: [
            "Incorreta: nenhuma norma técnica concede imunidade contra leis governamentais obrigatórias.",
            "Correta: a ISO/IEC 27001 é uma norma voluntária que fornece o arcabouço de gestão de segurança, mas o GDPR/LGPD é lei obrigatória com prazos e deveres específicos que devem ser cumpridos.",
            "Incorreta: a responsabilidade administrativa perante a autoridade de proteção de dados recai sobre a organização (Controladora).",
            "Incorreta: a ISO/IEC 27002 exige justamente o contato com autoridades relevantes no gerenciamento de incidentes e conformidade."
        ]
    },
    // 58 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM3",
        q: "Durante a auditoria de um data center, verifica-se que as portas corta-fogo da Área Segura trancam eletromagneticamente pelo lado de fora por motivos de segurança patrimonial, mas possuem barras antipânico mecânicas pelo lado interno acopladas a alarmes sonoros na central de vigilância. Este arranjo técnico atende primariamente a:",
        options: [
            "O princípio da segregação de funções entre programadores e operadores.",
            "A conciliação entre a restrição de acesso físico patrimonial e a prioridade absoluta da preservação da vida humana em evacuações de emergência, apoiada por controle detectivo.",
            "A necessidade de otimizar o fluxo de tráfego de rede nas sub-redes da DMZ.",
            "A substituição dos controles preventivos de incêndio por transferência de risco."
        ],
        answer: 1,
        explanations: [
            "Incorreta: segregação de funções é um princípio administrativo/lógico de divisão de tarefas.",
            "Correta: portas de emergência nunca podem impedir a saída humana em caso de incêndio (garantido pela barra antipânico), usando-se alarmes e câmeras (controles detectivos) para coibir saídas indevidas.",
            "Incorreta: portas físicas não controlam tráfego lógico de rede.",
            "Incorreta: trata-se de controle físico e detectivo, não de transferência de risco."
        ]
    },
    // 59 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM2",
        q: "Um pesquisador externo descobre uma vulnerabilidade de Dia-Zero (Zero-Day) no portal de uma instituição bancária. Antes de divulgar o achado em seu blog técnico, ele reporta a falha em sigilo para a equipe de segurança do banco e aguarda o prazo acordado para o desenvolvimento e aplicação do patch. Na literatura da EXIN, essa conduta e a situação de um ataque que ocorresse antes da existência do patch são chamadas, respectivamente, de:",
        options: [
            "Engenharia Social e Falso Negativo.",
            "Divulgação Responsável (Responsible Disclosure) e Exploração de Vulnerabilidade Dia-Zero (Zero-Day).",
            "Escalonamento Hierárquico e Bomba Lógica.",
            "Devida Diligência (Due Diligence) e Ataque de Repetição (Replay Attack)."
        ],
        answer: 1,
        explanations: [
            "Incorreta: engenharia social é manipulação maliciosa e falso negativo é erro de sensor.",
            "Correta: notificar o proprietário em sigilo dando prazo para correção chama-se Divulgação Responsável; explorar falha para a qual ainda não existe correção oficial é ataque Zero-Day.",
            "Incorreta: escalonamento hierárquico é interno ao gerenciamento de incidentes.",
            "Incorreta: Due Diligence é pesquisa prévia de governança e Replay Attack é retransmissão de pacotes."
        ]
    },
    // 60 - GERADA POR IA COM BASE NA EXIN
    {
        domain: "DOM4",
        q: "Uma empresa de tecnologia está realizando uma Análise Quantitativa de Riscos para avaliar a viabilidade de implementar uma nova salvaguarda técnica cujo custo anual é de R$ 45.000,00. O ativo protegido vale R$ 1.000.000,00, o Fator de Exposição (EF) é de 20% e a Taxa Anual de Ocorrência (ARO) é de 0,25 (uma vez a cada 4 anos). Sabendo que a salvaguarda reduz o risco em 80%, qual é a conclusão correta de custo-benefício?",
        options: [
            "A salvaguarda é financeiramente viável, pois a Expectativa Única de Perda (SLE) é de R$ 200.000,00, superando os R$ 45.000,00.",
            "A salvaguarda não é financeiramente justificável isoladamente, pois a ALE atual é de R$ 50.000,00 e a economia anual gerada pelo controle (R$ 40.000,00) é inferior ao seu custo anual (R$ 45.000,00).",
            "A salvaguarda é obrigatória, pois o valor total do ativo (R$ 1.000.000,00) exige qualquer controle cujo custo seja inferior a 10% do ativo.",
            "A salvaguarda reduzirá o Risco Residual para exatamente R$ 0,00, justificando o investimento anual."
        ],
        answer: 1,
        explanations: [
            "Incorreta: a comparação anual deve ser feita contra a redução na ALE (anual), e não contra a SLE isolada.",
            "Correta: SLE = 1.000.000 × 20% = R$ 200.000. ALE = 200.000 × 0,25 = R$ 50.000/ano. Como o controle evita 80% dessa perda anual (economia de R$ 40.000/ano), pagar R$ 45.000/ano custa mais caro do que a redução financeira que ele proporciona.",
            "Incorreta: o balanceamento custo-benefício baseia-se na ALE (perda anual esperada), não em percentual fixo do ativo.",
            "Incorreta: como a eficácia é de 80%, ainda restam 20% de risco residual (R$ 10.000/ano)."
        ]
    }
];