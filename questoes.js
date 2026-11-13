// ==========================================
// 1. BANCO DE QUESTÕES OFICIAIS (EXIN)
// ==========================================
const officialQuestions = [
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
/// ==========================================
// 2. BANCO DE QUESTÕES IA / DESAFIO UNIFICADO (85 QUESTÕES)
// Totalizando 125 Questões junto com as 40 Oficiais EXIN
// ==========================================
const extraQuestions = [
    {
        domain: "DOM1",
        q: "Um ladrão furta uma pasta executiva contendo um cofre portátil lacrado com fitas de backup criptografadas com AES-256. O ladrão não possui a chave e nunca conseguirá ler os dados. De acordo com o Hexagrama Parkeriano, qual atributo da informação foi imediatamente violado?",
        options: [
            "Confidencialidade.",
            "Posse ou Controle.",
            "Integridade.",
            "Utilidade."
        ],
        answer: 1,
        explanations: [
            "Como os dados estão fortemente criptografados e o ladrão não tem a chave, o sigilo do conteúdo não foi quebrado.",
            "O atributo de Posse ou Controle refere-se à detenção física ou lógica do meio onde a informação reside, independentemente de haver leitura ou não.",
            "Os dados dentro das fitas não foram alterados ou corrompidos pelo furto em si.",
            "A informação continua em formato utilizável caso a empresa tenha uma cópia ou recupere o cofre com sua chave."
        ]
    },
    {
        domain: "DOM1",
        q: "Durante a migração de um sistema legado para uma nova arquitetura, os registros financeiros foram exportados em codificação EBCDIC para um ambiente moderno que lê apenas ASCII. Os arquivos não foram alterados, não vazaram e estão acessíveis no servidor, mas nenhum sistema atual consegue interpretá-los. Qual atributo do Hexagrama Parkeriano foi comprometido?",
        options: [
            "Disponibilidade.",
            "Autenticidade.",
            "Utilidade.",
            "Completude."
        ],
        answer: 2,
        explanations: [
            "Os arquivos estão online, acessíveis no servidor e prontos para download, portanto a disponibilidade técnica do arquivo não falhou.",
            "A origem e a identidade dos registros são genuínas e não foram forjadas.",
            "A Utilidade garante que a informação esteja em um formato compreensível e usável para a finalidade a que se destina.",
            "Completude é um subaspecto da Integridade que garante que nenhum registro foi apagado; aqui todos os registros estão lá, apenas ilegíveis."
        ]
    },
    {
        domain: "DOM2",
        q: "Na gestão de riscos, qual é a principal diferença entre uma Análise Qualitativa e uma Análise Quantitativa de riscos?",
        options: [
            "A análise qualitativa utiliza valores financeiros exatos para calcular perdas anuais, enquanto a quantitativa usa apenas opiniões subjetivas.",
            "A análise qualitativa classifica os riscos em escalas descritivas (como Baixo, Médio e Alto), enquanto a quantitativa atribui valores numéricos e monetários aos ativos e impactos.",
            "A análise quantitativa é obrigatória pela ISO 27001, enquanto a qualitativa é proibida.",
            "A análise qualitativa avalia apenas ameaças naturais, enquanto a quantitativa avalia apenas ameaças humanas."
        ],
        answer: 1,
        explanations: [
            "Os conceitos foram invertidos: quem usa valores financeiros e fórmulas é a análise quantitativa.",
            "A análise qualitativa baseia-se em cenários e escalas subjetivas (Alto/Médio/Baixo); a quantitativa usa métricas financeiras como Valor do Ativo e Expectativa Anual de Perda (ALE).",
            "A ISO 27001 não obriga o uso de um método específico; a organização escolhe o método mais adequado ao seu contexto.",
            "Ambos os métodos podem ser aplicados a qualquer categoria de ameaça."
        ]
    },
    {
        domain: "DOM2",
        q: "Na terminologia de análise quantitativa de riscos, como é definida a métrica 'Expectativa Anual de Perda' (ALE - Annual Loss Expectancy)?",
        options: [
            "É o valor financeiro total de compra de um equipamento novo.",
            "É a perda financeira estimada que a organização sofrerá em um período de um ano devido a um risco específico, obtida multiplicando a perda única (SLE) pela frequência anual (ARO).",
            "É o percentual de destruição que um ativo sofre em um único incidente.",
            "É o tempo máximo tolerável que um servidor pode ficar fora do ar."
        ],
        answer: 1,
        explanations: [
            "O valor total do ativo é chamado de Asset Value (AV).",
            "A ALE representa o impacto financeiro anual esperado de uma ameaça, combinando o custo de cada ocorrência (SLE) com a sua frequência anual (ARO).",
            "O percentual de perda em um único evento é o Fator de Exposição (EF).",
            "O tempo máximo tolerável de parada é o Objetivo de Tempo de Recuperação (RTO)."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma empresa de comércio eletrônico decide descontinuar totalmente seu módulo antigo de armazenamento de cartões de crédito, apagando a base de dados e passando a usar um gateway externo que processa tudo fora de seu ambiente. Qual estratégia de tratamento de risco foi aplicada?",
        options: [
            "Transferência do risco.",
            "Mitigação do risco.",
            "Evitação do risco.",
            "Aceitação do risco."
        ],
        answer: 2,
        explanations: [
            "Na transferência (como em seguros), a empresa mantém a atividade/ativo e repassa apenas o impacto financeiro ou operacional via contrato.",
            "A mitigação reduz a probabilidade ou impacto aplicando controles técnicos, mas a empresa continua exercendo a atividade arriscada.",
            "Ao encerrar o armazenamento e deixar de lidar com os dados sensíveis em sua infraestrutura, a empresa elimina a exposição por completo (Evitação).",
            "Aceitação ocorre quando a empresa decide conviver com o risco sem implementar novas salvaguardas."
        ]
    },
    {
        domain: "DOM4",
        q: "Na estrutura hierárquica documental de um SGSI, qual documento possui caráter meramente orientativo e consultivo, servindo como recomendação de boas práticas sem caráter obrigatório ou punitivo?",
        options: [
            "Política de Segurança da Informação.",
            "Padrão (Norma) Técnico.",
            "Procedimento Operacional.",
            "Diretriz de Segurança (Guideline)."
        ],
        answer: 3,
        explanations: [
            "A Política é o documento estratégico de alto nível aprovado pela direção e possui cumprimento obrigatório.",
            "Padrões definem regras técnicas obrigatórias e mensuráveis (ex: tamanho mínimo de senha de 12 caracteres).",
            "Procedimentos descrevem o passo a passo operacional mandatório para executar tarefas com segurança.",
            "As Diretrizes (Guidelines) são recomendações e conselhos práticos para auxiliar os usuários, não sendo mandatórias."
        ]
    },
    {
        domain: "DOM1",
        q: "Um relatório estratégico foi classificado como 'Confidencial' durante sua elaboração. Após a divulgação oficial dos resultados ao mercado, é necessário rebaixar a classificação do documento para 'Público'. Quem detém a autoridade formal para alterar a classificação desse ativo?",
        options: [
            "O Custodiante da informação (Administrador de TI).",
            "O Proprietário do ativo (Asset Owner).",
            "O Auditor Interno.",
            "Qualquer funcionário com acesso de leitura ao arquivo."
        ],
        answer: 1,
        explanations: [
            "O custodiante apenas aplica tecnicamente as permissões e backups definidos pelo proprietário; ele não pode alterar a classificação.",
            "O Proprietário do Ativo é o gestor responsável pelo valor do dado e o único com autoridade para definir ou rebaixar sua classificação.",
            "O auditor avalia a conformidade dos controles, mas não possui autoridade operacional sobre os ativos de negócio.",
            "Usuários comuns devem respeitar o rótulo atribuído, sem poder para alterá-lo."
        ]
    },
    {
        domain: "DOM3",
        q: "De acordo com o Princípio de Kerckhoffs, amplamente adotado na criptografia moderna, em que deve residir a verdadeira segurança de um sistema criptográfico?",
        options: [
            "No sigilo absoluto do código-fonte do algoritmo matemático.",
            "No sigilo exclusivo da chave criptográfica, devendo o algoritmo ser público e aberto à análise.",
            "Na ocultação do endereço IP de origem e destino dos pacotes.",
            "Na utilização exclusiva de chaves simétricas de tamanho fixo."
        ],
        answer: 1,
        explanations: [
            "Manter o algoritmo em segredo ('segurança por obscuridade') é considerado uma prática fraca e perigosa.",
            "Segundo Kerckhoffs, um sistema criptográfico deve ser seguro mesmo que tudo sobre o sistema, exceto a chave, seja de conhecimento público.",
            "Isso descreve técnicas de anonimização de rede ou VPN, não o princípio matemático da criptografia.",
            "O princípio aplica-se tanto à criptografia simétrica quanto à assimétrica."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um sistema de criptografia assimétrica, João deseja enviar um contrato confidencial para Maria e, ao mesmo tempo, garantir a Maria que o documento foi autenticamente enviado por ele (Não-repúdio). Qual sequência de chaves João deve utilizar?",
        options: [
            "Assinar com a chave pública de João e cifrar com a chave privada de Maria.",
            "Assinar com a chave privada de João e cifrar com a chave pública de Maria.",
            "Assinar com a chave privada de Maria e cifrar com a chave pública de João.",
            "Assinar e cifrar utilizando apenas a chave pública de Maria."
        ],
        answer: 1,
        explanations: [
            "João não tem acesso à chave privada de Maria, e assinar com a chave pública não prova identidade.",
            "Para assinar (autenticidade/não-repúdio), usa-se a própria chave privada; para garantir confidencialidade, cifra-se com a chave pública do destinatário.",
            "A chave privada de Maria pertence exclusivamente a ela; João não a possui.",
            "Usar apenas a chave pública de Maria garante confidencialidade, mas qualquer pessoa poderia ter criado o documento (falha na assinatura/autenticidade)."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que sistemas modernos como o HTTPS (TLS) utilizam uma abordagem de 'Criptografia Híbrida' em vez de usar apenas criptografia assimétrica durante toda a sessão?",
        options: [
            "Porque a criptografia assimétrica não permite a criação de assinaturas digitais.",
            "Porque a criptografia assimétrica é computacionalmente lenta para grandes volumes de dados, sendo usada apenas para trocar com segurança uma chave simétrica rápida.",
            "Porque a criptografia simétrica não pode ser quebrada por força bruta.",
            "Porque a criptografia assimétrica exige que ambos os lados compartilhem a mesma chave privada."
        ],
        answer: 1,
        explanations: [
            "Pelo contrário, assinaturas digitais dependem exatamente da criptografia assimétrica.",
            "A abordagem híbrida une o melhor dos dois mundos: usa a assimétrica para resolver a troca segura de chaves e a simétrica (ex: AES) para cifrar o tráfego em alta velocidade.",
            "Qualquer algoritmo pode ser atacado se a chave for curta; a escolha híbrida deve-se à performance e distribuição de chaves.",
            "Na criptografia assimétrica, a chave privada nunca é compartilhada com ninguém."
        ]
    },
    {
        domain: "DOM3",
        q: "Ao projetar o banco de dados de autenticação de um sistema, os arquitetos decidem armazenar apenas uma representação matemática unidirecional e irreversível das senhas dos usuários. Qual técnica está sendo aplicada?",
        options: [
            "Criptografia Simétrica (AES).",
            "Criptografia Assimétrica (RSA).",
            "Função Hash (ex: SHA-256).",
            "Esteganografia."
        ],
        answer: 2,
        explanations: [
            "A criptografia simétrica é reversível (bidirecional): quem tem a chave consegue descriptografar e ler a senha original.",
            "A criptografia assimétrica também é reversível através da chave privada correspondente.",
            "A Função Hash é um processo de mão única (irreversível) que transforma dados em um resumo fixo, impedindo a recuperação da senha original.",
            "Esteganografia consiste em ocultar uma mensagem dentro de outro arquivo (como uma imagem), não sendo uma função matemática irreversível."
        ]
    },
    {
        domain: "DOM3",
        q: "Mesmo utilizando criptografia forte na camada de aplicação, um espião na rede consegue deduzir que uma empresa está prestes a anunciar uma fusão ao observar o aumento súbito no volume e na frequência de pacotes enviados entre a diretoria e um banco. Qual contramedida mitiga esse ataque de análise de tráfego?",
        options: [
            "Preenchimento de tráfego (Traffic Padding).",
            "Controle de Acesso Discricionário (DAC).",
            "Assinatura Digital.",
            "Autenticação Multifator (MFA)."
        ],
        answer: 0,
        explanations: [
            "O Preenchimento de Tráfego injeta um fluxo contínuo de dados falsos/aleatórios criptografados para manter o volume constante e mascarar os padrões reais de comunicação.",
            "DAC é um modelo de permissão de acesso a arquivos em sistemas operacionais, sem relação com tráfego de rede.",
            "A assinatura digital garante integridade e não-repúdio do conteúdo, mas não esconde o volume ou a frequência dos pacotes.",
            "MFA reforça a validação da identidade no login, mas não altera o comportamento dos pacotes na rede."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma organização militar classifica seus documentos como 'Confidencial', 'Secreto' e 'Ultrassecreto'. Um coronel cria um arquivo 'Ultrassecreto', mas o sistema impede que ele o compartilhe com um capitão cuja credencial é 'Secreto'. Qual modelo de controle de acesso está em operação?",
        options: [
            "Controle de Acesso Discricionário (DAC).",
            "Controle de Acesso Baseado em Funções (RBAC).",
            "Controle de Acesso Mandatório (MAC).",
            "Controle de Acesso Baseado em Reivindicações (CBAC)."
        ],
        answer: 2,
        explanations: [
            "No DAC, o criador/dono do arquivo tem total liberdade para conceder acesso a quem desejar.",
            "No RBAC, o acesso é baseado em cargos/papéis corporativos, sem rótulos rígidos impostos pelo kernel do sistema.",
            "No MAC, o sistema operacional impõe regras centralizadas comparando rótulos de sigilo e credenciais; nem mesmo o dono do arquivo pode burlar a regra.",
            "O CBAC avalia atributos dinâmicos e reivindicações contextuais (claims), não hierarquias militares rígidas."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um portal moderno de parceiros comerciais, o acesso aos manuais técnicos é liberado dinamicamente sempre que o usuário comprova um conjunto de declarações verificadas (como 'possui contrato ativo' e 'acessa a partir da rede do parceiro'), sem depender de um cargo fixo na matriz da empresa. Qual modelo de acesso é esse?",
        options: [
            "Controle de Acesso Mandatório (MAC).",
            "Controle de Acesso Baseado em Reivindicações (CBAC).",
            "Controle de Acesso Discricionário (DAC).",
            "Segregação de Funções (SoD)."
        ],
        answer: 1,
        explanations: [
            "MAC baseia-se em rótulos fixos de classificação de segurança e credenciais hierárquicas.",
            "O CBAC (Claims-Based Access Control) avalia declarações/atributos contextuais apresentados pelo solicitante para liberar o acesso dinamicamente.",
            "DAC depende da decisão manual do proprietário de cada arquivo individual.",
            "Segregação de Funções é um princípio de divisão de tarefas críticas para evitar fraudes, não um modelo de autenticação por atributos."
        ]
    },
    {
        domain: "DOM3",
        q: "Durante uma auditoria de acessos, descobre-se que um colaborador transferido do setor Financeiro para o setor de TI recebeu todas as permissões de administrador de sistemas, mas manteve ativas suas antigas permissões de aprovação de pagamentos. Como esse problema é tecnicamente chamado?",
        options: [
            "Escalamento Funcional.",
            "Acúmulo de Privilégios (Privilege Creep).",
            "Tailgating.",
            "Engenharia Social."
        ],
        answer: 1,
        explanations: [
            "Escalamento funcional é a transferência de um chamado técnico de suporte para uma equipe mais especializada.",
            "Privilege Creep ocorre quando um funcionário muda de cargo/setor e acumula novas permissões sem que os direitos antigos sejam revogados.",
            "Tailgating é uma falha de segurança física onde alguém entra em uma área restrita pegando carona atrás de um autorizado.",
            "Engenharia social é a manipulação psicológica de pessoas para obter informações ou acessos."
        ]
    },
    {
        domain: "DOM3",
        q: "Na entrada de um data center crítico, foi instalada uma câmara com duas portas intertravadas onde a primeira porta precisa fechar e travar completamente antes que a segunda seja liberada. Qual ataque físico esse controle (Mantrap) previne diretamente?",
        options: [
            "Dumpster Diving.",
            "Shoulder Surfing.",
            "Tailgating / Piggybacking.",
            "Spoofing."
        ],
        answer: 2,
        explanations: [
            "Dumpster Diving consiste em vasculhar o lixo da empresa em busca de documentos descartados sem trituração.",
            "Shoulder Surfing é espiar por cima do ombro de alguém para ver senhas ou dados na tela.",
            "A eclusa (Mantrap) impede que um intruso entre pegando 'carona' (Tailgating/Piggybacking) logo atrás de um funcionário autorizado.",
            "Spoofing é a falsificação de identidade lógica (como IP ou endereço de e-mail)."
        ]
    },
    {
        domain: "DOM3",
        q: "Para detectar intrusos em salas críticas durante a noite no escuro total, a equipe instalou sensores que disparam quando uma fonte de calor corporal humano se desloca diante de uma parede com temperatura ambiente diferente. Qual tecnologia é essa?",
        options: [
            "Detecção passiva por infravermelho (PIR).",
            "Extintor de pó químico.",
            "Criptografia simétrica.",
            "Honeypot."
        ],
        answer: 0,
        explanations: [
            "Sensores PIR (Passive Infrared) detectam variações na radiação infravermelha emitida pelo calor do corpo humano em movimento.",
            "Extintor de pó químico é um agente de combate a incêndio (proibido em salas de servidores).",
            "Criptografia é um controle lógico de proteção de dados.",
            "Honeypot é um sistema-isca em rede usado para atrair e estudar atacantes cibernéticos."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual agente extintor NÃO deve ser utilizado em sistemas automáticos de supressão de incêndio dentro de salas de servidores devido ao alto risco de corrosão e destruição dos circuitos eletrônicos?",
        options: [
            "Gás Argônio.",
            "Gás Inergen.",
            "Pó químico.",
            "Gás FM-200."
        ],
        answer: 2,
        explanations: [
            "O Argônio é um gás inerte seguro para equipamentos eletrônicos.",
            "O Inergen é uma mistura de gases inertes adequada para data centers.",
            "O pó químico é altamente corrosivo e deixa resíduos que destroem componentes metálicos e placas de servidores.",
            "O FM-200 é um agente limpo amplamente utilizado na proteção de salas de servidores."
        ]
    },
    {
        domain: "DOM3",
        q: "Ao projetar um sistema de supressão de incêndio por inundação de gás inerte em uma sala de servidores, qual é a principal preocupação de segurança humana exigida pela literatura oficial?",
        options: [
            "O gás pode congelar os cabos de fibra óptica instantaneamente.",
            "A redução drástica de oxigênio representa risco de asfixia para humanos, exigindo alarmes sonoros/visuais prévios para evacuação.",
            "O gás inerte conduz eletricidade e pode causar choques nos operadores.",
            "O gás reage com o ar-condicionado gerando ácido sulfúrico."
        ],
        answer: 1,
        explanations: [
            "Gases inertes não causam congelamento destrutivo em cabos de rede.",
            "Como os gases inertes apagam o fogo reduzindo o nível de oxigênio da sala, pessoas que ficarem lá dentro correm risco de morte, exigindo aviso prévio.",
            "Gases inertes são isolantes elétricos (não condutores), exatamente por isso são usados em salas com equipamentos energizados.",
            "Gases inertes são quimicamente estáveis e não geram ácidos em contato com o ar."
        ]
    },
    {
        domain: "DOM2",
        q: "Um analista forense descobre que um servidor Linux foi invadido e que o atacante modificou o núcleo (kernel) do sistema operacional para ocultar processos maliciosos e portas abertas dos comandos administrativos. Qual é a classificação dessa ameaça e a única forma segura de erradicá-la?",
        options: [
            "Spyware; basta rodar uma varredura rápida com antivírus gratuito.",
            "Rootkit em nível de kernel (Kernel-mode Rootkit); exige formatar e reinstalar todo o sistema operacional do zero.",
            "Worm de rede; basta reiniciar o servidor para limpar a memória RAM.",
            "Adware; basta limpar os cookies e o cache do navegador."
        ],
        answer: 1,
        explanations: [
            "Spyware apenas coleta dados furtivamente, sem alterar o núcleo do sistema operacional.",
            "Quando o kernel está comprometido por um Rootkit, o próprio sistema operacional passa a mentir para o administrador, exigindo reinstalação limpa completa.",
            "Um rootkit instalado no sistema de arquivos/kernel persiste após a reinicialização da máquina.",
            "Adware apenas exibe propagandas indesejadas e não compromete o kernel do servidor."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante testes de homologação de um sistema financeiro terceirizado, descobre-se que o programador inseriu uma rotina secreta que permite acessar o painel administrativo remotamente sem passar pela tela de login. Como esse mecanismo é classificado?",
        options: [
            "Bomba lógica (Logic Bomb).",
            "Porta dos fundos (Backdoor).",
            "Ransomware.",
            "Honeypot."
        ],
        answer: 1,
        explanations: [
            "Uma bomba lógica dispara uma ação quando uma condição ou data específica ocorre, não sendo um canal de acesso remoto oculto.",
            "Um Backdoor é um mecanismo oculto que contorna os procedimentos normais de autenticação para conceder acesso privilegiado.",
            "Ransomware sequestra dados mediante criptografia e exige pagamento de resgate.",
            "Honeypot é uma armadilha legítima montada pela equipe de defesa para atrair invasores."
        ]
    },
    {
        domain: "DOM2",
        q: "Um administrador configura backups completos aos domingos e backups incrementais de segunda a sábado. Se o servidor sofrer uma falha catastrófica na quinta-feira à tarde, quais mídias serão necessárias para restaurar o sistema até o estado da quarta-feira à noite?",
        options: [
            "Apenas o backup incremental de quarta-feira.",
            "O backup completo de domingo e o incremental de quarta-feira.",
            "O backup completo de domingo mais todos os incrementais de segunda, terça e quarta-feira em sequência.",
            "Apenas o backup completo de domingo."
        ],
        answer: 2,
        explanations: [
            "O incremental de quarta contém apenas o que mudou entre terça e quarta, faltando os dados de domingo, segunda e terça.",
            "Ignorar segunda e terça faria com que todas as alterações criadas nesses dois dias fossem perdidas.",
            "Como cada incremental salva apenas a diferença desde o dia anterior, a restauração exige o Full mais toda a cadeia de incrementais subsequentes.",
            "Restaurar apenas o de domingo faria a empresa perder todo o trabalho de segunda, terça e quarta-feira."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a principal vantagem da estratégia de 'Backup Diferencial' em comparação com o 'Backup Incremental' no momento da restauração de um desastre?",
        options: [
            "O backup diferencial ocupa menos espaço em disco ao longo da semana.",
            "A restauração exige apenas duas mídias: o último Backup Completo (Full) e o último Backup Diferencial.",
            "O backup diferencial é mais rápido para ser executado na sexta-feira do que o incremental.",
            "O backup diferencial limpa o atributo de arquivamento (archive bit) todos os dias."
        ],
        answer: 1,
        explanations: [
            "Pelo contrário, o diferencial cresce a cada dia da semana, ocupando mais espaço que o incremental.",
            "Como o diferencial acumula todas as alterações desde o último Full, bastam apenas essas duas mídias para restaurar tudo.",
            "Na sexta-feira, o diferencial precisa copiar todos os dados alterados desde domingo, sendo mais lento que o incremental diário.",
            "Apenas o Backup Completo (Full) e o Incremental limpam o archive bit; o Diferencial não limpa."
        ]
    },
    {
        domain: "DOM2",
        q: "Na Análise de Impacto no Negócio (BIA), a diretoria define que o sistema de pagamentos só pode ficar fora do ar por no máximo 2 horas após um desastre, e que a empresa tolera perder no máximo os dados dos últimos 15 minutos antes da pane. Como são chamadas essas métricas respectivamente?",
        options: [
            "RPO (2 horas) e RTO (15 minutos).",
            "RTO (2 horas) e RPO (15 minutos).",
            "MTBF (2 horas) e ALE (15 minutos).",
            "SLE (2 horas) e ARO (15 minutos)."
        ],
        answer: 1,
        explanations: [
            "Os conceitos foram invertidos: RTO mede tempo de inatividade e RPO mede perda de dados.",
            "RTO (Recovery Time Objective) é o tempo máximo tolerável de parada (2h); RPO (Recovery Point Objective) é a perda máxima de dados medida em tempo (15m).",
            "MTBF é o tempo médio entre falhas de hardware e ALE é a expectativa anual de perda financeira.",
            "SLE e ARO são métricas financeiras da análise quantitativa de riscos."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma instituição financeira exige um RTO de 10 minutos e um RPO de 0 segundos (zero perda de dados) para seu sistema principal. Qual local alternativo de recuperação atende obrigatoriamente a esses requisitos?",
        options: [
            "Cold Site (Site Frio).",
            "Warm Site (Site Morno).",
            "Hot Site com espelhamento síncrono de dados em tempo real.",
            "Hotsite sob demanda (Hotsite móvel em caminhão)."
        ],
        answer: 2,
        explanations: [
            "Um Cold Site é apenas uma sala vazia com energia e rede; leva semanas para comprar e montar servidores.",
            "Um Warm Site possui hardware, mas exige restaurar fitas de backup, o que leva horas e gera perda de dados (RPO > 0).",
            "Apenas um Hot Site ativo com replicação síncrona garante continuidade quase imediata (RTO ~10m) sem perda de transações (RPO = 0).",
            "Um hotsite móvel exige o deslocamento físico de caminhões/contêineres, levando várias horas para entrar em operação."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a diferença fundamental de escopo entre o Plano de Continuidade de Negócios (BCP) e o Plano de Recuperação de Desastres (DRP)?",
        options: [
            "O BCP foca apenas na compra de seguros, enquanto o DRP foca no treinamento dos bombeiros.",
            "O BCP visa manter os processos críticos de negócio da empresa operando (pessoas, atendimento, filiais), enquanto o DRP foca na restauração técnica da infraestrutura de TI.",
            "O DRP é usado apenas para falhas de energia, enquanto o BCP é usado apenas para ataques cibernéticos.",
            "Não há diferença; ambos são sinônimos exatos na ISO 27001."
        ],
        answer: 1,
        explanations: [
            "Seguros e brigadas de incêndio são apenas controles pontuais, não a definição de BCP e DRP.",
            "O BCP tem visão ampla de negócios (manter a empresa funcionando durante a crise), e o DRP é o subplano técnico focado em reerguer servidores, redes e dados.",
            "Ambos atuam em qualquer tipo de desastre que interrompa as operações.",
            "O DRP é um componente técnico contido dentro da estratégia maior do BCP."
        ]
    },
    {
        domain: "DOM2",
        q: "Um atendente de nível 1 do Help Desk recebe um chamado complexo sobre uma possível invasão em um servidor de banco de dados. Como não possui conhecimento técnico para diagnosticar o servidor, ele transfere o chamado para a equipe sênior de engenharia de segurança. Como esse procedimento é denominado?",
        options: [
            "Escalamento Hierárquico (Vertical).",
            "Escalamento Funcional (Horizontal).",
            "Divulgação Responsável.",
            "Segregação de Ambientes."
        ],
        answer: 1,
        explanations: [
            "Escalamento hierárquico ocorre quando se aciona um gerente ou diretor para tomar decisões administrativas ou aprovar recursos em crise.",
            "Escalamento funcional (horizontal) é a transferência do chamado para especialistas com maior competência técnica para resolver o problema.",
            "Divulgação responsável é a notificação ética de uma falha descoberta por um pesquisador externo à empresa.",
            "Segregação de ambientes é a separação entre desenvolvimento, teste e produção."
        ]
    },
    {
        domain: "DOM2",
        q: "No gerenciamento de incidentes de segurança, qual é o objetivo principal da fase de 'Contenção' (Containment) acionada logo após a confirmação de um ataque de ransomware na rede?",
        options: [
            "Formatar todos os computadores e restaurar os backups imediatamente.",
            "Isolar rapidamente os sistemas afetados para limitar os danos e impedir que o incidente se espalhe pela rede.",
            "Redigir o relatório final de lições aprendidas para a diretoria.",
            "Processar judicialmente os invasores."
        ],
        answer: 1,
        explanations: [
            "A formatação e restauração pertencem às fases posteriores de Erradicação e Recuperação.",
            "A Contenção visa estancar o sangramento (ex: desconectar cabos de rede ou isolar VLANs) para evitar que o ataque contamine outros servidores.",
            "Lições aprendidas é a última etapa do ciclo, realizada apenas após o encerramento total do incidente.",
            "Medidas legais ocorrem fora da resposta técnica imediata de contenção."
        ]
    },
    {
        domain: "DOM2",
        q: "Um pesquisador independente descobre uma falha crítica no site de um banco. Ele entra em contato em sigilo com o CISO da instituição, relata os detalhes técnicos e aguarda 60 dias para que o banco corrija o sistema antes de publicar a descoberta. Como essa prática é chamada?",
        options: [
            "Engenharia Social.",
            "Divulgação Responsável (Responsible Disclosure).",
            "Dumpster Diving.",
            "Ataque Dia-Zero (Zero-Day)."
        ],
        answer: 1,
        explanations: [
            "Engenharia social é a manipulação de pessoas para obter vantagens ilícitas.",
            "A Divulgação Responsável é o modelo ético de cooperação onde o pesquisador dá prazo para a correção antes de tornar a falha pública.",
            "Dumpster Diving é vasculhar o lixo físico em busca de informações sensíveis.",
            "Um ataque Zero-Day ocorre quando criminosos exploram uma falha desconhecida antes que haja correção."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa terceirizou o desenvolvimento de um sistema crítico. Durante o contrato, o fornecedor decide subcontratar parte da programação para uma terceira empresa desconhecida. De acordo com a ISO/IEC 27002, qual ação é obrigatória para a empresa contratante?",
        options: [
            "Isentar-se de qualquer responsabilidade, pois o problema agora é exclusivo do subcontratado.",
            "Investigar os novos riscos introduzidos e exigir no contrato/SLA que o fornecedor principal responda pelo cumprimento das políticas de segurança pelos subcontratados.",
            "Proibir qualquer tipo de contrato de nível de serviço (SLA).",
            "Demitir o próprio CISO."
        ],
        answer: 1,
        explanations: [
            "A responsabilidade legal e final pela segurança das informações nunca pode ser terceirizada.",
            "A empresa deve avaliar os riscos da cadeia de suprimentos e garantir contratualmente que o fornecedor principal assegure a conformidade dos quarteirizados.",
            "O SLA é justamente o instrumento principal para formalizar e cobrar os requisitos de segurança.",
            "A terceirização não elimina a necessidade de governança interna pelo CISO."
        ]
    },
    {
        domain: "DOM4",
        q: "O proprietário de uma empresa suspeita que funcionários estão utilizando a internet corporativa para atividades ilícitas durante o expediente. De acordo com a literatura da EXIN, em que condição o empregador pode monitorar legalmente os e-mails e acessos dos colaboradores?",
        options: [
            "A qualquer momento e de forma totalmente secreta, sem nunca avisar ninguém.",
            "Desde que exista uma política/código de conduta claro e os funcionários tenham sido previamente informados de que o monitoramento pode ocorrer.",
            "Nunca, pois o monitoramento corporativo é estritamente proibido em qualquer circunstância.",
            "Apenas após demitir todos os funcionários do departamento."
        ],
        answer: 1,
        explanations: [
            "Monitoramento oculto sem aviso prévio viola leis de privacidade e direitos trabalhistas na Europa e no Brasil.",
            "A transparência prévia por meio de políticas de uso aceitável ou código de conduta legitima o monitoramento corporativo.",
            "O empregador tem o direito legítimo de proteger sua infraestrutura, desde que haja ciência prévia dos colaboradores.",
            "O monitoramento preventivo/detectivo ocorre durante a relação de trabalho mediante regras claras."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a diferença fundamental entre um Sistema de Detecção de Intrusão (IDS) e um Sistema de Prevenção de Intrusão (IPS)?",
        options: [
            "O IDS bloqueia ataques automaticamente, enquanto o IPS apenas gera relatórios mensais.",
            "O IDS atua de forma passiva monitorando o tráfego e gerando alertas, enquanto o IPS fica em linha (in-line) e bloqueia ativamente pacotes maliciosos em tempo real.",
            "O IDS funciona apenas em redes sem fio, enquanto o IPS funciona apenas em cabos de fibra óptica.",
            "Não há diferença funcional entre IDS e IPS."
        ],
        answer: 1,
        explanations: [
            "As definições estão invertidas: quem previne/bloqueia ativamente é o IPS.",
            "O IDS é um sensor detectivo (emite alertas); o IPS atua como controle preventivo/repressivo em linha descartando o tráfego malicioso.",
            "Ambos operam independentemente do meio físico de transmissão.",
            "A capacidade de bloqueio ativo em linha diferencia fundamentalmente o IPS do IDS."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um Sistema de Detecção de Intrusão (IDS), qual é a consequência direta de um 'Falso Negativo'?",
        options: [
            "Um tráfego legítimo de um funcionário é bloqueado por engano.",
            "Um ataque real e malicioso ocorre na rede sem gerar nenhum alerta ou suspeita.",
            "O sistema gera milhares de alertas inúteis para atividades normais.",
            "O servidor de logs reinicia automaticamente."
        ],
        answer: 1,
        explanations: [
            "Bloquear ou alertar sobre tráfego legítimo é um Falso Positivo.",
            "O Falso Negativo é o cenário mais perigoso: o ataque é real, mas o sistema falha em detectá-lo (deixa passar).",
            "Alertas excessivos para atividades normais caracterizam Falsos Positivos.",
            "Falso negativo refere-se à falha na lógica de detecção, não à reinicialização de hardware."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a função primordial de uma Zona Desmilitarizada (DMZ) em uma arquitetura de rede corporativa?",
        options: [
            "Armazenar os backups offline da diretoria.",
            "Isolar os servidores acessíveis pela internet pública (como Web e E-mail) da rede interna privada (LAN).",
            "Substituir a necessidade de usar senhas nos computadores internos.",
            "Acelerar a velocidade de download dos funcionários."
        ],
        answer: 1,
        explanations: [
            "Backups offline devem ficar em cofres ou locais físicos externos, não em uma sub-rede exposta à internet.",
            "A DMZ cria uma camada intermediária protegida por firewalls para que, caso um servidor público seja invadido, o atacante não tenha acesso direto à LAN interna.",
            "A DMZ segmenta redes, mas não elimina a necessidade de autenticação nos sistemas.",
            "O objetivo da DMZ é segurança e isolamento, não otimização de banda."
        ]
    },
    {
        domain: "DOM3",
        q: "Na configuração de firewalls corporativos, o que determina a filosofia de segurança conhecida como 'Default Deny' (Bloqueio Padrão)?",
        options: [
            "Todo o tráfego é permitido por padrão, bloqueando-se apenas os sites conhecidos por conter vírus.",
            "Todo o tráfego de rede é bloqueado por padrão, sendo permitido apenas aquilo que foi explicitamente autorizado nas regras.",
            "Todos os usuários têm acesso de administrador até cometerem uma infração.",
            "O firewall desliga automaticamente fora do horário comercial."
        ],
        answer: 1,
        explanations: [
            "Isso descreve a abordagem permissiva ('Default Allow'), que é insegura e contrária às boas práticas.",
            "No Default Deny (Whitelisting), tudo o que não é estritamente necessário e autorizado é negado por padrão.",
            "Isso viola o princípio do Menor Privilégio.",
            "Firewalls devem operar 24 horas por dia, 7 dias por semana."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual controle lógico é posicionado deliberadamente na rede para atuar como uma 'isca' controlada, atraindo invasores para estudar suas táticas sem comprometer os sistemas reais de produção?",
        options: [
            "Mantrap.",
            "Honeypot.",
            "No-break (UPS).",
            "Proxy Reverso."
        ],
        answer: 1,
        explanations: [
            "Mantrap é uma porta dupla intertravada de segurança física.",
            "O Honeypot simula um sistema vulnerável atraente para desviar a atenção dos atacantes e coletar inteligência sobre suas ferramentas.",
            "UPS é um equipamento de proteção elétrica contra quedas de energia.",
            "Proxy reverso encaminha requisições legítimas para servidores internos, não sendo uma armadilha de estudo forense."
        ]
    },
    {
        domain: "DOM4",
        q: "De acordo com a norma ISO/IEC 27001, qual afirmação é rigorosamente verdadeira em relação à exclusão de requisitos para uma organização que busca a certificação?",
        options: [
            "A organização pode excluir qualquer cláusula de 4 a 10 se achar que dá muito trabalho.",
            "A exclusão de requisitos das cláusulas 4 a 10 NÃO é permitida; apenas os controles do Anexo A podem ser excluídos, mediante justificativa na Declaração de Aplicabilidade (SoA).",
            "Nenhum controle do Anexo A pode ser excluído sob nenhuma hipótese.",
            "A organização pode excluir a Auditoria Interna se tiver menos de 50 funcionários."
        ],
        answer: 1,
        explanations: [
            "As cláusulas 4 a 10 contêm os requisitos estruturais obrigatórios do SGSI.",
            "Para obter conformidade com a ISO 27001, todas as cláusulas de 4 a 10 são mandatórias; já o Anexo A é flexível conforme a análise de riscos documentada na SoA.",
            "Controles do Anexo A que não se aplicam ao negócio (ex: desenvolvimento de software em uma empresa que não programa) podem ser excluídos justificadamente.",
            "A Auditoria Interna (Cláusula 9) é obrigatória independentemente do tamanho da empresa."
        ]
    },
    {
        domain: "DOM4",
        q: "Na fase 'Check' (Checar) do ciclo PDCA de um SGSI, qual das seguintes atividades é executada para avaliar se o sistema de gestão continua pertinente, adequado e eficaz?",
        options: [
            "Elaboração inicial da Política de Segurança.",
            "Revisão pela Direção (Análise Crítica) e Auditorias Internas.",
            "Implementação física de catracas biométricas.",
            "Definição do escopo do SGSI."
        ],
        answer: 1,
        explanations: [
            "A elaboração da política e definição do escopo ocorrem na fase inicial 'Plan' (Planejar).",
            "A fase 'Check' concentra o monitoramento de métricas, auditorias internas e a revisão crítica pela alta direção.",
            "A implementação prática dos controles ocorre na fase 'Do' (Fazer).",
            "Definir o escopo faz parte do planejamento ('Plan')."
        ]
    },
    {
        domain: "DOM4",
        q: "Durante a operação do SGSI, uma auditoria identifica uma não conformidade grave no processo de descarte de mídias. A equipe investiga a causa raiz e altera o procedimento para evitar que o erro volte a ocorrer. Em qual fase do PDCA essa correção acontece?",
        options: [
            "Plan (Planejar).",
            "Do (Fazer).",
            "Check (Checar).",
            "Act (Agir)."
        ],
        answer: 3,
        explanations: [
            "Plan é o planejamento inicial antes da operação.",
            "Do é a execução rotineira dos controles planejados.",
            "Check é o momento em que a auditoria descobriu o problema; corrigir o processo é a etapa seguinte.",
            "A fase 'Act' (Agir) é dedicada às ações corretivas e à melhoria contínua do SGSI com base nos achados da fase Check."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual é a diferença conceitual entre 'Due Diligence' (Devida Diligência) e 'Due Care' (Devido Cuidado) na governança de segurança?",
        options: [
            "Due Diligence é o ato de investigar e compreender os riscos antes de agir; Due Care é a ação prática de implementar os controles adequados para proteger a organização.",
            "Due Care é investigar fornecedores; Due Diligence é apenas pagar multas.",
            "Ambos significam exatamente a mesma coisa e referem-se apenas à limpeza física do escritório.",
            "Due Diligence é exclusivo de hospitais, enquanto Due Care é exclusivo de bancos."
        ],
        answer: 0,
        explanations: [
            "Due Diligence = investigação/pesquisa prévia (saber o que fazer); Due Care = execução responsável dos controles (fazer o que é certo).",
            "Os conceitos foram trocados e reduzidos incorretamente.",
            "São conceitos jurídicos e de governança distintos e complementares.",
            "Ambos aplicam-se a qualquer tipo de organização corporativa."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a literatura da EXIN proíbe copiar bancos de dados reais de produção diretamente para ambientes de teste e homologação de software?",
        options: [
            "Porque os dados de produção são muito pesados e travam os servidores de teste.",
            "Porque ambientes de teste costumam ter controles de acesso menos rigorosos, expondo dados pessoais e confidenciais de clientes sem necessidade.",
            "Porque os desenvolvedores não sabem usar bancos de dados reais.",
            "Porque a criptografia impede que dados de produção sejam copiados."
        ],
        answer: 1,
        explanations: [
            "O motivo não é capacidade de processamento, mas sim proteção da confidencialidade e privacidade.",
            "Dados reais em ambientes de teste violam o princípio do menor privilégio e leis como o GDPR/LGPD; deve-se usar dados fictícios ou anonimizados.",
            "Desenvolvedores sabem operar bancos, mas não devem ter acesso a dados sensíveis reais de clientes.",
            "Os dados podem ser copiados tecnicamente, mas a política de segurança proíbe o uso sem mascaramento."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual prática administrativa deve ser executada IMEDIATAMENTE quando um administrador de sistemas é desligado da empresa por demissão?",
        options: [
            "Aguardar 30 dias para ver se ele precisa acessar algum e-mail antigo.",
            "Revogar e bloquear imediatamente todas as suas credenciais de acesso lógico, tokens e crachás físicos.",
            "Compartilhar a senha dele com o estagiário para não interromper o trabalho.",
            "Formatar o servidor principal da empresa."
        ],
        answer: 1,
        explanations: [
            "Manter acessos ativos após o desligamento cria um risco crítico de sabotagem ou roubo de dados.",
            "A revogação imediata de acessos físicos e lógicos neutraliza o risco de retaliação por parte do ex-colaborador.",
            "Compartilhar senhas viola a responsabilização individual (Accountability).",
            "Formatar o servidor causaria indisponibilidade desnecessária aos negócios."
        ]
    },
    {
        domain: "DOM3",
        q: "A 'Política de Mesa Limpa e Tela Limpa' (Clear Desk and Clear Screen) tem como objetivo principal proteger qual pilar da segurança da informação?",
        options: [
            "Disponibilidade.",
            "Confidencialidade.",
            "Não-repúdio.",
            "Redundância."
        ],
        answer: 1,
        explanations: [
            "Guardar papéis e bloquear telas não aumenta o tempo de atividade dos servidores.",
            "Impede que visitantes, equipe de limpeza ou colegas não autorizados leiam documentos na mesa ou informações na tela destravada.",
            "Não-repúdio envolve provas criptográficas de autoria.",
            "Redundância refere-se à duplicação de componentes críticos."
        ]
    },
    {
        domain: "DOM3",
        q: "Antes de descartar ou doar discos rígidos antigos de servidores corporativos, qual procedimento é obrigatório para evitar o vazamento de dados residuais?",
        options: [
            "Apenas apagar os arquivos e esvaziar a Lixeira do sistema operacional.",
            "Realizar uma formatação rápida padrão.",
            "Executar sanitização segura (Wipe criptográfico/sobrescrita) ou destruição física (trituração/desmagnetização) da mídia.",
            "Colocar uma etiqueta escrita 'Proibido Ler' no disco."
        ],
        answer: 2,
        explanations: [
            "Esvaziar a lixeira apenas remove os ponteiros dos arquivos, permitindo recuperação fácil com ferramentas forenses.",
            "A formatação rápida não apaga os setores magnéticos onde os dados reais estão gravados.",
            "Apenas a sobrescrita múltipla (Wipe) ou a destruição física garantem que os dados sejam irrecuperáveis.",
            "Etiquetas não impedem a leitura técnica do disco por terceiros."
        ]
    },
    {
        domain: "DOM4",
        q: "Na gestão da cadeia de suprimentos e contratação de serviços em nuvem (Cloud Computing), com quem permanece, em última instância, a responsabilidade legal pela segurança e privacidade dos dados da organização?",
        options: [
            "Exclusivamente com o provedor de nuvem.",
            "Sempre com a organização contratante (proprietária dos dados).",
            "Com o fabricante do hardware dos servidores.",
            "Com o auditor externo."
        ],
        answer: 1,
        explanations: [
            "O provedor responde apenas pelo que foi acordado no contrato/SLA, mas não assume a responsabilidade legal final perante os titulares e reguladores.",
            "Você pode terceirizar a operação técnica, mas nunca a responsabilidade final (Accountability) pelos seus dados.",
            "Fabricantes de hardware não têm responsabilidade sobre a gestão dos dados armazenados.",
            "O auditor apenas avalia a conformidade, sem assumir responsabilidade operacional ou legal."
        ]
    },
    {
        domain: "DOM4",
        q: "Em uma empresa multinacional que opera com uma estrutura de segurança parcialmente descentralizada, a matriz define a Política de Segurança corporativa, mas nomeia um LISO (Local Information Security Officer) em cada país onde possui filiais. Qual é a responsabilidade principal do LISO em sua jurisdição?",
        options: [
            "Reescrever do zero a estratégia global de negócios da matriz.",
            "Garantir a conformidade com as leis locais daquele país e supervisionar a segurança física das filiais sob sua responsabilidade.",
            "Emitir pessoalmente o certificado oficial ISO/IEC 27001 para a filial.",
            "Substituir o Help Desk no atendimento telefônico de chamados de nível 1."
        ],
        answer: 1,
        explanations: [
            "A estratégia global de negócios é responsabilidade exclusiva da Alta Direção (Gestão Geral) na matriz.",
            "Na literatura oficial da EXIN (estudo de caso Springbooks), o LISO adapta e aplica as diretrizes localmente, garantindo a adesão às leis regionais e a segurança física das instalações.",
            "Certificados ISO 27001 só podem ser emitidos por órgãos certificadores externos credenciados e independentes.",
            "O atendimento operacional inicial pertence ao Help Desk, não ao encarregado de segurança."
        ]
    },
    {
        domain: "DOM3",
        q: "De acordo com as boas práticas de segurança física da literatura oficial da EXIN, qual regra deve ser aplicada ao design e uso dos crachás de identificação dos funcionários?",
        options: [
            "O crachá deve conter o nome completo da empresa, endereço e logotipo em letras grandes para facilitar a devolução caso seja perdido na rua.",
            "O crachá deve ser usado de forma visível dentro do prédio, mas NÃO deve exibir o logotipo ou nome da organização para não revelar a qual empresa dá acesso caso seja perdido fora das instalações.",
            "O crachá deve ter a senha de rede do funcionário impressa no verso para evitar esquecimentos.",
            "O crachá só precisa ser usado pelos estagiários, sendo opcional para diretores e visitantes."
        ],
        answer: 1,
        explanations: [
            "Colocar o nome e endereço da empresa no crachá permite que qualquer pessoa que o encontre na rua saiba exatamente qual prédio invadir.",
            "O crachá precisa ser visível internamente para controle de acesso, mas neutro externamente (sem logotipo/nome da empresa) para proteger a instalação em caso de perda ou furto.",
            "Anotar senhas em crachás ou papéis viola gravemente a confidencialidade das credenciais.",
            "A política de uso visível de crachás nas dependências deve valer para todos (funcionários, diretores e visitantes), sem exceções hierárquicas."
        ]
    },
    {
        domain: "DOM1",
        q: "Uma organização está realizando o inventário de seus ativos de informação para contratar um seguro e definir o nível adequado de proteção. De acordo com a literatura da EXIN, qual fator NÃO é relevante para determinar o valor de um dado para a organização?",
        options: [
            "O custo e o esforço necessários para reconstruir o dado caso seja perdido.",
            "O impacto comercial e legal caso o dado seja divulgado a concorrentes.",
            "O conteúdo bruto isolado do dado, independentemente do seu contexto ou utilidade para o negócio.",
            "A importância estratégica da informação para os processos críticos da empresa."
        ],
        answer: 2,
        explanations: [
            "O custo de reconstrução/recuperação é um fator essencial para valorar um ativo de informação.",
            "O impacto de uma quebra de confidencialidade determina diretamente a sensibilidade e o valor do ativo.",
            "Dados brutos isolados e fora de contexto não possuem valor intrínseco; o valor nasce da utilidade, do contexto de negócio e das consequências de sua perda.",
            "A criticidade para a operação do negócio é um dos pilares da valoração de ativos."
        ]
    },
    {
        domain: "DOM2",
        q: "Ao chegar para trabalhar pela manhã, um funcionário percebe que a fechadura eletrônica da porta de emergência do andar térreo está com defeito e não tranca completamente, embora nenhum estranho tenha entrado pelo local. Segundo a terminologia da ISO/IEC 27001, como essa situação deve ser reportada?",
        options: [
            "Como uma Fraqueza de Segurança (Security Weakness).",
            "Como um Desastre Catastrófico.",
            "Como um Controle Preventivo.",
            "Como um Ataque de Engenharia Social."
        ],
        answer: 0,
        explanations: [
            "Uma falha ou defeito em um controle que ainda não foi explorado para causar dano é classificado e reportado como uma Fraqueza de Segurança (Weakness).",
            "Não houve interrupção crítica dos negócios para caracterizar um desastre.",
            "A fechadura deveria ser um controle preventivo, mas o defeito nela representa uma fraqueza/vulnerabilidade.",
            "Trata-se de uma falha física mecânica/eletrônica, sem relação com manipulação psicológica."
        ]
    },
    {
        domain: "DOM2",
        q: "O software antivírus instalado na estação de trabalho de um analista detecta um arquivo suspeito em um anexo de e-mail, bloqueia a sua execução imediatamente e o move para a quarentena sem que nenhum dado ou sistema seja afetado. Como essa ocorrência é classificada?",
        options: [
            "Um Incidente de Segurança grave.",
            "Um Evento de Segurança da Informação.",
            "Uma Análise Quantitativa de Risco.",
            "Uma Quebra de Disponibilidade."
        ],
        answer: 1,
        explanations: [
            "Para ser um incidente, a ocorrência precisaria comprometer ou ter alta probabilidade de comprometer as operações do negócio; aqui o controle funcionou e neutralizou a ação.",
            "Qualquer ocorrência observável em um sistema ou rede (como um bloqueio bem-sucedido de antivírus ou tentativa falha de login) é um Evento de Segurança.",
            "Análise quantitativa é um método de cálculo de riscos na fase de planejamento.",
            "O sistema continuou operando normalmente, sem perda de disponibilidade."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante o tratamento de um ataque cibernético em andamento, a equipe técnica do SOC percebe que a única forma de impedir o vazamento da base de clientes é desligar temporariamente o portal principal de vendas da empresa. Como o analista não tem autoridade para parar o negócio, ele aciona o Diretor de Operações e o CISO. Qual tipo de escalamento foi realizado?",
        options: [
            "Escalamento Funcional (Horizontal).",
            "Escalamento Hierárquico (Vertical).",
            "Acúmulo de Privilégios (Privilege Creep).",
            "Transferência de Risco."
        ],
        answer: 1,
        explanations: [
            "O escalamento funcional (horizontal) ocorre quando se busca maior competência técnica entre equipes de especialistas.",
            "O escalamento hierárquico (vertical) ocorre quando é necessário acionar níveis superiores de gestão com autoridade para tomar decisões de negócio ou alocar recursos em uma crise.",
            "Privilege Creep é a falha administrativa de acumular permissões antigas ao mudar de cargo.",
            "Transferência de risco é o repasse financeiro a terceiros (como seguros) antes do incidente."
        ]
    },
    {
        domain: "DOM2",
        q: "No ciclo de gerenciamento de incidentes de segurança da informação, qual é a finalidade principal da etapa de 'Lições Aprendidas' (Lessons Learned), conduzida após a recuperação e o encerramento formal do chamado?",
        options: [
            "Descobrir um culpado para demitir publicamente como exemplo.",
            "Ocultar o incidente dos relatórios de auditoria interna.",
            "Analisar a causa raiz do ocorrido para aprimorar os controles e procedimentos, evitando que incidentes semelhantes se repitam no futuro.",
            "Iniciar o primeiro contato com o Help Desk."
        ],
        answer: 2,
        explanations: [
            "O foco da gestão de incidentes é a melhoria do processo e da segurança, não a caça punitiva sem revisão de controles.",
            "Todos os incidentes devem ser devidamente documentados e mantidos para fins de auditoria e melhoria contínua.",
            "A etapa de Lições Aprendidas retroalimenta o SGSI (fase Act do PDCA), corrigindo vulnerabilidades nos processos para prevenir recorrências.",
            "O contato com o Help Desk é a primeiríssima etapa (Notificação/Registro), e não a última."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma empresa de médio porte precisa garantir a continuidade de seu processamento de dados em caso de incêndio, mas não possui orçamento para manter um prédio secundário alugado e equipado o ano inteiro. Ela contrata um fornecedor que envia caminhões/contêineres climatizados com servidores e links de comunicação até o estacionamento da empresa em poucas horas após um sinistro. Como essa solução é chamada na literatura da EXIN?",
        options: [
            "Cold Site (Site Frio).",
            "Hotsite sob demanda (Hotsite móvel).",
            "Backup Diferencial.",
            "Zona Desmilitarizada (DMZ)."
        ],
        answer: 1,
        explanations: [
            "Cold Site é uma instalação física fixa vazia (apenas com energia e piso elevado).",
            "O Hotsite sob demanda (ou Hotsite móvel) utiliza unidades móveis em caminhões ou contêineres equipados com infraestrutura de TI que se deslocam até o cliente em caso de desastre.",
            "Backup diferencial é uma estratégia de cópia de arquivos, não uma instalação física alternativa.",
            "DMZ é uma sub-rede lógica de segurança perimetral."
        ]
    },
    {
        domain: "DOM2",
        q: "Na gestão de continuidade de negócios, qual característica define corretamente um 'Cold Site' (Site Frio) em comparação a um 'Warm Site' ou 'Hot Site'?",
        options: [
            "É o modelo mais caro de manter, mas permite retomada instantânea em menos de 1 minuto.",
            "Possui apenas o espaço físico básico (energia elétrica, refrigeração e cabeamento), sem servidores ou computadores instalados, tendo o menor custo de manutenção e o maior tempo de recuperação (RTO longo).",
            "Possui todos os servidores ligados e sincronizados em tempo real com a sede.",
            "É proibido pela norma ISO/IEC 27001."
        ],
        answer: 1,
        explanations: [
            "O modelo mais caro e de retomada quase instantânea é o Hot Site.",
            "O Cold Site oferece apenas a sala preparada; em caso de desastre, a empresa ainda precisará adquirir, entregar e instalar os equipamentos antes de restaurar os dados.",
            "Servidores ligados e sincronizados em tempo real caracterizam um Hot Site.",
            "A ISO 27001 permite qualquer tipo de site alternativo, desde que atenda ao RTO definido pela organização na BIA."
        ]
    },
    {
        domain: "DOM3",
        q: "A especificação técnica de um lote de discos rígidos corporativos informa que o equipamento possui um índice de 1.500.000 horas de operação estimada antes de apresentar uma pane física. Qual sigla representa essa métrica de confiabilidade de hardware?",
        options: [
            "RPO (Recovery Point Objective).",
            "MTBF (Mean Time Between Failures / Tempo Médio Entre Falhas).",
            "ALE (Annual Loss Expectancy).",
            "SoA (Statement of Applicability)."
        ],
        answer: 1,
        explanations: [
            "RPO mede a perda máxima tolerável de dados em tempo retroativo.",
            "O MTBF (Tempo Médio Entre Falhas) indica a expectativa média de vida útil operacional de um componente de hardware entre panes.",
            "ALE é a perda financeira anual esperada na análise de riscos.",
            "SoA é a Declaração de Aplicabilidade dos controles do Anexo A."
        ]
    },
    {
        domain: "DOM3",
        q: "Um Sistema de Detecção de Intrusão (IDS) foi configurado para aprender o padrão normal de tráfego da rede corporativa durante 30 dias (criando uma linha de base / baseline) e, a partir daí, disparar alertas sempre que notar um desvio estatístico no comportamento da rede. Qual método de detecção está sendo utilizado?",
        options: [
            "Detecção baseada em Assinatura (Signature-based).",
            "Detecção baseada em Anomalia (Comportamental / Anomaly-based).",
            "Criptografia Assimétrica.",
            "Controle de Acesso Discricionário."
        ],
        answer: 1,
        explanations: [
            "A detecção por assinatura apenas compara pacotes com uma lista prévia de ataques já conhecidos (como um antivírus tradicional).",
            "A detecção baseada em anomalia monitora desvios em relação ao comportamento histórico normal (baseline), sendo capaz de detectar ataques inéditos.",
            "Criptografia protege o sigilo dos dados, não sendo um motor de detecção de intrusão.",
            "DAC é um modelo de permissões de arquivos."
        ]
    },
    {
        domain: "DOM3",
        q: "No último dia útil do mês, o setor de Recursos Humanos gera um tráfego atípico porém 100% legítimo na rede interna ao processar a folha de pagamento. O Sistema de Detecção de Intrusão (IDS) interpreta esse pico como um ataque de exfiltração de dados e aciona o alarme no painel de segurança. Como esse evento do IDS é classificado?",
        options: [
            "Falso Negativo.",
            "Falso Positivo.",
            "Ataque Dia-Zero (Zero-Day).",
            "Bomba Lógica."
        ],
        answer: 1,
        explanations: [
            "Falso negativo ocorre quando um ataque real acontece e o sensor não detecta nada.",
            "Um Falso Positivo ocorre quando uma atividade benigna e legítima é classificada erroneamente pelo sensor como maliciosa, gerando um alarme falso.",
            "Zero-Day é uma vulnerabilidade recém-descoberta sem patch disponível.",
            "Bomba lógica é um código malicioso programado para disparar sob certas condições."
        ]
    },
    {
        domain: "DOM3",
        q: "Em uma Infraestrutura de Chave Pública (ICP / PKI), quando a chave privada de um servidor corporativo é roubada antes da data de expiração do seu certificado digital, qual entidade é responsável por publicar o número de série desse certificado na Lista de Revogação de Certificados (CRL)?",
        options: [
            "O provedor de internet doméstico do usuário.",
            "A Autoridade Certificadora (CA) que emitiu o certificado.",
            "O fabricante do navegador web.",
            "O departamento de Recursos Humanos."
        ],
        answer: 1,
        explanations: [
            "Provedores de internet apenas roteiam pacotes e não gerenciam certificados criptográficos.",
            "Cabe exclusivamente à Autoridade Certificadora (CA) manter e publicar a CRL (Certificate Revocation List) para avisar a todos que aquele certificado foi invalidado.",
            "Navegadores apenas consultam a CRL publicada pela CA para verificar se o certificado ainda é confiável.",
            "O RH cuida de controles administrativos de pessoal, não da infraestrutura criptográfica."
        ]
    },
    {
        domain: "DOM3",
        q: "Dentro da arquitetura de uma Infraestrutura de Chave Pública (ICP / PKI), qual é o papel específico desempenhado pela Autoridade de Registro (AR / RA) antes que um certificado digital seja emitido?",
        options: [
            "Verificar e validar presencialmente ou documentalmente a identidade do solicitante antes de autorizar a Autoridade Certificadora (CA) a emitir o certificado.",
            "Quebrar as senhas fracas dos usuários por força bruta.",
            "Realizar o backup diário das fitas magnéticas do data center.",
            "Substituir o firewall na filtragem de portas TCP/IP."
        ],
        answer: 0,
        explanations: [
            "A Autoridade de Registro (RA) atua como o 'balcão de verificação': ela confere os documentos e a identidade real da pessoa/empresa e avisa a CA que o certificado pode ser gerado.",
            "Auditorias de senha não fazem parte das atribuições de uma Autoridade de Registro.",
            "Rotinas de backup pertencem à equipe de operações de TI (Custodiantes).",
            "A RA é uma entidade de validação de identidade na PKI, não um equipamento de rede."
        ]
    },
    {
        domain: "DOM2",
        q: "De acordo com as definições de malwares na literatura da EXIN, qual é a diferença operacional essencial entre um 'Vírus' tradicional e um 'Worm' (Verme)?",
        options: [
            "O Vírus propaga-se sozinho pela rede sem precisar de arquivos, enquanto o Worm exige que o usuário clique em uma planilha infectada.",
            "O Vírus precisa infectar um arquivo ou programa hospedeiro e geralmente depende da ação humana para se espalhar, enquanto o Worm é autônomo e se replica sozinho pela rede.",
            "O Vírus apenas exibe propagandas no navegador, enquanto o Worm criptografa o disco rígido pedindo Bitcoin.",
            "Não existe diferença técnica entre Vírus e Worm."
        ],
        answer: 1,
        explanations: [
            "As definições foram invertidas: quem se propaga de forma autônoma pela rede é o Worm.",
            "O Vírus age como um parasita que precisa de um arquivo hospedeiro (ex: .exe, macro) e ativação; o Worm opera de forma independente explorando falhas de rede para se multiplicar.",
            "Exibir propagandas é característica de Adware, e criptografar dados pedindo resgate é Ransomware.",
            "A necessidade de hospedeiro versus propagação autônoma em rede diferencia claramente os dois conceitos na prova."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante uma auditoria de código-fonte, descobre-se que um programador inseriu um trecho oculto no sistema de contabilidade que apaga todas as tabelas fiscais caso o CPF dele deixe de constar na folha de pagamento ativa da empresa. Como essa ameaça é classificada?",
        options: [
            "Bomba lógica (Logic Bomb).",
            "Phishing.",
            "Tailgating.",
            "Análise de Tráfego."
        ],
        answer: 0,
        explanations: [
            "Uma Bomba Lógica é um código inserido em um software que permanece adormecido até que uma condição lógica específica (data ou evento, como a demissão) seja acionada.",
            "Phishing é o envio de mensagens falsas por engenharia social para enganar usuários.",
            "Tailgating é a entrada física não autorizada pegando carona atrás de um funcionário.",
            "Análise de tráfego é a observação passiva de pacotes em uma rede."
        ]
    },
    {
        domain: "DOM2",
        q: "Um escritório de advocacia tem todos os seus servidores invadidos durante a madrugada. Pela manhã, nenhum documento pode ser aberto porque todos os arquivos foram fortemente criptografados, e uma mensagem na tela exige o pagamento de 5 Bitcoins para liberar a chave de descriptografia. Qual malware causou esse incidente?",
        options: [
            "Adware.",
            "Ransomware.",
            "Keylogger.",
            "Cookie de rastreamento."
        ],
        answer: 1,
        explanations: [
            "Adware limita-se a exibir anúncios publicitários indesejados.",
            "O Ransomware caracteriza-se pelo sequestro de dados (geralmente via criptografia) seguido de extorsão financeira para devolver o acesso.",
            "Keylogger é um tipo de spyware que apenas registra as teclas digitadas pelo usuário em silêncio.",
            "Cookies são pequenos arquivos de texto usados por sites para salvar preferências de navegação."
        ]
    },
    {
        domain: "DOM2",
        q: "Em uma cafeteria com rede Wi-Fi pública desprotegida, um atacante posiciona seu notebook de forma a interceptar silenciosamente toda a comunicação entre o celular de um executivo e o servidor da empresa, lendo e alterando as mensagens sem que nenhuma das pontas perceba. Como esse ataque é conhecido?",
        options: [
            "Man-in-the-Middle (MitM / Homem no Meio).",
            "Dumpster Diving.",
            "Força Bruta física.",
            "Cold Site."
        ],
        answer: 0,
        explanations: [
            "No ataque Man-in-the-Middle, o invasor interpõe-se secretamente no canal de comunicação entre duas partes, podendo escutar ou modificar os dados em trânsito.",
            "Dumpster Diving consiste em vasculhar lixeiras físicas em busca de documentos descartados.",
            "Força bruta física refere-se ao arrombamento mecânico de portas ou fechaduras.",
            "Cold Site é uma sala vazia usada para contingência e continuidade de negócios."
        ]
    },
    {
        domain: "DOM2",
        q: "Um invasor configura um servidor externo para enviar mensagens falsificando o endereço de origem, fazendo parecer no cabeçalho que o e-mail ou pacote de rede partiu do endereço oficial da diretoria da empresa. Qual termo técnico descreve essa falsificação de identidade de origem?",
        options: [
            "Spoofing.",
            "Hashing.",
            "Patching.",
            "Shredding."
        ],
        answer: 0,
        explanations: [
            "Spoofing (de IP, e-mail, ARP ou DNS) consiste em forjar/falsificar os dados de identificação de origem para se passar por uma fonte confiável.",
            "Hashing é o cálculo de um resumo criptográfico irreversível para garantir integridade.",
            "Patching é a aplicação de correções e atualizações de segurança no software.",
            "Shredding é a trituração física de documentos em papel."
        ]
    },
    {
        domain: "DOM3",
        q: "Concorrentes desleais reviram as caçambas de lixo na calçada de uma empresa à noite e encontram rascunhos de propostas comerciais, listas de ramais e organogramas internos que foram jogados fora inteiros. Como se chama esse ataque e qual controle o evita diretamente?",
        options: [
            "Phishing; evitado com a instalação de um firewall.",
            "Dumpster Diving (Vasculhar Lixo); evitado com o uso obrigatório de fragmentadoras de papel (shredders) ou lixeiras trancadas para descarte seguro.",
            "Shoulder Surfing; evitado com o uso de no-breaks (UPS).",
            "Rootkit; evitado com a troca do ar-condicionado."
        ],
        answer: 1,
        explanations: [
            "Phishing ocorre por meios eletrônicos (e-mail/mensagens), não em lixeiras físicas.",
            "A coleta de informações no lixo físico é o Dumpster Diving, mitigado triturando documentos confidenciais antes do descarte.",
            "Shoulder Surfing é olhar a tela ou teclado de alguém por cima do ombro.",
            "Rootkit é um malware furtivo de sistema operacional."
        ]
    },
    {
        domain: "DOM3",
        q: "Um consultor trabalha em relatórios confidenciais no seu notebook durante um voo comercial. O passageiro sentado na poltrona ao lado consegue ler todos os dados estratégicos simplesmente olhando para a tela do consultor. Qual ameaça ocorreu e qual controle simples a mitiga?",
        options: [
            "Tailgating; mitigado com portas giratórias.",
            "Shoulder Surfing (Espiar por cima do ombro); mitigado com o uso de filtros físicos de privacidade na tela do notebook e cuidado com o ambiente.",
            "Worm de rede; mitigado desativando a placa de som.",
            "DDoS; mitigado aumentando a memória RAM."
        ],
        answer: 1,
        explanations: [
            "Tailgating é a invasão física de perímetro acompanhando alguém pela porta.",
            "A observação direta da tela ou teclado em locais públicos é chamada de Shoulder Surfing; películas/filtros de privacidade escurecem a visão lateral da tela.",
            "Não houve infecção por software malicioso no cenário descrito.",
            "DDoS é um ataque cibernético de sobrecarga de servidores."
        ]
    },
    {
        domain: "DOM2",
        q: "Enquanto o Phishing tradicional dispara milhares de e-mails genéricos, um atacante pesquisa profundamente a rotina do Diretor Financeiro (CFO) de uma empresa e envia uma mensagem altamente personalizada fingindo ser uma intimação fiscal direcionada exclusivamente a esse alto executivo. Como essa variante de engenharia social é denominada?",
        options: [
            "Spam inofensivo.",
            "Spear Phishing / Whaling (focado em alvos específicos de alto escalão).",
            "Backup Incremental.",
            "Controle Repressivo."
        ],
        answer: 1,
        explanations: [
            "Spam é apenas publicidade comercial em massa não solicitada.",
            "O Spear Phishing é o phishing personalizado contra um alvo específico; quando esse alvo é um executivo de topo (C-level), recebe também o nome de Whaling.",
            "Backup incremental é uma rotina de cópia de segurança.",
            "Controle repressivo é uma medida de defesa para limitar danos durante um incidente."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que um 'Atacante Interno' (Insider Threat — como um funcionário insatisfeito ou subornado) representa um risco frequentemente mais perigoso e difícil de prevenir do que um atacante externo comum?",
        options: [
            "Porque funcionários internos possuem supercomputadores quânticos em casa.",
            "Porque o atacante interno já possui acesso legítimo às instalações e sistemas, contornando grande parte dos controles perimetrais físicos e lógicos da organização.",
            "Porque as leis de proteção de dados não se aplicam a funcionários.",
            "Porque firewalls bloqueiam apenas o tráfego interno e deixam a internet aberta."
        ],
        answer: 1,
        explanations: [
            "O perigo do insider não vem de poder computacional superior, mas do acesso privilegiado prévio.",
            "Por já estar dentro dos anéis físicos de proteção e possuir credenciais válidas de rede, o insider contorna facilmente as defesas de borda.",
            "Funcionários respondem civil e criminalmente por violações de dados e quebras de sigilo.",
            "Firewalls de borda protegem justamente a rede interna contra o tráfego externo."
        ]
    },
    {
        domain: "DOM3",
        q: "Em uma grande empresa, sempre que um novo colaborador é contratado como 'Analista Contábil Pleno', o administrador do sistema simplesmente o adiciona ao grupo 'Contabilidade_Pleno', que já contém todas as permissões de acesso aos sistemas fiscais necessárias para aquela função. Qual modelo de controle de acesso está sendo utilizado?",
        options: [
            "Controle de Acesso Mandatório (MAC).",
            "Controle de Acesso Discricionário (DAC).",
            "Controle de Acesso Baseado em Funções / Papéis (RBAC - Role-Based Access Control).",
            "Acesso Público Irrestrito."
        ],
        answer: 2,
        explanations: [
            "O MAC baseia-se em rótulos de sigilo militar impostos pelo sistema operacional, sem flexibilidade de grupos funcionais.",
            "No DAC, cada usuário gerencia individualmente quem acessa as pastas que ele mesmo criou.",
            "No RBAC, as permissões são agrupadas de acordo com o cargo ou papel (Role) desempenhado na estrutura organizacional, facilitando a administração.",
            "O acesso é restrito apenas aos membros daquela função específica."
        ]
    },
    {
        domain: "DOM3",
        q: "Um usuário cria uma pasta em seu computador para guardar fotos de um evento do departamento e decide, por conta própria, configurar as propriedades da pasta para permitir que qualquer colega da empresa possa adicionar ou apagar arquivos ali dentro. Qual modelo de controle de acesso permite que o próprio criador/dono do recurso decida quem tem acesso a ele?",
        options: [
            "Controle de Acesso Discricionário (DAC - Discretionary Access Control).",
            "Controle de Acesso Mandatório (MAC).",
            "Segregação de Funções (SoD).",
            "Preenchimento de Tráfego."
        ],
        answer: 0,
        explanations: [
            "No modelo Discricionário (DAC), o proprietário/criador do arquivo ou diretório tem total autonomia (discricionariedade) para conceder ou revogar permissões a outros usuários.",
            "No MAC, o criador do arquivo é proibido pelo sistema de alterar permissões ou compartilhar recursos por conta própria.",
            "Segregação de funções é a divisão de tarefas críticas entre pessoas diferentes.",
            "Preenchimento de tráfego é uma técnica de rede contra análise de volume de pacotes."
        ]
    },
    {
        domain: "DOM3",
        q: "O processo completo de controle de acesso lógico a um sistema seguro é dividido em quatro etapas sequenciais. Qual alternativa apresenta a ordem lógica correta dessas etapas?",
        options: [
            "Autorização ➔ Auditoria ➔ Identificação ➔ Autenticação.",
            "Identificação (declarar quem é) ➔ Autenticação (provar quem é) ➔ Autorização (verificar permissões) ➔ Auditoria/Accounting (registrar as ações em log).",
            "Criptografia ➔ Backup ➔ Formatação ➔ Descarte.",
            "Autenticação (digitar o login) ➔ Identificação (mostrar a digital) ➔ Exclusão ➔ Reinicialização."
        ],
        answer: 1,
        explanations: [
            "O sistema não pode autorizar um acesso antes de identificar e autenticar quem está tentando entrar.",
            "Primeiro o usuário se identifica (username), depois autentica a identidade (senha/biometria), em seguida o sistema verifica a matriz de autorização (o que ele pode acessar) e registra tudo na trilha de auditoria.",
            "Essas são operações gerais de TI, e não as etapas do controle de acesso lógico.",
            "Identificação e autenticação foram invertidas: digitar o nome de usuário é Identificação; provar com senha ou biometria é Autenticação."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual das combinações abaixo representa um exemplo legítimo de Autenticação Multifator (MFA / 2FA), utilizando categorias de fatores distintas?",
        options: [
            "Digitar uma senha alfanumérica e, em seguida, responder a uma pergunta secreta (como o nome do primeiro animal de estimação).",
            "Digitar uma senha pessoal (algo que você sabe) e validar a impressão digital no leitor biométrico ou usar um token físico (algo que você é / algo que você tem).",
            "Digitar o nome de usuário duas vezes seguidas na mesma tela.",
            "Usar uma senha com mais de 16 caracteres contendo letras, números e símbolos."
        ],
        answer: 1,
        explanations: [
            "Senha e pergunta secreta pertencem exatamente à mesma categoria ('algo que você sabe'), portanto é autenticação de fator único em duas etapas, e não Multifator.",
            "O verdadeiro MFA exige combinar pelo menos duas categorias diferentes entre: algo que você sabe (conhecimento), algo que você tem (posse) e algo que você é (biometria).",
            "O nome de usuário serve apenas para Identificação, não sendo fator de autenticação.",
            "Uma senha longa e complexa continua sendo apenas um único fator de conhecimento."
        ]
    },
    {
        domain: "DOM3",
        q: "Na administração de sistemas seguros, o que determina o 'Princípio do Menor Privilégio' (Principle of Least Privilege)?",
        options: [
            "Apenas os funcionários com menor salário devem ter senha nos computadores.",
            "Cada usuário, programa ou processo deve receber apenas o nível mínimo de permissões e acessos estritamente necessários para executar suas tarefas legítimas.",
            "Todos os funcionários devem ter permissão de Administrador local para não sobrecarregar o Help Desk.",
            "Os diretores da empresa devem ter acesso irrestrito a todos os bancos de dados operacionais e códigos-fonte."
        ],
        answer: 1,
        explanations: [
            "O princípio refere-se à restrição técnica de permissões de acesso, sem qualquer relação com remuneração.",
            "Conceder apenas os direitos estritamente necessários reduz drasticamente a superfície de ataque e o dano potencial em caso de erro humano ou conta comprometida.",
            "Dar permissão de administrador a todos viola frontalmente o menor privilégio e facilita a propagação de malwares.",
            "Mesmo diretores só devem ter acesso às informações necessárias para sua função (Need-to-Know)."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a norma ISO/IEC 27002 recomenda fortemente a separação entre os ambientes de Desenvolvimento, Teste e Produção, impedindo que o programador que cria o código tenha permissão para publicá-lo diretamente em Produção?",
        options: [
            "Para gastar mais dinheiro com licenças de servidores.",
            "Para aplicar a segregação de funções, evitando que códigos não testados derrubem a operação ou que um desenvolvedor insira rotinas maliciosas/fraudes diretamente no ambiente real sem revisão.",
            "Porque linguagens de programação não funcionam em servidores de produção.",
            "Para impedir que a equipe de testes converse com os desenvolvedores."
        ],
        answer: 1,
        explanations: [
            "O objetivo é mitigar riscos operacionais e de fraude, e não aumentar custos artificialmente.",
            "A separação de ambientes combinada à segregação de funções protege a integridade e a disponibilidade da produção contra erros acidentais e alterações maliciosas não autorizadas.",
            "O código compilado/interpretado roda em produção após ser devidamente aprovado e transferido pela equipe responsável.",
            "As equipes devem colaborar, mas os ambientes técnicos e as permissões de publicação devem ser segregados."
        ]
    },
    {
        domain: "DOM3",
        q: "No processo de Gerenciamento de Mudanças (Change Management), a literatura da EXIN descreve um conflito clássico (dilema 'Catch-22') quando um fabricante lança uma atualização de emergência. Qual é esse dilema e como o processo formal de mudanças o resolve?",
        options: [
            "Não aplicar o patch deixa a vulnerabilidade aberta a ataques (preocupação do ISO), mas aplicar o patch às pressas sem testar pode travar o sistema e causar indisponibilidade (preocupação do Gerente do Sistema). Resolve-se com avaliação de risco, testes prévios em homologação e plano de retorno (Rollback).",
            "A atualização é sempre gratuita, mas os cabos de rede precisam ser trocados toda vez que o Windows atualiza.",
            "O CISO proíbe qualquer atualização de software para não alterar a Declaração de Aplicabilidade.",
            "Os usuários comuns devem decidir sozinhos quando atualizar o servidor central."
        ],
        answer: 0,
        explanations: [
            "O gerenciamento formal de mudanças equilibra a segurança (fechar a brecha rapidamente) com a estabilidade operacional (testar antes e ter plano de Rollback caso a atualização falhe).",
            "Atualizações de software não exigem substituição de cabeamento físico.",
            "Deixar sistemas sem atualização cria vulnerabilidades críticas; as mudanças devem ser controladas, nunca proibidas.",
            "Servidores centrais são administrados pela equipe de TI sob controle rigoroso de mudanças."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a função exata de um sistema UPS (Uninterruptible Power Supply / No-break) na proteção física dos equipamentos de uma sala de servidores?",
        options: [
            "Refrigerar o ar e controlar a umidade relativa da sala.",
            "Fornecer energia elétrica imediata a partir de baterias durante quedas curtas ou oscilações de tensão, permitindo o desligamento seguro (graceful shutdown) dos servidores ou mantendo-os ligados até que o gerador a diesel assuma.",
            "Apagar incêndios utilizando gás inerte.",
            "Gerar energia elétrica infinita por vários meses sem precisar de combustível."
        ],
        answer: 1,
        explanations: [
            "O controle de temperatura e umidade é função do sistema de ar-condicionado (climatização).",
            "O UPS protege contra picos/quedas imediatas de energia e evita que servidores desliguem abruptamente corrompendo bancos de dados.",
            "A supressão de incêndio é feita por sistemas de combate a fogo, não pelo UPS.",
            "As baterias do UPS duram apenas alguns minutos ou poucas horas; para quedas longas é indispensável um gerador de energia."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que as boas práticas da ISO/IEC 27002 exigem que uma cópia dos backups (fitas ou discos) seja armazenada em um local externo distante (Offsite Storage), fora do prédio principal onde ficam os servidores?",
        options: [
            "Porque as fitas de backup causam interferência magnética nos monitores dos funcionários.",
            "Para garantir que, caso um desastre físico (como um incêndio ou inundação) destrua a sala de servidores ou o prédio principal, as cópias de segurança não sejam destruídas junto com os dados originais.",
            "Para que qualquer pessoa na rua possa acessar as fitas livremente.",
            "Porque é proibido usar criptografia dentro do prédio da empresa."
        ],
        answer: 1,
        explanations: [
            "Fitas guardadas em armários não causam interferência em monitores modernos.",
            "Manter o backup na mesma sala ou prédio do servidor cria um ponto único de falha física: um incêndio destruiria tanto o servidor de produção quanto o backup.",
            "O local externo (Offsite) deve possuir controles físicos e ambientais tão rigorosos quanto o data center principal.",
            "A criptografia deve ser usada tanto internamente quanto nas mídias enviadas para guarda externa."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa executa rotinas diárias de backup há três anos, e o painel do software sempre exibe a mensagem 'Cópia concluída'. Porém, quando um servidor queima, a equipe descobre que as fitas estavam defeituosas e nenhum arquivo pode ser lido. Qual controle essencial da ISO 27002 foi negligenciado?",
        options: [
            "A realização de testes periódicos de restauração (Recovery Testing) para validar se os backups estão íntegros e se o procedimento funciona dentro do RTO esperado.",
            "A instalação de vidros inquebráveis na recepção.",
            "O bloqueio de e-mails pessoais no código de conduta.",
            "O uso de crachás sem logotipo."
        ],
        answer: 0,
        explanations: [
            "Fazer backup sem testar regularmente a restauração não garante a disponibilidade nem a integridade das cópias; testes práticos periódicos são obrigatórios.",
            "Vidros blindados são controles de perímetro físico e não validam a integridade de fitas magnéticas.",
            "Regras de e-mail no código de conduta são controles organizacionais de uso aceitável.",
            "Crachás tratam de identificação física de pessoas."
        ]
    },
    {
        domain: "DOM4",
        q: "Dentro da estrutura do ciclo PDCA aplicada ao Sistema de Gestão de Segurança da Informação (SGSI), em qual fase ocorrem a definição do escopo do SGSI, a realização da avaliação de riscos e a elaboração da Declaração de Aplicabilidade (SoA)?",
        options: [
            "Plan (Planejar).",
            "Do (Fazer).",
            "Check (Checar).",
            "Act (Agir)."
        ],
        answer: 0,
        explanations: [
            "Na fase Plan (Planejar), a organização estabelece o contexto, o escopo, a política, avalia os riscos, seleciona os controles e documenta a SoA.",
            "Na fase Do, a empresa implementa e opera os controles e treinamentos planejados.",
            "Na fase Check, ocorrem o monitoramento, as auditorias internas e a análise crítica pela direção.",
            "Na fase Act, executam-se ações corretivas e melhorias contínuas."
        ]
    },
    {
        domain: "DOM4",
        q: "Após concluir a avaliação de riscos e aprovar a Declaração de Aplicabilidade (SoA), a organização inicia a instalação prática dos novos firewalls, configura os controles de acesso e aplica o programa de treinamento de conscientização aos funcionários. Em qual etapa do ciclo PDCA essas atividades estão inseridas?",
        options: [
            "Plan (Planejar).",
            "Do (Fazer / Executar).",
            "Check (Checar).",
            "Act (Agir)."
        ],
        answer: 1,
        explanations: [
            "O planejamento já foi concluído na etapa anterior.",
            "A fase Do (Fazer) compreende a implementação e operação prática do Plano de Tratamento de Riscos, dos controles selecionados e da capacitação das equipes.",
            "A fase Check verifica a eficácia do que foi implementado por meio de auditorias.",
            "A fase Act corrige desvios apontados na fase Check."
        ]
    },
    {
        domain: "DOM2",
        q: "Mesmo após uma empresa implementar firewalls de última geração, antivírus, criptografia e treinamento de funcionários para mitigar as ameaças cibernéticas, a direção sabe que a segurança nunca é 100% infalível e que ainda resta uma pequena probabilidade de incidente. Como é chamada essa parcela de risco que permanece após a aplicação dos controles?",
        options: [
            "Risco Inerente Inicial.",
            "Risco Residual.",
            "Vulnerabilidade Zero.",
            "Falso Positivo."
        ],
        answer: 1,
        explanations: [
            "Risco inerente é o risco bruto total que existia antes de qualquer controle ser implementado.",
            "O Risco Residual é o risco que subsiste mesmo após o tratamento de riscos; ele deve ser conhecido e formalmente aceito pela administração.",
            "Nunca existe vulnerabilidade zero em sistemas reais em operação.",
            "Falso positivo é um alarme disparado erroneamente por um sistema de monitoramento."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa implementou todos os requisitos da norma ISO/IEC 27001 e agora deseja obter o certificado oficial reconhecido internacionalmente para apresentar aos seus clientes. Quem deve realizar a auditoria final de certificação?",
        options: [
            "O próprio CISO da empresa, assinando um termo de autodeclaração.",
            "Um auditor externo e independente, representando um organismo de certificação devidamente credenciado.",
            "Qualquer técnico do Help Desk que não tenha participado da criação das senhas.",
            "O fornecedor que vendeu os computadores para a empresa."
        ],
        answer: 1,
        explanations: [
            "Auditorias internas ou autodeclarações do CISO não têm validade para emitir uma certificação oficial ISO 27001.",
            "Para obter o selo oficial ISO/IEC 27001, o SGSI deve ser auditado e aprovado por um órgão certificador externo, independente e credenciado.",
            "Técnicos internos não possuem independência nem acreditação oficial para certificar a empresa.",
            "Fornecedores de hardware possuem conflito de interesses e não são órgãos certificadores."
        ]
    },
    {
        domain: "DOM2",
        q: "As ameaças à segurança da informação são classificadas quanto à sua origem. Qual das alternativas abaixo descreve uma ameaça estritamente Natural / Ambiental (Não Humana)?",
        options: [
            "Um ex-funcionário apagando pastas na rede por vingança.",
            "Uma inundação na sala de servidores provocada por chuvas torrenciais e um furacão na região.",
            "Um hacker explorando uma falha de SQL Injection no site.",
            "Um colaborador clicando acidentalmente em um link de Phishing."
        ],
        answer: 1,
        explanations: [
            "Sabotagem por ex-funcionário é uma ameaça humana intencional (interna).",
            "Fenômenos climáticos e geológicos (furacões, enchentes naturais, terremotos, raios) são ameaças naturais/ambientais (não humanas).",
            "Invasão por hacker é uma ameaça humana intencional (externa).",
            "Erro de usuário em phishing é uma ameaça humana não intencional/acidental."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma clínica médica precisa transmitir laudos confidenciais de pacientes através da internet pública para um laboratório parceiro. Qual medida técnica é indispensável para proteger a confidencialidade e a integridade desses dados durante a transmissão?",
        options: [
            "Colocar um aviso de 'Proibido Ler' no rodapé da página.",
            "Utilizar protocolos de criptografia em trânsito (como TLS / HTTPS ou túnel VPN seguro).",
            "Desligar o antivírus durante o envio para que o arquivo chegue mais rápido.",
            "Imprimir os laudos e deixá-los na recepção."
        ],
        answer: 1,
        explanations: [
            "Avisos textuais não impedem a interceptação técnica de pacotes na rede (sniffing).",
            "Ao trafegar por redes públicas não confiáveis (como a internet), a criptografia em trânsito (TLS/HTTPS/VPN) é obrigatória para proteger dados sensíveis contra interceptação.",
            "Desativar o antivírus expõe os sistemas a infecções e não cifra o tráfego.",
            "Deixar documentos médicos na recepção viola a confidencialidade física."
        ]
    },
    {
        domain: "DOM4",
        q: "Para cumprir rigorosamente as leis de proteção de dados pessoais (como o GDPR e a LGPD) ao gerar relatórios estatísticos de vendas, uma empresa substitui os nomes e CPFs reais dos clientes por códigos irreversíveis ou remove qualquer dado que permita identificar o indivíduo. Quais técnicas estão sendo aplicadas para proteger a privacidade?",
        options: [
            "Anonimização e Pseudonimização de dados pessoais.",
            "Engenharia Social e Phishing.",
            "Escalamento Vertical e Horizontal.",
            "Tailgating e Mantrap."
        ],
        answer: 0,
        explanations: [
            "A anonimização (remoção irreversível da identificação) e a pseudonimização (substituição por identificadores indiretos) são técnicas recomendadas para proteger a privacidade dos titulares.",
            "Engenharia social e phishing são técnicas de ataque, não de proteção de privacidade.",
            "Escalamento refere-se ao fluxo de atendimento de incidentes.",
            "Tailgating e Mantrap pertencem ao domínio de segurança física perimetral."
        ]
    }
];


