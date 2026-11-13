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
    },
    
];

// ==========================================
// LOTE 3: +75 QUESTÕES FOUNDATION (TOTAL: 200 QUESTÕES)
// Cole este bloco no final do seu arquivo questoes.js
// ==========================================
extraQuestions.push(
    {
        domain: "DOM1",
        q: "Um sensor meteorológico registra a sequência numérica '38, 42, 45' a cada hora em um arquivo de texto bruto, sem indicar unidade de medida, local ou data. Para um analista que abre esse arquivo isolado sem contexto, o que esses números representam?",
        options: [
            "Informação estruturada de negócio.",
            "Apenas dados.",
            "Conhecimento tácito.",
            "Um plano de continuidade."
        ],
        answer: 1,
        explanations: [
            "Sem significado atribuído ou contexto, números isolados ainda não constituem informação.",
            "Números ou fatos brutos sem contexto ou significado para o receptor são classificados estritamente como dados.",
            "Conhecimento exige interpretação humana sobre informações já contextualizadas.",
            "Planos de continuidade são documentos formais de gestão de crises."
        ]
    },
    {
        domain: "DOM1",
        q: "Dois departamentos da mesma empresa analisam um relatório de vendas regionais. Para a equipe de Marketing, o relatório é vital para planejar campanhas; para a equipe de Manutenção Predial, o documento é irrelevante. O que esse cenário comprova sobre a natureza da informação?",
        options: [
            "Que dados não estruturados não exigem controles de segurança.",
            "Que o valor e o significado da informação são determinados pelo destinatário dentro do seu contexto.",
            "Que relatórios impressos possuem apenas integridade, mas não confidencialidade.",
            "Que a informação deixa de existir quando é enviada por rede."
        ],
        answer: 1,
        explanations: [
            "Qualquer dado ou informação corporativa exige segurança adequada à sua classificação.",
            "Na literatura oficial, o valor da informação depende diretamente de quem a recebe e da utilidade que tem para aquele destinatário.",
            "Documentos impressos possuem todos os atributos da tríade CIA.",
            "O meio de transmissão não anula a existência da informação."
        ]
    },
    {
        domain: "DOM1",
        q: "Uma organização decide mapear detalhadamente por quais departamentos um pedido de compra passa, desde o preenchimento pelo cliente até o arquivamento fiscal, desenhando o caminho percorrido pelos documentos. Qual atividade está sendo executada?",
        options: [
            "Gerenciamento de Continuidade de Negócios (BCM).",
            "Análise da Informação.",
            "Controle de Acesso Mandatório (MAC).",
            "Criptografia Assimétrica."
        ],
        answer: 1,
        explanations: [
            "O BCM foca em manter processos críticos operando durante e após desastres.",
            "A Análise da Informação tem como foco fornecer uma visão clara de como a informação flui através de uma organização.",
            "MAC é um modelo técnico de restrição de acesso por rótulos de sigilo.",
            "Criptografia é um controle técnico de proteção de sigilo e autenticidade."
        ]
    },
    {
        domain: "DOM1",
        q: "Durante uma transferência bancária via aplicativo, um erro de programação faz com que o último dígito do valor transferido seja cortado, registrando R$ 150 em vez de R$ 1.500. Qual subaspecto específico da Integridade foi violado?",
        options: [
            "Disponibilidade.",
            "Completude e Exatidão.",
            "Confidencialidade.",
            "Posse física."
        ],
        answer: 1,
        explanations: [
            "O sistema estava online e realizou a transação, portanto a disponibilidade não foi afetada.",
            "A Integridade garante que os dados estejam inteiros (Completude) e corretos sem adulteração ou truncamento (Exatidão).",
            "A transação não foi revelada a terceiros não autorizados.",
            "Posse refere-se à detenção do suporte físico onde os dados residem."
        ]
    },
    {
        domain: "DOM1",
        q: "Um hospital sofre um corte nos dois cabos de fibra óptica que ligam a recepção ao servidor central de prontuários. Os dados dos pacientes continuam gravados sem erros e protegidos por senha no servidor, mas os médicos não conseguem consultá-los durante 6 horas. Qual pilar da confiabilidade foi afetado?",
        options: [
            "Integridade.",
            "Confidencialidade.",
            "Disponibilidade.",
            "Não-repúdio."
        ],
        answer: 2,
        explanations: [
            "Os prontuários não foram alterados nem corrompidos no servidor.",
            "Nenhuma pessoa não autorizada teve acesso aos prontuários.",
            "A incapacidade de usuários autorizados (médicos) acessarem a informação no momento necessário caracteriza perda de Disponibilidade.",
            "Não-repúdio trata da impossibilidade de negar a autoria de uma ação."
        ]
    },
    {
        domain: "DOM1",
        q: "Um gerente de compras aprova um pedido fraudulento no sistema e, dias depois, alega que nunca clicou no botão de aprovação e que o sistema deve ter criado o registro sozinho. Qual mecanismo de segurança impede que esse gerente negue a autoria da sua ação?",
        options: [
            "Balanceamento de carga.",
            "Não-repúdio (Irretratabilidade) suportado por assinatura digital e logs íntegros.",
            "Ar-condicionado na sala de servidores.",
            "Backup diferencial."
        ],
        answer: 1,
        explanations: [
            "Balanceamento de carga serve apenas para distribuir tráfego de rede e manter a disponibilidade.",
            "O Não-repúdio garante provas criptográficas e de auditoria indiscutíveis de quem realizou determinada ação ou envio.",
            "Climatização é um controle físico ambiental.",
            "Backups recuperam dados perdidos, mas não atestam autoria criptográfica de transações."
        ]
    },
    {
        domain: "DOM1",
        q: "Um analista criptografa o único banco de dados de clientes com uma chave de 256 bits gerada aleatoriamente e, por acidente, apaga a chave sem ter feito cópia. O arquivo criptografado continua intacto no servidor e acessível na rede. Segundo o Hexagrama Parkeriano, o que foi perdido?",
        options: [
            "Confidencialidade.",
            "Utilidade.",
            "Posse.",
            "Exatidão."
        ],
        answer: 1,
        explanations: [
            "A confidencialidade permanece máxima, já que ninguém consegue ler os dados.",
            "Sem a chave para decifrar, os dados tornam-se indecifráveis e inúteis para qualquer finalidade prática, perdendo a Utilidade.",
            "A empresa ainda detém o arquivo físico no seu servidor (mantém a posse).",
            "A estrutura matemática do arquivo criptografado não sofreu alteração indevida."
        ]
    },
    {
        domain: "DOM1",
        q: "Para validar se a pessoa que está ligando para a central de atendimento bancário é realmente o titular da conta, o sistema solicita uma senha e um código temporário enviado ao aplicativo do cliente. Qual atributo de segurança está sendo verificado nesse instante?",
        options: [
            "Autenticidade.",
            "Completude.",
            "Redundância.",
            "Continuidade."
        ],
        answer: 0,
        explanations: [
            "A Autenticidade verifica e confirma se a identidade declarada por um usuário ou sistema é genuína.",
            "Completude refere-se à totalidade de um conjunto de dados.",
            "Redundância é a duplicação de componentes para garantir disponibilidade.",
            "Continuidade refere-se à manutenção dos processos críticos após desastres."
        ]
    },
    {
        domain: "DOM4",
        q: "Em uma reunião de diretoria, o presidente exige que todos os departamentos mantenham trilhas de auditoria, atas de aprovação e registros de mudanças organizados, de modo que um auditor externo possa inspecionar a empresa a qualquer momento sem obstáculos. Qual conceito está sendo exigido?",
        options: [
            "Auditabilidade.",
            "Esteganografia.",
            "Fator de Exposição.",
            "Engenharia Social."
        ],
        answer: 0,
        explanations: [
            "Auditabilidade é a prontidão e capacidade de uma organização para ser submetida a uma avaliação independente.",
            "Esteganografia é a ocultação de mensagens dentro de arquivos de mídia.",
            "Fator de Exposição é a porcentagem de perda de um ativo em análise quantitativa.",
            "Engenharia social é a manipulação psicológica de usuários."
        ]
    },
    {
        domain: "DOM4",
        q: "Quando a diretoria define que cada gerente de departamento responderá formalmente pelos resultados das metas de segurança da sua respectiva área, prestando contas sobre sucessos ou falhas, qual princípio de governança está sendo aplicado?",
        options: [
            "Responsabilização (Accountability).",
            "Preenchimento de Tráfego.",
            "Análise Qualitativa.",
            "Falso Positivo."
        ],
        answer: 0,
        explanations: [
            "Responsabilização significa ser formalmente responsável pelos resultados das atividades de uma organização ou setor.",
            "Preenchimento de tráfego é uma técnica de rede para mascarar volume de dados.",
            "Análise qualitativa é o método de avaliação de riscos por escalas subjetivas.",
            "Falso positivo é um alerta disparado por engano em tráfego legítimo."
        ]
    },
    {
        domain: "DOM4",
        q: "A diretoria executiva aprovou a Política de Segurança da Informação de uma empresa financeira. Agora, a equipe precisa elaborar o documento que concretiza essa política, especificando exatamente quais controles serão implantados, os prazos, recursos e responsáveis. Que documento é esse?",
        options: [
            "Plano de Segurança da Informação.",
            "Certificado de Boa Índole.",
            "Lista de Revogação de Certificados (CRL).",
            "Termo de Abertura de Chamado."
        ],
        answer: 0,
        explanations: [
            "Na hierarquia documental da EXIN, o Plano de Segurança concretiza a política ao fornecer os detalhes práticos para sua execução.",
            "Certificado de boa índole é o atestado de antecedentes criminais de um indivíduo.",
            "CRL é a lista técnica de certificados digitais cancelados por uma CA.",
            "Chamados são registros operacionais do Help Desk."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual profissional dentro da estrutura organizacional atua no nível específico de uma unidade de negócios (departamento/divisão), desenvolvendo a política de segurança daquela unidade com base na política corporativa e fiscalizando seu cumprimento?",
        options: [
            "Information Security Officer (ISO).",
            "Atendente de Help Desk Nível 1.",
            "Auditor Externo Independente.",
            "Desenvolvedor Júnior."
        ],
        answer: 0,
        explanations: [
            "Enquanto o CISO atua no nível estratégico corporativo global, o ISO atua na unidade de negócios traduzindo e supervisionando a política corporativa na sua área.",
            "O Help Desk realiza suporte e triagem inicial de incidentes.",
            "O auditor externo avalia a conformidade de forma independente, sem criar políticas internas.",
            "Desenvolvedores programam sistemas e não detêm a governança da unidade de negócios."
        ]
    },
    {
        domain: "DOM4",
        q: "Em uma corporação, quem é o profissional especificamente encarregado de redigir, revisar periodicamente e manter atualizado o texto da Política de Segurança da Informação que deriva da estratégia definida pelo CISO?",
        options: [
            "Information Security Policy Officer.",
            "Custodiante de Fitas de Backup.",
            "Vigilante Patrimonial.",
            "Operador de Telemarketing."
        ],
        answer: 0,
        explanations: [
            "Na literatura da EXIN, o Information Security Policy Officer tem a atribuição específica de manter a documentação da política derivada da estratégia.",
            "O custodiante executa tarefas técnicas de manutenção e cópias de segurança.",
            "O vigilante atua no controle de acesso físico perimetral.",
            "Operadores de atendimento são usuários finais do sistema."
        ]
    },
    {
        domain: "DOM1",
        q: "O Diretor de Recursos Humanos é o Proprietário (Asset Owner) da base de dados salarial da empresa. Ele solicita à equipe de Administração de Banco de Dados (TI) que configure backups diários e aplique criptografia no disco onde a base reside. Nesse cenário, qual é o papel da equipe de TI?",
        options: [
            "Custodiante do ativo (Custodian).",
            "Proprietário legal primário dos salários.",
            "Autoridade Certificadora Nacional.",
            "Auditor de Certificação ISO."
        ],
        answer: 0,
        explanations: [
            "O Custodiante (geralmente a TI) é responsável pela guarda técnica, manutenção, backups e aplicação prática dos controles definidos pelo Proprietário do Ativo.",
            "A propriedade do ativo permanece com o Diretor de RH (área de negócios).",
            "Autoridade Certificadora emite certificados digitais públicos.",
            "Auditores de certificação são entidades externas independentes."
        ]
    },
    {
        domain: "DOM4",
        q: "Um novo analista de governança está lendo uma norma da família ISO que não possui requisitos de certificação nem lista de controles, mas traz todas as definições oficiais dos termos 'Ativo', 'Risco', 'Vulnerabilidade' e 'SGSI'. Qual norma ele está lendo?",
        options: [
            "ISO/IEC 27000.",
            "ISO/IEC 27001.",
            "ISO/IEC 27002.",
            "ISO/IEC 27005."
        ],
        answer: 0,
        explanations: [
            "A ISO/IEC 27000 fornece a visão geral e o vocabulário (glossário de termos e definições) de toda a série 27000.",
            "A ISO/IEC 27001 contém os requisitos obrigatórios para certificar um SGSI.",
            "A ISO/IEC 27002 fornece diretrizes para a implementação de controles.",
            "A ISO/IEC 27005 trata especificamente da gestão de riscos."
        ]
    },
    {
        domain: "DOM4",
        q: "A equipe de segurança de uma indústria precisa escolher uma metodologia estruturada para identificar contextos, analisar probabilidades, estimar impactos e tratar os riscos de informação. Qual norma da família ISO/IEC 27000 foi criada especificamente como guia para essa atividade?",
        options: [
            "ISO/IEC 27000.",
            "ISO/IEC 27001.",
            "ISO/IEC 27002.",
            "ISO/IEC 27005."
        ],
        answer: 3,
        explanations: [
            "A 27000 é a norma de vocabulário e introdução geral.",
            "A 27001 define os requisitos gerais do SGSI, mas não detalha o passo a passo metodológico de cálculo de risco.",
            "A 27002 foca nas diretrizes de implementação dos controles do Anexo A.",
            "A ISO/IEC 27005 é a norma dedicada exclusivamente às diretrizes de Gestão de Riscos de Segurança da Informação."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma consultoria afirma a um cliente que sua empresa acabou de receber o 'Certificado Oficial ISO/IEC 27002' emitido por um órgão internacional. Por que essa afirmação da consultoria é tecnicamente incorreta?",
        options: [
            "Porque a ISO/IEC 27002 é apenas um guia de boas práticas para implementação de controles e não uma norma de requisitos certificável (a certificação ocorre apenas na ISO/IEC 27001).",
            "Porque apenas hospitais públicos podem ser certificados na ISO 27002.",
            "Porque a ISO 27002 foi cancelada em 1995.",
            "Porque certificações só existem para a norma ISO 27000."
        ],
        answer: 0,
        explanations: [
            "Apenas normas que contêm requisitos mandatórios ('deve'), como a ISO/IEC 27001, permitem auditoria de certificação; a 27002 contém recomendações ('convém').",
            "Qualquer organização pode usar a 27002 como guia, mas nenhuma pode ser certificada nela.",
            "A ISO 27002 continua ativa e atualizada (edição 2022).",
            "A ISO 27000 é um glossário e também não é certificável."
        ]
    },
    {
        domain: "DOM4",
        q: "Na versão atualizada da ISO/IEC 27001:2022 (e ISO/IEC 27002:2022), os 93 controles de segurança do Anexo A foram reorganizados e consolidados em quatro grandes categorias (temas). Quais são essas quatro categorias?",
        options: [
            "Organizacionais, Pessoas, Físicos e Tecnológicos.",
            "Financeiros, Comerciais, Logísticos e Tributários.",
            "Preventivos, Repressivos, Financeiros e Judiciais.",
            "Públicos, Internos, Confidenciais e Secretos."
        ],
        answer: 0,
        explanations: [
            "A revisão de 2022 agrupou os controles do Anexo A em 4 temas claros: Controles Organizacionais (Cláusula 5), de Pessoas (Cláusula 6), Físicos (Cláusula 7) e Tecnológicos (Cláusula 8).",
            "Estes são departamentos empresariais, não temas do Anexo A.",
            "Esta lista mistura funcionalidade no tempo com áreas jurídicas.",
            "Estes são níveis de classificação de sigilo da informação."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa de contabilidade que não desenvolve nenhum tipo de software próprio está elaborando sua Declaração de Aplicabilidade (SoA) para a certificação ISO/IEC 27001. Como ela deve tratar os controles do Anexo A referentes a 'Desenvolvimento Seguro de Software'?",
        options: [
            "É obrigada a criar uma equipe de programação apenas para cumprir o controle.",
            "Pode declarar esses controles como excluídos (não aplicáveis) na SoA, registrando a justificativa formal de que não realiza desenvolvimento de software.",
            "Deve desistir da certificação ISO 27001, pois é proibido excluir controles do Anexo A.",
            "Deve apagar a Cláusula 6 do seu manual do SGSI."
        ],
        answer: 1,
        explanations: [
            "A norma não obriga a empresa a criar processos de negócio inexistentes.",
            "A SoA permite excluir controles do Anexo A que não se aplicam à realidade ou aos riscos da organização, desde que a exclusão seja devidamente justificada.",
            "A proibição de exclusão aplica-se apenas às cláusulas 4 a 10 do corpo da norma, não ao Anexo A.",
            "As cláusulas de 4 a 10 são obrigatórias e jamais podem ser excluídas."
        ]
    },
    {
        domain: "DOM2",
        q: "Classifique corretamente os três eventos a seguir quanto à origem da ameaça: (1) Um raio atinge a subestação elétrica; (2) Um estagiário apaga uma pasta compartilhada sem querer; (3) Um concorrente invade o servidor web.",
        options: [
            "1: Humana Intencional; 2: Não Humana; 3: Humana Acidental.",
            "1: Não Humana (Ambiental/Natural); 2: Humana Não Intencional (Acidental); 3: Humana Intencional (Deliberada).",
            "Todas as três são ameaças Não Humanas.",
            "1: Vulnerabilidade; 2: Impacto; 3: Controle."
        ],
        answer: 1,
        explanations: [
            "As categorias foram completamente trocadas.",
            "Raios são fenômenos naturais (Não Humanos); erros operacionais são ameaças humanas acidentais; ataques e invasões são ameaças humanas intencionais.",
            "Os eventos 2 e 3 decorrem diretamente de ações humanas.",
            "Todos os três eventos descritos são Ameaças (causas potenciais de incidentes)."
        ]
    },
    {
        domain: "DOM2",
        q: "Um ataque de negação de serviço (DDoS) derruba a loja virtual de uma varejista por 12 horas. O cancelamento imediato das vendas naquelas 12 horas custou R$ 80.000; porém, nos meses seguintes, a empresa perdeu contratos importantes porque o mercado deixou de confiar na marca. Como são classificados o prejuízo das 12 horas e a perda de reputação posterior?",
        options: [
            "Ambos são controles repressivos.",
            "Dano Direto (vendas perdidas durante a parada) e Dano Indireto (perda de reputação e imagem a longo prazo).",
            "Dano Indireto (vendas perdidas na hora) e Dano Direto (perda de imagem futura).",
            "Vulnerabilidade física e Ameaça ambiental."
        ],
        answer: 1,
        explanations: [
            "Prejuízos sofridos não são controles de segurança.",
            "O dano imediato provocado pela interrupção é Direto; efeitos colaterais secundários como perda de imagem, multas futuras e fuga de clientes são Danos Indiretos.",
            "A classificação entre direto e indireto foi invertida.",
            "O enunciado descreve consequências (impactos/danos), não vulnerabilidades ou ameaças naturais."
        ]
    },
    {
        domain: "DOM2",
        q: "Em uma fábrica, um cano de água estoura no andar superior e alaga o rack de telecomunicações no andar de baixo, queimando dois switches. Nessa cadeia de eventos, o que representa a 'Ameaça' e o que representa a 'Vulnerabilidade'?",
        options: [
            "Ameaça: Inundação/vazamento de água; Vulnerabilidade: O rack estar posicionado diretamente sob tubulações hidráulicas sem proteção impermeável.",
            "Ameaça: O switch queimado; Vulnerabilidade: A água.",
            "Ameaça: O fabricante do switch; Vulnerabilidade: O bombeiro.",
            "Não existe vulnerabilidade quando a ameaça é não humana."
        ],
        answer: 0,
        explanations: [
            "A água vazando é o agente causador externo (Ameaça não humana), enquanto a localização inadequada e desprotegida do rack é a fraqueza explorada (Vulnerabilidade).",
            "O switch queimado é o impacto/dano resultante, não a ameaça.",
            "Nem o fabricante nem o bombeiro causaram o evento.",
            "Ameaças naturais/ambientais só causam dano quando encontram uma vulnerabilidade física ou estrutural."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que muitas organizações optam por iniciar seu processo de gestão de riscos utilizando uma 'Análise Qualitativa' em vez de partir diretamente para uma 'Análise Quantitativa'?",
        options: [
            "Porque a análise qualitativa é mais rápida, simples e não exige dados históricos estatísticos precisos sobre a frequência financeira de cada ameaça.",
            "Porque a análise qualitativa calcula o valor exato em centavos de cada incidente.",
            "Porque a norma ISO 27001 proíbe o uso de números em relatórios de segurança.",
            "Porque a análise qualitativa instala firewalls automaticamente."
        ],
        answer: 0,
        explanations: [
            "Nem sempre há estatísticas financeiras exatas (ARO/EF); a análise qualitativa permite priorizar riscos rapidamente usando escalas (Alto/Médio/Baixo).",
            "O cálculo monetário exato é característica da análise quantitativa.",
            "A ISO 27001 aceita abordagens qualitativas, quantitativas ou híbridas.",
            "Nenhuma análise instala controles sozinha."
        ]
    },
    {
        domain: "DOM2",
        q: "Na análise quantitativa de riscos, um servidor avaliado em R$ 100.000 (Asset Value) está sujeito a uma ameaça que, se ocorrer, destruirá metade da sua capacidade e valor (Fator de Exposição de 50%). Qual conceito representa o valor de R$ 50.000 resultante dessa única ocorrência?",
        options: [
            "Expectativa Única de Perda (SLE - Single Loss Expectancy).",
            "Taxa Anual de Ocorrência (ARO).",
            "Objetivo de Ponto de Recuperação (RPO).",
            "Tempo Médio Entre Falhas (MTBF)."
        ],
        answer: 0,
        explanations: [
            "A SLE (Single Loss Expectancy) mede o custo financeiro esperado de um único incidente caso ele aconteça (AV × EF).",
            "A ARO mede apenas quantas vezes por ano o evento ocorre.",
            "RPO mede perda de dados em tempo para backup.",
            "MTBF mede a confiabilidade técnica de hardware em horas."
        ]
    },
    {
        domain: "DOM2",
        q: "Após analisar o risco de furto de mouses e teclados básicos nas salas de treinamento (cujo prejuízo anual estimado é de R$ 300), a diretoria verifica que instalar câmeras e travas físicas custaria R$ 15.000 por ano. A direção decide formalmente não aplicar nenhum controle novo e assumir a perda caso ocorra. Qual estratégia foi adotada?",
        options: [
            "Aceitar / Suportar o risco.",
            "Evitar o risco.",
            "Transferir o risco.",
            "Reduzir o risco."
        ],
        answer: 0,
        explanations: [
            "Quando o custo do controle supera o possível dano, a decisão racional é aceitar (suportar) o risco.",
            "Evitar exigiria fechar a sala de treinamento ou parar de usar computadores.",
            "Transferir exigiria contratar seguro ou repassar o custo a terceiros.",
            "Reduzir exigiria implantar salvaguardas para diminuir a probabilidade ou impacto."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma transportadora contrata uma apólice de seguro contra roubo de cargas e sinistros cibernéticos. Ao tomar essa medida, o que acontece com o risco da operação?",
        options: [
            "A probabilidade de um roubo ou ataque acontecer cai para zero.",
            "As consequências financeiras do risco são transferidas (compartilhadas) com a seguradora, mas a ameaça continua existindo.",
            "O risco foi evitado por completo.",
            "O controle atua como preventivo antes da ameaça surgir."
        ],
        answer: 1,
        explanations: [
            "O seguro não impede que ladrões ou hackers ataquem a empresa.",
            "O seguro é a forma clássica de Transferência/Compartilhamento de risco: ele cobre o impacto financeiro pós-sinistro, sem eliminar a probabilidade do evento.",
            "Evitar o risco significaria parar de transportar cargas.",
            "Seguro não é um controle preventivo técnico; é uma estratégia financeira de transferência."
        ]
    },
    {
        domain: "DOM2",
        q: "Classifique os quatro controles de proteção contra incêndio a seguir na ordem exata: (1) Proibição de fumar e uso de materiais antichamas; (2) Detector óptico de fumaça no teto; (3) Acionamento de gás inerte para apagar as chamas; (4) Restauração dos servidores afetados a partir do backup.",
        options: [
            "1: Preventivo; 2: Detectivo; 3: Repressivo; 4: Corretivo.",
            "1: Repressivo; 2: Corretivo; 3: Preventivo; 4: Detectivo.",
            "1: Detectivo; 2: Preventivo; 3: Corretivo; 4: Repressivo.",
            "Todos os quatro são controles exclusivamente Preventivos."
        ],
        answer: 0,
        explanations: [
            "Materiais antichamas previnem o início (Preventivo); o sensor identifica a fumaça (Detectivo); o gás apaga o fogo limitando o dano (Repressivo); a restauração recupera o ambiente pós-dano (Corretivo).",
            "A ordem temporal do ciclo de vida do incidente foi misturada.",
            "Prevenção e detecção foram invertidas, assim como correção e repressão.",
            "Apenas o primeiro item ocorre antes do incidente existir."
        ]
    },
    {
        domain: "DOM2",
        q: "No ciclo de vida de um incidente (Ameaça ➔ Incidente ➔ Dano ➔ Recuperação), em que momento exato atua um 'Controle Preventivo'?",
        options: [
            "Antes do incidente, atuando entre a Ameaça e o Incidente para impedir que o evento se concretize.",
            "Entre o Incidente e o Dano, para apagar o fogo.",
            "Entre o Dano e a Recuperação, para reconstruir o prédio.",
            "Apenas cinco anos após a Recuperação."
        ],
        answer: 0,
        explanations: [
            "O controle preventivo bloqueia a ameaça antes que ela consiga explorar a vulnerabilidade e gerar um incidente.",
            "Entre o Incidente e o Dano atuam os controles Repressivos.",
            "Entre o Dano e a Recuperação atuam os controles Corretivos.",
            "Controles preventivos são aplicados previamente à ocorrência."
        ]
    },
    {
        domain: "DOM1",
        q: "Após o Proprietário do Ativo definir que um novo projeto industrial pertence à categoria 'Confidencial', um analista insere a marca d'água 'CONFIDENCIAL' no cabeçalho de todas as páginas do PDF e grava essa mesma tag nos metadados do arquivo. Qual procedimento específico esse analista acabou de executar?",
        options: [
            "Designação (Rotulagem / Labeling) da informação.",
            "Análise Quantitativa de Risco.",
            "Descarte seguro de mídia.",
            "Escalamento Hierárquico."
        ],
        answer: 0,
        explanations: [
            "Na literatura da EXIN, rotular a informação para facilitar seu reconhecimento visual ou eletrônico de acordo com sua classificação chama-se Designação.",
            "Análise quantitativa envolve cálculos financeiros de risco.",
            "Descarte refere-se à destruição ou sanitização ao fim do ciclo de vida.",
            "Escalamento é o repasse de chamados no gerenciamento de incidentes."
        ]
    },
    {
        domain: "DOM1",
        q: "O que acontece em uma organização se o esquema de Classificação da Informação for complexo demais (por exemplo, criando 15 níveis diferentes de sigilo) ou se todos os documentos forem rotulados indiscriminadamente como 'Ultrassecreto'?",
        options: [
            "A segurança fica perfeita e sem custos.",
            "O sistema perde eficácia: se tudo é classificado no nível máximo, o controle encarece a operação sem necessidade e os funcionários passam a ignorar os rótulos no dia a dia.",
            "Os servidores ficam 50% mais rápidos.",
            "A empresa fica dispensada de usar antivírus."
        ],
        answer: 1,
        explanations: [
            "Excesso de níveis ou sobreclassificação gera altos custos e confusão operacional.",
            "A classificação deve ser simples (geralmente 3 a 4 níveis) e proporcional; classificar tudo como secreto banaliza o rótulo e inviabiliza o trabalho.",
            "Classificação organizacional não aumenta a velocidade de processamento de hardware.",
            "A classificação complementa, mas nunca substitui controles técnicos contra malware."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um sistema corporativo, quatro eventos ocorrem em sequência quando Ana entra para trabalhar: (1) Ana digita seu login 'ana.silva'; (2) Ana posiciona o dedo no leitor biométrico; (3) O sistema libera o botão 'Emitir Nota Fiscal', mas bloqueia o botão 'Cancelar Nota'; (4) O sistema grava no log que 'ana.silva' emitiu a nota nº 502 às 09h15. Quais são essas 4 fases?",
        options: [
            "1: Identificação; 2: Autenticação; 3: Autorização; 4: Auditoria / Accounting.",
            "1: Autenticação; 2: Identificação; 3: Criptografia; 4: Formatação.",
            "1: Autorização; 2: Auditoria; 3: Identificação; 4: Autenticação.",
            "Todas as 4 etapas chamam-se apenas Identificação."
        ],
        answer: 0,
        explanations: [
            "Declarar o login é Identificação; provar com biometria é Autenticação; checar o que pode fazer é Autorização; registrar a ação no log é Auditoria (Accounting).",
            "Digitar apenas o nome de usuário não autentica ninguém; é apenas identificação.",
            "A ordem cronológica está invertida.",
            "Cada etapa tem uma função técnica distinta no controle de acesso."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que o compartilhamento de uma mesma conta de usuário e senha genérica (como 'admin_ti' ou 'recepcao01') entre vários funcionários é estritamente proibido pelas boas práticas da ISO/IEC 27002?",
        options: [
            "Porque o teclado desgasta mais rápido.",
            "Porque destrói a Responsabilização individual (Accountability) e o Não-repúdio: se ocorrer uma fraude ou erro usando aquela conta, será impossível provar qual pessoa física estava no teclado.",
            "Porque contas compartilhadas consomem o dobro de energia elétrica no servidor.",
            "Porque o monitor não exibe cores em contas compartilhadas."
        ],
        answer: 1,
        explanations: [
            "O uso de contas lógicas não afeta o desgaste físico de periféricos.",
            "Sem identificadores únicos por pessoa, a trilha de auditoria perde a capacidade de vincular uma ação a um indivíduo específico.",
            "Contas de usuário não alteram o consumo elétrico do data center.",
            "Configurações de vídeo independem da exclusividade da conta."
        ]
    },
    {
        domain: "DOM3",
        q: "Além do 'Princípio do Menor Privilégio', as organizações aplicam o princípio da 'Necessidade de Saber' (Need-to-Know). O que determina especificamente o conceito de Need-to-Know?",
        options: [
            "Qualquer funcionário com cargo de diretor pode ler todos os processos judiciais e prontuários médicos da empresa por curiosidade.",
            "Mesmo que um usuário possua alto nível hierárquico ou credencial de segurança, ele só deve ter acesso às informações específicas necessárias para executar sua tarefa atual.",
            "Todos os estagiários devem saber a senha do CISO.",
            "As senhas devem ser trocadas a cada 10 minutos."
        ],
        answer: 1,
        explanations: [
            "O acesso por mera curiosidade, mesmo por diretores, é bloqueado pelo Need-to-Know.",
            "Ter um cargo alto não dá direito automático a ver tudo: o acesso é restrito apenas aos projetos e dados vinculados à atribuição daquele profissional.",
            "Senhas são pessoais e intransferíveis.",
            "Trocas de senha a cada 10 minutos são inviáveis e não definem o Need-to-Know."
        ]
    },
    {
        domain: "DOM3",
        q: "No setor de pagamentos de um banco, o sistema exige a regra dos 'Quatro Olhos' (Dual Control / Segregação): um analista preenche os dados da transferência internacional, mas o dinheiro só sai da conta após um segundo gerente diferente revisar e aprovar a operação com seu próprio token. Qual ameaça isso mitiga diretamente?",
        options: [
            "Fraudes unilaterais e erros operacionais graves cometidos por uma única pessoa sem supervisão.",
            "Quedas de energia elétrica na rua.",
            "Incêndios naturais na sala de servidores.",
            "Infiltração de água da chuva pelo telhado."
        ],
        answer: 0,
        explanations: [
            "Ao exigir duas pessoas independentes para concluir a transação crítica, impede-se que um único indivíduo desvie fundos sozinho ou cometa um erro milionário de digitação.",
            "Quedas de energia são mitigadas com UPS e geradores.",
            "Incêndios são mitigados com sensores e gases inertes.",
            "Infiltrações são problemas de infraestrutura predial."
        ]
    },
    {
        domain: "DOM4",
        q: "Durante o processo seletivo para contratar um novo administrador de banco de dados que lidará com informações sigilosas, a empresa solicita um documento emitido pela Justiça/Polícia que comprove que o candidato não possui condenações criminais. Como a literatura da EXIN denomina esse documento?",
        options: [
            "Certificado de boa índole (Certificate of Good Conduct).",
            "Acordo de Nível de Serviço (SLA).",
            "Declaração de Aplicabilidade (SoA).",
            "Plano de Recuperação de Desastres (DRP)."
        ],
        answer: 0,
        explanations: [
            "No vocabulário oficial da EXIN, o atestado de antecedentes criminais usado na verificação pré-emprego (screening) é chamado de Certificado de boa índole.",
            "SLA é um contrato de metas de desempenho firmado com fornecedores.",
            "SoA é o documento que lista os controles do Anexo A.",
            "DRP é o plano técnico para restaurar a TI após desastres."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma indústria farmacêutica vai apresentar a fórmula de um novo medicamento ainda não patenteado para uma agência externa de marketing. Qual documento jurídico deve ser assinado antes da reunião para proibir formalmente que a agência revele esse segredo a terceiros?",
        options: [
            "Acordo de Não Divulgação (NDA - Non-Disclosure Agreement / Termo de Confidencialidade).",
            "Certificado de Boa Índole.",
            "Manual do Ar-Condicionado.",
            "Ordem de Formatação de Disco."
        ],
        answer: 0,
        explanations: [
            "O NDA (Acordo de Não Divulgação) é o contrato legal que obriga as partes a manterem sigilo sobre informações confidenciais compartilhadas.",
            "O certificado de boa índole apenas atesta ausência de antecedentes criminais de uma pessoa física.",
            "Manuais de equipamentos não possuem valor jurídico de sigilo.",
            "Formatação de disco é um procedimento técnico de TI."
        ]
    },
    {
        domain: "DOM4",
        q: "Mesmo que um funcionário assine sua demissão e deixe a empresa hoje, por que as cláusulas do Acordo de Não Divulgação (NDA) costumam prever obrigações que continuam válidas por vários anos após o término do contrato de trabalho?",
        options: [
            "Para obrigar o ex-funcionário a continuar trabalhando de graça.",
            "Para proteger os segredos comerciais e informações confidenciais que o ex-funcionário conheceu enquanto trabalhava na empresa, evitando que ele os entregue a concorrentes.",
            "Para impedir que o ex-funcionário use a internet na casa dele.",
            "Porque o crachá físico continua abrindo as portas para sempre."
        ],
        answer: 1,
        explanations: [
            "O vínculo trabalhista encerra-se na demissão; apenas o dever de sigilo permanece.",
            "O conhecimento adquirido sobre segredos do negócio não pode ser apagado da memória da pessoa, por isso a obrigação legal de confidencialidade (NDA) sobrevive ao fim do emprego.",
            "O NDA protege apenas dados corporativos confidenciais.",
            "O crachá físico deve ser recolhido e bloqueado imediatamente no desligamento."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa instala cercas iluminadas e câmeras no estacionamento; portas com vidro inquebrável na fachada; divisórias com leitor de crachá nos corredores de escritório; e paredes corta-fogo blindadas no data center. Quais são, em ordem do mais externo para o mais interno, os 4 Anéis de Proteção representados?",
        options: [
            "Anel externo ➔ Prédio ➔ Espaço de trabalho ➔ Área segura.",
            "Área segura ➔ Área intermediária ➔ Prédio ➔ Anel externo.",
            "Prédio ➔ Estacionamento ➔ Zona Desmilitarizada ➔ Nuvem.",
            "Anel lógico ➔ Anel virtual ➔ Anel intermediário ➔ Cofre."
        ],
        answer: 0,
        explanations: [
            "Estacionamento/cercas = Anel externo; Fachada/portas = Prédio; Escritórios internos = Espaço de trabalho; Data center/cofre = Área segura.",
            "A ordem está invertida e inclui 'Área intermediária', termo que não existe nos 4 anéis oficiais.",
            "DMZ e Nuvem são conceitos de arquitetura lógica de rede, não anéis físicos.",
            "Essas nomenclaturas não existem na literatura física da EXIN."
        ]
    },
    {
        domain: "DOM3",
        q: "Um visitante chega à empresa para uma reunião comercial. De acordo com os controles de segurança física para áreas internas e seguras, qual procedimento deve ser adotado pela recepção?",
        options: [
            "Entregar um crachá de funcionário efetivo e deixá-lo circular sozinho pelo data center.",
            "Registrar a entrada do visitante (nome, empresa, horário e quem vai visitar), fornecer um crachá que o distinga claramente como 'Visitante' e exigir que seja acompanhado (escoltado) durante sua permanência.",
            "Pedir que ele entre pela porta de carga pegando carona com o entregador.",
            "Emprestar a senha de rede do diretor para ele usar o Wi-Fi interno."
        ],
        answer: 1,
        explanations: [
            "Visitantes nunca devem receber crachás iguais aos de funcionários nem circular sem supervisão em áreas restritas.",
            "O registro formal de entrada/saída, a identificação visual diferenciada e o acompanhamento (escolta) são controles essenciais para visitantes.",
            "Isso incentivaria o Tailgating/Piggybacking, violando o controle perimetral.",
            "Credenciais internas nunca devem ser compartilhadas com terceiros."
        ]
    },
    {
        domain: "DOM3",
        q: "Um funcionário educado abre a porta restrita da área de TI com seu crachá e, por gentileza, segura a porta aberta para que uma pessoa desconhecida carregando caixas de papelão entre junto sem passar pelo leitor biométrico. Qual falha de segurança física acabou de ocorrer?",
        options: [
            "Tailgating / Piggybacking (Entrada de carona não autorizada).",
            "Ataque de Negação de Serviço (DDoS).",
            "Criptografia Híbrida.",
            "Backup Incremental."
        ],
        answer: 0,
        explanations: [
            "Aproveitar-se da abertura de porta por um funcionário autorizado (por distração ou cortesia induzida) para entrar sem se autenticar caracteriza Tailgating/Piggybacking.",
            "DDoS é um ataque lógico de sobrecarga de rede.",
            "Criptografia híbrida é um método de proteção de dados digitais.",
            "Backup incremental é uma rotina de cópia de segurança."
        ]
    },
    {
        domain: "DOM3",
        q: "Na sala de servidores, o sistema de climatização falhou e a umidade relativa do ar caiu para níveis extremamente baixos (ar muito seco); na semana seguinte, outro defeito fez a umidade subir para quase 95% (ar muito úmido). Quais são os riscos respectivos desses dois extremos para os servidores?",
        options: [
            "Ar muito seco gera descargas de eletricidade estática que queimam placas; ar muito úmido gera condensação de água e oxidação/curto-circuito nos componentes.",
            "Ar seco derrete os cabos de plástico; ar úmido apaga as senhas do banco de dados.",
            "Nenhum risco, pois o ar-condicionado serve apenas para remover poeira.",
            "Ar seco atrai vírus de computador; ar úmido atrai cavalos de troia."
        ],
        answer: 0,
        explanations: [
            "O controle higrométrico (umidade) do ar-condicionado no data center é vital porque baixa umidade favorece descargas eletrostáticas (ESD) e alta umidade condensa gotículas nos circuitos.",
            "Umidade não derrete plástico nem altera registros lógicos específicos como senhas.",
            "O ar-condicionado controla temperatura, umidade e filtragem de partículas.",
            "Malwares são ameaças lógicas que não têm relação com a umidade do ar."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a sequência correta de atuação conjunta entre o Banco de Baterias (UPS / No-break) e o Gerador a Diesel quando ocorre um apagão elétrico prolongado de 8 horas na região do data center?",
        options: [
            "Os servidores desligam na hora e o gerador só liga no dia seguinte.",
            "O UPS assume instantaneamente sem interromper os servidores, mantendo a energia pelos primeiros minutos enquanto o gerador a diesel dá a partida e estabiliza para assumir a carga pelas horas seguintes.",
            "O gerador a diesel carrega as pilhas do mouse e o UPS refrigera a sala.",
            "O UPS funciona a diesel por 8 horas e o gerador funciona apenas por 30 segundos."
        ],
        answer: 1,
        explanations: [
            "Se os servidores desligassem na hora, haveria perda de disponibilidade e corrupção de dados.",
            "Como motores a diesel levam alguns segundos/minutos para dar partida e estabilizar a tensão, o UPS (baterias) faz a ponte imediata sem queda, passando a carga para o gerador em seguida.",
            "A função de ambos é alimentar os servidores e equipamentos críticos do data center.",
            "Quem funciona a diesel por longas horas é o gerador; o UPS usa baterias químicas de curta duração."
        ]
    },
    {
        domain: "DOM2",
        q: "Um usuário baixa um programa gratuito que promete acelerar o computador. O programa realmente limpa arquivos temporários como prometido, mas, sem que o usuário saiba, também instala um módulo oculto que envia cópias de documentos para um servidor na internet. Qual malware é esse?",
        options: [
            "Trojan (Cavalo de Troia).",
            "Worm puro de rede.",
            "Falso Positivo.",
            "Controle Detectivo."
        ],
        answer: 0,
        explanations: [
            "Realizar propositalmente atividades secundárias maliciosas e ocultas além da função útil aparente é a definição exata de Trojan na EXIN.",
            "O Worm não se disfarça de utilitário; ele foca em se replicar autonomamente pela rede.",
            "Falso positivo é um alerta de segurança disparado por engano.",
            "Trata-se de uma ameaça (malware), não de um controle."
        ]
    },
    {
        domain: "DOM2",
        q: "Centenas de computadores de uma empresa foram infectados em poucos minutos sem que nenhum funcionário tivesse aberto e-mails ou clicado em arquivos: o código malicioso explorou uma falha no protocolo de rede local e copiou a si mesmo de máquina em máquina formando uma rede zumbi (botnet). Qual malware agiu?",
        options: [
            "Worm (Verme).",
            "Trojan estático.",
            "Adware de navegador.",
            "Certificado Digital."
        ],
        answer: 0,
        explanations: [
            "Criar uma rede de computadores contaminados ao se replicar de forma autônoma pela rede é a definição clássica de Worm.",
            "Trojans não se replicam sozinhos pela rede; dependem de instalação/engano.",
            "Adwares apenas exibem publicidade no navegador.",
            "Certificado digital é uma ferramenta legítima de criptografia."
        ]
    },
    {
        domain: "DOM2",
        q: "Um invasor instala secretamente um software (ou pequeno adaptador físico no cabo do teclado) cuja única função é gravar todas as teclas digitadas pelo diretor financeiro para capturar suas senhas bancárias e enviá-las ao criminoso. Como essa variante de Spyware é chamada?",
        options: [
            "Keylogger.",
            "Firewall.",
            "Mantrap.",
            "UPS."
        ],
        answer: 0,
        explanations: [
            "O Keylogger é um tipo específico de spyware (de software ou hardware) projetado para registrar a digitação do usuário e enviá-la a terceiros.",
            "Firewall é um controle de filtragem de rede.",
            "Mantrap é uma eclusa física de portas intertravadas.",
            "UPS é um banco de baterias contra quedas elétricas."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que uma vulnerabilidade recém-descoberta do tipo 'Dia-Zero' (Zero-Day) representa um risco tão elevado mesmo para organizações que mantêm sua rotina de atualização de patches em dia?",
        options: [
            "Porque ela só funciona no dia 1º de janeiro.",
            "Porque a falha já está sendo explorada por atacantes, mas o fabricante do software teve 'zero dias' para criar e disponibilizar um patch oficial de correção.",
            "Porque ela destrói fisicamente as paredes do prédio.",
            "Porque ela desliga o gerador a diesel remotamente sem usar rede."
        ],
        answer: 1,
        explanations: [
            "O termo 'Zero-Day' não tem relação com datas do calendário.",
            "Em um ataque Zero-Day, ainda não existe vacina (patch) ou assinatura conhecida do fabricante, exigindo controles compensatórios e detecção por anomalia.",
            "Vulnerabilidades de software atuam no âmbito lógico, não na alvenaria.",
            "Equipamentos isolados sem conexão de rede não sofrem ataques remotos de software."
        ]
    },
    {
        domain: "DOM2",
        q: "Um criminoso telefona para um funcionário recém-contratado fingindo ser o técnico de suporte de TI da matriz. Com tom urgente e persuasivo, ele convence o funcionário a revelar sua senha de rede pelo telefone para 'evitar o bloqueio da folha de pagamento'. Qual técnica de ataque foi utilizada?",
        options: [
            "Engenharia Social (Pretexting / Vishing).",
            "Força Bruta Criptográfica.",
            "Injeção de SQL (SQL Injection).",
            "Preenchimento de Tráfego."
        ],
        answer: 0,
        explanations: [
            "Manipular psicologicamente uma pessoa usando um pretexto falso de autoridade ou urgência para que ela entregue informações confidenciais é Engenharia Social.",
            "Força bruta usa computadores testando milhões de combinações matemáticas, sem conversar com o usuário.",
            "SQL Injection é um ataque técnico contra bancos de dados mal programados.",
            "Preenchimento de tráfego é uma técnica defensiva de rede."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa possui uma única rede local plana (flat network) onde os computadores da Recepção, do Marketing, do RH e os Servidores Financeiros estão todos conectados no mesmo segmento. Para melhorar a segurança interna e conter a propagação lateral caso uma máquina da recepção pegue um Worm, qual controle de rede deve ser aplicado?",
        options: [
            "Segmentação de rede (por meio de VLANs e sub-redes separadas por firewall interno).",
            "Trocar os monitores de LCD por LED.",
            "Aumentar a temperatura do ar-condicionado.",
            "Distribuir a mesma senha para todos os setores."
        ],
        answer: 0,
        explanations: [
            "Segmentar a rede em zonas isoladas (VLANs/Sub-redes) garante confidencialidade entre setores e impede que um malware na recepção alcance diretamente os servidores financeiros.",
            "Monitores não influenciam o tráfego de rede.",
            "Aquecer a sala de servidores prejudica os equipamentos.",
            "Compartilhar senhas agrava o risco de invasão."
        ]
    },
    {
        domain: "DOM3",
        q: "Um funcionário em viagem precisa acessar o sistema interno da empresa usando o Wi-Fi do hotel. Ao ativar a VPN corporativa no seu notebook, de que forma a VPN protege os dados que ele transmite?",
        options: [
            "A VPN cria um túnel lógico criptografado entre o notebook e o gateway da empresa, impedindo que terceiros na rede do hotel ou na internet leiam ou alterem o tráfego.",
            "A VPN apaga todos os vírus que já estavam instalados no pendrive do hotel.",
            "A VPN impede que alguém olhe para a tela do notebook por cima do ombro dele no saguão.",
            "A VPN substitui a necessidade de ter backup no servidor da matriz."
        ],
        answer: 0,
        explanations: [
            "A VPN (Virtual Private Network) encapsula e criptografa todo o tráfego em trânsito através de redes públicas inseguras.",
            "VPN é um controle de comunicação segura, não um software antivírus.",
            "Olhar a tela fisicamente (Shoulder Surfing) só é mitigado com filtro de privacidade físico e cuidado postural.",
            "Criptografia de rede não substitui cópias de segurança de bancos de dados."
        ]
    },
    {
        domain: "DOM3",
        q: "O administrador de segurança instalou um sensor de rede conectado a uma porta de espelhamento (SPAN/Mirror Port) do switch principal. Esse equipamento analisa cópias dos pacotes e envia alertas ao SOC quando vê um ataque, mas não tem capacidade física de interromper os pacotes originais. Qual equipamento é esse?",
        options: [
            "IDS (Intrusion Detection System / Sistema de Detecção de Intrusão).",
            "IPS (Intrusion Prevention System / Sistema de Prevenção de Intrusão).",
            "Firewall de Bloqueio Ativo.",
            "Gerador de Energia."
        ],
        answer: 0,
        explanations: [
            "O IDS opera fora da linha direta de tráfego (passivo/espelhado), atuando exclusivamente como controle detectivo que gera alertas.",
            "O IPS opera em linha (in-line) e descarta ativamente os pacotes maliciosos.",
            "O firewall fica em linha bloqueando conexões não autorizadas.",
            "Gerador é um equipamento elétrico."
        ]
    },
    {
        domain: "DOM3",
        q: "Um sensor de segurança de rede está configurado com regras tão rígidas e sensíveis que bloqueia dezenas de e-mails comerciais legítimos de clientes todos os dias, classificando-os erroneamente como ataques cibernéticos. Esse excesso de bloqueios indevidos caracteriza uma alta taxa de:",
        options: [
            "Falsos Positivos.",
            "Falsos Negativos.",
            "Acúmulo de Privilégios.",
            "Criptografia Assimétrica."
        ],
        answer: 0,
        explanations: [
            "Quando o sistema aponta como 'ataque positivo' algo que na verdade é tráfego normal e benigno, temos um Falso Positivo (que prejudica a disponibilidade do negócio).",
            "Falso negativo é quando o ataque é real, mas o sistema diz que nada aconteceu.",
            "Acúmulo de privilégios é uma falha de gestão de acessos de RH.",
            "Criptografia é um método de cifragem de dados."
        ]
    },
    {
        domain: "DOM3",
        q: "Duas empresas precisam transferir um arquivo de 500 Gigabytes pela rede de forma confidencial e no menor tempo possível. Elas já compartilharam uma chave secreta previamente por um canal seguro. Qual tipo de algoritmo criptográfico é o mais indicado para cifrar esse grande volume de dados rapidamente?",
        options: [
            "Criptografia Simétrica.",
            "Criptografia Assimétrica pura.",
            "Função Hash sem chave.",
            "Lista de Revogação (CRL)."
        ],
        answer: 0,
        explanations: [
            "A criptografia simétrica (de chave única/compartilhada) exige muito menos processamento matemático, sendo ideal para cifrar grandes volumes de dados em alta velocidade.",
            "A criptografia assimétrica é até mil vezes mais lenta, sendo inviável para arquivos gigantescos.",
            "Funções hash são irreversíveis: se aplicarem hash no arquivo, o destinatário nunca conseguirá recuperar os 500 GB originais.",
            "CRL é apenas uma lista de certificados cancelados."
        ]
    },
    {
        domain: "DOM3",
        q: "Carlos precisa enviar uma mensagem confidencial para o diretor usando criptografia assimétrica. Na pasta de rede pública da empresa estão disponíveis: a Chave Pública do diretor e a Chave Pública de Carlos. Qual chave Carlos deve usar para cifrar a mensagem de modo que apenas o diretor consiga abri-la?",
        options: [
            "A Chave Pública do diretor.",
            "A Chave Privada de Carlos.",
            "A Chave Pública de Carlos.",
            "Nenhuma chave, pois a chave pública é aberta."
        ],
        answer: 0,
        explanations: [
            "Na criptografia assimétrica, para garantir Confidencialidade, cifra-se com a Chave Pública do destinatário (diretor), pois somente a Chave Privada do diretor conseguirá decifrá-la.",
            "Se Carlos usar sua própria chave privada, qualquer pessoa com a chave pública de Carlos poderá abrir (isso serve para Assinatura Digital, não para confidencialidade).",
            "Se cifrar com a chave pública de Carlos, o próprio diretor não conseguirá abrir.",
            "Sem cifrar com a chave pública do destinatário, a mensagem viajará em texto claro."
        ]
    },
    {
        domain: "DOM3",
        q: "A diretora de uma empresa assina digitalmente um comunicado oficial usando sua Chave Privada. Quando os funcionários recebem o comunicado, qual chave o computador deles utiliza automaticamente para verificar se a assinatura da diretora é válida e autêntica?",
        options: [
            "A Chave Pública da diretora.",
            "A Chave Privada da diretora.",
            "A senha pessoal do Wi-Fi de cada funcionário.",
            "O código PIN do crachá da recepção."
        ],
        answer: 0,
        explanations: [
            "Na assinatura digital assimétrica, o autor assina com sua Chave Privada (secreta) e qualquer destinatário valida a autenticidade e integridade usando a Chave Pública correspondente do autor.",
            "A chave privada da diretora é secreta e jamais é distribuída aos funcionários.",
            "Senhas de Wi-Fi não têm relação matemática com o par de chaves da diretora.",
            "PINs de crachá são controles físicos locais."
        ]
    },
    {
        domain: "DOM3",
        q: "Um site de software disponibiliza um instalador para download e publica na página o código SHA-256 correspondente ao arquivo original. Quando o usuário baixa o arquivo e calcula o SHA-256 na sua máquina, o resultado dá exatamente igual ao publicado no site. O que isso comprova?",
        options: [
            "Que a Integridade do arquivo foi preservada (o arquivo não foi corrompido nem alterado durante o download).",
            "Que o arquivo foi criptografado e ninguém mais na internet pode baixá-lo.",
            "Que o servidor do site possui gerador a diesel.",
            "Que o computador do usuário nunca precisará de backup."
        ],
        answer: 0,
        explanations: [
            "Qualquer alteração de um único bit no arquivo mudaria completamente o resumo Hash (SHA-256); hashes idênticos comprovam a integridade do arquivo.",
            "O Hash não esconde o conteúdo do arquivo (não garante confidencialidade).",
            "Hash criptográfico não informa nada sobre a infraestrutura elétrica do servidor.",
            "A verificação de download não substitui rotinas de backup locais."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que um criminoso não consegue simplesmente criar um par de chaves assimétricas em casa dizendo 'Eu sou o Banco Central' e enganar os navegadores dos clientes que utilizam uma Infraestrutura de Chave Pública (ICP / PKI)?",
        options: [
            "Porque na ICP o certificado digital precisa ser assinado por uma Autoridade Certificadora (CA) confiável, que verifica e atesta a qual pessoa ou sistema aquela chave pública realmente pertence.",
            "Porque chaves assimétricas só podem ser criadas em computadores sem acesso à internet.",
            "Porque o firewall doméstico bloqueia números primos.",
            "Porque a chave pública é mantida em segredo absoluto dentro do cofre do banco."
        ],
        answer: 0,
        explanations: [
            "A função essencial de uma ICP (PKI) é justamente vincular com garantia (via CA) uma identidade real verificada a uma chave pública específica.",
            "Qualquer computador pode gerar pares de chaves matemáticos, mas sem a assinatura de uma CA confiável o navegador alertará que o certificado é inválido.",
            "Firewalls não filtram cálculos matemáticos locais.",
            "A chave pública é pública por definição; quem fica em segredo é a chave privada."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma analista financeira nota que arquivos de clientes sumiram misteriosamente da sua pasta de rede. Seguindo corretamente o fluxo de gerenciamento de incidentes da literatura da EXIN, por que ela deve acionar primeiro o Help Desk em vez de ligar direto para o CISO da empresa?",
        options: [
            "Porque o CISO não trabalha durante o dia.",
            "Porque incidentes não devem ser escalados verticalmente de imediato: o Help Desk faz a triagem inicial (verificando se é realmente um incidente de segurança ou apenas um erro operacional/pasta movida) e registra o chamado padronizado.",
            "Porque é proibido falar com o CISO sem a presença de um advogado.",
            "Porque o Help Desk é o único setor autorizado a alterar a estratégia de negócios da empresa."
        ],
        answer: 1,
        explanations: [
            "O motivo é processual e organizacional, não de horário de expediente.",
            "Centralizar o primeiro contato no Help Desk garante registro padronizado, aplicação de procedimentos iniciais e filtra falsos alarmes antes de acionar especialistas ou gestores.",
            "Não há exigência jurídica de advogados para comunicação interna.",
            "Quem define a estratégia de negócios é a Gestão Geral (Alta Direção)."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante o registro inicial de um incidente de segurança reportado por telefone ao Help Desk, qual conjunto de informações compõe o registro básico obrigatório que não pode faltar?",
        options: [
            "O nome da pessoa que notifica o incidente, a data e hora do relato, a descrição do que foi observado e as eventuais consequências.",
            "Apenas o endereço MAC da placa-mãe e o código-fonte em linguagem Assembly.",
            "O histórico escolar do funcionário e a marca da cadeira onde ele está sentado.",
            "Apenas a assinatura do auditor externo."
        ],
        answer: 0,
        explanations: [
            "O registro inicial no Help Desk exige identificar quem está reportando (nome), quando (data/hora), o quê (descrição) e os impactos aparentes (consequências).",
            "Detalhes técnicos profundos são apurados posteriormente pela equipe de suporte/segurança.",
            "Dados irrelevantes não compõem o registro de incidentes.",
            "O auditor externo não atua no balcão de atendimento de chamados."
        ]
    },
    {
        domain: "DOM2",
        q: "No gerenciamento de continuidade de negócios, qual é o objetivo específico da 'Análise de Impacto no Negócio' (BIA - Business Impact Analysis) realizada durante a fase de planejamento?",
        options: [
            "Instalar antivírus nos computadores do setor comercial.",
            "Identificar quais são os processos e sistemas mais críticos da organização, estimar os prejuízos causados pela sua parada ao longo do tempo e definir as prioridades e metas de recuperação (como RTO e RPO).",
            "Demitir funcionários que esqueceram o crachá em casa.",
            "Escolher a cor do logotipo da empresa."
        ],
        answer: 1,
        explanations: [
            "Instalar antivírus é uma tarefa operacional de proteção contra malware.",
            "A BIA levanta a criticidade de cada processo de negócio para determinar o que precisa voltar a funcionar primeiro após um desastre e em quanto tempo.",
            "Questões disciplinares de crachá pertencem à gestão de RH/acesso físico.",
            "Identidade visual de marketing não faz parte da continuidade de negócios."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma corretora de valores define em sua BIA que: (1) se o sistema de ordens cair, ele precisa voltar ao ar em até 30 minutos; (2) quando voltar, só pode ter perdido no máximo os últimos 5 minutos de transações gravadas. Se a equipe de TI faz backups apenas uma vez por dia (a cada 24 horas), qual meta está sendo violada?",
        options: [
            "O RPO (Recovery Point Objective) de 5 minutos está sendo violado, pois um backup a cada 24 horas pode gerar perda de até 24 horas de dados.",
            "O MTBF do monitor está sendo violado.",
            "Apenas a Confidencialidade está sendo violada.",
            "Nenhuma meta, pois backup diário garante perda zero."
        ],
        answer: 0,
        explanations: [
            "Como o RPO determina a perda máxima de dados medida em tempo (5 min), fazer cópias apenas a cada 24h deixa uma janela de perda inaceitável.",
            "MTBF é a estimativa de horas entre falhas físicas de fabricação de um hardware.",
            "O problema refere-se à Disponibilidade e Integridade/Recuperação de dados, não ao sigilo.",
            "Se o servidor queimar 23 horas após o backup diário, 23 horas de dados serão perdidas."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma empresa aluga um espaço secundário de contingência que já possui energia elétrica, ar-condicionado, links de internet ativos e servidores físicos instalados nas prateleiras. Porém, em caso de desastre na sede, a equipe precisará levar ou baixar as últimas fitas de backup e carregar os dados nos servidores, levando cerca de 8 horas para operar. Que tipo de site é esse?",
        options: [
            "Warm Site (Site Morno).",
            "Cold Site (Site Frio).",
            "Hot Site espelhado em tempo real.",
            "Anel Externo."
        ],
        answer: 0,
        explanations: [
            "O Warm Site é o modelo intermediário: já possui o hardware e conectividade instalados, mas não está espelhado em tempo real, exigindo carregar os backups para assumir a operação.",
            "No Cold Site não há servidores instalados (é apenas a sala vazia com infraestrutura predial).",
            "No Hot Site os dados já estão sincronizados em tempo real, assumindo em minutos.",
            "Anel externo é o perímetro físico do terreno."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa realiza um Backup Completo (Full) no domingo à noite. Na segunda, terça e quarta-feira à noite, executa Backups Diferenciais. Na quinta-feira de manhã, o disco principal queima. Quais mídias o administrador deve inserir para restaurar todos os dados até o estado de quarta-feira à noite?",
        options: [
            "Apenas duas mídias: o Backup Completo de domingo e o último Backup Diferencial de quarta-feira.",
            "Quatro mídias: o Completo de domingo mais os diferenciais de segunda, terça e quarta.",
            "Apenas o Diferencial de segunda-feira.",
            "Nenhuma mídia, pois o backup diferencial apaga o servidor."
        ],
        answer: 0,
        explanations: [
            "Como o backup Diferencial não limpa o archive bit, o diferencial de quarta-feira já contém tudo o que mudou na segunda, na terça e na quarta desde o último Full de domingo.",
            "Exigir todas as mídias diárias em sequência é característica do backup Incremental, e não do Diferencial.",
            "O diferencial de segunda não teria os dados criados na terça e na quarta, nem a base de domingo.",
            "O backup diferencial é um método seguro e rápido de restauração."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que um plano de continuidade de negócios (BCP/DRP) que foi apenas escrito no papel e guardado na gaveta do diretor, sem nunca passar por simulações ou exercícios práticos (testes), é considerado ineficaz em uma auditoria ISO/IEC 27001?",
        options: [
            "Porque o papel amarela com o tempo.",
            "Porque sem testes periódicos não é possível saber se os procedimentos realmente funcionam na prática, se as pessoas sabem como agir sob pressão e se o RTO/RPO será atingido.",
            "Porque a ISO 27001 proíbe imprimir planos em papel.",
            "Porque os testes servem apenas para gastar o combustível do gerador."
        ],
        answer: 1,
        explanations: [
            "A conservação estética do papel não é o critério técnico da auditoria.",
            "Planos de continuidade e backups precisam ser testados regularmente para identificar falhas ocultas, atualizar contatos e treinar as equipes antes que uma crise real aconteça.",
            "Pelo contrário, é recomendável ter cópias impressas do BCP fora do prédio caso o servidor de documentos esteja fora do ar durante o desastre.",
            "Testar o gerador sob carga é uma prática legítima e necessária de manutenção preventiva."
        ]
    },
    {
        domain: "DOM4",
        q: "Um desenvolvedor contratado por uma empresa cria um algoritmo inovador durante seu expediente de trabalho para otimizar as entregas da companhia. Qual ramo da legislação protege os direitos da empresa sobre esse código-fonte contra cópias ilegais ou pirataria por concorrentes?",
        options: [
            "Direitos de Propriedade Intelectual (PI / Direitos Autorais e Patentes).",
            "Norma voluntária ISO/IEC 27005.",
            "Código de Trânsito.",
            "Apenas o manual do firewall."
        ],
        answer: 0,
        explanations: [
            "As leis de Propriedade Intelectual (PI) e Direitos Autorais protegem criações da mente, como softwares, bancos de dados originais, marcas e segredos industriais.",
            "A ISO 27005 é um guia técnico de gestão de riscos, não uma lei de propriedade.",
            "Legislação de trânsito não regula direitos autorais de software.",
            "Manuais técnicos não têm força de lei civil ou penal."
        ]
    },
    {
        domain: "DOM4",
        q: "Para evitar processos por violação de Direitos de Propriedade Intelectual (PI) no uso de softwares comerciais dentro da empresa, qual controle organizacional e técnico deve ser mantido pela administração?",
        options: [
            "Manter um inventário atualizado de licenças de software, proibir a instalação de programas não homologados/piratas e auditar periodicamente as máquinas.",
            "Permitir que cada funcionário baixe programas craqueados da internet.",
            "Desligar os computadores durante as visitas de auditoria.",
            "Trocar o nome dos arquivos executáveis para esconder o software."
        ],
        answer: 0,
        explanations: [
            "O controle estrito de licenciamento e bloqueio de instalações não autorizadas garante a conformidade com a lei de propriedade intelectual e evita malwares embutidos em softwares piratas.",
            "Softwares piratas violam a lei (gerando multas pesadas) e são uma das maiores fontes de Trojans.",
            "Ocultar máquinas de auditores é fraude grave de conformidade.",
            "Renomear arquivos não legaliza o uso nem engana ferramentas de auditoria de software."
        ]
    },
    {
        domain: "DOM4",
        q: "Sob a ótica do Regulamento Geral sobre a Proteção de Dados (GDPR / LGPD), qual das informações abaixo é classificada como 'Dado Pessoal' e exige controles rigorosos de privacidade?",
        options: [
            "Qualquer informação relacionada a uma pessoa física identificada ou identificável (como nome, CPF, e-mail nominal, endereço residencial ou prontuário médico).",
            "O número total agregado de cadeiras compradas por uma fábrica no ano passado.",
            "A temperatura média do oceano Atlântico.",
            "O catálogo público de preços dos produtos vendidos pela loja."
        ],
        answer: 0,
        explanations: [
            "O GDPR e a LGPD protegem qualquer dado que identifique diretamente ou permita identificar indiretamente uma pessoa natural viva.",
            "Dados estatísticos patrimoniais de pessoas jurídicas não são dados pessoais.",
            "Dados climáticos da natureza não se referem a pessoas físicas.",
            "Tabelas públicas de preços de mercadorias são dados comerciais, não pessoais."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma rede de farmácias coleta dados de saúde dos clientes. Para realizar um estudo sobre quais bairros compram mais vitaminas no inverno, a equipe de TI remove de forma definitiva e irreversível os nomes, CPFs e telefones da planilha antes de entregá-la aos analistas, de modo que seja impossível descobrir quem comprou o quê. Qual técnica foi usada?",
        options: [
            "Anonimização de dados.",
            "Engenharia Social.",
            "Escalamento Vertical.",
            "Falso Negativo."
        ],
        answer: 0,
        explanations: [
            "Quando o vínculo entre o dado e o indivíduo é removido de forma irreversível (impossibilitando reidentificar a pessoa), o dado passa a ser Anonimizado.",
            "Engenharia social é uma técnica de ataque psicológico.",
            "Escalamento vertical é o acionamento da chefia em incidentes.",
            "Falso negativo é a falha de um sensor em detectar um ataque."
        ]
    },
    {
        domain: "DOM4",
        q: "Diferente da Anonimização irreversível, qual técnica de privacidade substitui o nome real do titular por um código ou identificador indireto (ex: 'Paciente #8492'), mantendo uma tabela separada e protegida a sete chaves que permite reverter o código caso um médico autorizado precise avisar o paciente sobre um exame?",
        options: [
            "Pseudonimização.",
            "Destruição física de mídia.",
            "Ataque de Força Bruta.",
            "Cold Site."
        ],
        answer: 0,
        explanations: [
            "Na Pseudonimização, os identificadores diretos são substituídos por um pseudônimo/código, reduzindo o risco na análise diária, mas permitindo a reidentificação controlada por quem detém a chave/tabela adicional.",
            "A destruição física inutiliza o suporte de armazenamento por completo.",
            "Força bruta é um método de ataque para adivinhar senhas.",
            "Cold site é uma instalação física vazia para contingência."
        ]
    },
    {
        domain: "DOM4",
        q: "Quando uma organização decide terceirizar a gestão do seu Help Desk e dos seus servidores para um provedor externo, onde devem constar formalmente as metas de disponibilidade (ex: 99,9% no ar), os tempos máximos de resposta a incidentes, o direito de auditoria e as penalidades em caso de falha?",
        options: [
            "No Acordo de Nível de Serviço (SLA - Service Level Agreement) / Contrato formalizado entre as partes.",
            "Apenas em uma conversa verbal informal durante o almoço.",
            "Em um post nas redes sociais do fornecedor.",
            "No Certificado de Boa Índole do porteiro."
        ],
        answer: 0,
        explanations: [
            "O SLA (parte integrante do contrato/acordo formal) é o instrumento que define métricas mensuráveis de desempenho, requisitos de segurança e responsabilidades do fornecedor.",
            "Acordos verbais não oferecem garantia jurídica nem auditabilidade.",
            "Publicações publicitárias não substituem cláusulas contratuais de segurança.",
            "O certificado de boa índole é um documento individual de antecedentes criminais."
        ]
    },
    {
        domain: "DOM3",
        q: "Um funcionário precisa trabalhar de um café público usando seu laptop corporativo. Além de ativar a VPN para proteger os dados em trânsito, qual controle organizacional/comportamental ele deve adotar no local para evitar o vazamento visual e físico de informações?",
        options: [
            "Posicionar-se de costas para a parede (ou usar filtro de privacidade na tela contra Shoulder Surfing) e bloquear a tela (Clear Screen) imediatamente se precisar levantar para ir ao balcão.",
            "Deixar o laptop aberto e desbloqueado sobre a mesa enquanto vai ao banheiro para marcar lugar.",
            "Ditar a senha do banco em voz alta pelo telefone para o colega.",
            "Conectar pen drives encontrados no chão do café para ver de quem são."
        ],
        answer: 0,
        explanations: [
            "Proteger o ângulo de visão da tela e aplicar a política de Tela Limpa (bloqueio imediato de sessão ao se afastar) são medidas essenciais no trabalho móvel.",
            "Deixar o equipamento desbloqueado em local público expõe tanto ao furto físico quanto ao acesso lógico imediato.",
            "Falar informações confidenciais em voz alta em locais públicos viola a confidencialidade.",
            "Inserir pen drives desconhecidos é uma das principais causas de infecção por malware (ameaça humana)."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que os registros de eventos (Logs de Auditoria) dos servidores críticos devem ser protegidos contra modificação e, preferencialmente, copiados em tempo real para um servidor central de logs dedicado e isolado (Syslog / SIEM) onde nem mesmo o administrador comum do servidor original tenha permissão de apagar arquivos?",
        options: [
            "Para deixar o disco rígido do servidor original vazio para instalar jogos.",
            "Para garantir a Integridade e a Auditabilidade das evidências: se um invasor (ou administrador mal-intencionado) comprometer o servidor, ele não conseguirá apagar seus próprios rastros nos logs.",
            "Porque logs guardados no mesmo servidor consomem toda a bateria do no-break.",
            "Porque a norma proíbe que logs tenham data e hora."
        ],
        answer: 1,
        explanations: [
            "Servidores corporativos nunca devem ser usados para jogos.",
            "A primeira ação de um invasor após ganhar privilégio de administrador é tentar apagar os logs locais para esconder o crime; isolar e proteger os logs garante o Não-repúdio e a investigação forense.",
            "Arquivos de texto de log não afetam significativamente o consumo elétrico do UPS.",
            "Todos os logs devem obrigatoriamente ter data e hora exatas."
        ]
    },
    {
        domain: "DOM3",
        q: "Durante a investigação de um ataque cibernético que envolveu três servidores internos e o firewall da empresa, a equipe percebe que o relógio do Servidor A estava adiantado em 15 minutos, o do Servidor B estava atrasado em 1 hora e o do Firewall estava com a data do ano anterior. Qual controle da ISO/IEC 27002 faltou para viabilizar a correlação dos logs?",
        options: [
            "Sincronização de relógios (Clock Synchronization, ex: via protocolo NTP) com uma fonte de tempo única e confiável.",
            "Desfragmentação manual dos cabos de rede.",
            "Troca das cadeiras do escritório.",
            "Instalação de vidro inquebrável no monitor."
        ],
        answer: 0,
        explanations: [
            "A sincronização de relógios (NTP) é obrigatória para que as trilhas de auditoria (logs) de diferentes equipamentos possam ser reconstruídas na ordem cronológica exata durante uma perícia ou resposta a incidentes.",
            "Cabos de rede não sofrem desfragmentação.",
            "Ergonomia de móveis não afeta o relógio do sistema operacional.",
            "Vidro inquebrável é um controle físico predial."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma organização publica mensalmente dezenas de correções (patches) nos seus servidores. De acordo com o processo de Gestão de Vulnerabilidades Técnicas da ISO/IEC 27002, qual deve ser o critério para priorizar quais patches devem ser testados e aplicados primeiro?",
        options: [
            "Ordem alfabética do nome do fabricante do software.",
            "O grau de severidade do risco (combinando a criticidade do ativo para o negócio, a exposição da vulnerabilidade e a existência de ataques ativos explorando a falha).",
            "Aplicar primeiro apenas os patches que mudam o papel de parede do sistema.",
            "Sortear os patches jogando uma moeda no final do ano."
        ],
        answer: 1,
        explanations: [
            "Ordem alfabética ignora completamente a urgência de falhas críticas em sistemas expostos.",
            "A gestão de vulnerabilidades é orientada a riscos: sistemas críticos ou expostos à internet com falhas severas têm prioridade máxima de correção.",
            "Atualizações meramente estéticas têm prioridade mínima em relação a correções de segurança.",
            "Adiamento aleatório deixa brechas conhecidas abertas para exploração por meses."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que o uso de um software cujo fabricante encerrou oficialmente o suporte técnico (End-of-Life / Fim de Vida Útil, como versões antigas de sistemas operacionais) representa uma vulnerabilidade grave na visão da ISO/IEC 27002?",
        options: [
            "Porque as letras da tela ficam apagadas após o fim do suporte.",
            "Porque o fabricante deixa de lançar patches e atualizações de segurança para novas falhas descobertas, deixando o sistema permanentemente exposto a ataques.",
            "Porque o mouse para de funcionar no dia seguinte ao fim do suporte.",
            "Porque o computador passa a gastar o triplo de papel na impressora."
        ],
        answer: 1,
        explanations: [
            "O funcionamento visual do software não muda com o fim do suporte comercial.",
            "Sem suporte oficial, qualquer vulnerabilidade nova descoberta naquele software nunca receberá correção (patch), exigindo atualização (upgrade) ou isolamento estrito da máquina.",
            "Periféricos continuam operando normalmente.",
            "O fim de suporte não altera o volume de impressão."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa adota a política 'BYOD' (Bring Your Own Device), permitindo que os funcionários utilizem seus próprios smartphones e notebooks pessoais para acessar o e-mail e os sistemas da empresa. Qual é o principal desafio de segurança que uma política específica de BYOD precisa regular?",
        options: [
            "Escolher a cor da capinha do celular de cada funcionário.",
            "Separar e proteger os dados corporativos dentro de um aparelho que pertence ao funcionário (exigindo criptografia, bloqueio por tela/PIN e capacidade de apagar remotamente os dados da empresa em caso de perda ou demissão).",
            "Obrigar o funcionário a doar o celular pessoal para a empresa.",
            "Proibir que o funcionário faça ligações pessoais no final de semana."
        ],
        answer: 1,
        explanations: [
            "Aspectos estéticos não fazem parte da segurança da informação.",
            "No BYOD, a empresa não é dona do hardware, mas continua dona da informação corporativa; por isso exige contêineres criptografados, senha no aparelho e limpeza remota (Remote Wipe) dos dados empresariais.",
            "Se o aparelho fosse da empresa, não seria BYOD (Bring Your Own Device).",
            "O aparelho pertence ao colaborador, que pode usá-lo na vida pessoal desde que os dados corporativos estejam isolados e protegidos."
        ]
    },
    {
        domain: "DOM3",
        q: "Um executivo esquece seu smartphone corporativo dentro de um táxi. Assim que ele avisa o Help Desk, a equipe de TI aciona um comando pela central de gerenciamento de dispositivos móveis (MDM) que apaga instantaneamente todos os arquivos e contas de e-mail do aparelho à distância. Como se chama esse controle?",
        options: [
            "Apagamento Remoto (Remote Wipe).",
            "Preenchimento de Tráfego.",
            "Backup Completo.",
            "Análise Qualitativa."
        ],
        answer: 0,
        explanations: [
            "O Remote Wipe (Apagamento/Sanitização Remota) é um controle repressivo/corretivo essencial para proteger a confidencialidade de dados em dispositivos móveis perdidos ou furtados.",
            "Preenchimento de tráfego mascara o volume de pacotes em redes.",
            "Backup copia dados para guarda, não apaga dispositivos perdidos.",
            "Análise qualitativa é um método de avaliação de riscos."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um sistema de autenticação biométrica (como leitor de impressão digital ou íris), o administrador precisa ajustar a sensibilidade do aparelho. Se ele deixar o leitor 'tolerante demais', qualquer dedo parecido pode abrir a porta; se deixar 'rígido demais', até o próprio diretor terá sua digital recusada várias vezes. Como se chamam esses dois erros biométricos?",
        options: [
            "Falsa Aceitação (deixar um impostor entrar - grave para a segurança) e Falsa Rejeição (barrar um usuário legítimo - ruim para a disponibilidade/usabilidade).",
            "Criptografia Simétrica e Criptografia Assimétrica.",
            "Backup Incremental e Backup Diferencial.",
            "Dano Direto e Dano Indireto."
        ],
        answer: 0,
        explanations: [
            "Na biometria, a Taxa de Falsa Aceitação (FAR - False Acceptance Rate, um Falso Negativo de segurança) permite acesso indevido; a Taxa de Falsa Rejeição (FRR - False Rejection Rate, um Falso Positivo) nega acesso a quem tem direito.",
            "Estes são métodos matemáticos de cifragem.",
            "Estes são tipos de cópia de segurança.",
            "Estes são tipos de impacto financeiro/operacional pós-incidente."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a principal vantagem de segurança ao implementar o 'Single Sign-On' (SSO - Autenticação Única) em uma empresa onde o funcionário antes precisava decorar 15 senhas diferentes para usar 15 sistemas internos?",
        options: [
            "Reduz a fadiga de senhas (evitando que o usuário anote as 15 senhas em papéis na mesa ou crie senhas fracas) e permite centralizar o bloqueio imediato de todos os acessos em um único ponto.",
            "Elimina a necessidade de usar firewalls na empresa.",
            "Torna impossível que alguém roube a senha principal do usuário.",
            "Garante que o servidor nunca fique sem energia elétrica."
        ],
        answer: 0,
        explanations: [
            "O SSO melhora a usabilidade e a segurança ao exigir que o usuário memorize uma única credencial forte (preferencialmente com MFA), porém exige proteção máxima dessa credencial central (pois se vazar, dá acesso a tudo).",
            "O SSO gerencia autenticação de usuários, não filtragem de pacotes de rede.",
            "Se a credencial única do SSO for comprometida, o invasor acessa todos os sistemas vinculados; por isso o SSO deve ser combinado com MFA.",
            "Autenticação lógica não interfere no fornecimento elétrico."
        ]
    },
    {
        domain: "DOM3",
        q: "Para proteger as redes sem fio (Wi-Fi) de um escritório contra visitantes e transeuntes na calçada, qual combinação de controles arquitetônicos e técnicos é recomendada pela ISO/IEC 27002?",
        options: [
            "Deixar o Wi-Fi aberto sem senha, mas pedir que as pessoas na rua não usem.",
            "Utilizar criptografia forte no protocolo sem fio (ex: WPA2/WPA3 Enterprise) e separar totalmente a rede Wi-Fi de visitantes (Guest Network) da rede corporativa interna.",
            "Apenas esconder o nome da rede (SSID) sem colocar senha ou criptografia.",
            "Colocar o roteador Wi-Fi dentro de um cofre de chumbo fechado."
        ],
        answer: 1,
        explanations: [
            "Redes abertas permitem interceptação imediata de tráfego e invasão da LAN.",
            "Criptografar o tráfego sem fio e isolar os visitantes em uma VLAN separada (que só acessa a internet, sem enxergar os servidores internos) são os controles essenciais de Wi-Fi.",
            "Ocultar o SSID sem criptografia não protege a rede, pois qualquer sniffer gratuito descobre o nome da rede em segundos.",
            "Fechar o roteador em um cofre metálico bloquearia as ondas de rádio, inutilizando o Wi-Fi."
        ]
    },
    {
        domain: "DOM3",
        q: "Ao descartar computadores antigos da recepção, o técnico de TI decide usar um 'Desmagnetizador' (Degausser) potente para destruir os dados antes de mandar as peças para a reciclagem. Em qual tipo de mídia o desmagnetizador funciona perfeitamente e em qual ele NÃO tem efeito algum?",
        options: [
            "Funciona em mídias magnéticas (como HDs tradicionais magnéticos e fitas de backup), mas NÃO funciona em mídias eletrônicas de estado sólido (como SSDs, Pen drives e CDs/DVDs ópticos).",
            "Funciona apenas em papel impresso e não funciona em fitas.",
            "Funciona apenas em pen drives e não funciona em discos rígidos magnéticos.",
            "Apaga qualquer material existente no universo, inclusive folhas de papel."
        ],
        answer: 0,
        explanations: [
            "O Degausser aplica um campo magnético intenso que destrói os domínios magnéticos de HDs antigos e fitas; porém, SSDs e Pen drives usam chips de memória Flash (não magnéticos), exigindo criptografia/Wipe ou trituração física.",
            "Papel não é mídia magnética; exige fragmentadora (shredder) ou incineração.",
            "A afirmação inverteu o funcionamento físico: pen drives são imunes à desmagnetização.",
            "Mídias ópticas (CD/DVD), estado sólido (SSD) e papel não são apagados por campo magnético."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual é a regra fundamental de independência exigida pela norma ISO/IEC 27001 para a escolha dos profissionais que realizarão a 'Auditoria Interna' do SGSI?",
        options: [
            "O próprio gerente de TI deve auditar e aprovar os backups que ele mesmo configurou.",
            "Os auditores devem ser selecionados de modo a garantir a objetividade e a imparcialidade do processo: um auditor não pode auditar o seu próprio trabalho ou setor direto.",
            "A auditoria interna só pode ser feita pelo presidente da república.",
            "Os auditores internos não precisam conhecer nada sobre a norma ISO 27001."
        ],
        answer: 1,
        explanations: [
            "Auditar o próprio trabalho gera conflito de interesses e invalida a imparcialidade da auditoria.",
            "A Cláusula 9.2 da ISO 27001 exige independência e imparcialidade (pode ser um profissional de outro departamento treinado ou uma consultoria contratada, desde que não audite o que ele mesmo executa).",
            "Auditorias internas são organizadas pela própria empresa.",
            "Os auditores precisam ter competência comprovada sobre os requisitos da norma."
        ]
    },
    {
        domain: "DOM4",
        q: "Durante uma auditoria do SGSI, o auditor verifica que a empresa exige em sua política que 'todos os pen drives sejam criptografados', mas ao inspecionar 10 funcionários, descobre que 8 deles usam pen drives sem criptografia alguma. Como o auditor registra formalmente esse desvio no relatório?",
        options: [
            "Como uma Não Conformidade (Non-conformity), exigindo análise de causa raiz e ação corretiva.",
            "Como um elogio à produtividade da equipe.",
            "Como um Falso Positivo do antivírus.",
            "Como uma estratégia de Evitação de Risco."
        ],
        answer: 0,
        explanations: [
            "O não atendimento a um requisito da norma ou a uma regra estabelecida pela própria política do SGSI da empresa constitui formalmente uma Não Conformidade.",
            "Violar a política interna é uma falha de segurança, não um mérito.",
            "Trata-se de uma constatação humana de auditoria, não de um alerta de software.",
            "Usar mídias desprotegidas aumenta o risco em vez de evitá-lo."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual é o papel da 'Análise Crítica pela Direção' (Management Review), realizada periodicamente na fase 'Check' do ciclo PDCA da ISO/IEC 27001?",
        options: [
            "A alta direção reúne-se para revisar os indicadores do SGSI, resultados de auditorias, status das ações corretivas e mudanças no negócio, garantindo que o SGSI continue adequado, suficiente e eficaz.",
            "Os diretores reúnem-se para crimpar cabos de rede e limpar o pó dos teclados.",
            "O Help Desk demite a diretoria da empresa.",
            "A direção apaga todas as políticas de segurança para economizar espaço no servidor."
        ],
        answer: 0,
        explanations: [
            "Na Cláusula 9.3, a Alta Direção analisa criticamente o desempenho do SGSI em nível estratégico e decide sobre recursos e melhorias necessárias.",
            "Tarefas técnicas de manutenção cabem à equipe operacional de TI.",
            "O Help Desk é um órgão operacional subordinado à estrutura da empresa.",
            "A revisão serve para aprimorar e manter o SGSI ativo, nunca para destruí-lo."
        ]
    },
    {
        domain: "DOM3",
        q: "Para garantir que um servidor de arquivos continue funcionando normalmente mesmo que um dos seus discos rígidos queime de repente durante o expediente, qual tecnologia de redundância de discos é utilizada?",
        options: [
            "RAID (Redundant Array of Independent Disks - ex: espelhamento RAID 1 ou paridade RAID 5/6).",
            "Criptografia Assimétrica RSA.",
            "Filtro de Privacidade no monitor.",
            "Acordo de Não Divulgação (NDA)."
        ],
        answer: 0,
        explanations: [
            "O RAID combina múltiplos discos físicos em uma unidade lógica redundante: se um disco físico pifar, os demais mantêm o servidor operando sem queda (alta disponibilidade).",
            "Criptografia protege o sigilo, mas se o único disco queimar, os dados somem.",
            "Filtro de monitor protege apenas contra visualização lateral.",
            "NDA é um contrato jurídico."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que um sistema 'RAID' (espelhamento de discos dentro do mesmo servidor) NÃO substitui a obrigação de realizar 'Backups' periódicos guardados fora do servidor?",
        options: [
            "Porque se um vírus (como Ransomware) criptografar um arquivo ou se um administrador apagar uma tabela por engano, o RAID copiará a destruição instantaneamente para os dois discos espelhados!",
            "Porque o RAID só funciona aos domingos.",
            "Porque discos em RAID não aceitam arquivos de texto.",
            "Na verdade, o RAID substitui totalmente o backup na norma ISO 27002."
        ],
        answer: 0,
        explanations: [
            "RAID protege apenas contra a queima física de um disco (Disponibilidade imediata); se houver exclusão lógica, corrupção, ransomware ou incêndio no prédio, o espelhamento replica a perda, sendo indispensável o Backup histórico e offsite.",
            "O RAID opera continuamente 24/7 em tempo real.",
            "O RAID aceita qualquer tipo de arquivo do sistema operacional.",
            "RAID e Backup têm finalidades complementares e nunca substituem um ao outro."
        ]
    },
    {
        domain: "DOM3",
        q: "No desenvolvimento de uma aplicação web corporativa, o programador deixa de validar o que o usuário digita no campo de 'Busca', permitindo que um invasor digite comandos de banco de dados naquele campo e extraia toda a tabela de clientes. Qual vulnerabilidade de desenvolvimento permitiu esse ataque de SQL Injection?",
        options: [
            "Falta de validação e higienização de dados de entrada (Input Validation).",
            "Falta de ar-condicionado no data center.",
            "Uso de crachá sem logotipo.",
            "Excesso de backups incrementais."
        ],
        answer: 0,
        explanations: [
            "No desenvolvimento seguro de sistemas, toda entrada fornecida pelo usuário deve ser tratada como não confiável e validada/filtrada para impedir injeção de comandos (SQL Injection, XSS).",
            "Climatização é um controle físico que não afeta o código da aplicação web.",
            "Crachás sem logotipo são uma boa prática de segurança física.",
            "Backups não causam falhas de programação no site."
        ]
    }
);

// ==========================================
// LOTE 4: +90 QUESTÕES FOUNDATION (TOTAL: 301 QUESTÕES)
// Cole este bloco no final do seu arquivo questoes.js
// ==========================================
extraQuestions.push(
    {
        domain: "DOM1",
        q: "Uma planilha contém uma coluna com milhares de códigos postais (CEPs) sem cabeçalho ou associação com clientes. Quando o setor de logística cruza esses códigos com os pedidos do dia para montar o roteiro de entrega dos motoristas, o que ocorre com esses registros?",
        options: [
            "Deixam de exigir controles de confidencialidade e integridade.",
            "Passam de dados brutos a informação, pois ganharam contexto e significado prático para o destinatário.",
            "Transformam-se de informação em dados não estruturados.",
            "Perdem o seu valor comercial para a organização."
        ],
        answer: 1,
        explanations: [
            "Tanto dados brutos quanto informações processadas exigem controles de segurança.",
            "A informação surge exatamente quando os dados recebem contexto e significado útil para quem os utiliza.",
            "O processo ocorreu no sentido inverso: dados brutos foram contextualizados em informação.",
            "Pelo contrário, ao ganhar contexto logístico, o valor para o negócio passa a ser diretamente aproveitado."
        ]
    },
    {
        domain: "DOM1",
        q: "Qual é a diferença essencial de propósito entre o 'Gerenciamento da Informação' e a 'Análise da Informação' segundo a literatura oficial?",
        options: [
            "O gerenciamento foca em aproveitar o valor da informação no negócio; a análise foca em mapear e entender como a informação flui pela organização.",
            "A análise foca em comprar servidores; o gerenciamento foca em instalar cabos de rede.",
            "O gerenciamento aplica-se apenas a papéis impressos; a análise aplica-se apenas a bancos de dados na nuvem.",
            "Não há diferença; ambos os termos descrevem exclusivamente a configuração de firewalls."
        ],
        answer: 0,
        explanations: [
            "O gerenciamento planeja, controla e dissemina a informação para aproveitar seu valor, enquanto a análise diagnostica o fluxo informacional.",
            "Compra de hardware e cabeamento são atividades de infraestrutura de TI.",
            "Ambos os conceitos abrangem informações em qualquer suporte físico ou digital.",
            "Configuração de firewalls é uma atividade estritamente técnica de segurança de rede."
        ]
    },
    {
        domain: "DOM1",
        q: "Um atacante invade o portal de notícias de uma empresa e altera os números do balanço financeiro publicado, fazendo parecer que a organização teve prejuízo. Qual aspecto da confiabilidade da informação foi diretamente violado nessa ação?",
        options: [
            "Disponibilidade.",
            "Integridade.",
            "Confidencialidade.",
            "Posse física."
        ],
        answer: 1,
        explanations: [
            "O portal continuou no ar e acessível aos leitores, mantendo a disponibilidade.",
            "A modificação não autorizada que adultera a exatidão dos dados publicados viola diretamente a Integridade.",
            "O balanço publicado já era público; o problema não foi a leitura indevida, mas a adulteração.",
            "O servidor continua em posse da empresa."
        ]
    },
    {
        domain: "DOM1",
        q: "Ao consultar o cadastro de um paciente no sistema hospitalar, o médico percebe que o endereço e o telefone estão corretos, mas metade do histórico de alergias medicamentosas não foi salvo no prontuário. Qual subaspecto da Integridade falhou?",
        options: [
            "Completude.",
            "Disponibilidade elétrica.",
            "Confidencialidade perimetral.",
            "Não-repúdio criptográfico."
        ],
        answer: 0,
        explanations: [
            "A Completude (parte da Integridade) exige que a informação esteja inteira, sem omissão de partes essenciais.",
            "O sistema estava ligado e acessível no momento da consulta.",
            "Não houve vazamento de dados para pessoas não autorizadas.",
            "O problema trata de dados incompletos, não de negação de autoria."
        ]
    },
    {
        domain: "DOM1",
        q: "Um funcionário envia documentos estratégicos para a impressora compartilhada do corredor e só vai buscar as folhas 40 minutos depois. Qual é a consequência direta dessa atitude para a confiabilidade da informação?",
        options: [
            "A disponibilidade do arquivo original no computador é destruída.",
            "A confidencialidade não pode ser garantida, pois pessoas não autorizadas podem ler ou fotografar as folhas na bandeja.",
            "A integridade matemática do banco de dados central é corrompida.",
            "O servidor de impressão entra em modo de pane física."
        ],
        answer: 1,
        explanations: [
            "O arquivo digital continua disponível normalmente no computador do funcionário.",
            "Documentos expostos sem supervisão em áreas comuns quebram a garantia de Confidencialidade.",
            "A impressão em papel não altera os registros gravados no banco de dados.",
            "Esquecer papéis na bandeja não causa falha mecânica no servidor."
        ]
    },
    {
        domain: "DOM1",
        q: "Um caminhão de transporte de valores que levava um lote de discos rígidos criptografados de uma filial para outra é roubado na estrada. Os discos usam criptografia militar e as chaves não estavam no caminhão. Segundo o Hexagrama Parkeriano, qual atributo foi perdido imediatamente?",
        options: [
            "Confidencialidade.",
            "Posse ou Controle.",
            "Exatidão.",
            "Autenticidade."
        ],
        answer: 1,
        explanations: [
            "Como os discos estão fortemente criptografados sem a chave presente, os ladrões não conseguem ler o conteúdo (a confidencialidade permanece protegida).",
            "A perda da detenção física da mídia onde os dados estão gravados viola imediatamente o atributo de Posse ou Controle.",
            "Os dados gravados dentro do disco não foram alterados.",
            "A origem dos dados não foi falsificada."
        ]
    },
    {
        domain: "DOM1",
        q: "Uma empresa armazena backups perfeitamente íntegros e confidenciais em fitas magnéticas antigas, mas descobre durante um teste que todas as leitoras compatíveis com aquele modelo de fita saíram de linha e não existem mais no mercado. Qual atributo do Hexagrama Parkeriano foi afetado?",
        options: [
            "Utilidade.",
            "Confidencialidade.",
            "Não-repúdio.",
            "Posse."
        ],
        answer: 0,
        explanations: [
            "A Utilidade refere-se à capacidade prática de usar a informação; se o formato ou meio não pode mais ser lido na prática, perdeu-se a utilidade.",
            "Os dados continuam secretos e inacessíveis a terceiros.",
            "Não-repúdio refere-se à prova de autoria de uma ação.",
            "As fitas continuam guardadas no cofre da própria empresa."
        ]
    },
    {
        domain: "DOM1",
        q: "Por que a definição de um esquema de Classificação da Informação deve ser mantida simples (geralmente com 3 ou 4 níveis, como Público, Interno, Confidencial e Secreto)?",
        options: [
            "Porque computadores modernos só conseguem contar até 4.",
            "Para que o esquema seja compreensível e aplicável na prática pelos funcionários, evitando custos excessivos ou erros de classificação.",
            "Porque a norma ISO/IEC 27001 proíbe o uso da palavra 'Restrito'.",
            "Para permitir que visitantes leiam todos os documentos confidenciais."
        ],
        answer: 1,
        explanations: [
            "Limitações de níveis são de ordem organizacional e humana, não computacional.",
            "Esquemas complexos demais confundem os usuários e geram burocracia cara e ineficaz.",
            "A ISO 27001 dá liberdade para cada organização batizar seus níveis de classificação conforme seu contexto.",
            "Documentos confidenciais são restritos e nunca abertos a visitantes."
        ]
    },
    {
        domain: "DOM1",
        q: "Após o Diretor Comercial (Proprietário do Ativo) classificar uma proposta como 'Confidencial', o assistente administrativo aplica um carimbo vermelho 'CONFIDENCIAL' na capa do processo físico. Como a literatura da EXIN chama especificamente esse ato de carimbar/rotular?",
        options: [
            "Designação (Rotulagem) da informação.",
            "Criptografia Assimétrica.",
            "Transferência de Risco.",
            "Escalamento Funcional."
        ],
        answer: 0,
        explanations: [
            "Classificar é estruturar por sensibilidade; aplicar o rótulo visual ou eletrônico para fácil reconhecimento é a Designação.",
            "Colocar um carimbo visível não embaralha o texto (não é criptografia).",
            "Transferência de risco envolve seguros ou contratos de terceirização.",
            "Escalamento funcional ocorre no atendimento de chamados no Help Desk."
        ]
    },
    {
        domain: "DOM1",
        q: "Qual é a forma mais apropriada e eficaz de proteger as informações armazenadas em um pen drive corporativo utilizado por auditores em campo?",
        options: [
            "Escrever o nome do auditor com caneta permanente na tampa do pen drive.",
            "Proteger o pen drive com criptografia.",
            "Guardar o pen drive dentro de um envelope de papel pardo.",
            "Fazer um backup da conexão de internet."
        ],
        answer: 1,
        explanations: [
            "Escrever o nome não impede que qualquer pessoa leia os arquivos caso o pen drive seja perdido.",
            "Por ser uma mídia portátil altamente sujeita a perda ou furto, a criptografia é o controle técnico indispensável para proteger a confidencialidade do pen drive.",
            "Envelopes de papel não oferecem barreira lógica contra leitura indevida.",
            "Não existe 'backup de conexão de internet' (usa-se redundância de links)."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma organização precisa compreender os riscos aos quais está exposta antes de selecionar controles. Quais são os dois fatores fundamentais que devem ser conhecidos para determinar o risco?",
        options: [
            "A probabilidade de algo acontecer e as suas consequências (impacto) para a organização.",
            "Apenas o preço dos firewalls no mercado internacional.",
            "O nome de todos os ex-funcionários e o endereço dos concorrentes.",
            "Apenas a lista de vulnerabilidades técnicas, sem considerar o impacto no negócio."
        ],
        answer: 0,
        explanations: [
            "O risco é determinado pela combinação entre a probabilidade de ocorrência de um evento e a gravidade de suas consequências para a empresa.",
            "O preço de controles é avaliado na etapa de tratamento/custo-benefício, não na definição do risco em si.",
            "Dados cadastrais isolados não definem a equação do risco.",
            "Conhecer apenas vulnerabilidades e ameaças sem avaliar as consequências (impacto) não determina o risco completo."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que 'copiar exatamente os mesmos controles de segurança usados por outras empresas do mercado' NÃO substitui a realização de uma Análise de Riscos própria?",
        options: [
            "Porque é crime copiar nomes de controles técnicos.",
            "Porque cada organização possui ativos, processos, apetite a risco, ameaças e vulnerabilidades específicos; o que protege uma empresa pode ser insuficiente ou caro demais para outra.",
            "Porque firewalls só funcionam em uma única empresa por cidade.",
            "Porque a ISO 27001 proíbe o uso de boas práticas de mercado."
        ],
        answer: 1,
        explanations: [
            "Padrões de controles (como a ISO 27002) são públicos e feitos para serem adotados.",
            "A segurança deve ser alinhada ao contexto e aos riscos reais de cada negócio, evitando gastos inúteis ou brechas negligenciadas.",
            "Equipamentos de segurança funcionam em qualquer infraestrutura.",
            "A ISO 27002 é justamente um catálogo de boas práticas, mas sua seleção depende da análise de riscos da própria organização."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual das situações abaixo exemplifica uma 'Ameaça Não Humana' à segurança da informação?",
        options: [
            "Um funcionário inserindo um pen drive infectado no computador.",
            "Um hacker realizando um ataque de força bruta contra o servidor.",
            "O acúmulo excessivo de pó e umidade na sala dos servidores provocando curto-circuito.",
            "Um ex-colaborador furtando relatórios impressos."
        ],
        answer: 2,
        explanations: [
            "O uso de pen drive depende sempre da ação de uma pessoa (ameaça humana).",
            "Hackers são agentes humanos intencionais.",
            "Condições ambientais como poeira excessiva, umidade, inundações ou raios são ameaças não humanas.",
            "Furto é uma ameaça humana deliberada."
        ]
    },
    {
        domain: "DOM2",
        q: "Um servidor web corporativo está rodando uma versão antiga do sistema operacional sem as correções (patches) de segurança lançadas pelo fabricante há seis meses. Na terminologia de gestão de riscos, a ausência desses patches é classificada como:",
        options: [
            "Uma Vulnerabilidade.",
            "Uma Ameaça externa.",
            "Um Controle Repressivo.",
            "Um Dano Indireto."
        ],
        answer: 0,
        explanations: [
            "A falta de proteção ou fraqueza interna em um ativo (como ausência de patches) é a definição exata de Vulnerabilidade.",
            "A ameaça seria o código malicioso ou invasor que se aproveita dessa falha.",
            "Deixar o sistema desatualizado é uma falha, não um controle.",
            "Dano indireto é a consequência secundária após um incidente ocorrer."
        ]
    },
    {
        domain: "DOM2",
        q: "Um princípio de incêndio atinge o arquivo morto de uma empresa. Os sprinklers automáticos de água disparam e apagam o fogo rapidamente, mas a água encharca e inutiliza três notebooks que estavam na sala ao lado. Como é classificado o estrago nos notebooks molhados?",
        options: [
            "Dano Direto do fogo.",
            "Dano Indireto causado pela ação de extinção do incêndio.",
            "Controle Preventivo.",
            "Risco Transferido."
        ],
        answer: 1,
        explanations: [
            "Dano direto seria a queima física pelas chamas ou calor do fogo.",
            "Estragos provocados pela água usada para apagar o incêndio são efeitos colaterais classificados como Danos Indiretos.",
            "Trata-se de um prejuízo material, não de um controle preventivo.",
            "Não houve repasse a seguradora descrito na questão."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual das alternativas a seguir NÃO representa um objetivo principal da etapa de Análise de Riscos?",
        options: [
            "Identificar os ativos e estimar o seu valor para a organização.",
            "Determinar as ameaças e vulnerabilidades relevantes.",
            "Balancear o custo dos incidentes contra o custo dos controles.",
            "Implementar fisicamente os novos controles e treinamentos na empresa."
        ],
        answer: 3,
        explanations: [
            "Identificar e valorar ativos é o ponto de partida da análise de riscos.",
            "Mapear ameaças e vulnerabilidades é o núcleo da análise.",
            "Avaliar a relação custo-benefício faz parte da análise para apoiar a decisão.",
            "A implementação prática dos controles ocorre somente na fase posterior de Tratamento do Risco (fase Do do PDCA), após a conclusão da análise."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que a literatura oficial da EXIN aponta que 'Evitar o risco' é a estratégia de tratamento de risco mais adequada para um hospital no cuidado direto aos pacientes?",
        options: [
            "Porque hospitais não utilizam computadores nem redes sem fio.",
            "Porque em ambientes hospitalares erros ou incidentes podem custar vidas humanas, e danos a pacientes nunca são aceitáveis.",
            "Porque hospitais são proibidos por lei de contratar seguros contra incêndio.",
            "Porque evitar o risco é a opção mais barata e não exige nenhuma mudança de processo."
        ],
        answer: 1,
        explanations: [
            "Hospitais dependem fortemente de sistemas informatizados e equipamentos conectados.",
            "Quando a consequência envolve a vida e a integridade física de pacientes, não se deve aceitar nem apenas mitigar parcialmente quando é possível evitar o risco.",
            "Hospitais podem contratar seguros patrimoniais normalmente.",
            "Evitar o risco muitas vezes exige interromper ou redesenhar processos inteiros."
        ]
    },
    {
        domain: "DOM2",
        q: "No ciclo de vida de um incidente (Ameaça ➔ Incidente ➔ Dano ➔ Recuperação), qual é a função exata de um 'Controle Repressivo' e onde ele se localiza?",
        options: [
            "Age antes do incidente para impedir a ameaça; localiza-se antes da etapa de Incidente.",
            "Age imediatamente após o incidente iniciar para conter o evento e limitar os danos; localiza-se entre as etapas de Incidente e de Dano.",
            "Age semanas depois para reconstruir o prédio; localiza-se após a Recuperação.",
            "Serve apenas para cobrar o seguro bancário no ano seguinte."
        ],
        answer: 1,
        explanations: [
            "Agir antes do incidente para evitá-lo é função do Controle Preventivo.",
            "O Controle Repressivo (como extinguir as chamas ou acionar um stand-by arrangement) atua entre o Incidente e o Dano para minimizar as consequências.",
            "Reconstruir e restaurar após o dano caracteriza o Controle Corretivo.",
            "Seguro é transferência financeira de risco."
        ]
    },
    {
        domain: "DOM2",
        q: "Após uma enchente alagar o térreo da sede, a direção aciona imediatamente o acordo de contingência (stand-by arrangement) e desloca a equipe de atendimento para trabalhar nos computadores de uma filial próxima, evitando a interrupção das vendas. Que tipo de controle é essa mudança imediata para o local reserva?",
        options: [
            "Controle Preventivo.",
            "Controle Repressivo (localizado entre as etapas de incidente e de dano).",
            "Análise Quantitativa.",
            "Vulnerabilidade Ambiental."
        ],
        answer: 1,
        explanations: [
            "Não é preventivo porque não impediu a enchente de acontecer.",
            "Ativar o stand-by arrangement logo após o sinistro estanca a parada operacional e limita o impacto, sendo um controle repressivo entre o incidente e o dano.",
            "Trata-se de uma medida prática de continuidade, não de um cálculo de risco.",
            "É uma medida de proteção, não uma vulnerabilidade."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a distinção correta entre um controle de 'Extinção de incêndio após a detecção' e um controle de 'Reparação dos equipamentos e paredes danificados pelo fogo'?",
        options: [
            "Extinção é um controle Repressivo (limita o dano em andamento); Reparação é um controle Corretivo (restaura o ambiente após o dano).",
            "Extinção é um controle Corretivo; Reparação é um controle Preventivo.",
            "Ambos são exemplos de Transferência financeira de risco.",
            "Extinção é uma Ameaça; Reparação é uma Vulnerabilidade."
        ],
        answer: 0,
        explanations: [
            "Apagar o fogo age durante o sinistro para conter o estrago (Repressivo); consertar o que já queimou age depois para recuperar a normalidade (Corretivo).",
            "Reparar danos pós-incêndio nunca é preventivo.",
            "Transferência financeira seria o acionamento de uma apólice de seguro.",
            "Ambos são controles de segurança física/continuidade."
        ]
    },
    {
        domain: "DOM3",
        q: "A gerência de um banco decide substituir os vidros comuns das janelas do térreo por 'vidro inquebrável' (blindado/laminado). Como esse controle é classificado?",
        options: [
            "Controle Lógico de criptografia.",
            "Controle Físico que gerencia e restringe o acesso físico às instalações e informações da organização.",
            "Controle Organizacional de recursos humanos.",
            "Controle Corretivo pós-auditoria."
        ],
        answer: 1,
        explanations: [
            "Vidro blindado é uma barreira material, não um software lógico.",
            "Barreiras estruturais no anel do prédio (como vidro inquebrável, fechaduras e portas blindadas) são Controles Físicos preventivos.",
            "Controles organizacionais envolvem políticas, contratos e procedimentos.",
            "É um controle preventivo permanente, não corretivo."
        ]
    },
    {
        domain: "DOM3",
        q: "Na defesa em profundidade aplicada à segurança física, quais são exatamente os quatro anéis de proteção oficiais definidos na literatura da EXIN, do mais externo para o mais interno?",
        options: [
            "Anel externo, Prédio, Espaço de trabalho e Área segura.",
            "Cerca, Área intermediária, Recepção e Nuvem.",
            "Firewall, DMZ, LAN e Servidor.",
            "Público, Interno, Confidencial e Secreto."
        ],
        answer: 0,
        explanations: [
            "Estes são os 4 anéis oficiais: o terreno/perímetro (Anel externo), a estrutura externa (Prédio), os escritórios (Espaço de trabalho) e o data center/cofre (Área segura).",
            "'Área intermediária' e 'Nuvem' não fazem parte dos anéis de proteção física.",
            "Estes são componentes lógicos de topologia de rede.",
            "Estes são níveis de classificação de sensibilidade da informação."
        ]
    },
    {
        domain: "DOM3",
        q: "Um data center conta com modernos bancos de baterias (UPS / No-break), mas a empresa optou por não instalar um gerador de energia a combustível. Qual é o risco direto dessa decisão para a disponibilidade do centro de dados?",
        options: [
            "As baterias vão ficar sem óleo diesel após três dias de uso.",
            "O corte da energia elétrica principal pode durar mais do que alguns minutos ou poucas horas, esgotando as baterias e desligando todo o data center.",
            "A energia elétrica da rua não voltará sozinha sem um gerador para dar partida na rede pública.",
            "Os computadores funcionarão rápido demais por excesso de voltagem das baterias."
        ],
        answer: 1,
        explanations: [
            "Bancos de baterias são químicos/elétricos e não utilizam óleo diesel.",
            "Baterias (UPS) oferecem autonomia curta apenas para segurar oscilações ou permitir desligamento seguro; apagões longos exigem obrigatoriamente um gerador.",
            "O retorno da rede elétrica pública independe da existência de gerador no prédio.",
            "O UPS estabiliza a tensão na voltagem nominal correta."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a afirmação 'O ar-condicionado na sala dos servidores serve para evitar que as fitas de backup derretam no calor' é considerada FALSA na prova oficial da EXIN?",
        options: [
            "Porque fitas de backup são feitas de titânio e nunca derretem.",
            "Porque as fitas de backup NUNCA devem ser guardadas dentro da mesma sala dos servidores (devem ficar em local separado/offsite para não serem destruídas no mesmo sinistro).",
            "Porque salas de servidores precisam trabalhar acima de 60 graus Celsius.",
            "Porque o ar-condicionado serve apenas para aquecer a sala no inverno."
        ],
        answer: 1,
        explanations: [
            "Fitas magnéticas são sensíveis ao calor e derretem facilmente.",
            "Guardar o backup na mesma sala do servidor viola a regra básica de continuidade: um incêndio na sala destruiria o servidor e o backup simultaneamente.",
            "Altas temperaturas queimam processadores e discos rapidamente.",
            "Na sala de servidores, o ar-condicionado refrigera, remove o calor dos equipamentos, desumidifica e filtra o ar."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a principal razão para instalar a 'Segregação de Funções' (Segregation of Duties) nos processos críticos de negócio e de TI?",
        options: [
            "Garantir que dois funcionários façam exatamente a mesma tarefa juntos na mesma cadeira.",
            "Minimizar a possibilidade de alterações não autorizadas ou não intencionais, bem como o uso indevido dos ativos da organização.",
            "Responsabilizar coletivamente toda a empresa quando um único funcionário comete um erro.",
            "Aumentar a velocidade de aprovação de pagamentos urgentes sem conferência."
        ],
        answer: 1,
        explanations: [
            "Na segregação, o processo é dividido em etapas distintas (ex: um solicita, outro aprova), não feito em duplicidade na mesma estação.",
            "Separar funções críticas impede que uma única pessoa cometa uma fraude ponta a ponta ou introduza um erro grave sem revisão.",
            "A responsabilização na ISO 27001 é individualizada por função e usuário (Accountability).",
            "A segregação adiciona uma etapa de verificação para priorizar a segurança e integridade sobre a pressa."
        ]
    },
    {
        domain: "DOM4",
        q: "De acordo com o gabarito oficial da EXIN, qual é a melhor forma de assegurar um acesso apropriado e consistente à informação dentro de uma organização?",
        options: [
            "Definir procedimentos operacionais claros.",
            "Desenvolver instruções de trabalho minuciosas para absolutamente todas as tarefas da empresa.",
            "Deixar que cada usuário decida livremente quais pastas quer acessar.",
            "Automatizar fluxos sem criar regras prévias."
        ],
        answer: 0,
        explanations: [
            "Definir procedimentos operacionais estabelece regras formais e estruturadas sobre quem pode acessar o quê e como conceder permissões.",
            "Criar instruções de trabalho para todas as tarefas é considerado excessivamente detalhado e prescritivo.",
            "Isso geraria descontrole total e violação do menor privilégio.",
            "Automatizar sem procedimentos definidos apenas acelera falhas de permissão."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma funcionária percebe que um contrato confidencial no servidor foi alterado durante a madrugada por alguém não autorizado. Ela liga imediatamente para o Help Desk. O atendente anota: (1) a data e hora do relato, (2) a descrição do ocorrido e (3) as possíveis consequências. Que informação obrigatória faltou registrar?",
        options: [
            "O nome da pessoa que está notificando o incidente.",
            "A marca do teclado usado pela funcionária.",
            "O saldo bancário da empresa no dia anterior.",
            "O endereço residencial do presidente da empresa."
        ],
        answer: 0,
        explanations: [
            "No registro de incidentes, identificar quem reportou (nome do notificante) é indispensável para rastreabilidade e coleta de informações adicionais.",
            "A marca de periféricos é irrelevante para o registro inicial de alteração lógica.",
            "Dados financeiros gerais não fazem parte do formulário de abertura de chamado.",
            "Dados pessoais de diretores não têm relação com o chamado técnico."
        ]
    },
    {
        domain: "DOM2",
        q: "Quando um colaborador comum detecta um comportamento estranho no seu computador que parece ser um incidente de segurança, quem ele deve notificar PRIMEIRO?",
        options: [
            "O Help Desk (Service Desk).",
            "O Chief Information Security Officer (CISO).",
            "A Polícia Federal.",
            "Os jornais locais."
        ],
        answer: 0,
        explanations: [
            "O Help Desk é o ponto único de contato operacional para registrar o evento, fazer a triagem inicial e evitar escalamentos verticais desnecessários.",
            "Acionar diretamente o CISO ou ISO quebra o fluxo de triagem operacional.",
            "Órgãos externos só são acionados pela alta direção/jurídico quando aplicável.",
            "Divulgar incidentes internos à imprensa sem autorização viola políticas de comunicação e sigilo."
        ]
    },
    {
        domain: "DOM4",
        q: "Por que uma organização certificada ou alinhada à ISO/IEC 27001 deve realizar auditorias internas regulares em seu Sistema de Gestão de Segurança da Informação (SGSI)?",
        options: [
            "Para detectar fragilidades e falhas na implementação dos controles de segurança da informação.",
            "Para garantir que a empresa atinja suas metas de lucro financeiro no trimestre.",
            "Porque o Regulamento Geral de Proteção de Dados (GDPR) obriga auditorias quinzenais em todas as padarias.",
            "Para substituir o trabalho diário do Help Desk."
        ],
        answer: 0,
        explanations: [
            "As auditorias (fase Check) verificam de forma independente se os controles planejados foram efetivamente implementados e se continuam funcionando sem brechas.",
            "Auditorias de SGSI avaliam a conformidade e eficácia da segurança, não o balanço contábil de lucros.",
            "O GDPR não estipula cronogramas quinzenais de auditoria ISO.",
            "Auditoria é uma avaliação periódica independente, não suporte técnico diário."
        ]
    },
    {
        domain: "DOM4",
        q: "Em qual documento interno da organização os funcionários encontram a regra formal que proíbe o uso do endereço de e-mail corporativo para assuntos particulares ou listas de discussão pessoais?",
        options: [
            "No Código de Conduta (ou Política de Uso Aceitável no manual do funcionário).",
            "No Certificado de Boa Índole emitido pela polícia.",
            "No Acordo de Não Divulgação (NDA) assinado com fornecedores.",
            "No texto da lei do GDPR."
        ],
        answer: 0,
        explanations: [
            "Regras sobre o comportamento esperado e o uso ético dos recursos da empresa no dia a dia ficam estabelecidas no Código de Conduta.",
            "O certificado de boa índole é apenas o atestado de antecedentes criminais.",
            "O NDA trata apenas da proibição de revelar segredos a terceiros.",
            "O GDPR trata da proteção de dados pessoais de cidadãos, não do uso interno de e-mail pelos empregados."
        ]
    },
    {
        domain: "DOM4",
        q: "A direção percebe que muitos funcionários ainda caem em golpes simples por falta de atenção às regras internas. Qual é a forma mais eficaz de criar conscientização sobre segurança da informação entre os colaboradores?",
        options: [
            "Criar um programa de conscientização específico e contínuo, adaptado à realidade, cultura e políticas da própria organização.",
            "Comprar um curso online genérico em outro idioma e obrigar todos a assistirem uma única vez.",
            "Treinar exclusivamente os diretores e gerentes, sem envolver a operação.",
            "Enviar todos os funcionários para um congresso externo de programação avançada."
        ],
        answer: 0,
        explanations: [
            "A conscientização só é eficaz quando reflete os riscos reais, os procedimentos internos e o dia a dia específico daquela organização.",
            "Cursos genéricos não ensinam como agir diante das políticas e canais específicos da empresa.",
            "Todos os colaboradores lidam com informações e precisam ser conscientizados, não apenas a chefia.",
            "Congressos técnicos de programação não atendem à necessidade de conscientização geral dos usuários."
        ]
    },
    {
        domain: "DOM3",
        q: "No projeto de engenharia de um novo sistema corporativo, qual controle técnico listado abaixo contribui diretamente para desenvolver sistemas tendo em conta a segurança da informação (garantindo alta disponibilidade na arquitetura)?",
        options: [
            "Garantir a redundância dos servidores.",
            "Solicitar antecedentes criminais dos estagiários.",
            "Colocar catracas na portaria do prédio.",
            "Carimbar pastas de papel no arquivo morto."
        ],
        answer: 0,
        explanations: [
            "Projetar redundância de servidores elimina pontos únicos de falha (SPOF) diretamente na arquitetura do sistema em desenvolvimento.",
            "Verificação de antecedentes é um controle organizacional de RH.",
            "Catracas são controles de acesso físico perimetral.",
            "Carimbar pastas é rotulagem física de documentos."
        ]
    },
    {
        domain: "DOM3",
        q: "Até o mês passado, todos os colaboradores trabalhavam apenas dentro do escritório central (que já possuía firewall, VLANs e rede interna estruturada). Hoje, a diretoria mudou a política e autorizou o trabalho remoto (Home Office). Qual controle específico deve ser implementado agora para proteger essa nova modalidade?",
        options: [
            "Usar uma VPN (Rede Privada Virtual) para conectar os equipamentos remotos à rede corporativa com segurança.",
            "Desligar o firewall da matriz para facilitar o acesso externo.",
            "Substituir os cabos de rede internos do escritório por cabos amarelos.",
            "Proibir o uso de senhas nos notebooks levados para casa."
        ],
        answer: 0,
        explanations: [
            "Como os funcionários passarão a acessar a empresa através da internet pública a partir de casa, o túnel criptografado da VPN torna-se indispensável.",
            "Desligar o firewall deixaria toda a empresa exposta a invasões.",
            "A cor dos cabos internos do escritório não protege quem está conectado de casa.",
            "Notebooks remotos exigem autenticação forte e criptografia de disco."
        ]
    },
    {
        domain: "DOM3",
        q: "Consultores externos utilizam laptops configurados com criptografia assimétrica (um par composto por Chave Pública e Chave Privada). Em qual situação específica a empresa é obrigada a revogar o par atual e fornecer novas chaves imediatamente?",
        options: [
            "Quando a chave privada se torna conhecida (é exposta ou comprometida).",
            "Quando a chave pública se torna conhecida pelos clientes.",
            "Quando o nome da Infraestrutura de Chave Pública (ICP) aparece no jornal.",
            "Toda vez que o consultor reinicia o sistema operacional."
        ],
        answer: 0,
        explanations: [
            "Na criptografia assimétrica, toda a segurança depende do segredo exclusivo da Chave Privada; se ela vazar, o par inteiro está comprometido e deve ser substituído.",
            "A chave pública é feita exatamente para ser divulgada abertamente a todos.",
            "A existência de uma ICP (PKI) não é secreta.",
            "Reiniciar o computador não compromete chaves criptográficas."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a garantia específica de segurança que uma Infraestrutura de Chave Pública (ICP / PKI) oferece aos usuários e sistemas?",
        options: [
            "Verifica e atesta, por meio de certificados digitais, a qual pessoa ou sistema pertence uma chave pública específica.",
            "Garante que o servidor da empresa nunca sofrerá queda de energia elétrica.",
            "Realiza cópias automáticas de backup em fitas magnéticas todas as noites.",
            "Aumenta a velocidade da conexão de internet em dez vezes."
        ],
        answer: 0,
        explanations: [
            "O papel central de uma ICP (PKI) e suas Autoridades Certificadoras é validar a identidade do dono de uma chave pública, evitando ataques de falsidade ideológica.",
            "Proteção elétrica é função de UPS e geradores.",
            "Rotinas de backup pertencem à gestão de continuidade/operações.",
            "A verificação criptográfica adiciona segurança, não velocidade de banda."
        ]
    },
    {
        domain: "DOM2",
        q: "Como a literatura oficial define especificamente o comportamento de um malware do tipo 'Trojan' (Cavalo de Troia)?",
        options: [
            "É um programa que, além da função útil que aparentemente desempenha, realiza propositalmente atividades secundárias ocultas e não autorizadas.",
            "É um verme autônomo que se replica sozinho pela rede sem precisar de nenhum arquivo ou clique.",
            "É um defeito físico na ventoinha do processador.",
            "É um alerta falso gerado pelo Sistema de Detecção de Intrusão."
        ],
        answer: 0,
        explanations: [
            "O Trojan engana o usuário fingindo ser um aplicativo legítimo (função aparente) enquanto executa ações maliciosas escondidas (atividades secundárias).",
            "Replicar-se autonomamente pela rede para criar redes de máquinas infectadas é a definição de Worm.",
            "Defeitos de hardware não são malwares.",
            "Alertas falsos de sensores são chamados de Falsos Positivos."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual tipo de malware tem como característica principal 'criar uma rede de computadores contaminados ao se replicar' automaticamente através das conexões de rede?",
        options: [
            "Worm (Verme).",
            "Bomba lógica estática.",
            "Trojan não replicante.",
            "Cookie de sessão web."
        ],
        answer: 0,
        explanations: [
            "O Worm propaga-se autonomamente pela rede explorando vulnerabilidades para infectar múltiplos computadores (muitas vezes formando botnets).",
            "A bomba lógica fica adormecida em um código local esperando uma condição de disparo.",
            "O Trojan depende de o usuário baixar e executar o arquivo disfarçado, não se replicando sozinho.",
            "Cookies são arquivos de texto comuns de navegação."
        ]
    },
    {
        domain: "DOM4",
        q: "Dentre os itens abaixo, qual representa um ato legislativo ou regulatório relacionado à segurança e privacidade da informação que pode ser imposto obrigatoriamente pelo Estado a todas as organizações?",
        options: [
            "Regulamento Geral sobre a Proteção de Dados (GDPR / LGPD).",
            "ISO/IEC 27001.",
            "ISO/IEC 27002.",
            "ISO/IEC 27005."
        ],
        answer: 0,
        explanations: [
            "O GDPR (e a LGPD no Brasil) tem força de lei obrigatória, sujeitando qualquer organização infratora a sanções e multas legais.",
            "A ISO 27001 é uma norma técnica internacional de adesão voluntária.",
            "A ISO 27002 é um guia voluntário de boas práticas para controles.",
            "A ISO 27005 é um guia voluntário para gestão de riscos."
        ]
    },
    {
        domain: "DOM4",
        q: "Um gestor foi designado pela diretoria para garantir que a empresa passe a cumprir a legislação de proteção de dados pessoais (como o GDPR/LGPD). Qual é a PRIMEIRA medida estrutural que ele deve tomar?",
        options: [
            "Converter as exigências da legislação de proteção de dados pessoais em uma política de privacidade interna para a organização.",
            "Proibir imediatamente a empresa de anotar o nome de qualquer cliente ou funcionário.",
            "Delegar aos próprios funcionários a responsabilidade jurídica pelas multas do governo.",
            "Apagar todos os bancos de dados fiscais da empresa."
        ],
        answer: 0,
        explanations: [
            "Para que uma lei externa seja cumprida na rotina interna, o primeiro passo de governança é traduzi-la em uma política organizacional (Política de Privacidade).",
            "Empresas precisam tratar dados pessoais legítimos (folha de pagamento, vendas) de forma segura, e não parar de operar.",
            "A responsabilidade legal perante a autoridade reguladora é da organização (Controladora), não podendo ser transferida aos empregados.",
            "Apagar dados fiscais violaria leis tributárias e paralisaria o negócio."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa decide terceirizar a operação do seu banco de dados para um provedor externo na nuvem. Qual é a melhor forma de garantir a segurança da informação ao trabalhar com esse fornecedor?",
        options: [
            "Formalizar todos os requisitos de segurança da informação para o fornecedor em um acordo contratual (SLA).",
            "Nomear um novo CISO dentro da diretoria da empresa fornecedora.",
            "Exigir que o fornecedor apague os procedimentos dele e copie os manuais internos do cliente.",
            "Assumir que, ao terceirizar, a empresa cliente não tem mais nenhuma responsabilidade sobre os dados."
        ],
        answer: 0,
        explanations: [
            "Estabelecer um acordo formal (contrato/SLA) com cláusulas claras de segurança, disponibilidade e auditoria é o controle fundamental na gestão de fornecedores.",
            "O cliente não tem ingerência para nomear cargos na estrutura interna de outra empresa.",
            "O fornecedor deve operar com seus próprios processos maduros, desde que atenda aos requisitos de segurança exigidos no acordo.",
            "A responsabilidade final pelos dados permanece sempre com a empresa contratante."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual organização internacional publica as normas de gestão de segurança da informação (como a série 27000) que são as mais comumente utilizadas na Europa e no Brasil?",
        options: [
            "Organização Internacional de Padronização (ISO).",
            "Instituto Nacional Americano de Padrões (ANSI).",
            "Instituto Nacional de Padrões e Tecnologia dos EUA (NIST).",
            "Agência Espacial Europeia (ESA)."
        ],
        answer: 0,
        explanations: [
            "A ISO (em conjunto com a IEC) publica a família 27000, padrão dominante na Europa e globalmente.",
            "A ANSI atua na acreditação de padrões específicos dos Estados Unidos.",
            "O NIST é uma agência governamental norte-americana muito respeitada, mas focada primariamente nos padrões federais dos EUA.",
            "A ESA atua em exploração espacial, não em normas gerais de gestão empresarial."
        ]
    },
    {
        domain: "DOM4",
        q: "Como melhor se descreve a finalidade principal de uma Política de Segurança da Informação aprovada pela alta direção?",
        options: [
            "Dar orientação e suporte da direção para a organização com relação à segurança da informação.",
            "Listar o endereço IP e a máscara de sub-rede de cada impressora do prédio.",
            "Documentar o cálculo matemático de cada ameaça e vulnerabilidade.",
            "Substituir o contrato de trabalho dos funcionários."
        ],
        answer: 0,
        explanations: [
            "A finalidade central da Política de Segurança (segundo a ISO 27001/27002) é prover orientação e apoio da direção para a segurança da informação de acordo com os requisitos do negócio.",
            "Detalhes técnicos de configuração ficam em manuais técnicos ou inventários, nunca na política de alto nível.",
            "O mapeamento detalhado de ameaças e vulnerabilidades pertence ao relatório de Análise de Riscos.",
            "A política complementa as normas internas, mas não substitui o contrato trabalhista."
        ]
    },
    {
        domain: "DOM4",
        q: "Dentro da estrutura corporativa, qual papel executivo tem a responsabilidade primária de converter a estratégia e os objetivos gerais de negócio da empresa em estratégia e objetivos de segurança da informação?",
        options: [
            "Chief Information Security Officer (CISO).",
            "Atendente do Help Desk.",
            "Técnico de manutenção do ar-condicionado.",
            "Auditor externo da certificadora."
        ],
        answer: 0,
        explanations: [
            "O CISO atua no nível estratégico mais alto de segurança, alinhando os objetivos de negócio da Gestão Geral em uma estratégia corporativa de segurança.",
            "O Help Desk atua no nível operacional de atendimento e triagem.",
            "Técnicos de manutenção cuidam da infraestrutura física.",
            "Auditores externos apenas avaliam a conformidade de forma isenta."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um sistema que utiliza Controle de Acesso Mandatório (MAC), quem detém o poder de decidir se um usuário pode ou não ler determinado arquivo?",
        options: [
            "Apenas o sistema central, comparando o rótulo de segurança do arquivo (ex: Secreto) com a credencial formal do usuário, sem que o criador do arquivo possa alterar isso.",
            "Qualquer funcionário que tenha criado o arquivo na sua pasta pessoal.",
            "O próprio visitante através de autodeclaração no navegador.",
            "O sindicato da categoria profissional."
        ],
        answer: 0,
        explanations: [
            "No MAC, a política é imposta centralmente pelo sistema operacional/administrador de segurança por meio de rótulos e credenciais; o usuário dono do arquivo não pode conceder acesso a terceiros.",
            "Permitir que o dono do arquivo decida livremente caracteriza o modelo Discricionário (DAC).",
            "Visitantes não definem regras de controle mandatório.",
            "Entidades externas não operam o motor de acesso lógico do sistema."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que o modelo de Controle de Acesso Baseado em Papéis/Funções (RBAC) é o mais adotado em médias e grandes empresas em vez de atribuir permissões diretamente a cada CPF individual?",
        options: [
            "Porque simplifica a gestão: as permissões são atribuídas ao cargo/função (ex: 'Caixa', 'Gerente') e basta vincular o usuário ao seu cargo, reduzindo erros e facilitando mudanças.",
            "Porque no RBAC ninguém precisa digitar senha para entrar no computador.",
            "Porque o RBAC apaga automaticamente os vírus do disco rígido.",
            "Porque o RBAC funciona apenas em computadores desligados da rede."
        ],
        answer: 0,
        explanations: [
            "Gerenciar permissões por função/papel organizacional evita configurar centenas de telas manualmente para cada novo contratado e reduz o risco de permissões esquecidas.",
            "O RBAC define a etapa de Autorização (o que o cargo pode fazer), mas o usuário continua precisando se Identificar e Autenticar com senha/MFA.",
            "Modelos de acesso não são ferramentas antivírus.",
            "O RBAC é amplamente usado em redes corporativas e sistemas em nuvem."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é o objetivo de segurança ao obrigar que funcionários tirem férias regulares (ou passem por rodízio de funções - Job Rotation) em cargos financeiros ou administrativos críticos?",
        options: [
            "Detectar possíveis fraudes contínuas ou dependências operacionais, pois o substituto perceberá irregularidades que o titular estaria escondendo no dia a dia.",
            "Economizar energia elétrica do monitor durante o mês de férias.",
            "Permitir que o computador do funcionário seja usado sem senha por visitantes.",
            "Cumprir um requisito exclusivo da norma ISO 27000 de vocabulário."
        ],
        answer: 0,
        explanations: [
            "Muitas fraudes exigem presença diária para encobrir desvios; férias obrigatórias e rodízio de cargos atuam como controle detectivo e evitam que apenas uma pessoa saiba operar um processo crítico.",
            "Economia de energia não é objetivo de segurança da informação.",
            "Contas e estações nunca devem ser usadas sem autenticação individual.",
            "A ISO 27000 traz apenas definições de termos."
        ]
    },
    {
        domain: "DOM3",
        q: "Um atacante posicionado no estacionamento captura os pacotes da rede sem fio da empresa, mas não consegue ler nada porque estão criptografados. Porém, ele grava um pacote específico de 'autorização de abertura de cancela' e o reenvia 10 minutos depois exatamente como capturou, conseguindo abrir a cancela. Como se chama esse ataque e como evitá-lo?",
        options: [
            "Ataque de Repetição (Replay Attack); evitado adicionando carimbos de tempo (timestamps), números sequenciais ou tokens de uso único (nonces) na mensagem.",
            "Engenharia Social; evitado com extintores de gás inerte.",
            "Dumpster Diving; evitado com trituradores de papel.",
            "Tailgating; evitado com backup incremental."
        ],
        answer: 0,
        explanations: [
            "Reenviar um pacote autenticado capturado anteriormente para repetir seu efeito chama-se Replay Attack, neutralizado com contadores de sessão e validade temporal curta.",
            "Não houve manipulação psicológica de pessoas nem incêndio.",
            "Dumpster Diving ocorre no lixo físico.",
            "Backup incremental não impede ataques de repetição em rede."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa exige que todas as portas de emergência da Área Segura (Data Center) abram automaticamente por dentro em caso de incêndio para salvar vidas, mas teme que alguém use a porta para sair furtando equipamentos sem ser notado. Qual controle concilia a segurança humana com a segurança física do patrimônio?",
        options: [
            "Instalar barras antipânico nas portas de emergência acopladas a alarmes sonoros imediatos e câmeras de monitoramento (CFTV) que disparam na central de segurança sempre que a porta é aberta.",
            "Soldar todas as portas de emergência com chapas de aço para ninguém nunca sair.",
            "Retirar todas as portas do data center e deixar o acesso livre.",
            "Desligar os detectores de fumaça."
        ],
        answer: 0,
        explanations: [
            "A vida humana tem prioridade absoluta (as portas de emergência jamais podem ser trancadas de forma a prender pessoas no fogo), por isso usam-se controles detectivos (alarmes e câmeras) nas saídas de emergência.",
            "Trancar ou soldar saídas de emergência é crime grave contra a segurança do trabalho e risco de morte.",
            "Retirar portas anularia o 4º anel de proteção (Área Segura).",
            "Desligar sensores de fumaça aumentaria o risco de incêndio catastrófico."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que os cabos de energia elétrica de alta tensão e os cabos de rede de dados (par metálico UTP) NÃO devem passar juntos dentro do mesmo conduíte sem blindagem na infraestrutura física do prédio?",
        options: [
            "Porque o campo eletromagnético da rede elétrica causa interferência eletromagnética (EMI) nos cabos de dados, corrompendo pacotes e derrubando a disponibilidade e integridade da comunicação.",
            "Porque os cabos de rede podem pegar vírus dos cabos de energia.",
            "Porque isso viola a lei de direitos autorais do software.",
            "Porque a energia elétrica apaga a chave pública da ICP."
        ],
        answer: 0,
        explanations: [
            "Separar fisicamente o cabeamento elétrico do cabeamento lógico evita ruídos e interferência eletromagnética que degradam a transmissão de dados.",
            "Malwares são códigos lógicos e não existem na rede elétrica de corrente alternada.",
            "Cabeamento estruturado não tem relação com propriedade intelectual.",
            "Interferência elétrica afeta o sinal físico na linha, não a matemática da ICP."
        ]
    },
    {
        domain: "DOM3",
        q: "Ao descartar centenas de formulários em papel contendo dados médicos e números de documentos de clientes, qual controle físico deve ser obrigatoriamente utilizado?",
        options: [
            "Fragmentadoras de papel (Shredders / trituração em partículas cruzadas) ou incineração controlada.",
            "Rasgar a folha ao meio com a mão e jogar no cesto de lixo comum da calçada.",
            "Passar um desmagnetizador (Degausser) sobre as folhas de papel.",
            "Dobrar o papel quatro vezes antes de colocar na lixeira."
        ],
        answer: 0,
        explanations: [
            "Documentos confidenciais impressos exigem destruição física mecânica (trituração fina) ou incineração para impedir a reconstrução em ataques de Dumpster Diving.",
            "Papéis rasgados ao meio são facilmente colados e lidos por quem vasculha o lixo.",
            "Desmagnetizadores atuam apenas em mídias magnéticas (fitas/HDs), não tendo qualquer efeito sobre celulose e tinta.",
            "Dobrar o papel não impede sua leitura por terceiros."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante um ataque massivo do tipo DDoS (Negação de Serviço Distribuída), milhares de computadores infectados ao redor do mundo enviam requisições simultâneas para o servidor de um banco, deixando-o inacessível para os clientes legítimos. Como é chamada essa rede de computadores infectados controlada remotamente pelo criminoso?",
        options: [
            "Botnet (Rede Zumbi, geralmente formada pela propagação prévia de Worms ou Trojans).",
            "Autoridade de Registro (RA).",
            "Declaração de Aplicabilidade (SoA).",
            "Equipe de Resposta a Incidentes (CSIRT)."
        ],
        answer: 0,
        explanations: [
            "Uma Botnet é um exército de dispositivos infectados (bots/zumbis) comandados remotamente para disparar ataques coordenados de DDoS ou spam.",
            "Autoridade de Registro é uma entidade legítima da PKI.",
            "SoA é um documento de governança da ISO 27001.",
            "CSIRT é a equipe de defesa que combate incidentes."
        ]
    },
    {
        domain: "DOM2",
        q: "Um usuário recebe um SMS no celular informando que sua conta corporativa será bloqueada em 10 minutos caso ele não clique no link da mensagem e digite sua senha atual. Como é chamada essa variação de Phishing realizada especificamente via mensagens SMS?",
        options: [
            "Smishing (SMS Phishing).",
            "Vishing (Voice Phishing).",
            "Tailgating.",
            "Shoulder Surfing."
        ],
        answer: 0,
        explanations: [
            "Phishing enviado por mensagens de texto SMS é denominado Smishing.",
            "Vishing é o golpe aplicado por chamadas de voz telefônicas.",
            "Tailgating é a entrada física pegando carona pela porta.",
            "Shoulder Surfing é espiar a tela ou teclado fisicamente."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a diferença entre 'Identificação' e 'Autenticação' quando um colaborador acessa a rede da empresa?",
        options: [
            "Identificação é declarar quem você é (ex: digitar o nome de usuário ou matrícula); Autenticação é provar que você realmente é essa pessoa (ex: digitar a senha, usar token ou biometria).",
            "Identificação é usar a impressão digital; Autenticação é desligar o computador.",
            "Identificação é exclusiva para diretores; Autenticação é exclusiva para estagiários.",
            "São termos idênticos: digitar apenas o nome 'joao' já autentica a identidade sem precisar de senha."
        ],
        answer: 0,
        explanations: [
            "Primeiro o sujeito declara uma identidade única (Identificação) e, em seguida, apresenta uma credencial secreta, física ou biométrica para comprová-la (Autenticação).",
            "Biometria é um fator de autenticação, e desligar a máquina encerra a sessão.",
            "Ambos os passos são obrigatórios para todos os usuários.",
            "Apenas informar o nome não prova identidade; qualquer pessoa pode digitar o login de outra."
        ]
    },
    {
        domain: "DOM3",
        q: "Os fatores de autenticação são divididos em três categorias clássicas: (1) Algo que você sabe, (2) Algo que você tem e (3) Algo que você é. Qual alternativa relaciona corretamente um exemplo para cada uma dessas três categorias, nessa ordem?",
        options: [
            "1: Senha ou PIN; 2: Token físico ou Smartcard; 3: Impressão digital ou leitura da íris.",
            "1: Impressão digital; 2: Senha; 3: Crachá.",
            "1: Crachá; 2: Voz; 3: PIN.",
            "1: Nome de usuário; 2: Endereço IP; 3: Cabo de rede."
        ],
        answer: 0,
        explanations: [
            "Conhecimento (algo que sabe) = Senha/PIN; Posse (algo que tem) = Token/Cartão inteligente; Característica intrínseca/Biometria (algo que é) = Digital/Íris/Voz.",
            "Impressão digital é biometria (algo que é), não conhecimento.",
            "Crachá é posse (algo que tem) e voz é biometria (algo que é).",
            "Nenhum desses itens é fator de autenticação de usuário."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a política de senhas da organização deve proibir o uso de palavras simples de dicionário, datas de aniversário ou sequências como '123456'?",
        options: [
            "Porque essas senhas são facilmente descobertas em poucos segundos por ataques automatizados de Dicionário e de Força Bruta.",
            "Porque números no teclado gastam mais memória RAM.",
            "Porque datas de aniversário corrompem o relógio do servidor NTP.",
            "Porque o firewall não aceita vogais."
        ],
        answer: 0,
        explanations: [
            "Ferramentas de ataque testam milhares de palavras comuns e combinações óbvias por segundo; senhas fortes exigem comprimento adequado e imprevisibilidade.",
            "O conteúdo da senha não altera o uso de memória RAM.",
            "Senhas de usuário não interferem no protocolo de sincronização de tempo.",
            "Firewalls filtram tráfego de rede, não as letras escolhidas na senha do usuário."
        ]
    },
    {
        domain: "DOM3",
        q: "Para evitar que um atacante deixe um programa tentando adivinhar a senha de um usuário na tela de login por horas seguidas (ataque de força bruta online), qual controle simples de configuração de conta deve ser ativado?",
        options: [
            "Bloqueio temporário da conta após um número máximo de tentativas falhas consecutivas (ex: bloquear após 5 erros de senha).",
            "Mostrar a senha correta na tela após o terceiro erro para ajudar o usuário.",
            "Desligar a criptografia do banco de dados.",
            "Permitir tentativas infinitas em alta velocidade."
        ],
        answer: 0,
        explanations: [
            "Limitar o número de tentativas falhas (Account Lockout) ou impor atraso progressivo inviabiliza ataques automatizados de adivinhação de senhas.",
            "Exibir a senha na tela entregaria o acesso diretamente ao invasor.",
            "Desligar a criptografia exporia todas as credenciais armazenadas.",
            "Tentativas infinitas facilitam o sucesso do ataque de força bruta."
        ]
    },
    {
        domain: "DOM3",
        q: "Um analista deixa sua estação de trabalho ligada com o sistema financeiro aberto para ir tomar café e esquece de pressionar 'Windows + L' para bloquear a tela. Qual controle técnico automático deve estar configurado nos computadores da empresa para reduzir o tempo de exposição nesses casos de esquecimento?",
        options: [
            "Bloqueio automático de sessão / protetor de tela protegido por senha após poucos minutos de inatividade (Session Timeout).",
            "Formatação automática do disco rígido após 2 minutos sem mexer no mouse.",
            "Desligamento do gerador a diesel do prédio.",
            "Envio de e-mail para todos os clientes avisando que o analista saiu para o café."
        ],
        answer: 0,
        explanations: [
            "O bloqueio automático por inatividade (Clear Screen automático) garante que estações abandonadas exijam reautenticação após um curto período.",
            "Formatar o disco por inatividade destruiria o trabalho e a disponibilidade.",
            "O gerador elétrico não tem relação com sessões de usuário.",
            "Comunicações externas não têm relação com bloqueio de tela."
        ]
    },
    {
        domain: "DOM2",
        q: "Durante uma Análise de Impacto no Negócio (BIA), a equipe descobre que o sistema de emissão de notas fiscais não pode ficar parado por mais de 4 horas sem gerar multas pesadas, enquanto o sistema interno de reserva da quadra de esportes do clube dos funcionários pode ficar fora do ar por até 2 semanas sem causar prejuízo. Para que serve essa conclusão?",
        options: [
            "Para definir a prioridade de recuperação no Plano de Recuperação de Desastres (DRP): em caso de sinistro, a TI deve restaurar primeiro o sistema de notas fiscais (RTO de 4h) e deixar o sistema da quadra por último.",
            "Para apagar o sistema de notas fiscais e manter apenas o da quadra.",
            "Para provar que nenhum sistema da empresa precisa de backup.",
            "Para cancelar a certificação ISO 27001."
        ],
        answer: 0,
        explanations: [
            "A BIA serve exatamente para hierarquizar a criticidade dos processos e guiar a ordem de restauração quando os recursos e o tempo são limitados durante uma crise.",
            "O sistema mais crítico é o que exige maior proteção e prioridade.",
            "Sistemas críticos exigem backups rigorosos e frequentes.",
            "Priorizar ativos por criticidade é uma exigência positiva das normas de continuidade."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a relação direta entre o custo financeiro de uma solução de continuidade (como um Hot Site espelhado) e o tamanho do RTO (Objetivo de Tempo de Recuperação) exigido pelo negócio?",
        options: [
            "Quanto menor (mais rápido) for o RTO exigido (ex: recuperar em 2 minutos), mais cara e complexa será a infraestrutura tecnológica necessária.",
            "Quanto menor for o RTO exigido, mais barata fica a solução (basta uma sala vazia sem computadores).",
            "O custo da solução não tem nenhuma relação com a velocidade de recuperação.",
            "RTO zero é gratuito e não exige servidores reservas."
        ],
        answer: 0,
        explanations: [
            "Recuperar sistemas quase instantaneamente (RTO próximo de zero) exige redundância ativa, links dedicados e espelhamento em tempo real (Hot Site), elevando significativamente o investimento.",
            "Uma sala vazia (Cold Site) é barata, mas tem um RTO altíssimo (dias ou semanas).",
            "A curva de custo cresce exponencialmente conforme se exige menor tempo de parada.",
            "Tolerância zero a paradas exige a arquitetura mais cara do mercado."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa realiza Backup Completo (Full) todo domingo às 22h e Backups Incrementais de segunda a sábado às 22h. Se um ransomware infectar o servidor na quarta-feira às 15h, o que acontecerá com os arquivos que foram criados e trabalhados na quarta-feira entre as 08h e as 15h após a restauração dos backups?",
        options: [
            "Serão perdidos (precisarão ser refeitos), pois o último backup incremental disponível era o de terça-feira às 22h — essa janela de perda aceitável é definida pelo RPO.",
            "Estarão magicamente salvos na fita de domingo, antes mesmo de terem sido criados.",
            "Serão recuperados pelo ar-condicionado da sala de servidores.",
            "O backup incremental de terça-feira adivinha o que seria digitado na quarta-feira."
        ],
        answer: 0,
        explanations: [
            "Qualquer dado criado após o horário do último backup concluído (terça às 22h) não consta nas mídias; por isso o intervalo entre backups deve respeitar o RPO (perda máxima tolerável).",
            "Mídias de domingo não podem conter arquivos criados três dias depois.",
            "Ar-condicionado é climatização física, sem relação com armazenamento de dados.",
            "Backups copiam apenas o estado existente no momento em que rodam."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual atributo do sistema de arquivos (file system) é utilizado pelos softwares de backup para identificar se um arquivo sofreu alguma alteração desde a última cópia, e como os backups Completo, Incremental e Diferencial interagem com esse marcador?",
        options: [
            "O atributo de arquivamento (Archive bit): os backups Completo (Full) e Incremental limpam (desmarcam) o bit após copiar; o backup Diferencial NÃO limpa o bit.",
            "O tamanho da fonte da letra; nenhum backup altera esse marcador.",
            "O endereço IP do monitor; todos os backups apagam o IP.",
            "A cor da pasta no Windows; apenas o backup diferencial muda a cor para verde."
        ],
        answer: 0,
        explanations: [
            "Quando um arquivo é criado ou editado, o sistema operacional ativa o Archive bit. O Full e o Incremental zeram esse bit ao fazer a cópia; já o Diferencial mantém o bit ativo para continuar copiando tudo desde o último Full.",
            "Formatação tipográfica não controla rotinas de backup.",
            "Monitores não possuem endereço IP de controle de arquivos.",
            "Cores de ícones não controlam o motor de backup."
        ]
    },
    {
        domain: "DOM4",
        q: "Por que a 'Política de Segurança da Informação' não deve precisar ser alterada toda vez que a empresa troca a marca do seu antivírus ou atualiza a versão do banco de dados?",
        options: [
            "Porque a Política de Segurança é um documento estratégico de alto nível e neutro em relação a tecnologias específicas; detalhes de ferramentas ficam nos padrões técnicos e procedimentos operacionais.",
            "Porque é proibido editar qualquer documento após a certificação ISO 27001.",
            "Porque o antivírus não faz parte da segurança da informação.",
            "Porque a política só pode ser lida uma vez a cada 20 anos."
        ],
        answer: 0,
        explanations: [
            "A política declara as diretrizes e objetivos perenes da direção; separar a política (estratégica) dos procedimentos/padrões (técnicos) evita que a direção precise reaprovar a política a cada mudança de software.",
            "Todos os documentos do SGSI devem ser revisados periodicamente (melhoria contínua).",
            "Proteção contra malware é um controle essencial.",
            "A política deve ser revisada regularmente (ex: anualmente) ou quando houver mudanças significativas no negócio."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual é a diferença entre uma 'Auditoria de Primeira Parte', uma 'Auditoria de Segunda Parte' e uma 'Auditoria de Terceira Parte' no contexto da ISO/IEC 27001?",
        options: [
            "1ª Parte: Auditoria Interna (feita pela própria empresa em si mesma); 2ª Parte: Auditoria em Fornecedor (feita pelo cliente no seu fornecedor); 3ª Parte: Auditoria Externa de Certificação (feita por órgão certificador independente).",
            "1ª Parte: Feita no primeiro andar; 2ª Parte: Feita no segundo andar; 3ª Parte: Feita no telhado.",
            "Todas as três são feitas pelo próprio técnico que instalou o servidor.",
            "1ª Parte avalia apenas cadeiras; 2ª Parte avalia mesas; 3ª Parte avalia janelas."
        ],
        answer: 0,
        explanations: [
            "Auditoria de 1ª parte é a auditoria interna obrigatória; de 2ª parte verifica o cumprimento de SLAs por fornecedores; de 3ª parte é executada por um organismo independente credenciado para emitir o certificado ISO 27001.",
            "A classificação refere-se à relação entre auditor e auditado, não a andares do prédio.",
            "Nenhuma auditoria permite que o técnico audite o seu próprio trabalho.",
            "Auditorias avaliam os requisitos do SGSI e os controles de segurança."
        ]
    },
    {
        domain: "DOM4",
        q: "Durante uma auditoria externa de certificação ISO/IEC 27001, o auditor pede para ver as atas da 'Análise Crítica pela Direção' (Management Review) e os relatórios da 'Auditoria Interna'. Por que a empresa é obrigada a manter esses documentos guardados?",
        options: [
            "Porque são 'Informações Documentadas' (evidências objetivas) obrigatórias exigidas pela Cláusula 9 da ISO 27001 para comprovar que o ciclo PDCA está funcionando.",
            "Para vender esses relatórios para empresas concorrentes.",
            "Porque o Help Desk usa as atas de diretoria para consertar impressoras.",
            "A empresa não precisa guardar nada; basta dizer verbalmente ao auditor que fez."
        ],
        answer: 0,
        explanations: [
            "Na ISO 27001, auditorias baseiam-se em evidências verificáveis (informação documentada); sem registros formais da auditoria interna e da revisão da direção, configura-se uma Não Conformidade.",
            "Relatórios internos de auditoria são confidenciais.",
            "Atas executivas não são manuais de manutenção de impressoras.",
            "Afirmações verbais sem evidência documentada não são aceitas para certificação."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a diferença entre uma 'Ameaça Intencional' e uma 'Ameaça Acidental' de origem humana?",
        options: [
            "A intencional envolve dolo e propósito deliberado de causar dano ou obter vantagem (ex: sabotagem, furto, invasão hacker); a acidental decorre de erro humano, distração ou falta de treinamento sem má-fé (ex: apagar um arquivo por engano).",
            "A intencional é causada por chuva; a acidental é causada por vento.",
            "A acidental não causa nenhum dano ao banco de dados; apenas a intencional causa impacto.",
            "Ambas são causadas exclusivamente por animais silvestres."
        ],
        answer: 0,
        explanations: [
            "Ameaças humanas dividem-se entre ações maliciosas deliberadas (intencionais) e falhas não intencionais cometidas por descuido ou desconhecimento (acidentais).",
            "Chuva e vento são ameaças naturais (não humanas).",
            "Um erro acidental (como rodar um comando errado no banco de produção) pode causar um impacto tão devastador quanto um ataque intencional.",
            "O enunciado trata especificamente de ameaças de origem humana."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma organização percebe que a maioria dos seus incidentes de perda de integridade e disponibilidade não vem de hackers externos, mas de erros acidentais cometidos pelos próprios funcionários ao operar o sistema. Quais controles ajudam diretamente a prevenir erros operacionais acidentais?",
        options: [
            "Treinamento adequado, procedimentos operacionais claros, validação de entradas no software (avisos de confirmação) e princípio do menor privilégio.",
            "Apenas instalar cercas elétricas mais altas no estacionamento.",
            "Contratar um seguro contra furacões.",
            "Desligar os backups para não confundir a equipe."
        ],
        answer: 0,
        explanations: [
            "Capacitar o usuário, padronizar procedimentos, limitar permissões ao mínimo necessário e validar dados na tela reduzem drasticamente os erros humanos não intencionais.",
            "Cercas externas não impedem que um funcionário autorizado digite algo errado no sistema.",
            "Seguros climáticos não previnem erros de digitação.",
            "Desligar backups agravaria as consequências de qualquer erro operacional."
        ]
    },
    {
        domain: "DOM3",
        q: "Na segurança de redes corporativas, qual é a diferença entre uma 'Intranet' e uma 'Extranet'?",
        options: [
            "A Intranet é a rede interna privada restrita aos colaboradores da própria organização; a Extranet é uma extensão controlada que permite que parceiros externos autorizados (fornecedores/clientes) acessem partes específicas da rede.",
            "A Intranet é aberta a qualquer pessoa do planeta sem senha; a Extranet funciona apenas sem cabos.",
            "A Extranet fica dentro da sala de servidores; a Intranet fica apenas nos satélites espaciais.",
            "Não existe diferença; ambas significam a internet pública mundial."
        ],
        answer: 0,
        explanations: [
            "A Intranet atende exclusivamente ao público interno da empresa, enquanto a Extranet abre um portal autenticado e isolado para colaboração com parceiros de negócios externos.",
            "Tanto a Intranet quanto a Extranet são redes privadas que exigem autenticação.",
            "Ambas são arquiteturas lógicas de rede corporativa.",
            "A internet é pública; Intranet e Extranet são ambientes privados e controlados."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a literatura de segurança recomenda desativar portas lógicas, protocolos e serviços desnecessários nos servidores antes de colocá-los em produção (processo conhecido como 'Hardening' / Robustecimento)?",
        options: [
            "Para reduzir a superfície de ataque do servidor, eliminando serviços ociosos que poderiam conter vulnerabilidades exploráveis por invasores ou worms.",
            "Para deixar o gabinete do servidor mais leve fisicamente.",
            "Para que o ar-condicionado gaste menos gás inerte.",
            "Porque cada porta lógica aberta consome 1 litro de diesel por hora."
        ],
        answer: 0,
        explanations: [
            "Cada serviço ativo desnecessário (como FTP ou Telnet antigos) é uma porta potencial de entrada; o Hardening fecha tudo o que não é essencial ao negócio.",
            "Configurações lógicas de software não alteram o peso físico do equipamento.",
            "Ar-condicionado não consome gás inerte de incêndio.",
            "Portas TCP/UDP lógicas não consomem combustível diretamente."
        ]
    },
    {
        domain: "DOM3",
        q: "Um administrador precisa acessar remotamente o console de comando de um servidor Linux para fazer manutenção. Por que ele deve utilizar o protocolo 'SSH' (Secure Shell) em vez do antigo protocolo 'Telnet'?",
        options: [
            "Porque o Telnet transmite o nome de usuário, a senha e todos os comandos em texto claro (sem criptografia) pela rede, enquanto o SSH criptografa toda a sessão.",
            "Porque o Telnet só funciona em monitores preto e branco.",
            "Porque o SSH não exige senha nem identificação.",
            "Porque o Telnet derrete os cabos de fibra óptica."
        ],
        answer: 0,
        explanations: [
            "Protocolos legados como Telnet e HTTP enviam credenciais em texto puro (vulneráveis a sniffing); o SSH e o HTTPS protegem a confidencialidade e integridade em trânsito.",
            "Ambos são protocolos de rede independentes do monitor.",
            "O SSH exige autenticação rigorosa (por senha ou par de chaves criptográficas).",
            "Protocolos lógicos não danificam cabos físicos."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é o risco de segurança associado ao uso de 'Software Sombra' (Shadow IT — quando funcionários instalam programas ou usam serviços de nuvem gratuitos por conta própria sem o conhecimento ou aprovação da TI/Segurança)?",
        options: [
            "Os dados corporativos passam a ser armazenados ou processados fora do controle do SGSI, sem garantia de backup, sem avaliação de vulnerabilidades e com alto risco de vazamento e violação legal (GDPR/LGPD).",
            "Os programas gratuitos sempre deixam o computador mais seguro do que o antivírus corporativo.",
            "Nenhum risco, pois a ISO 27002 incentiva que cada usuário instale o que quiser.",
            "O único risco é o monitor ficar com brilho mais forte."
        ],
        answer: 0,
        explanations: [
            "Ferramentas não homologadas (Shadow IT) escapam das políticas de controle de acesso, criptografia, backup e conformidade legal da empresa.",
            "Softwares não aprovados frequentemente introduzem vulnerabilidades ou malwares (Trojans).",
            "A ISO 27002 exige controle rigoroso sobre o software instalado nos sistemas operacionais.",
            "O risco é de confidencialidade, integridade e conformidade, não de brilho de tela."
        ]
    },
    {
        domain: "DOM3",
        q: "Para impedir que funcionários instalem jogos, programas piratas ou possíveis Cavalos de Troia em suas estações de trabalho, qual controle técnico deve ser aplicado nas máquinas?",
        options: [
            "Remover as permissões de Administrador Local dos usuários comuns e restringir a instalação de softwares apenas a pacotes autorizados (Whitelisting / controle centralizado pela TI).",
            "Retirar o teclado e o mouse de todos os computadores.",
            "Colocar um aviso no estacionamento proibindo jogos de futebol.",
            "Fazer backup diferencial apenas nos feriados."
        ],
        answer: 0,
        explanations: [
            "Aplicar o Princípio do Menor Privilégio (operar com conta padrão sem poder de instalar programas) bloqueia tanto softwares não licenciados quanto a maioria dos malwares.",
            "Sem periféricos o funcionário não consegue trabalhar.",
            "Avisos de lazer físico não bloqueiam instalações lógicas no sistema.",
            "A frequência de backup não impede a instalação de softwares na estação."
        ]
    },
    {
        domain: "DOM4",
        q: "Quando uma empresa contrata um seguro contra incêndio ou terceiriza o armazenamento de servidores para um data center externo, dizemos que houve 'Transferência / Compartilhamento do Risco'. O que NUNCA é transferido nessa operação?",
        options: [
            "A responsabilização final (Accountability) e o dever legal perante os clientes e órgãos reguladores pela proteção dos dados.",
            "O trabalho operacional de cuidar do ar-condicionado dos servidores.",
            "O custo financeiro de comprar extintores para o data center terceirizado.",
            "A manutenção física dos geradores do fornecedor."
        ],
        answer: 0,
        explanations: [
            "Na governança e na lei (como no GDPR/LGPD), a empresa proprietária dos dados continua sempre respondendo em última instância perante os titulares e autoridades.",
            "A operação técnica da infraestrutura física passa a ser executada pelo fornecedor conforme o SLA.",
            "Custos de equipamentos da instalação do fornecedor fazem parte do serviço contratado.",
            "A manutenção física das máquinas do provedor cabe à equipe dele."
        ]
    },
    {
        domain: "DOM1",
        q: "Em um banco de dados de recursos humanos, o salário de um diretor está registrado exatamente como foi aprovado no contrato (R$ 25.000,00), sem nenhum erro de digitação, e todas as páginas do contrato estão salvas. Qual pilar da segurança da informação garante que esses dados estão corretos e inteiros?",
        options: [
            "Integridade (que abrange a Exatidão e a Completude).",
            "Disponibilidade elétrica.",
            "Engenharia Social.",
            "Transferência de risco."
        ],
        answer: 0,
        explanations: [
            "A Integridade assegura que a informação não sofreu alterações indevidas, mantendo sua Exatidão (valor correto) e Completude (todas as páginas presentes).",
            "Disponibilidade trata do acesso quando necessário, não da exatidão do valor gravado.",
            "Engenharia social é uma técnica de ataque.",
            "Transferência é uma resposta de tratamento de risco."
        ]
    },
    {
        domain: "DOM2",
        q: "Um funcionário recebe um pen drive de brinde em uma feira de negócios e, curioso para ver o catálogo de produtos, conecta o dispositivo no seu computador da empresa, infectando a rede com um vírus. Por que a EXIN classifica esse evento como uma 'Ameaça Humana' e não como uma 'Ameaça Técnica/Ambiental'?",
        options: [
            "Porque um pen drive nunca entra sozinho na porta USB: ele exige sempre a ação (intencional ou acidental) de uma pessoa para ser conectado.",
            "Porque o pen drive possui inteligência biológica própria.",
            "Porque feiras de negócios são fenômenos climáticos naturais.",
            "Na verdade, a EXIN classifica pen drives como ameaças ambientais."
        ],
        answer: 0,
        explanations: [
            "Conforme a justificativa oficial do gabarito da EXIN, como o pen drive depende obrigatoriamente de uma pessoa para ser inserido, a ameaça é classificada como humana.",
            "Pen drives são dispositivos eletrônicos de memória flash.",
            "Eventos corporativos não são fenômenos da natureza.",
            "O simulado oficial da EXIN aponta expressamente o pen drive com vírus como o melhor exemplo de ameaça humana."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a diferença prática entre usar 'Criptografia de Disco Completo' (Full Disk Encryption, ex: BitLocker) em um notebook corporativo e usar uma 'VPN'?",
        options: [
            "A criptografia de disco protege os dados 'em repouso' (caso o notebook seja furtado desligado na mochila); a VPN protege os dados 'em trânsito' (quando o notebook envia dados pela internet).",
            "A criptografia de disco protege apenas cabos de rede; a VPN protege apenas contra incêndios.",
            "Ambas protegem exclusivamente papéis impressos na recepção.",
            "A VPN funciona apenas com o notebook desligado; a criptografia de disco apaga o Windows."
        ],
        answer: 0,
        explanations: [
            "Dados em repouso (gravados no SSD/HD) precisam de criptografia de armazenamento contra furto físico; dados em trânsito (viajando pelo Wi-Fi/Internet) precisam de criptografia de canal como VPN ou TLS.",
            "Nenhuma das duas protege contra fogo físico.",
            "São controles lógicos para dados digitais.",
            "A VPN opera com o sistema ligado conectado à rede, e a criptografia de disco preserva o sistema operacional."
        ]
    },
    {
        domain: "DOM3",
        q: "Em uma Infraestrutura de Chave Pública (ICP / PKI), um cliente acessa o site de um banco usando HTTPS. Como o navegador do cliente descobre rapidamente se o certificado digital apresentado pelo site não foi cancelado ontem por roubo da chave privada?",
        options: [
            "Consultando a Lista de Revogação de Certificados (CRL) ou o protocolo OCSP mantido pela Autoridade Certificadora (CA).",
            "Ligando por telefone para o Help Desk do banco.",
            "Verificando a temperatura do processador do cliente.",
            "Olhando se o logotipo do banco na página é colorido."
        ],
        answer: 0,
        explanations: [
            "A CA publica a CRL (e responde via OCSP) listando todos os certificados revogados antes do vencimento para que os navegadores recusem conexões com chaves comprometidas.",
            "A verificação é automática e instantânea pelo navegador web.",
            "Sensores térmicos de hardware não validam certificados digitais.",
            "Qualquer golpista pode copiar um logotipo colorido; o que garante a autenticidade é a validação criptográfica na ICP."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma empresa está implantando a ISO/IEC 27001 e acabou de definir sua Política de Segurança, avaliar os riscos e emitir a Declaração de Aplicabilidade (SoA). Na semana seguinte, começa a instalar os controles escolhidos. Essa transição marca a passagem de qual fase para qual fase do ciclo PDCA?",
        options: [
            "Da fase Plan (Planejar) para a fase Do (Fazer).",
            "Da fase Check (Checar) para a fase Act (Agir).",
            "Da fase Act (Agir) para a fase Plan (Planejar).",
            "Da fase Do (Fazer) para a exclusão total do SGSI."
        ],
        answer: 0,
        explanations: [
            "Definir políticas, avaliar riscos e elaborar a SoA encerram o planejamento (Plan); iniciar a implementação e operação dos controles inaugura a execução (Do).",
            "Check e Act ocorrem após os controles já estarem operando.",
            "Act trata de ações corretivas pós-auditoria.",
            "O ciclo PDCA é contínuo e nunca visa excluir o SGSI."
        ]
    },
    {
        domain: "DOM4",
        q: "Por que o comprometimento visível e o suporte ativo da Alta Direção (Gestão Geral) são considerados indispensáveis para o sucesso de um SGSI baseado na ISO/IEC 27001?",
        options: [
            "Porque sem o apoio da direção não há aprovação de recursos (orçamento/tempo), a política perde autoridade e os departamentos passam a ignorar os controles como se fossem 'burocracia exclusiva da TI'.",
            "Porque os diretores são os únicos que sabem programar firewalls em linguagem de máquina.",
            "Porque a ISO 27001 proíbe a contratação de analistas de segurança.",
            "Porque a direção precisa atender pessoalmente todos os telefonemas do Help Desk."
        ],
        answer: 0,
        explanations: [
            "A segurança da informação é uma responsabilidade de governança corporativa; ela precisa vir de cima para baixo (Top-Down) com recursos e exemplo da liderança.",
            "Tarefas técnicas operacionais cabem aos especialistas de TI/Segurança.",
            "A norma exige recursos competentes, incluindo analistas e especialistas.",
            "O atendimento de nível 1 é atribuição operacional do Help Desk."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a principal diferença entre um ataque de 'Phishing' comum em massa e um ataque de 'Vishing'?",
        options: [
            "O Phishing comum utiliza mensagens eletrônicas (e-mails fraudulentos com links ou anexos), enquanto o Vishing realiza a abordagem de engenharia social por meio de chamadas de voz (telefone / VoIP).",
            "O Vishing é um vírus que queima a placa de vídeo; o Phishing queima a placa de som.",
            "O Phishing é um controle preventivo; o Vishing é um controle repressivo.",
            "Não há diferença: ambos usam apenas cartas escritas à mão pelos correios."
        ],
        answer: 0,
        explanations: [
            "Vishing (Voice Phishing) usa ligações telefônicas para enganar a vítima verbalmente, enquanto o Phishing tradicional usa e-mails falsificados.",
            "São técnicas de engenharia social, não defeitos físicos de placas.",
            "Ambos são ataques (ameaças humanas intencionais), e não controles.",
            "Ambos utilizam meios modernos de telecomunicação e internet."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma organização exige que seus funcionários guardem todos os contratos e pastas em gavetas trancadas ao sair para o almoço ou ao final do dia, e que não deixem post-its com anotações colados nos monitores. Qual controle da ISO/IEC 27002 está sendo praticado?",
        options: [
            "Política de Mesa Limpa e Tela Limpa (Clear Desk and Clear Screen).",
            "Balanceamento de Carga de Rede.",
            "Backup Incremental em Nuvem.",
            "Preenchimento de Tráfego (Traffic Padding)."
        ],
        answer: 0,
        explanations: [
            "A política de Mesa Limpa e Tela Limpa reduz o risco de acesso não autorizado, perda ou dano às informações em papel e mídias durante e fora do expediente.",
            "Balanceamento de carga é um controle lógico de servidores.",
            "Guardar papéis em gavetas não é backup digital.",
            "Preenchimento de tráfego é uma técnica de criptografia de rede."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que equipamentos de TI que saem das instalações da empresa para manutenção externa (conserto em assistência técnica) representam um risco à confidencialidade e qual controle deve ser aplicado antes do envio?",
        options: [
            "Porque técnicos externos não autorizados podem copiar os dados gravados no disco; por isso, deve-se remover ou sanitizar/criptografar os discos rígidos antes de enviar o equipamento (e ter NDA com a assistência).",
            "Porque o equipamento pode pegar chuva no caminhão; basta embrulhar em jornal.",
            "Porque a assistência técnica pode trocar a cor do gabinete.",
            "Não há risco nenhum, pois computadores quebrados apagam todos os dados sozinhos."
        ],
        answer: 0,
        explanations: [
            "Mesmo um computador com a fonte ou tela queimada mantém os dados intactos no disco rígido; retirar o disco ou garantir criptografia forte evita vazamentos na assistência técnica.",
            "Proteger contra chuva preserva o hardware, mas não protege a confidencialidade dos dados.",
            "A cor do gabinete é irrelevante para a segurança da informação.",
            "Panes elétricas na placa-mãe ou tela raramente apagam os dados gravados no SSD/HD."
        ]
    },
    {
        domain: "DOM3",
        q: "Em uma sala de servidores, por que os detectores de fumaça e calor devem ser instalados tanto no teto real quanto abaixo do piso elevado (piso falso)?",
        options: [
            "Porque sob o piso elevado passam dezenas de cabos elétricos e de dados onde curtos-circuitos podem iniciar um incêndio oculto antes que a fumaça suba para o ambiente.",
            "Porque os funcionários trabalham escondidos embaixo do piso elevado.",
            "Para medir a velocidade dos pacotes de internet que passam nos cabos.",
            "Porque a água do ar-condicionado evapora apenas pelo teto."
        ],
        answer: 0,
        explanations: [
            "O espaço sob o piso elevado concentra a infraestrutura elétrica e de cabeamento; monitorar ambos os vãos garante detecção precoce de superaquecimento ou fumaça.",
            "O vão do piso elevado tem poucos centímetros e destina-se apenas a cabos e fluxo de ar frio.",
            "Sensores de incêndio não medem tráfego lógico de rede.",
            "A instalação visa exclusivamente a detecção rápida de fogo e fumaça."
        ]
    },
    {
        domain: "DOM2",
        q: "Uma empresa contratou um serviço de nuvem para hospedar seu sistema de vendas, mas não leu o contrato padrão que garantia apenas 90% de disponibilidade anual (o que permite mais de 36 dias fora do ar por ano). Quando o sistema fica 5 dias seguidos fora do ar, que falha de governança ficou evidente?",
        options: [
            "Falta de definição e formalização de requisitos adequados de segurança e disponibilidade (RTO) no Acordo de Nível de Serviço (SLA) antes da contratação.",
            "Excesso de memória RAM nos computadores dos clientes.",
            "Ataque de Bomba Lógica causado pelo próprio CISO.",
            "Uso indevido de criptografia assimétrica."
        ],
        answer: 0,
        explanations: [
            "Ao terceirizar serviços críticos, a organização deve alinhar as cláusulas do SLA às necessidades da sua BIA (disponibilidade/RTO) antes de assinar o acordo.",
            "A falha ocorreu no provedor e na gestão contratual, não nos computadores dos clientes.",
            "Trata-se de indisponibilidade contratual/operacional, não de sabotagem por malware.",
            "Criptografia não tem relação com cláusulas de tempo de atividade no contrato."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a finalidade de utilizar um servidor 'Proxy' (ou Filtro Web) na saída da rede interna corporativa para a internet?",
        options: [
            "Intermediar e filtrar as requisições de navegação dos usuários, bloqueando o acesso a sites maliciosos conhecidos, controlando o uso aceitável e ocultando os endereços IP internos da LAN.",
            "Apagar incêndios na sala de telecomunicações.",
            "Substituir o crachá físico dos funcionários na portaria.",
            "Aumentar a voltagem das tomadas do escritório."
        ],
        answer: 0,
        explanations: [
            "O Proxy atua como intermediário entre o computador interno e a internet, aplicando regras de filtragem de conteúdo, cache e proteção de identidade da rede local.",
            "Equipamentos lógicos não combatem incêndios físicos.",
            "Controle de acesso físico na portaria usa catracas e crachás.",
            "Estabilização elétrica cabe a no-breaks e transformadores."
        ]
    },
    {
        domain: "DOM3",
        q: "Na gestão de chaves criptográficas, por que é considerado uma vulnerabilidade grave guardar a chave de descriptografia gravada num arquivo de texto dentro da mesma fita ou do mesmo disco onde está salvo o backup criptografado?",
        options: [
            "Porque se a fita ou disco for roubado, o ladrão terá tanto o cofre (backup criptografado) quanto a chave para abri-lo no mesmo lugar, anulando totalmente a proteção da confidencialidade.",
            "Porque o arquivo de texto pesa mais que o banco de dados inteiro.",
            "Porque a chave criptográfica desmagnetiza a fita se ficar perto dela.",
            "Porque a ISO 27002 proíbe criptografar backups."
        ],
        answer: 0,
        explanations: [
            "O gerenciamento seguro de chaves exige que as chaves criptográficas sejam armazenadas separadamente dos dados cifrados e protegidas com controles rigorosos.",
            "Chaves criptográficas ocupam poucos bytes ou kilobytes.",
            "Sequências de bits não geram campo magnético adicional.",
            "Pelo contrário, a ISO 27002 recomenda fortemente criptografar mídias de backup, especialmente as enviadas para guarda externa."
        ]
    },
    {
        domain: "DOM4",
        q: "Um analista de suporte descobre uma falha de configuração que permite ver salários de outros funcionários. Em vez de avisar o Help Desk, ele decide explorar a falha por curiosidade para olhar o salário do seu gerente. Qual documento interno prevê as sanções administrativas para esse funcionário?",
        options: [
            "O Processo Disciplinar formal (previsto na Política de Segurança / Código de Conduta de Recursos Humanos).",
            "A Declaração de Aplicabilidade (SoA).",
            "A Lista de Revogação de Certificados (CRL).",
            "O manual do fabricante do roteador."
        ],
        answer: 0,
        explanations: [
            "A ISO/IEC 27002 exige um Processo Disciplinar formal e comunicado para tratar casos de colaboradores que violam as políticas e regras de segurança da informação.",
            "A SoA apenas lista quais controles do Anexo A são aplicáveis à empresa.",
            "A CRL lista certificados digitais cancelados.",
            "Manuais de hardware não contêm regras trabalhistas ou disciplinares."
        ]
    },
    {
        domain: "DOM2",
        q: "Qual é a diferença entre 'Continuidade de Negócios' e 'Recuperação de Desastres' quando ocorre uma pane severa na empresa?",
        options: [
            "Continuidade de Negócios (BCP) foca em manter as funções essenciais do negócio funcionando durante a crise (ex: atender clientes manualmente ou em outra filial); Recuperação de Desastres (DRP) foca em consertar e restaurar a infraestrutura técnica de TI no local afetado.",
            "Recuperação de Desastres cuida apenas do marketing; Continuidade cuida apenas da limpeza do prédio.",
            "Continuidade só é usada antes do incidente; Recuperação só é usada se ninguém notar o incidente.",
            "Ambos tratam exclusivamente da compra de antivírus gratuitos."
        ],
        answer: 0,
        explanations: [
            "O BCP garante a sobrevivência das operações comerciais e de atendimento da empresa, enquanto o DRP é a parte técnica dedicada a restaurar servidores, bancos de dados e redes.",
            "Ambos abrangem todos os processos críticos da organização e da TI.",
            "Ambos são acionados quando ocorre uma interrupção grave ou desastre.",
            "Antivírus é apenas um controle preventivo/detectivo contra malware."
        ]
    },
    {
        domain: "DOM3",
        q: "Durante o desenvolvimento de um novo aplicativo bancário, a equipe realiza testes automatizados tentando enviar milhões de dados malformados e aleatórios nos campos do sistema para ver se o programa trava ou abre alguma brecha de segurança antes do lançamento. Como esse cuidado se relaciona com a ISO/IEC 27002?",
        options: [
            "Faz parte dos Testes de Segurança do Sistema (System Security Testing) em ambiente de homologação separado, garantindo que vulnerabilidades sejam corrigidas antes de ir para Produção.",
            "É considerado um crime cibernético contra a própria empresa.",
            "Substitui a necessidade de ter uma Política de Segurança.",
            "Deve ser feito diretamente no servidor de Produção no horário de pico dos clientes."
        ],
        answer: 0,
        explanations: [
            "Testar a segurança e validar entradas durante o desenvolvimento/homologação evita que falhas críticas cheguem ao ambiente real de produção.",
            "Testes autorizados pela própria empresa em ambiente de homologação são práticas legítimas e recomendadas.",
            "Testes técnicos complementam, mas não substituem a política estratégica.",
            "Testes agressivos nunca devem rodar em produção para não derrubar a disponibilidade dos clientes."
        ]
    },
    {
        domain: "DOM1",
        q: "Um diretor recebe um relatório impresso na sua mesa, mas não há nenhuma assinatura, cabeçalho ou indicação de qual departamento ou sistema gerou aqueles números. Ele decide não usar o relatório por não saber se veio de uma fonte legítima ou se foi deixado ali por um impostor. Qual atributo da informação está em dúvida?",
        options: [
            "Autenticidade.",
            "Disponibilidade.",
            "Posse física.",
            "Redundância."
        ],
        answer: 0,
        explanations: [
            "A Autenticidade diz respeito à garantia de que a origem da informação é verdadeira e confiável (saber quem realmente a produziu).",
            "O papel já está disponível nas mãos do diretor.",
            "O diretor detém a posse física da folha.",
            "Redundância refere-se à duplicação de equipamentos ou links."
        ]
    },
    {
        domain: "DOM2",
        q: "Por que a 'Avaliação de Riscos' em um SGSI não pode ser feita apenas uma única vez na fundação da empresa e nunca mais ser revisada?",
        options: [
            "Porque o ambiente de negócios muda constantemente: surgem novas tecnologias, novas ameaças cibernéticas, novas vulnerabilidades e novos processos, exigindo reavaliações periódicas dentro do ciclo PDCA.",
            "Porque o papel onde a avaliação foi escrita apaga sozinho após 30 dias.",
            "Porque os auditores gostam de cobrar taxas extras por cada palavra nova.",
            "Porque a fórmula ALE = SLE x ARO muda de operação matemática todo mês."
        ],
        answer: 0,
        explanations: [
            "A gestão de riscos é um processo dinâmico e contínuo; deve ser revisada periodicamente e sempre que houver mudanças importantes na infraestrutura ou nos negócios.",
            "Documentos digitais ou físicos não apagam sozinhos em 30 dias.",
            "A exigência deve-se à evolução real do cenário de ameaças, não a taxas de auditoria.",
            "Os conceitos matemáticos permanecem os mesmos; o que muda são os valores, ameaças e vulnerabilidades reais."
        ]
    },
    {
        domain: "DOM3",
        q: "Uma empresa instalou leitores de crachá nas portas, mas os funcionários têm o hábito de colocar um peso de papel segurando a porta aberta o dia inteiro para 'não precisar tirar o crachá do bolso toda hora'. Qual lição importante da ISO 27001 esse caso ilustra?",
        options: [
            "Um controle físico ou técnico perde totalmente sua eficácia se não for acompanhado de conscientização dos funcionários (controles de pessoas) e fiscalização de procedimentos.",
            "Leitores de crachá são inúteis e devem ser substituídos por senhas escritas na porta.",
            "Pesos de papel são considerados malwares do tipo Worm.",
            "Portas abertas aumentam a segurança contra engenharia social."
        ],
        answer: 0,
        explanations: [
            "A segurança depende da integração entre tecnologia, processos e pessoas: sem conscientização e adesão cultural, os próprios usuários burlam os controles físicos mais caros.",
            "O leitor de crachá é eficaz quando utilizado corretamente sem bloqueio mecânico da porta.",
            "Objetos físicos não são softwares maliciosos.",
            "Deixar portas restritas abertas facilita invasões físicas e Tailgating."
        ]
    },
    {
        domain: "DOM4",
        q: "Quando um funcionário muda de departamento dentro da mesma empresa (por exemplo, sai do setor de Vendas e vai para o setor de Logística), qual procedimento de controle de acesso deve ser executado imediatamente pelo gestor e pela TI?",
        options: [
            "Revogar todas as permissões antigas do setor de Vendas e conceder apenas as novas permissões necessárias para o cargo na Logística (evitando o Privilege Creep).",
            "Manter todas as senhas de Vendas ativas para sempre e apenas somar as de Logística.",
            "Demitir o funcionário e contratá-lo novamente com outro nome.",
            "Compartilhar a conta dele com o novo contratado de Vendas."
        ],
        answer: 0,
        explanations: [
            "O ajuste imediato de direitos na mudança de função impede o Acúmulo de Privilégios (Privilege Creep) e preserva o Princípio do Menor Privilégio.",
            "Somar acessos antigos desnecessários viola diretamente a ISO 27002.",
            "Mudanças internas de cargo não exigem demissão.",
            "Contas de usuário jamais devem ser repassadas ou compartilhadas entre pessoas diferentes."
        ]
    },
    {
        domain: "DOM3",
        q: "Qual é a finalidade de configurar uma 'Política de Uso de Dispositivos Móveis e Teletrabalho' antes de distribuir smartphones e notebooks corporativos para a equipe externa?",
        options: [
            "Estabelecer regras obrigatórias de proteção fora do perímetro físico da empresa, como uso em locais públicos, bloqueio de tela, criptografia, backups e proibição de redes Wi-Fi inseguras sem VPN.",
            "Garantir que os funcionários usem apenas aparelhos fabricados no mesmo ano.",
            "Permitir que familiares dos funcionários instalem jogos nos notebooks da empresa.",
            "Substituir o firewall central do data center."
        ],
        answer: 0,
        explanations: [
            "Fora dos 4 anéis físicos do escritório, os equipamentos móveis ficam expostos a furto, perda e redes hostis, exigindo regras específicas documentadas.",
            "O ano de fabricação estética não é o foco da política, desde que o sistema receba atualizações de segurança.",
            "Equipamentos corporativos não devem ser usados por terceiros ou familiares não autorizados.",
            "Políticas de dispositivos móveis protegem as pontas (endpoints), não substituindo o firewall central."
        ]
    },
    {
        domain: "DOM2",
        q: "Um atacante envia um arquivo de planilha chamado 'Tabela_Bonus_Salarial.xlsx' por e-mail. Quando o funcionário abre o arquivo e clica em 'Habilitar Conteúdo', um script malicioso embutido dentro da planilha é executado e infecta o computador. Como é classificado esse código que precisou de um arquivo hospedeiro e da ação humana para rodar?",
        options: [
            "Vírus (Vírus de Macro).",
            "Worm autônomo de rede.",
            "Honeypot.",
            "Sensor PIR."
        ],
        answer: 0,
        explanations: [
            "O Vírus caracteriza-se por exigir um arquivo hospedeiro (como um executável ou documento com macro) e depender da ação do usuário para ser ativado.",
            "O Worm propaga-se sozinho pela rede sem precisar de planilha hospedeira ou clique.",
            "Honeypot é uma armadilha de defesa.",
            "Sensor PIR é um detector físico de presença por infravermelho."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que sistemas críticos de comércio eletrônico utilizam 'Balanceamento de Carga' (Load Balancing) distribuindo os acessos dos clientes entre vários servidores web idênticos?",
        options: [
            "Para garantir a Disponibilidade e a Capacidade: se o volume de acessos crescer ou se um dos servidores falhar, os demais continuam atendendo os clientes sem interrupção.",
            "Para criptografar as fitas de backup guardadas no cofre.",
            "Para substituir o Código de Conduta do RH.",
            "Para impedir que funcionários imprimam documentos na recepção."
        ],
        answer: 0,
        explanations: [
            "O balanceamento de carga aliado à redundância de servidores evita sobrecarga (Gerenciamento de Capacidade) e mantém o serviço disponível mesmo na queda de uma máquina.",
            "Balanceadores de tráfego web não criptografam fitas físicas.",
            "Controles técnicos de rede não substituem políticas de RH.",
            "Impressoras físicas locais não são controladas pelo balanceador web externo."
        ]
    },
    {
        domain: "DOM3",
        q: "O que a disciplina de 'Gerenciamento de Capacidade' (Capacity Management), prevista na ISO/IEC 27002, monitora e planeja continuamente nos servidores e links de rede?",
        options: [
            "Monitora o consumo de processador, memória, espaço em disco e largura de banda, projetando expansões futuras para evitar que o esgotamento de recursos derrube a Disponibilidade dos sistemas.",
            "Mede apenas a altura física das mesas e cadeiras do escritório.",
            "Conta quantos crachás foram perdidos no ano anterior.",
            "Avalia o conhecimento de idiomas estrangeiros dos candidatos no RH."
        ],
        answer: 0,
        explanations: [
            "Se um disco rígido encher 100% ou a memória esgotar, o sistema trava (quebra de Disponibilidade); gerenciar capacidade previne panes por falta de recursos técnicos.",
            "Mobiliário faz parte de ergonomia predial.",
            "Controle de crachás pertence à segurança física.",
            "Avaliação de idiomas pertence ao recrutamento de RH."
        ]
    },
    {
        domain: "DOM4",
        q: "Uma organização brasileira processa dados de clientes residentes na União Europeia e precisa provar que protege a privacidade desses titulares conforme a lei. Por que ter um SGSI certificado na ISO/IEC 27001 (e estendido pela ISO/IEC 27701) ajuda diretamente nessa exigência?",
        options: [
            "Porque demonstra de forma estruturada e auditável que a empresa aplica controles técnicos e organizacionais adequados (Due Care) para proteger os dados pessoais contra vazamentos e acessos indevidos.",
            "Porque empresas com ISO 27001 ganham imunidade diplomática e nunca podem ser fiscalizadas pelo governo.",
            "Porque a ISO 27001 proíbe o armazenamento de nomes de clientes europeus.",
            "Porque o certificado ISO substitui o pagamento de impostos na Europa."
        ],
        answer: 0,
        explanations: [
            "Embora a ISO 27001 seja voluntária e o GDPR/LGPD seja lei obrigatória, o SGSI fornece toda a estrutura de controles e evidências exigida pelos artigos de segurança das leis de privacidade.",
            "Nenhuma certificação concede imunidade contra fiscalização governamental.",
            "É permitido processar dados de clientes, desde que haja base legal e proteção adequada.",
            "Certificações técnicas não têm relação com obrigações tributárias."
        ]
    },
    {
        domain: "DOM2",
        q: "Após um princípio de incêndio na cozinha da empresa ser rapidamente controlado pela brigada interna sem atingir os escritórios, o gerente de segurança reúne a equipe para revisar se o alarme tocou no tempo certo e por que uma das portas demorou a abrir. Em qual conceito do SGSI essa reunião se encaixa?",
        options: [
            "Aprendizado com incidentes (Lições Aprendidas) e melhoria contínua (fase Act do PDCA) para aprimorar os controles existentes.",
            "Transferência financeira de risco para o fornecedor de café.",
            "Ataque de Engenharia Social reverso.",
            "Classificação de dados públicos."
        ],
        answer: 0,
        explanations: [
            "Analisar incidentes reais ou quase-incidentes (near misses) permite identificar falhas práticas nos controles e corrigi-las antes de um desastre maior.",
            "Reuniões internas de avaliação pós-incidente não são transferências contratuais.",
            "Não há manipulação maliciosa envolvida.",
            "O evento trata de segurança física e resposta a emergências, não de rotulagem de documentos."
        ]
    },
    {
        domain: "DOM3",
        q: "Por que a autenticação que pede 'Senha + PIN numérico memorizado' NÃO é considerada Autenticação Multifator (MFA), enquanto pedir 'Senha + Token no celular' É considerada MFA?",
        options: [
            "Porque Senha e PIN memorizado pertencem à mesma categoria ('algo que você sabe'), enquanto Senha ('algo que você sabe') e Token físico/celular ('algo que você tem') combinam duas categorias diferentes de fatores.",
            "Porque números não valem como segurança em computadores.",
            "Porque a MFA só existe quando se usa no mínimo cinco senhas diferentes ao mesmo tempo.",
            "Porque celulares não usam energia elétrica da tomada."
        ],
        answer: 0,
        explanations: [
            "Para caracterizar Autenticação Multifator (MFA), é obrigatório exigir pelo menos duas naturezas distintas entre Conhecimento (sabe), Posse (tem) e Biometria (é).",
            "PINs numéricos são válidos, mas pertencem à mesma natureza cognitiva da senha.",
            "Usar várias senhas continua sendo apenas um único fator (conhecimento).",
            "A fonte de bateria do aparelho não define a categoria lógica do fator."
        ]
    },
    {
        domain: "DOM1",
        q: "Um hospital mantém prontuários médicos em papel trancados em um armário de aço e também possui exames digitais salvos em um servidor Linux. O escopo da Segurança da Informação (segundo a ISO/IEC 27001 e a EXIN) abrange:",
        options: [
            "Tanto os prontuários em papel quanto os exames digitais (e até informações faladas), pois a Segurança da Informação protege a informação independentemente do meio em que ela está armazenada ou transmitida.",
            "Exclusivamente os exames salvos no servidor Linux, pois papéis não contêm informação.",
            "Exclusivamente os cabos de rede, ignorando o conteúdo dos arquivos.",
            "Apenas os arquivos que estiverem publicados na internet aberta."
        ],
        answer: 0,
        explanations: [
            "Diferente da 'Segurança de TI' (restrita a sistemas tecnológicos), a 'Segurança da Informação' protege o ativo informação em qualquer formato: digital, impresso em papel, visual ou verbal.",
            "Documentos em papel contêm informações críticas e são alvos frequentes de vazamento.",
            "Os cabos são apenas o meio de transmissão; o foco central é a proteção da informação.",
            "Informações internas e restritas são o foco primordial de proteção."
        ]
    },
    {
        domain: "DOM4",
        q: "Qual é a diferença de abrangência entre 'Segurança da Informação' (Information Security) e 'Segurança de TI / Cibernética' (IT Security)?",
        options: [
            "A Segurança da Informação é mais ampla, protegendo informações em qualquer suporte (papel, verbal, digital, pessoas e processos); a Segurança de TI foca especificamente na proteção dos ativos tecnológicos (computadores, redes e sistemas).",
            "A Segurança de TI cuida apenas de arquivos de papel; a Segurança da Informação cuida apenas de mouses e teclados.",
            "A Segurança da Informação aplica-se apenas a pequenas empresas; a Segurança de TI aplica-se apenas a governos.",
            "São expressões opostas que nunca podem trabalhar juntas."
        ],
        answer: 0,
        explanations: [
            "A Segurança de TI é um subconjunto técnico dentro do guarda-chuva maior da Segurança da Informação (que inclui também documentos físicos, conversas e processos organizacionais).",
            "As definições foram invertidas e distorcidas.",
            "Ambas aplicam-se a organizações de qualquer porte ou setor.",
            "Elas são complementares: a segurança de TI sustenta a proteção das informações digitais dentro do SGSI."
        ]
    },
    {
        domain: "DOM3",
        q: "Para proteger um servidor de banco de dados onde ficam informações altamente confidenciais, a equipe de arquitetura decide posicionar esse servidor na sub-rede mais interna da empresa, sem nenhum acesso direto a partir da internet, permitindo que apenas o servidor de aplicação (que fica em outra sub-rede intermediária) converse com ele em uma porta específica. Qual princípio arquitetônico é esse?",
        options: [
            "Defesa em Profundidade (Camadas de segmentação de rede e isolamento de servidores críticos).",
            "Acesso Público Universal.",
            "Descarte físico de mídias.",
            "Transferência de risco para o cliente."
        ],
        answer: 0,
        explanations: [
            "Isolar o banco de dados em uma camada interna protegida por múltiplos filtros (Defesa em Profundidade) garante que, mesmo que a borda web sofra um ataque, os dados principais não estejam diretamente expostos.",
            "O banco de dados jamais deve ficar aberto ao público.",
            "O cenário trata de topologia de rede ativa, não de descarte.",
            "Trata-se de Mitigação técnica de risco, não de Transferência."
        ]
    },
    {
        domain: "DOM2",
        q: "Um funcionário recebe uma ligação de alguém dizendo ser do suporte do banco da empresa e pedindo que ele digite um código no token corporativo para 'atualizar o cadastro'. O funcionário desconfia, desliga o telefone e reporta a tentativa ao Help Desk antes que qualquer dinheiro seja roubado. Por que é importante reportar até mesmo tentativas de ataque que NÃO deram certo?",
        options: [
            "Porque permite que a equipe de segurança identifique campanhas de ataque em andamento e emita alertas preventivos para todos os outros funcionários não caírem no mesmo golpe.",
            "Para punir o funcionário que recebeu a ligação.",
            "Porque o Help Desk ganha comissão por cada telefonema anotado.",
            "Não se deve reportar tentativas falhas; só se reporta depois que o banco faliu."
        ],
        answer: 0,
        explanations: [
            "O relato rápido de eventos suspeitos e tentativas de engenharia social alimenta a inteligência defensiva da empresa, permitindo bloquear números/remetentes e avisar toda a equipe a tempo.",
            "Reportar eventos suspeitos é uma atitude correta que deve ser incentivada, nunca punida.",
            "O registro visa a proteção coletiva do SGSI.",
            "Esperar o dano acontecer anula a capacidade de resposta preventiva e repressiva."
        ]
    },
    {
        domain: "DOM3",
        q: "Em um sistema corporativo, qual é a utilidade de exibir um 'Banner de Aviso Legal' na tela de login antes que o usuário digite sua senha (informando que o acesso é restrito a pessoas autorizadas e que as atividades são monitoradas)?",
        options: [
            "Reforçar o respaldo jurídico para o monitoramento de segurança e deixar inequívoco para qualquer invasor ou funcionário que o acesso não autorizado é proibido e auditado.",
            "Impedir fisicamente que um hacker digite no teclado.",
            "Criptografar o disco rígido automaticamente.",
            "Substituir a necessidade de instalar um firewall na rede."
        ],
        answer: 0,
        explanations: [
            "Avisos na tela de logon cumprem requisitos legais de ciência prévia sobre o monitoramento e removem qualquer alegação de que o invasor achava que o sistema era público.",
            "O aviso é uma medida administrativa/dissuasiva; quem bloqueia tecnicamente é a autenticação.",
            "Mensagens de texto na tela não criptografam discos.",
            "Banners de login não filtram pacotes de rede."
        ]
    },
    {
        domain: "DOM4",
        q: "Ao revisar o contrato de trabalho dos novos contratados, o setor jurídico inclui uma cláusula especificando as responsabilidades do colaborador quanto à segurança da informação. De acordo com a ISO/IEC 27002, quando essas responsabilidades devem ser comunicadas e assinadas pelo funcionário?",
        options: [
            "Antes de conceder o acesso às informações ou sistemas sensíveis (durante o processo de contratação/admissão).",
            "Apenas no dia em que o funcionário pedir demissão.",
            "Somente cinco anos após o início do trabalho.",
            "Nunca, pois contratos de trabalho não devem mencionar segurança."
        ],
        answer: 0,
        explanations: [
            "Os termos e condições de emprego (incluindo sigilo e responsabilidades de segurança) devem ser formalmente aceitos antes que o novo colaborador receba credenciais de acesso aos ativos da empresa.",
            "Assinar termos apenas na saída deixaria todo o período de trabalho descoberto.",
            "Deixar anos sem formalização cria grave vulnerabilidade organizacional.",
            "A ISO 27002 exige explicitamente que os contratos de trabalho contemplem os deveres de segurança da informação."
        ]
    }
);

// ==========================================
// LOTE 5: +84 QUESTÕES FOUNDATION (FECHANDO 400 QUESTÕES)
// Cole este bloco no final do seu arquivo questoes.js
// ==========================================
extraQuestions.push(
    // Q1
    {
        domain: "DOM1",
        q: "Um relatório de telemetria exibe apenas uma matriz de zeros e uns sem legenda. Quando um programa decodifica essa matriz e exibe na tela do operador o alerta 'Temperatura da Caldeira: 120°C', o que ocorreu?",
        options: [
            "Informação foi destruída e transformada em dado bruto.",
            "Dados brutos receberam significado e contexto, transformando-se em informação.",
            "O controle físico substituiu o controle lógico.",
            "A confidencialidade do sistema foi anulada."
        ],
        answer: 1,
        explanations: [
            "O processo ocorreu no sentido inverso: os bits ganharam significado.",
            "A informação origina-se quando os dados são interpretados dentro de um contexto útil para o destinatário.",
            "Trata-se de processamento de dados, não de substituição de controles.",
            "Exibir um alerta ao operador autorizado não anula a confidencialidade."
        ]
    },
    // Q2
    {
        domain: "DOM1",
        q: "Por que a literatura da EXIN afirma que tanto os 'dados' quanto a 'informação' exigem medidas de segurança da informação?",
        options: [
            "Porque a lei proíbe apagar qualquer dado bruto.",
            "Porque apenas dados brutos sofrem ataques de hackers.",
            "Porque ambos possuem valor para a organização e a perda ou corrupção da matéria-prima (dados) inviabiliza a geração da informação.",
            "Porque dados e informação são sinônimos exatos na língua portuguesa."
        ],
        answer: 2,
        explanations: [
            "Dados obsoletos podem e devem ser descartados conforme a política de retenção.",
            "Hackers atacam tanto bancos de dados brutos quanto relatórios prontos.",
            "Se os dados brutos forem corrompidos ou vazados, toda a informação derivada deles estará comprometida.",
            "Na norma e na literatura da EXIN, dados e informação possuem definições distintas."
        ]
    },
    // Q3
    {
        domain: "DOM1",
        q: "Qual atividade corporativa tem como objetivo específico planejar, organizar, controlar e disseminar a informação para garantir que seu valor seja identificado e aproveitado pela empresa?",
        options: [
            "Análise de Tráfego de Rede.",
            "Desmagnetização de Mídias.",
            "Escalonamento Funcional.",
            "Gerenciamento da Informação."
        ],
        answer: 3,
        explanations: [
            "Análise de tráfego é uma técnica de monitoramento de pacotes na rede.",
            "Desmagnetização é um método de descarte físico de mídias magnéticas.",
            "Escalonamento funcional é o repasse técnico de chamados no Help Desk.",
            "O Gerenciamento da Informação foca em assegurar que o valor da informação seja identificado e explorado ao máximo."
        ]
    },
    // Q4
    {
        domain: "DOM1",
        q: "Um consultor externo foi contratado exclusivamente para desenhar o mapa de processos mostrando onde cada documento nasce, por quais setores tramita e onde é arquivado. Qual é o foco desse trabalho?",
        options: [
            "Análise da Informação (entender como a informação flui através da organização).",
            "Recuperação de Desastres (DRP).",
            "Criptografia Assimétrica (PKI).",
            "Instalação de Controles Repressivos."
        ],
        answer: 0,
        explanations: [
            "Entender e mapear como a informação flui através de uma organização é a definição exata de Análise da Informação.",
            "O DRP foca na retomada técnica de TI após desastres.",
            "PKI trata da gestão de certificados digitais.",
            "Controles repressivos atuam para conter danos durante um incidente."
        ]
    },
    // Q5
    {
        domain: "DOM1",
        q: "Em um sistema de folha de pagamento, todas as horas extras trabalhadas no mês foram somadas sem nenhum erro matemático e nenhum funcionário ficou de fora da lista. Quais subaspectos da Integridade estão preservados?",
        options: [
            "Apenas o Não-repúdio e a Posse.",
            "Exatidão (cálculo correto) e Completude (todos os registros presentes).",
            "Confidencialidade e Anonimização.",
            "Redundância e Transferência."
        ],
        answer: 1,
        explanations: [
            "Não-repúdio e posse são atributos separados da exatidão contábil.",
            "Na literatura oficial, a Integridade divide-se diretamente em Exatidão (precisão dos dados) e Completude (totalidade dos dados).",
            "Confidencialidade trata do sigilo, não da soma correta dos valores.",
            "Redundância e transferência referem-se à disponibilidade e ao tratamento de riscos."
        ]
    },
    // Q6
    {
        domain: "DOM1",
        q: "Um funcionário anota a senha do cofre da empresa em um adesivo colado na própria porta do cofre no corredor de entregas. Qual pilar da confiabilidade da informação foi imediatamente comprometido?",
        options: [
            "Disponibilidade.",
            "Completude.",
            "Confidencialidade.",
            "Utilidade."
        ],
        answer: 2,
        explanations: [
            "O cofre continua acessível e ainda mais fácil de abrir, logo não faltou disponibilidade.",
            "A senha anotada está inteira, sem falha de completude.",
            "Expor credenciais de acesso a pessoas não autorizadas destrói a garantia de Confidencialidade.",
            "O cofre continua utilizável."
        ]
    },
    // Q7
    {
        domain: "DOM1",
        q: "O servidor de e-mail da empresa trava devido ao esgotamento de espaço em disco, impedindo que os vendedores enviem ou recebam propostas comerciais durante toda a tarde. Qual aspecto da Tríade CIA foi afetado?",
        options: [
            "Confidencialidade.",
            "Autenticidade.",
            "Não-repúdio.",
            "Disponibilidade."
        ],
        answer: 3,
        explanations: [
            "Os e-mails antigos não foram lidos por estranhos.",
            "A identidade dos vendedores não foi falsificada.",
            "Não houve negação de autoria de mensagens.",
            "Quando usuários autorizados não conseguem acessar um serviço ou informação no momento necessário, há quebra de Disponibilidade."
        ]
    },
    // Q8
    {
        domain: "DOM1",
        q: "De acordo com o Hexagrama Parkeriano, qual é a diferença entre perder a 'Confidencialidade' e perder a 'Posse' de uma informação?",
        options: [
            "Perde-se a Posse quando o meio físico (ex: notebook ou fita criptografada) é roubado, mesmo que o ladrão não consiga ler os dados (mantendo a Confidencialidade).",
            "Perde-se a Confidencialidade apenas quando o servidor pega fogo.",
            "Posse aplica-se apenas a conversas telefônicas; Confidencialidade aplica-se apenas a cabos submarinos.",
            "Não existe diferença; toda perda de posse revela automaticamente a senha em texto claro."
        ],
        answer: 0,
        explanations: [
            "Donn Parker separou Posse de Confidencialidade justamente para explicar casos em que um suporte criptografado é furtado sem que seu conteúdo seja lido.",
            "Incêndio no servidor afeta a Disponibilidade e a Posse/Integridade física, não o sigilo.",
            "Ambos os conceitos aplicam-se a ativos de informação corporativos.",
            "Se a mídia furtada estiver fortemente criptografada, a posse é perdida mas a confidencialidade permanece intacta."
        ]
    },
    // Q9
    {
        domain: "DOM1",
        q: "Os exames de raio-X digitais de uma clínica estão salvos com segurança e sem corrupção no servidor, mas o único software proprietário capaz de abrir aquele formato de arquivo expirou e a fabricante faliu. Qual atributo do Hexagrama Parkeriano foi perdido?",
        options: [
            "Confidencialidade.",
            "Utilidade.",
            "Não-repúdio.",
            "Autenticidade."
        ],
        answer: 1,
        explanations: [
            "Os exames continuam protegidos contra acesso externo.",
            "Se a informação está íntegra e guardada, mas não pode ser interpretada ou usada na prática pelo destinatário, perdeu-se a Utilidade.",
            "Não há disputa sobre quem gerou o exame.",
            "A origem legítima do arquivo não foi questionada."
        ]
    },
    // Q10
    {
        domain: "DOM1",
        q: "Quando um banco exige que o cliente assine digitalmente uma ordem de transferência usando seu certificado ICP-Brasil, qual garantia jurídica e técnica o banco obtém além da integridade do documento?",
        options: [
            "Certeza de que o computador do cliente tem no-break.",
            "Aumento da velocidade de download da internet.",
            "Autenticidade da origem e Não-repúdio (o cliente não poderá negar que autorizou a transferência).",
            "Anonimização completa dos dados bancários."
        ],
        answer: 2,
        explanations: [
            "Assinatura digital não monitora bateria ou energia do cliente.",
            "Processos criptográficos não aceleram a banda de internet.",
            "A assinatura digital com chave privada comprova a identidade do remetente (Autenticidade) e impede a negação posterior de autoria (Não-repúdio).",
            "A assinatura digital faz exatamente o oposto do anonimato: vincula o ato ao titular."
        ]
    },
    // Q11
    {
        domain: "DOM1",
        q: "Qual é a sequência correta do Ciclo de Vida da Informação dentro de uma organização, desde o seu surgimento até o seu fim?",
        options: [
            "Descarte ➔ Criação ➔ Transporte ➔ Processamento.",
            "Apenas Armazenamento eterno sem criação ou descarte.",
            "Criptografia ➔ Incêndio ➔ Recuperação.",
            "Criação (ou Coleta) ➔ Processamento / Uso ➔ Armazenamento e Transporte ➔ Descarte seguro (ou Arquivamento)."
        ],
        answer: 3,
        explanations: [
            "A informação não pode ser descartada antes de ser criada.",
            "Toda informação possui um ciclo que exige regras desde a criação até o descarte seguro.",
            "Incêndio é um sinistro, não uma fase planejada do ciclo de vida da informação.",
            "A informação nasce (criação/coleta), é trabalhada (processamento/uso), guardada e movida (armazenamento/transporte) e finalmente eliminada com segurança (descarte)."
        ]
    },
    // Q12
    {
        domain: "DOM1",
        q: "Quem deve ser escolhido como 'Proprietário do Ativo' (Asset Owner) de um banco de dados de clientes dentro da estrutura organizacional?",
        options: [
            "Um gestor da área de negócios (ex: Diretor Comercial ou de Relacionamento) que compreende o valor e a sensibilidade daqueles dados para a empresa.",
            "O estagiário recém-contratado do suporte técnico.",
            "O motorista da empresa terceirizada de transporte de fitas.",
            "O fabricante do servidor físico."
        ],
        answer: 0,
        explanations: [
            "A propriedade do ativo cabe ao gestor de negócios responsável pelo processo que gera e utiliza a informação, cabendo a ele classificá-la.",
            "A equipe técnica de TI atua como Custodiante, e não como Proprietária do dado de negócio.",
            "Fornecedores de transporte não são donos das informações da empresa.",
            "Fabricantes vendem o hardware, sem direito sobre os dados do cliente."
        ]
    },
    // Q13
    {
        domain: "DOM1",
        q: "Qual das responsabilidades abaixo pertence tipicamente ao 'Custodiante' (Custodian - equipe de TI) e NÃO ao 'Proprietário do Ativo'?",
        options: [
            "Decidir se um relatório secreto pode ser rebaixado para público.",
            "Executar rotinas técnicas diárias de backup, aplicar patches no servidor e configurar as permissões no sistema operacional conforme as regras definidas pelo Proprietário.",
            "Assumir a responsabilidade executiva pelo valor comercial do dado perante o conselho.",
            "Definir a estratégia global de negócios da companhia."
        ],
        answer: 1,
        explanations: [
            "Definir ou alterar o nível de classificação é prerrogativa exclusiva do Proprietário do Ativo.",
            "O Custodiante operacionaliza tecnicamente a proteção e guarda do ativo seguindo as diretrizes do Proprietário.",
            "A responsabilidade pelo valor de negócio é do Proprietário do Ativo.",
            "A estratégia global de negócios cabe à Alta Direção (Gestão Geral)."
        ]
    },
    // Q14
    {
        domain: "DOM1",
        q: "Qual é o risco direto de uma empresa classificar apenas os documentos em papel, esquecendo de aplicar a classificação e rotulagem aos arquivos digitais e bancos de dados?",
        options: [
            "As impressoras vão parar de funcionar.",
            "O ar-condicionado gastará mais energia.",
            "A mesma informação que está trancada a sete chaves no papel ficará desprotegida ou com acesso aberto na rede digital, causando vazamento.",
            "Os arquivos digitais não podem sofrer ataques de confidencialidade."
        ],
        answer: 2,
        explanations: [
            "Classificação documental não causa pane mecânica em impressoras.",
            "Metadados de arquivos não afetam o ar-condicionado.",
            "A classificação protege a informação independentemente do suporte; o nível de proteção deve ser coerente tanto no papel quanto no meio eletrônico.",
            "Meios digitais são os principais alvos de exfiltração e quebra de confidencialidade."
        ]
    },
    // Q15
    {
        domain: "DOM1",
        q: "Uma organização adota quatro níveis de classificação: Público, Interno, Confidencial e Secreto. Qual deve ser a regra padrão para um documento recém-criado que ainda não recebeu um rótulo explícito?",
        options: [
            "Publicá-lo imediatamente nas redes sociais da empresa.",
            "Considerá-lo sempre como 'Público' para facilitar a leitura por visitantes.",
            "Apagar o documento automaticamente em 5 segundos.",
            "Tratá-lo com um nível de proteção interno/restrito padrão até que o Proprietário defina sua classificação correta."
        ],
        answer: 3,
        explanations: [
            "Publicar informações não revisadas pode causar vazamento grave.",
            "Assumir que tudo é público por padrão expõe dados sensíveis antes da triagem.",
            "Apagar arquivos em criação inviabilizaria o trabalho.",
            "Na dúvida ou ausência temporária de rótulo, aplica-se proteção interna preventiva (segurança por padrão) até a classificação formal."
        ]
    },
    // Q16
    {
        domain: "DOM1",
        q: "Para proteger um laptop corporativo utilizado por gerentes em viagens, por que a EXIN afirma que 'alocar o laptop a um único usuário' NÃO é suficiente como controle de segurança?",
        options: [
            "Porque se o laptop for furtado ou acessado por terceiros sem controles lógicos (como senhas fortes e criptografia), o fato de ter um único dono nominal não impedirá a leitura dos dados.",
            "Porque laptops só funcionam quando compartilhados por cinco pessoas.",
            "Porque a ISO 27002 proíbe o uso de computadores portáteis.",
            "Porque alocar o equipamento a uma pessoa apaga a memória RAM."
        ],
        answer: 0,
        explanations: [
            "A posse exclusiva ajuda na responsabilização patrimonial, mas proteger a informação no laptop exige autenticação (contas/senhas) e criptografia de disco.",
            "Contas e equipamentos devem ter responsáveis individuais.",
            "A ISO 27002 possui controles específicos para apoiar o uso seguro de dispositivos móveis.",
            "Alocação administrativa não afeta o hardware."
        ]
    },
    // Q17
    {
        domain: "DOM1",
        q: "Por que 'fazer um backup da conexão de internet' é uma resposta tecnicamente absurda quando se pergunta como proteger a disponibilidade da comunicação de rede?",
        options: [
            "Porque a internet só funciona durante o dia.",
            "Porque conexões de comunicação são fluxos ativos em tempo real (protegidos com redundância de links/provedores diferentes), e não arquivos estáticos que possam ser guardados em fita.",
            "Porque fitas magnéticas não cabem dentro do roteador.",
            "Porque a ISO 27001 proíbe o uso de internet nas empresas."
        ],
        answer: 1,
        explanations: [
            "A internet opera 24 horas por dia.",
            "Faz-se backup de dados e arquivos; para proteger conexões de rede ou servidores contra quedas, implementa-se redundância.",
            "A distinção é conceitual entre armazenamento de dados (backup) e disponibilidade de canal (redundância).",
            "As empresas dependem da internet e a protegem com firewalls, VPNs e links redundantes."
        ]
    },
    // Q18
    {
        domain: "DOM1",
        q: "Ao preencher um formulário impresso de solicitação de compras e assiná-lo à caneta, qual atributo básico está sendo adicionado ao documento, embora isso por si só não o proteja contra incêndio ou furto?",
        options: [
            "Criptografia de chave pública.",
            "Redundância de servidores.",
            "Autenticidade e validação administrativa do pedido.",
            "Backup incremental automático."
        ],
        answer: 2,
        explanations: [
            "Assinatura à caneta em papel não é criptografia digital.",
            "Formulários de papel não são servidores.",
            "Assinar um formulário formaliza a autoria e autorização administrativa, mas não constitui proteção física contra perda ou leitura indevida do papel.",
            "Preencher uma folha única não cria cópia de segurança."
        ]
    },
    // Q19
    {
        domain: "DOM1",
        q: "Qual é a relação correta entre o 'Valor da Informação' e o 'Nível de Controle de Segurança' que deve ser aplicado a ela?",
        options: [
            "Informações sem nenhum valor crítico devem receber os controles mais caros da empresa.",
            "Todos os arquivos da empresa, do cardápio do refeitório ao segredo industrial, devem ter exatamente o mesmo custo de proteção.",
            "Quanto maior o valor da informação, menos controles ela deve ter para não atrasar o acesso.",
            "O nível e o custo de proteção devem ser diretamente proporcionais ao valor, sensibilidade e criticidade da informação para o negócio."
        ],
        answer: 3,
        explanations: [
            "Gastar recursos caros em dados triviais desperdiça orçamento.",
            "Proteger tudo no nível máximo inviabiliza a operação e encarece o SGSI.",
            "Ativos mais valiosos exigem camadas mais rigorosas de proteção.",
            "A classificação e a análise de riscos existem justamente para calibrar os controles de forma proporcional ao valor do ativo."
        ]
    },
    // Q20
    {
        domain: "DOM1",
        q: "Um banco de dados de clientes sofre uma falha onde 30% dos CPFs cadastrados são trocados aleatoriamente entre os nomes dos clientes. Qual aspecto da confiabilidade foi violado?",
        options: [
            "Integridade (especificamente a Exatidão dos registros).",
            "Disponibilidade elétrica do no-break.",
            "Posse física do prédio.",
            "Controle ambiental de umidade."
        ],
        answer: 0,
        explanations: [
            "Vincular dados incorretos corrompe a veracidade e a precisão dos registros, violando a Exatidão (pilar da Integridade).",
            "O banco de dados continua ligado e respondendo consultas.",
            "O prédio não foi invadido nem tomado.",
            "Trata-se de corrupção lógica de dados, não de umidade."
        ]
    },
    // Q21
    {
        domain: "DOM1",
        q: "Por que uma informação que está 100% íntegra e 100% confidencial ainda assim não é considerada 'Confiável' (Reliable) na definição da EXIN se o servidor estiver desligado quando o diretor precisar dela?",
        options: [
            "Porque servidores desligados perdem a criptografia.",
            "Porque a Confiabilidade da Informação exige simultaneamente os três pilares: Confidencialidade, Integridade e Disponibilidade.",
            "Porque o diretor não sabe usar senhas.",
            "Porque a integridade apaga os dados quando falta luz."
        ],
        answer: 1,
        explanations: [
            "A criptografia de disco mantém os dados cifrados mesmo com a máquina desligada.",
            "Na prova da EXIN, Confiabilidade = Confidencialidade + Integridade + Disponibilidade; se faltar disponibilidade, a informação não é confiável para o negócio.",
            "O problema é o servidor desligado, não a senha do diretor.",
            "Integridade é um atributo de preservação, não um comando de exclusão."
        ]
    },
    // Q22
    {
        domain: "DOM2",
        q: "Na equação fundamental da gestão de riscos, quando uma 'Ameaça' encontra e explora uma 'Vulnerabilidade' desprotegida em um ativo, o que isso gera?",
        options: [
            "Uma Declaração de Aplicabilidade automática.",
            "Um Certificado de Boa Índole.",
            "Um Incidente de Segurança (que pode produzir Danos/Impactos ao ativo e à organização).",
            "Uma redução imediata na Expectativa Anual de Perda (ALE)."
        ],
        answer: 2,
        explanations: [
            "A SoA é um documento elaborado na fase Plan do SGSI.",
            "Certificado de boa índole é um documento de contratação de RH.",
            "A exploração de uma vulnerabilidade por uma ameaça concretiza o risco em um incidente real.",
            "A ocorrência de incidentes demonstra exposição ao risco, não redução automática da ALE."
        ]
    },
    // Q23
    {
        domain: "DOM2",
        q: "Qual das alternativas apresenta um par contendo (1) uma Ameaça Humana Intencional e (2) uma Ameaça Humana Não Intencional (Acidental)?",
        options: [
            "1: Terremoto; 2: Furacão.",
            "1: Queda de raio; 2: Inundação.",
            "1: Digitar um valor errado por distração; 2: Sabotagem planejada por um hacker.",
            "1: Sabotagem de servidor por ex-funcionário; 2: Exclusão acidental de pasta por um operador sem treinamento."
        ],
        answer: 3,
        explanations: [
            "Terremoto e furacão são ameaças naturais (não humanas).",
            "Raio e inundação também são ameaças naturais.",
            "A ordem foi invertida: distração é não intencional e sabotagem é intencional.",
            "Sabotagem envolve propósito malicioso (intencional), enquanto erro operacional por falta de treino é humano não intencional (acidental)."
        ]
    },
    // Q24
    {
        domain: "DOM2",
        q: "Por que a 'Análise de Ameaças e Riscos' deve preceder a escolha dos controles técnicos do Anexo A da ISO/IEC 27001?",
        options: [
            "Porque ela fornece a visão sobre quais ameaças relevantes afetam a organização e suas eventuais consequências, permitindo escolher apenas controles necessários e proporcionais.",
            "Porque a análise de ameaças criptografa todos os computadores gratuitamente.",
            "Porque sem ela os fornecedores se recusam a vender licenças de antivírus.",
            "Porque é a única forma de demitir funcionários sem justa causa."
        ],
        answer: 0,
        explanations: [
            "Sem conhecer as ameaças e impactos reais do seu contexto, a empresa gastaria recursos protegendo ativos irrelevantes e deixaria brechas críticas abertas.",
            "Análise de ameaças é um processo de avaliação, não um software criptográfico.",
            "Fornecedores comerciais vendem produtos independentemente da análise interna do cliente.",
            "Análise de riscos trata da proteção de ativos de informação, não de leis trabalhistas."
        ]
    },
    // Q25
    {
        domain: "DOM2",
        q: "Em uma avaliação de riscos, qual é a diferença entre 'Risco Inerente' e 'Risco Residual'?",
        options: [
            "Risco Inerente é o que sobra após o firewall; Risco Residual é o que existia antes da empresa abrir.",
            "Risco Inerente é o risco bruto total antes de aplicar qualquer controle; Risco Residual é a parcela de risco que permanece mesmo após a implementação dos controles selecionados.",
            "Risco Residual é sempre igual a zero em empresas certificadas na ISO 27001.",
            "Ambos significam o valor pago anualmente à companhia de seguros."
        ],
        answer: 1,
        explanations: [
            "Os conceitos foram invertidos.",
            "Os controles reduzem o risco inerente inicial, mas como não existe segurança 100% infalível, sempre resta o risco residual (que deve ser aprovado pela direção).",
            "Nenhuma organização atinge risco zero absoluto.",
            "O valor pago ao seguro é o prêmio da apólice na transferência de risco."
        ]
    },
    // Q26
    {
        domain: "DOM2",
        q: "Quem tem a autoridade e a responsabilidade final para aprovar formalmente o 'Risco Residual' de um Sistema de Gestão de Segurança da Informação (SGSI)?",
        options: [
            "O estagiário do Help Desk.",
            "O auditor externo da certificadora.",
            "A Alta Direção / Gestão Geral (ou os Proprietários de Risco designados por ela).",
            "O visitante da recepção."
        ],
        answer: 2,
        explanations: [
            "O Help Desk atua no suporte técnico operacional.",
            "O auditor externo avalia a conformidade, mas jamais toma decisões de negócio pela empresa.",
            "Aceitar o risco residual que permanece após os controles é uma decisão executiva de negócio que cabe à direção/proprietários de risco.",
            "Visitantes são terceiros externos sem papel no SGSI."
        ]
    },
    // Q27
    {
        domain: "DOM2",
        q: "Uma empresa de entregas aéreas usando drones percebe que voar durante tempestades de granizo tem altíssima probabilidade de destruir os equipamentos. A diretoria proíbe qualquer voo em dias de granizo. Qual estratégia de risco foi aplicada?",
        options: [
            "Aceitar o risco.",
            "Transferir o risco.",
            "Compartilhar o risco.",
            "Evitar o risco."
        ],
        answer: 3,
        explanations: [
            "Aceitar seria voar na tempestade assumindo o prejuízo.",
            "Transferir seria acionar um seguro mantendo o voo.",
            "Compartilhar é sinônimo de transferir a terceiros.",
            "Suspender ou não realizar a atividade quando a exposição é inaceitável caracteriza Evitar o risco."
        ]
    },
    // Q28
    {
        domain: "DOM2",
        q: "Quando uma organização instala câmeras de vigilância (CFTV) que apenas gravam o movimento no corredor e disparam um alerta silencioso na tela do vigia quando alguém entra na sala restrita, como esse controle funciona no momento da invasão?",
        options: [
            "Como Controle Detectivo (identifica e registra que o evento está ocorrendo).",
            "Como Controle Corretivo que reconstrói portas quebradas.",
            "Como Transferência contratual de risco.",
            "Como Análise Quantitativa de SLE."
        ],
        answer: 0,
        explanations: [
            "Câmeras e sensores que identificam e alertam sobre uma intrusão atuam como controles detectivos (além de terem efeito dissuasivo prévio).",
            "Câmeras não consertam danos físicos.",
            "Monitoramento por vídeo não é contrato de seguro.",
            "SLE é uma métrica financeira de análise de risco."
        ]
    },
    // Q29
    {
        domain: "DOM2",
        q: "Após um ataque de ransomware criptografar um servidor secundário, a equipe de TI isola a máquina (contenção), formata o disco afetado e restaura os dados íntegros a partir da fita de backup da noite anterior. A ação de restaurar o backup para devolver o servidor à operação normal é um controle:",
        options: [
            "Preventivo.",
            "Corretivo (atua entre o Dano e a Recuperação).",
            "De Transferência.",
            "De Classificação Pública."
        ],
        answer: 1,
        explanations: [
            "Preventivo atua antes do incidente ocorrer (o backup foi feito antes como preparação, mas o ato de restaurar pós-ataque corrige o dano).",
            "Restaurar backups após um sinistro repara o dano sofrido e devolve o sistema ao estado operacional normal (Controle Corretivo).",
            "Não houve repasse a seguradora.",
            "Restauração técnica não é classificação documental."
        ]
    },
    // Q30
    {
        domain: "DOM2",
        q: "Um usuário baixa um protetor de tela animado de um site desconhecido. O protetor de tela exibe peixes nadando normalmente no monitor, mas em segundo plano abre uma conexão oculta que envia os arquivos da pasta 'Documentos' para um criminoso. Esse malware é um:",
        options: [
            "Worm puro sem função aparente.",
            "Falso Positivo do firewall.",
            "Trojan (Cavalo de Troia).",
            "Desmagnetizador lógico."
        ],
        answer: 2,
        explanations: [
            "O Worm foca em autorreplicação autônoma pela rede, sem fingir ser um protetor de tela útil.",
            "Falso positivo é um alarme de defesa disparado por engano.",
            "Desempenhar uma função aparente inofensiva (protetor de tela) enquanto realiza propositalmente atividades secundárias maliciosas é a definição exata de Trojan.",
            "Desmagnetizador é um equipamento físico."
        ]
    },
    // Q31
    {
        domain: "DOM2",
        q: "Por que a literatura oficial da EXIN observa que uma 'Bomba Lógica' (Logic Bomb) nem sempre é criada com finalidade criminosa por hackers externos?",
        options: [
            "Porque bombas lógicas são equipamentos físicos de combate a incêndio.",
            "Porque bombas lógicas ajudam a resfriar o processador.",
            "Porque a ISO 27001 exige bombas lógicas em todos os servidores.",
            "Porque o mesmo mecanismo de disparar uma ação numa data específica pode ser usado em versões de avaliação de software legítimo (Trial) que param de funcionar quando o prazo gratuito expira."
        ],
        answer: 3,
        explanations: [
            "Bomba lógica é um trecho de código de programação.",
            "Códigos lógicos não refrigeram hardware.",
            "A ISO 27001 jamais exige inserção de bombas lógicas.",
            "No gabarito oficial da EXIN, destaca-se que uma bomba lógica é um código acionado por condições específicas (como data/hora), podendo travar um software comercial de teste após 30 dias se a licença não for paga."
        ]
    },
    // Q32
    {
        domain: "DOM2",
        q: "Qual malware se instala silenciosamente no navegador ou computador da vítima com o objetivo principal de monitorar seus hábitos de navegação, cliques e digitação para enviar essas informações a terceiros?",
        options: [
            "Spyware.",
            "Mantrap.",
            "Cold Site.",
            "VLAN."
        ],
        answer: 0,
        explanations: [
            "O Spyware (software espião) coleta informações sobre o usuário sem seu consentimento e as transmite para entidades externas.",
            "Mantrap é uma eclusa física de segurança perimetral.",
            "Cold Site é uma sala vazia de contingência.",
            "VLAN é uma rede local virtual."
        ]
    },
    // Q33
    {
        domain: "DOM2",
        q: "Um golpista veste um uniforme azul parecido com o da empresa de telefonia, carrega uma prancheta falsa e convence a recepcionista a deixá-lo entrar na sala de cabeamento dizendo que precisa 'testar o sinal de fibra do diretor'. Que tipo de ataque ocorreu?",
        options: [
            "Ataque de Força Bruta Criptográfica.",
            "Engenharia Social presencial (combinada com invasão física por pretexto falso).",
            "Injeção de SQL.",
            "Backup Diferencial."
        ],
        answer: 1,
        explanations: [
            "Força bruta criptográfica envolve processamento matemático em computadores.",
            "Usar disfarces, autoridade falsa e persuasão psicológica para enganar funcionários e burlar controles de acesso é Engenharia Social.",
            "SQL Injection é um ataque lógico a bancos de dados web.",
            "Backup diferencial é uma rotina de cópia de dados."
        ]
    },
    // Q34
    {
        domain: "DOM2",
        q: "Qual é a diferença entre um 'Evento de Segurança' e uma 'Fraqueza de Segurança' (Weakness) na rotina de reporte ao Help Desk?",
        options: [
            "Fraqueza é um incêndio consumindo o prédio; Evento é o seguro pagando a conta.",
            "Não há diferença; ambos significam que a empresa faliu.",
            "Fraqueza é uma falha/vulnerabilidade observada em um controle (ex: porta que não tranca ou senha padrão ativa); Evento é uma ocorrência ou ação registrada no sistema ou ambiente (ex: tentativa de login ou bloqueio de vírus).",
            "Evento só ocorre no papel; Fraqueza só ocorre na nuvem."
        ],
        answer: 2,
        explanations: [
            "Incêndio é um incidente/desastre, e seguro é transferência de risco.",
            "São conceitos técnicos básicos da operação diária do SGSI.",
            "Uma fraqueza é uma condição vulnerável que precisa ser corrigida antes que alguém a explore; um evento é um acontecimento dinâmico observado no sistema.",
            "Ambos ocorrem tanto no ambiente físico quanto no lógico."
        ]
    },
    // Q35
    {
        domain: "DOM2",
        q: "Por que os funcionários devem ser instruídos a NUNCA tentarem 'testar' ou explorar por conta própria uma Fraqueza de Segurança que encontraram no sistema corporativo?",
        options: [
            "Porque o teclado trava se alguém descobrir um erro.",
            "Porque apenas hackers externos têm permissão legal para testar sistemas.",
            "Porque falhas de software se consertam sozinhas se ninguém olhar para elas.",
            "Porque testar a falha sem autorização pode causar danos acidentais (derrubar o sistema ou corromper dados) e ser interpretado nos logs como um ataque interno; o dever do funcionário é apenas reportar imediatamente ao Help Desk."
        ],
        answer: 3,
        explanations: [
            "O hardware não trava por motivos morais.",
            "Apenas profissionais contratados e formalmente autorizados (Pentest) em janela controlada podem testar falhas.",
            "Vulnerabilidades permanecem abertas até que um patch ou controle seja aplicado.",
            "A diretriz da ISO 27002 é clara: usuários devem notificar fraquezas suspeitas ao ponto de contato (Help Desk) e jamais tentar comprová-las explorando o erro."
        ]
    },
    // Q36
    {
        domain: "DOM2",
        q: "Em uma crise severa onde um incêndio destrói o prédio administrativo, qual é o foco principal do Gerenciamento da Continuidade de Negócios (BCM)?",
        options: [
            "Permitir que as atividades e processos críticos de negócios da organização continuem sem interrupção inaceitável (ou sejam retomados dentro do tempo exigido).",
            "Descobrir o preço das ações dos concorrentes na bolsa de valores.",
            "Alterar a chave pública de todos os clientes.",
            "Substituir a norma ISO 27001 pela norma ANSI."
        ],
        answer: 0,
        explanations: [
            "O BCM garante a resiliência operacional para que a entrega de produtos e serviços essenciais sobreviva a desastres.",
            "Especulação financeira não faz parte da continuidade de negócios.",
            "Um incêndio físico não exige troca de chaves públicas de clientes.",
            "O BCM é parte integrante da própria ISO 27001 (Domínio A.17 / Controles de Continuidade)."
        ]
    },
    // Q37
    {
        domain: "DOM2",
        q: "Na Análise de Impacto no Negócio (BIA), um processo crítico tem RTO de 1 hora e RPO de 10 minutos. O que acontece se a empresa demorar 6 horas para religar esse sistema após uma pane?",
        options: [
            "Apenas o RPO foi estourado, mas o RTO foi cumprido.",
            "O RTO (Objetivo de Tempo de Recuperação) de 1 hora foi violado, causando impacto severo às operações do negócio.",
            "O MTBF do disco rígido aumentou em seis vezes.",
            "A empresa cumpriu a meta com 5 horas de folga."
        ],
        answer: 1,
        explanations: [
            "RPO mede perda de dados no tempo passado; tempo de parada até religar é o RTO.",
            "Se o tempo máximo tolerável fora do ar (RTO) era de 1 hora e levou 6 horas, a meta de tempo de recuperação falhou.",
            "MTBF é uma métrica de fabricação de hardware.",
            "Ultrapassar o limite máximo de 1 hora representa violação da meta, e não folga."
        ]
    },
    // Q38
    {
        domain: "DOM2",
        q: "Coloque os três tipos clássicos de sites alternativos fixos de recuperação na ordem correta, do MAIS LENTO (e mais barato) para o MAIS RÁPIDO (e mais caro) na retomada das operações:",
        options: [
            "Hot Site ➔ Warm Site ➔ Cold Site.",
            "Warm Site ➔ Cold Site ➔ Hot Site.",
            "Cold Site (Site Frio) ➔ Warm Site (Site Morno) ➔ Hot Site (Site Quente).",
            "Todos os três levam exatamente 5 minutos para entrar no ar."
        ],
        answer: 2,
        explanations: [
            "Esta ordem está do mais rápido para o mais lento.",
            "O Warm Site é intermediário, não o mais lento.",
            "Cold Site (sala vazia, leva dias/semanas) ➔ Warm Site (servidores instalados aguardando backup, leva horas) ➔ Hot Site (sincronizado em tempo real, leva minutos).",
            "Apenas o Hot Site assume em poucos minutos."
        ]
    },
    // Q39
    {
        domain: "DOM2",
        q: "Após a contenção e erradicação de um ataque de invasão em um servidor, a equipe restaura os sistemas, monitora se tudo voltou ao normal e, dias depois, realiza uma reunião para documentar o que falhou e atualizar as regras do firewall. Como se chamam essas duas etapas finais do ciclo de incidentes?",
        options: [
            "Classificação e Rotulagem.",
            "Identificação e Autenticação.",
            "Transferência e Aceitação.",
            "Recuperação (Recovery) e Lições Aprendidas (Lessons Learned / Pós-incidente)."
        ],
        answer: 3,
        explanations: [
            "Classificação e rotulagem pertencem à gestão de ativos.",
            "Identificação e autenticação pertencem ao controle de acesso.",
            "Transferência e aceitação são estratégias de risco.",
            "Devolver o sistema à produção segura é a Recuperação; revisar o caso para melhorar os controles e evitar repetição é a fase de Lições Aprendidas."
        ]
    },
    // Q40
    {
        domain: "DOM2",
        q: "Um analista do Help Desk recebe 50 chamados de usuários diferentes relatando que seus computadores ficaram extremamente lentos no mesmo minuto. Ao cruzar os chamados, ele percebe que não são defeitos isolados de hardware, mas um ataque de Worm se espalhando na rede. Qual é a importância dessa correlação no Help Desk?",
        options: [
            "Permite identificar rapidamente um incidente de segurança de grande escala a partir de múltiplos eventos aparentes e acionar imediatamente o escalonamento para contenção.",
            "Serve apenas para fechar todos os 50 chamados sem atender nenhum.",
            "Permite cobrar uma taxa extra do salário dos 50 funcionários.",
            "Autoriza o atendente de nível 1 a desligar o gerador a diesel do prédio."
        ],
        answer: 0,
        explanations: [
            "Centralizar notificações no Help Desk permite enxergar o quadro geral quando vários sintomas isolados apontam para um ataque coordenado.",
            "Chamados de ataque ativo exigem resposta urgente, nunca descarte.",
            "Usuários não são multados por reportar incidentes.",
            "Desligar energia predial não é atribuição do Help Desk."
        ]
    },
    // Q41
    {
        domain: "DOM2",
        q: "Qual das situações abaixo caracteriza um ataque de 'Pretexting' (criação de pretexto) dentro da Engenharia Social?",
        options: [
            "Um raio cair sobre a antena de rádio da filial.",
            "Um atacante inventar uma história elaborada (fingindo ser um auditor externo ou diretor em emergência) para ganhar a confiança da vítima e fazê-la quebrar um procedimento de segurança.",
            "Um disco rígido parar de girar após 10 anos de uso contínuo.",
            "O firewall bloquear uma porta TCP automaticamente."
        ],
        answer: 1,
        explanations: [
            "Raios são ameaças naturais.",
            "No Pretexting, o criminoso constrói um cenário e personagem fictícios convincentes para manipular psicologicamente o alvo.",
            "Desgaste mecânico por tempo de uso é falha técnica (MTBF).",
            "Bloqueio de firewall é um controle técnico preventivo."
        ]
    },
    // Q42
    {
        domain: "DOM2",
        q: "Por que ataques de Ransomware modernos costumam também roubar uma cópia dos dados confidenciais da empresa ANTES de criptografar os servidores (tática conhecida como Dupla Extorsão)?",
        options: [
            "Para fazer um backup gratuito e ajudar a empresa vítima.",
            "Porque a criptografia sozinha não trava o acesso aos arquivos.",
            "Para chantagear a empresa ameaçando vazar os dados confidenciais na internet caso ela restaure tudo pelos backups e se recuse a pagar o resgate.",
            "Para cumprir um requisito da norma ISO/IEC 27005."
        ],
        answer: 2,
        explanations: [
            "Criminosos exfiltram dados para extorquir, nunca para ajudar.",
            "A criptografia do ransomware bloqueia totalmente a leitura local dos arquivos.",
            "Mesmo que a vítima tenha excelentes backups (garantindo a Disponibilidade), o roubo prévio viola a Confidencialidade, exigindo controles preventivos contra invasão e criptografia prévia dos dados.",
            "Ações criminosas não fazem parte de normas ISO."
        ]
    },
    // Q43
    {
        domain: "DOM2",
        q: "Durante um incêndio na filial, a fumaça preta invade o corredor. Qual controle físico age no exato momento em que a fumaça surge para avisar as pessoas, e qual controle age logo em seguida para apagar o fogo?",
        options: [
            "Ambos são controles Corretivos.",
            "1: Seguro contra incêndio; 2: Crachá sem logotipo.",
            "1: Backup Incremental; 2: Criptografia Simétrica.",
            "1: Controle Detectivo (detector/alarme de fumaça); 2: Controle Repressivo (sistema de extinção/sprinklers)."
        ],
        answer: 3,
        explanations: [
            "Corretivo age apenas depois que o incêndio acabou para reparar os estragos.",
            "Seguro é transferência e crachá é controle de acesso.",
            "Backup e criptografia são controles de dados digitais.",
            "O detector identifica o sinistro (Detectivo) e o extintor/gás age para conter as chamas e limitar o dano (Repressivo)."
        ]
    },
    // Q44
    {
        domain: "DOM2",
        q: "Uma fábrica localizada em uma região montanhosa nunca sofreu inundações em 100 anos, mas sofre quedas frequentes de energia elétrica toda semana. Na Análise de Riscos dessa fábrica, como serão classificadas as probabilidades dessas duas ameaças?",
        options: [
            "Inundação terá probabilidade muito baixa; Queda de energia terá probabilidade alta (exigindo tratamento prioritário com UPS e gerador).",
            "Inundação terá probabilidade de 100% todo dia; Queda de energia terá probabilidade zero.",
            "Ambas devem ser ignoradas porque são ameaças não humanas.",
            "A fábrica deve instalar barcos salva-vidas e vender seus geradores."
        ],
        answer: 0,
        explanations: [
            "A análise de riscos considera o histórico e o contexto geográfico/operacional real para estimar a probabilidade de cada ameaça.",
            "Os dados históricos mostram exatamente o oposto.",
            "Ameaças não humanas/ambientais causam graves paradas e precisam ser tratadas.",
            "Os controles devem focar nos riscos de maior probabilidade e impacto (energia elétrica)."
        ]
    },
    // Q45
    {
        domain: "DOM2",
        q: "Qual é a consequência para uma empresa se o seu 'Tempo de Recuperação Real' em um desastre for muito maior do que o 'RTO' definido na Análise de Impacto no Negócio (BIA)?",
        options: [
            "A empresa receberá um prêmio de eficiência da ISO.",
            "A organização sofrerá danos severos (multas contratuais, paralisação inaceitável ou até falência), pois seus processos críticos ficaram parados além do limite máximo suportável.",
            "O backup diferencial se transformará em backup completo sozinho.",
            "Os computadores consumirão menos energia e darão lucro."
        ],
        answer: 1,
        explanations: [
            "Estourar o RTO é uma falha grave de continuidade, não um mérito.",
            "O RTO marca o limite máximo de tempo que o negócio suporta ficar parado antes que os prejuízos se tornem críticos ou irreversíveis.",
            "Tipos de backup não mudam sozinhos por atraso na recuperação.",
            "A paralisação dos negócios gera prejuízo operacional direto e indireto."
        ]
    },
    // Q46
    {
        domain: "DOM3",
        q: "Ao chegar à portaria de um prédio corporativo, um funcionário passa seu crachá na catraca, mas tenta entrar acompanhado de um amigo que não tem crachá, passando os dois juntos no mesmo giro. Qual controle físico é projetado especificamente para impedir que duas pessoas passem juntas em um único acesso?",
        options: [
            "Ar-condicionado de precisão.",
            "Servidor Proxy web.",
            "Eclusa física (Mantrap / portas intertravadas ou torniquetes de altura total com sensor de passagem única).",
            "Criptografia de chave pública."
        ],
        answer: 2,
        explanations: [
            "Ar-condicionado controla temperatura e umidade.",
            "Proxy filtra pacotes de navegação na internet.",
            "Mantraps (eclusas) e barreiras físicas de passagem individual impedem mecanicamente o Tailgating/Piggybacking.",
            "Criptografia protege dados digitais, não portarias físicas."
        ]
    },
    // Q47
    {
        domain: "DOM3",
        q: "Por que janelas do andar térreo de áreas onde se trabalha com informações sensíveis devem contar com grades, películas de segurança ou vidro inquebrável, além de telas visuais/persianas?",
        options: [
            "Para impedir que o sinal de Wi-Fi saia pela janela.",
            "Para aquecer a sala no verão.",
            "Para substituir o antivírus das estações de trabalho.",
            "Para proteger o anel físico do Prédio contra arrombamento (acesso físico não autorizado) e impedir que pessoas na calçada leiam telas ou quadros internos (proteção visual da confidencialidade)."
        ],
        answer: 3,
        explanations: [
            "Vidros comuns ou laminados não bloqueiam ondas de rádio Wi-Fi.",
            "Aquecer escritórios no verão prejudica o ambiente.",
            "Barreiras físicas não substituem controles lógicos contra malware.",
            "No segundo anel de proteção (Prédio), janelas térreas são pontos vulneráveis tanto à invasão física quanto à espionagem visual externa."
        ]
    },
    // Q48
    {
        domain: "DOM3",
        q: "Uma empresa guarda seus servidores críticos dentro de um armário comum destrancado no meio do corredor onde circulam clientes e entregadores. Qual dos 4 Anéis de Proteção Física foi negligenciado nessa instalação?",
        options: [
            "O 4º anel: Área Segura (os servidores deveriam ficar isolados em uma sala segura trancada com acesso restrito apenas a administradores autorizados).",
            "Nenhum anel, pois servidores devem ficar acessíveis ao público.",
            "Apenas o backup diferencial.",
            "O protocolo HTTPS."
        ],
        answer: 0,
        explanations: [
            "Equipamentos centrais de processamento e telecomunicações exigem o anel mais interno de proteção física (Área Segura), isolado de áreas de circulação comum.",
            "Deixar servidores expostos a visitantes permite furto, desligamento ou conexão direta de mídias maliciosas.",
            "Backup é cópia lógica de dados.",
            "HTTPS é protocolo de rede."
        ]
    },
    // Q49
    {
        domain: "DOM3",
        q: "Por que é proibido comer, beber ou fumar dentro da Sala dos Servidores (Data Center)?",
        options: [
            "Porque o cheiro de comida deixa a internet mais lenta.",
            "Porque líquidos derramados causam curtos-circuitos, migalhas atraem pragas/roedores que roem cabos, e a fumaça/fogo do cigarro contamina os filtros e pode iniciar um incêndio.",
            "Porque os servidores sentem fome durante a noite.",
            "Porque o GDPR proíbe cafeterias a menos de 10 quilômetros de um computador."
        ],
        answer: 1,
        explanations: [
            "Odores não afetam protocolos de rede.",
            "Alimentos, líquidos e fumo introduzem ameaças físicas diretas (curto-circuito, pragas, partículas nos coolers e risco de incêndio) dentro da Área Segura.",
            "Servidores são máquinas inanimadas.",
            "O GDPR trata de proteção de dados pessoais, não de alimentação."
        ]
    },
    // Q50
    {
        domain: "DOM3",
        q: "Em um sistema corporativo, qual é a diferença entre a etapa de 'Autenticação' e a etapa de 'Autorização'?",
        options: [
            "Autenticação define quais pastas você pode apagar; Autorização confere sua impressão digital.",
            "Ambas ocorrem apenas depois que o usuário desliga o computador.",
            "Autenticação comprova que o usuário é quem diz ser (valida a identidade); Autorização determina quais recursos e ações aquele usuário já autenticado tem permissão para acessar.",
            "Autenticação é feita pelo firewall; Autorização é feita pelo no-break."
        ],
        answer: 2,
        explanations: [
            "Os conceitos foram invertidos.",
            "Ambas ocorrem no início e durante a sessão ativa do usuário.",
            "Você pode passar com sucesso pela Autenticação (provar que é o João), mas ser barrado na Autorização ao tentar abrir a pasta da Diretoria para a qual não tem permissão.",
            "No-break é equipamento elétrico sem relação com controle de acesso."
        ]
    },
    // Q51
    {
        domain: "DOM3",
        q: "Um funcionário usa seu cartão inteligente (Smartcard) físico combinado com um código PIN de 6 dígitos que ele memorizou para fazer login na estação de trabalho. Por que esse método é considerado Autenticação de Dois Fatores (2FA / MFA)?",
        options: [
            "Porque o PIN tem mais de 4 números.",
            "Porque o cartão inteligente é feito de plástico reciclável.",
            "Porque exige digitar o nome do usuário em letras maiúsculas.",
            "Porque combina dois fatores de naturezas diferentes: 'algo que você tem' (posse do Smartcard físico) e 'algo que você sabe' (conhecimento do PIN)."
        ],
        answer: 3,
        explanations: [
            "O tamanho do PIN sozinho continua sendo apenas um fator de conhecimento.",
            "O material físico do cartão não define a lógica de múltiplos fatores.",
            "Formatação de texto no login é apenas identificação.",
            "Se roubarem apenas o cartão, o ladrão não sabe o PIN; se descobrirem apenas o PIN, não têm o cartão físico — essa é a essência da MFA."
        ]
    },
    // Q52
    {
        domain: "DOM3",
        q: "Qual problema operacional ocorre em uma empresa que adota o modelo de Controle de Acesso Discricionário (DAC) puro para proteger seus documentos estratégicos?",
        options: [
            "Como cada usuário dono de uma pasta pode compartilhá-la livremente com quem quiser, a organização perde o controle centralizado e dados confidenciais podem ser repassados acidentalmente a pessoas não autorizadas.",
            "Os usuários ficam proibidos de criar novos arquivos de texto.",
            "O servidor bloqueia automaticamente qualquer compartilhamento entre colegas.",
            "O sistema exige aprovação do Exército para abrir uma planilha."
        ],
        answer: 0,
        explanations: [
            "No DAC, a decisão fica a critério (discrição) de cada usuário criador do arquivo, o que dificulta garantir que a política corporativa de sigilo seja respeitada uniformemente.",
            "O DAC permite criar e compartilhar arquivos livremente.",
            "Quem bloqueia compartilhamentos centralizadamente por rótulos é o MAC, não o DAC.",
            "Exigência militar de rótulos rígidos é característica do MAC."
        ]
    },
    // Q53
    {
        domain: "DOM3",
        q: "Uma grande rede varejista tem alta rotatividade de caixas de loja. Para não precisar configurar 30 permissões individuais toda vez que contrata um caixa novo, a TI criou o perfil 'Caixa_Loja' com os acessos exatos da função. Qual modelo é esse?",
        options: [
            "Controle de Acesso Discricionário (DAC).",
            "Controle de Acesso Baseado em Papéis / Funções (RBAC - Role-Based Access Control).",
            "Ataque de Acúmulo de Privilégios.",
            "Engenharia Reversa de Malware."
        ],
        answer: 1,
        explanations: [
            "No DAC as permissões são dadas individualmente pelo dono de cada arquivo.",
            "No RBAC as permissões são vinculadas à função organizacional (Role), agilizando a concessão e revogação de acessos conforme o cargo.",
            "Usar perfis de cargo evita justamente o acúmulo desordenado de privilégios.",
            "Engenharia reversa é análise técnica de código."
        ]
    },
    // Q54
    {
        domain: "DOM3",
        q: "Por que as contas de 'Administrador do Sistema' (Root / Domain Admin) não devem ser usadas pelos técnicos de TI para realizar tarefas cotidianas comuns, como navegar na internet ou ler e-mails?",
        options: [
            "Porque contas de administrador não conseguem abrir navegadores web.",
            "Porque ler e-mails apaga a senha de administrador.",
            "Porque se o técnico clicar em um link malicioso ou baixar um Trojan enquanto estiver logado como Administrador, o malware herdará privilégios totais para infectar e destruir todo o sistema sem restrições.",
            "Porque contas de administrador só funcionam aos finais de semana."
        ],
        answer: 2,
        explanations: [
            "Contas administrativas têm poder técnico para abrir qualquer programa, mas isso deve ser restringido por segurança.",
            "A leitura de mensagens não apaga credenciais.",
            "Pelo Princípio do Menor Privilégio, até administradores devem usar uma conta comum no dia a dia e acionar a conta privilegiada apenas no instante de fazer manutenção.",
            "Contas administrativas funcionam em qualquer horário."
        ]
    },
    // Q55
    {
        domain: "DOM3",
        q: "Qual é o principal problema prático da 'Criptografia Simétrica' quando duas pessoas que nunca se encontraram pessoalmente precisam começar a trocar mensagens secretas pela internet?",
        options: [
            "Ela é lenta demais e leva horas para cifrar uma frase curta.",
            "Ela só funciona com números e não aceita letras.",
            "Ela exige a aprovação prévia de uma Autoridade de Registro.",
            "O problema da distribuição da chave: como enviar a chave secreta única para a outra pessoa através de uma rede insegura sem que um espião no meio do caminho a copie?"
        ],
        answer: 3,
        explanations: [
            "Pelo contrário, a criptografia simétrica é extremamente rápida.",
            "Qualquer dado digital (letras, números, imagens) pode ser cifrado.",
            "Criptografia simétrica pura não utiliza Autoridade de Registro de PKI.",
            "Como a mesma chave tranca e destranca os dados, transmiti-la por um canal aberto cria o risco de interceptação (problema resolvido pela criptografia assimétrica)."
        ]
    },
    // Q56
    {
        domain: "DOM3",
        q: "Na Criptografia Assimétrica, cada usuário possui um par de chaves matematicamente vinculadas (uma Pública e uma Privada). Qual é a regra fundamental sobre o que uma chave faz em relação à outra?",
        options: [
            "O que é cifrado com uma chave do par só pode ser decifrado com a outra chave correspondente do mesmo par (e é computacionalmente inviável descobrir a chave privada a partir da pública).",
            "Qualquer chave pública de qualquer pessoa abre mensagens cifradas para o diretor.",
            "A chave privada deve ser publicada no jornal para que todos possam conferi-la.",
            "Ambas as chaves possuem exatamente a mesma sequência de números."
        ],
        answer: 0,
        explanations: [
            "A assimetria matemática garante que trancar com a Pública exige a Privada para abrir (Confidencialidade), e assinar com a Privada permite validar com a Pública (Autenticidade/Não-repúdio).",
            "Apenas a chave privada exclusiva do diretor abre o que foi cifrado com a chave pública dele.",
            "A chave privada deve ser mantida em segredo absoluto pelo seu titular.",
            "Se fossem iguais, seria criptografia simétrica."
        ]
    },
    // Q57
    {
        domain: "DOM3",
        q: "Um analista calcula o Hash SHA-256 de um contrato em PDF de 50 páginas e obtém uma sequência hexadecimal de 64 caracteres. Se alguém alterar apenas uma vírgula na página 30 desse PDF e calcular o SHA-256 novamente, o que acontecerá?",
        options: [
            "O código Hash continuará exatamente igual, pois uma vírgula é muito pequena.",
            "O novo código Hash será completamente diferente do original, acusando imediatamente que a Integridade do documento foi violada.",
            "O programa mostrará na tela qual palavra foi alterada e fará o backup automático.",
            "O arquivo PDF será criptografado com senha."
        ],
        answer: 1,
        explanations: [
            "Funções hash possuem 'efeito avalanche': a mudança de um único bit altera todo o resumo gerado.",
            "Comparar hashes antes e depois permite detectar qualquer alteração, por mínima que seja, garantindo a verificação de Integridade.",
            "O Hash é unidirecional: ele avisa que houve alteração, mas não recupera o texto antigo sozinho.",
            "Gerar um hash não bloqueia a leitura do PDF original."
        ]
    },
    // Q58
    {
        domain: "DOM3",
        q: "Por que um servidor web público da empresa (que recebe conexões de clientes de toda a internet) deve ficar localizado em uma Zona Desmilitarizada (DMZ) e não diretamente dentro da Rede Local Interna (LAN)?",
        options: [
            "Porque na DMZ a energia elétrica é gratuita.",
            "Porque servidores web não usam endereço IP.",
            "Porque, caso um atacante consiga invadir o servidor web público, ele ficará contido na sub-rede isolada da DMZ sem ter acesso livre aos computadores e bancos de dados internos da LAN.",
            "Para permitir que os visitantes da internet imprimam documentos nas impressoras do RH."
        ],
        answer: 2,
        explanations: [
            "DMZ é uma divisão lógica de rede, sem relação com a conta de energia.",
            "Qualquer servidor web na internet utiliza protocolos IP.",
            "A DMZ funciona como uma zona de amortecimento (buffer zone) controlada por firewall entre a internet hostil e a rede corporativa privada.",
            "Visitantes externos jamais devem acessar impressoras ou recursos da rede interna."
        ]
    },
    // Q59
    {
        domain: "DOM3",
        q: "O administrador do firewall corporativo configurou a regra final da tabela para descartar silenciosamente qualquer pacote que não corresponda às portas 80 e 443 explicitamente liberadas acima. Qual princípio de segurança está aplicado?",
        options: [
            "Default Allow (Permissão Padrão).",
            "Privilege Creep (Acúmulo de Privilégios).",
            "Falso Negativo.",
            "Default Deny (Negação/Bloqueio Padrão — tudo o que não é expressamente permitido é proibido)."
        ],
        answer: 3,
        explanations: [
            "Default Allow libera tudo exceto o proibido, o que é altamente inseguro.",
            "Privilege Creep refere-se a contas de usuários em mudanças de cargo.",
            "Falso negativo é a falha de um sensor em perceber um ataque.",
            "A política Default Deny (Whitelisting) garante que apenas os serviços estritamente necessários e revisados atravessem o firewall."
        ]
    },
    // Q60
    {
        domain: "DOM3",
        q: "Uma empresa quer não apenas ser avisada quando um pacote de ataque conhecido tentar entrar pela rede, mas que o próprio equipamento descarte o pacote malicioso instantaneamente antes que ele chegue ao servidor. Qual tecnologia em linha (in-line) deve ser usada?",
        options: [
            "IPS (Intrusion Prevention System / Sistema de Prevenção de Intrusão).",
            "IDS passivo conectado apenas a uma porta espelhada.",
            "Honeypot isolado.",
            "Protocolo NTP de relógio."
        ],
        answer: 0,
        explanations: [
            "O IPS posiciona-se no caminho direto do tráfego (in-line), inspecionando e bloqueando pacotes maliciosos em tempo real.",
            "O IDS passivo apenas detecta e emite alertas, sem interromper o fluxo original.",
            "O Honeypot atrai invasores para estudo, não filtrando o tráfego de produção.",
            "O NTP apenas sincroniza horários dos sistemas."
        ]
    },
    // Q61
    {
        domain: "DOM3",
        q: "Em uma estratégia de backup que realiza Backup Completo (Full) no domingo e Backups Incrementais de segunda a sexta-feira, qual é a principal VANTAGEM durante a semana e qual é a principal DESVANTAGEM na hora de restaurar tudo no sábado?",
        options: [
            "Vantagem: restaura com 1 fita só; Desvantagem: demora 10 horas para gravar na terça-feira.",
            "Vantagem: o backup diário é muito rápido e ocupa pouco espaço (copia só o que mudou no dia); Desvantagem: a restauração é mais lenta e complexa (exige a mídia Full de domingo + todas as mídias incrementais de segunda a sexta).",
            "Vantagem: não precisa de fita de domingo; Desvantagem: apaga os arquivos originais do servidor.",
            "Não há nenhuma diferença entre backup incremental e backup completo."
        ],
        answer: 1,
        explanations: [
            "Restaurar com 1 fita só ocorre apenas no Backup Completo diário.",
            "O Incremental otimiza a janela de gravação diária (mínimo volume), mas cobra o preço na restauração ao exigir a recomposição de toda a cadeia de mídias.",
            "O backup completo inicial é sempre indispensável como base.",
            "Eles diferem radicalmente no volume copiado e no tempo de restauração."
        ]
    },
    // Q62
    {
        domain: "DOM3",
        q: "Um desenvolvedor precisa testar uma nova tela de relatórios e pede ao administrador do banco de dados uma cópia fiel da tabela de clientes reais (contendo nomes, cartões de crédito e salários) para colocar no servidor de Testes. O administrador nega o pedido. Por que a negativa está correta?",
        options: [
            "Porque servidores de teste não possuem tela.",
            "Porque copiar tabelas gasta a bateria da placa-mãe.",
            "Porque ambientes de teste têm menor rigor de segurança e dados reais de produção nunca devem ser copiados para lá sem antes passar por mascaramento/anonimização.",
            "Porque desenvolvedores são proibidos de testar os programas que criam."
        ],
        answer: 2,
        explanations: [
            "Servidores de teste operam normalmente com interfaces de rede.",
            "Operações de banco de dados não dependem da pilha da placa-mãe.",
            "Proteger dados de teste (ISO 27002) evita que informações pessoais e confidenciais vazem em ambientes de desenvolvimento e homologação.",
            "Testes são obrigatórios, mas devem usar dados fictícios (sintéticos) ou descaracterizados."
        ]
    },
    // Q63
    {
        domain: "DOM3",
        q: "Antes de aplicar uma mudança importante na configuração do roteador central da empresa, a equipe documenta o passo a passo de 'como desfazer a alteração e voltar à configuração antiga caso a rede pare de funcionar'. Como se chama esse plano dentro do Gerenciamento de Mudanças?",
        options: [
            "Acordo de Não Divulgação (NDA).",
            "Análise de Tráfego.",
            "Ataque de Repetição.",
            "Plano de Retorno / Reversão (Rollback Plan)."
        ],
        answer: 3,
        explanations: [
            "NDA é um contrato jurídico de confidencialidade.",
            "Análise de tráfego é monitoramento de rede.",
            "Ataque de repetição é a retransmissão maliciosa de pacotes.",
            "Todo gerenciamento formal de mudanças exige um plano de Rollback testado para restaurar rapidamente a disponibilidade caso a mudança apresente falhas."
        ]
    },
    // Q64
    {
        domain: "DOM3",
        q: "Por que a 'Formatação Rápida' ou a simples exclusão de arquivos na Lixeira do sistema operacional NÃO é aceita como descarte seguro de discos rígidos que serão doados ou vendidos?",
        options: [
            "Porque esses comandos apenas apagam o índice (ponteiros) dos arquivos, deixando todo o conteúdo real gravado nos setores do disco e facilmente recuperável por softwares gratuitos.",
            "Porque a formatação rápida queima o motor do disco rígido.",
            "Porque a lixeira do Windows envia cópias automáticas para a imprensa.",
            "Porque discos formatados pesam o dobro do peso original."
        ],
        answer: 0,
        explanations: [
            "Para impedir a recuperação forense de dados residuais, é obrigatório usar sobrescrita completa (Wipe/Sanitização) ou destruição física antes do descarte.",
            "Formatação é uma operação lógica que não danifica o motor.",
            "A lixeira é apenas uma pasta local do sistema.",
            "Bits gravados não alteram a massa física do disco."
        ]
    },
    // Q65
    {
        domain: "DOM3",
        q: "Qual técnica de proteção de rede mantém um fluxo constante de dados cifrados falsos entre duas matrizes para impedir que um observador externo descubra quando a empresa está enviando grandes lotes de projetos estratégicos?",
        options: [
            "Tailgating.",
            "Preenchimento de Tráfego (Traffic Padding).",
            "Certificado de Boa Índole.",
            "Segregação de Funções."
        ],
        answer: 1,
        explanations: [
            "Tailgating é invasão física pegando carona na porta.",
            "O Preenchimento de Tráfego mascara o volume e o ritmo real das transmissões, neutralizando ataques de análise de tráfego.",
            "Certificado de boa índole é verificação de antecedentes no RH.",
            "Segregação de funções é divisão de tarefas administrativas/operacionais."
        ]
    },
    // Q66
    {
        domain: "DOM3",
        q: "Para proteger contra a perda de dados caso um computador portátil seja esquecido no aeroporto, a TI ativa a criptografia total do SSD e configura o bloqueio automático de tela em 3 minutos. Esses dois controles são classificados como:",
        options: [
            "Controles Físicos de alvenaria.",
            "Transferência financeira de risco.",
            "Controles Lógicos (Técnicos) preventivos.",
            "Danos Indiretos."
        ],
        answer: 2,
        explanations: [
            "São configurações de software no sistema operacional, não barreiras prediais.",
            "Não envolvem contrato de seguro com terceiros.",
            "Criptografia e bloqueio de sessão por software são Controles Lógicos (Técnicos) que previnem o acesso não autorizado à informação.",
            "São medidas de proteção, e não prejuízos."
        ]
    },
    // Q67
    {
        domain: "DOM4",
        q: "Qual é a diferença de responsabilidade entre o 'CISO' (Chief Information Security Officer) e o 'ISO' (Information Security Officer) segundo a estrutura organizacional da literatura da EXIN?",
        options: [
            "O ISO manda no presidente da empresa; o CISO trabalha consertando mouses.",
            "Ambos atendem chamados de nível 1 no Help Desk.",
            "O CISO cuida apenas de papéis impressos; o ISO cuida apenas de ar-condicionado.",
            "O CISO atua no nível estratégico corporativo (convertendo a estratégia de negócios em estratégia geral de segurança); o ISO atua no nível tático/operacional de uma unidade de negócios específica (desenvolvendo e aplicando a política naquela unidade)."
        ],
        answer: 3,
        explanations: [
            "A hierarquia está invertida e distorcida.",
            "O atendimento inicial cabe aos analistas de suporte do Help Desk.",
            "Ambos tratam da segurança da informação em todos os seus aspectos.",
            "O CISO define o direcionamento global de segurança junto à alta direção, enquanto os ISOs desdobram e supervisionam essa política nas divisões de negócio."
        ]
    },
    // Q68
    {
        domain: "DOM4",
        q: "Por que uma Política de Segurança da Informação precisa ser formalmente assinada e aprovada pela Gestão Geral (Alta Direção) da empresa?",
        options: [
            "Para demonstrar o comprometimento da liderança e conferir autoridade obrigatória ao documento perante todos os departamentos e funcionários.",
            "Porque apenas os diretores sabem usar editores de texto.",
            "Para que o documento nunca mais precise ser lido por ninguém.",
            "Porque o órgão certificador exige que a política seja mantida em segredo absoluto dos funcionários."
        ],
        answer: 0,
        explanations: [
            "A política é o instrumento pelo qual a alta direção dá orientação e suporte à segurança; sem o aval do topo, ela não teria força normativa sobre as áreas de negócio.",
            "Quem redige e mantém o texto geralmente é o Policy Officer/CISO, cabendo à direção aprovar.",
            "A política deve ser amplamente comunicada e lida por todos.",
            "Pelo contrário, a ISO 27001 exige que a política seja publicada e comunicada a todos os colaboradores e partes relevantes."
        ]
    },
    // Q69
    {
        domain: "DOM4",
        q: "Qual documento do SGSI detalha de forma concreta 'quais controles específicos serão implementados, quem será o responsável por cada ação, o cronograma e os recursos necessários' para colocar a Política de Segurança em prática?",
        options: [
            "O Certificado de Boa Índole.",
            "O Plano de Segurança da Informação (ou Plano de Tratamento de Riscos).",
            "O Aviso de Tela Limpa.",
            "A Lista de Revogação de Certificados."
        ],
        answer: 1,
        explanations: [
            "Certificado de boa índole atesta antecedentes criminais.",
            "Enquanto a Política dá a direção geral, o Plano de Segurança concretiza a política fornecendo os detalhes práticos de execução.",
            "Tela limpa é apenas uma regra operacional específica.",
            "CRL é uma lista técnica da infraestrutura de chaves públicas."
        ]
    },
    // Q70
    {
        domain: "DOM4",
        q: "Qual norma internacional especifica os requisitos obrigatórios ('deve') para estabelecer, implementar, manter e melhorar continuamente um SGSI, servindo de base para auditorias de certificação?",
        options: [
            "ISO/IEC 27000.",
            "ISO/IEC 27002.",
            "ISO/IEC 27001.",
            "ISO/IEC 27005."
        ],
        answer: 2,
        explanations: [
            "A 27000 traz apenas o vocabulário e visão geral.",
            "A 27002 é um código de prática com diretrizes para implementação de controles (não certificável).",
            "A ISO/IEC 27001 é a norma central de requisitos do SGSI e a única que permite certificação formal da organização.",
            "A 27005 é um guia focado exclusivamente na gestão de riscos."
        ]
    },
    // Q71
    {
        domain: "DOM4",
        q: "Um gerente de TI precisa implementar um controle de 'Descarte Seguro de Mídias' que consta na Declaração de Aplicabilidade da empresa, mas tem dúvida sobre quais são as melhores práticas e recomendações detalhadas para fazer isso. Qual norma ele deve consultar?",
        options: [
            "Apenas o dicionário ISO/IEC 27000.",
            "A lei de direitos autorais de música.",
            "O manual do sistema de ar-condicionado.",
            "A norma ISO/IEC 27002 (que tem como foco fornecer diretrizes detalhadas para a implementação dos controles de segurança da informação)."
        ],
        answer: 3,
        explanations: [
            "O vocabulário define termos curtos, mas não ensina a implementar controles.",
            "Direitos autorais não ensinam procedimentos técnicos de sanitização de discos.",
            "Manuais de climatização não tratam de descarte de dados.",
            "A ISO/IEC 27001 diz 'o que' é exigido no SGSI, enquanto a ISO/IEC 27002 explica 'como' implementar cada controle na prática."
        ]
    },
    // Q72
    {
        domain: "DOM4",
        q: "Associe corretamente as 4 fases do ciclo PDCA às suas respectivas atividades no SGSI: (1) Auditar os controles e medir indicadores; (2) Definir escopo, avaliar riscos e criar a SoA; (3) Corrigir não conformidades encontradas na auditoria; (4) Instalar controles e treinar a equipe.",
        options: [
            "1: Check; 2: Plan; 3: Act; 4: Do.",
            "1: Plan; 2: Do; 3: Check; 4: Act.",
            "1: Act; 2: Check; 3: Do; 4: Plan.",
            "1: Do; 2: Act; 3: Plan; 4: Check."
        ],
        answer: 0,
        explanations: [
            "Auditar/monitorar = Check (1); Planejar escopo/riscos/SoA = Plan (2); Agir corretivamente = Act (3); Executar controles/treinos = Do (4).",
            "Auditar não é Plan, e definir escopo não é Do.",
            "Todas as associações estão trocadas.",
            "Instalar controles é Do (4), não Check."
        ]
    },
    // Q73
    {
        domain: "DOM4",
        q: "Para que serve a 'Declaração de Aplicabilidade' (SoA - Statement of Applicability) exigida pela ISO/IEC 27001?",
        options: [
            "Para listar o salário de todos os diretores da empresa.",
            "Para documentar quais controles de segurança (do Anexo A) foram selecionados como necessários para tratar os riscos, se já estão implementados, e justificar formalmente qualquer controle excluído.",
            "Para substituir o contrato de seguro contra incêndio.",
            "Para registrar os chamados diários de troca de mouse no Help Desk."
        ],
        answer: 1,
        explanations: [
            "Remuneração de RH não faz parte da SoA.",
            "A SoA é o documento de ligação entre a Avaliação de Riscos e os controles implantados, sendo peça central nas auditorias de certificação.",
            "Apólices de seguro são contratos comerciais externos.",
            "Chamados operacionais ficam registrados na ferramenta de tickets do Service Desk."
        ]
    },
    // Q74
    {
        domain: "DOM4",
        q: "Por que os treinamentos de conscientização em segurança da informação (Security Awareness) devem ser repetidos periodicamente (e sempre que novos funcionários entram) em vez de serem aplicados apenas uma única vez?",
        options: [
            "Porque os funcionários perdem a memória a cada 48 horas.",
            "Para ocupar o tempo livre do setor de Recursos Humanos.",
            "Porque surgem novas modalidades de golpes/ameaças, as políticas evoluem, novos colaboradores são contratados e o comportamento seguro precisa de reforço contínuo para manter a cultura de segurança viva.",
            "Porque a ISO 27001 exige uma prova escrita diária para todos os clientes."
        ],
        answer: 2,
        explanations: [
            "A questão não é amnésia clínica, mas atualização e manutenção de hábitos.",
            "Conscientização é um investimento estratégico de redução de riscos humanos.",
            "Sem reforço periódico e adaptação às novas ameaças da organização, as pessoas relaxam a atenção e voltam a cair em engenharia social.",
            "Clientes externos não fazem provas diárias da ISO."
        ]
    },
    // Q75
    {
        domain: "DOM4",
        q: "Qual é a diferença de natureza jurídica entre o 'GDPR' (ou LGPD no Brasil) e a norma 'ISO/IEC 27001'?",
        options: [
            "A ISO 27001 é uma lei penal votada pelo Parlamento; o GDPR é um manual opcional vendido em livrarias.",
            "Ambos são leis obrigatórias que prendem quem não tiver gerador a diesel.",
            "Nenhum dos dois se aplica a empresas privadas.",
            "O GDPR/LGPD é uma legislação obrigatória imposta pelo Estado a todas as organizações que tratam dados pessoais (sob pena de multas legais); a ISO/IEC 27001 é uma norma técnica internacional de adoção voluntária."
        ],
        answer: 3,
        explanations: [
            "As naturezas foram invertidas.",
            "A ISO 27001 não é lei estatal punitiva.",
            "Ambos são amplamente aplicados a empresas privadas e públicas.",
            "Leis de proteção de dados têm poder coercitivo estatal sobre qualquer organização; normas ISO são padrões voluntários (que só se tornam obrigatórios se exigidos em contrato comercial ou regulamento específico)."
        ]
    },
    // Q76
    {
        domain: "DOM4",
        q: "De acordo com os princípios do Regulamento Geral sobre a Proteção de Dados (GDPR / LGPD), por quanto tempo uma empresa pode guardar os dados pessoais coletados de um cidadão?",
        options: [
            "Apenas pelo tempo estritamente necessário para cumprir a finalidade legítima informada na coleta (ou para cumprir obrigação legal/regulatória), devendo eliminá-los ou anonimizá-los depois.",
            "Eternamente, podendo vendê-los livremente após 10 anos.",
            "Por no máximo 24 horas em qualquer situação, mesmo que seja contrato trabalhista.",
            "A lei proíbe apagar qualquer dado pessoal uma vez digitado."
        ],
        answer: 0,
        explanations: [
            "O princípio da Limitação de Armazenamento / Retenção proíbe guardar dados pessoais indefinidamente sem que haja finalidade ativa ou obrigação legal fiscal/trabalhista.",
            "Guardar dados para sempre ou vendê-los sem base legal viola frontalmente o GDPR/LGPD.",
            "Obrigações legais e contratuais permitem a guarda pelo prazo previsto em lei.",
            "Pelo contrário, a lei garante o direito de eliminação quando encerrada a finalidade."
        ]
    },
    // Q77
    {
        domain: "DOM4",
        q: "Uma empresa instala um software nos computadores que grava a tela e analisa os sites visitados pelos funcionários para evitar vazamento de dados, mas faz isso escondido, sem colocar nada no Código de Conduta e sem nunca avisar os trabalhadores. Qual é o problema dessa atitude?",
        options: [
            "O software deixará o mouse pesado.",
            "Viola a legislação de privacidade e as diretrizes da literatura da EXIN, que exigem que os funcionários sejam previamente informados (por política/código de conduta claro) de que o monitoramento pode ocorrer.",
            "Nenhum problema, pois a transparência com o funcionário é proibida pela ISO.",
            "O único problema é gastar espaço no servidor de backup."
        ],
        answer: 1,
        explanations: [
            "Monitoramento lógico não altera o peso físico do mouse.",
            "O monitoramento corporativo é permitido para proteger os ativos, mas exige ciência prévia e regras transparentes no código de conduta respeitando a legislação local.",
            "A ISO exige comunicação clara das políticas aos colaboradores.",
            "A questão central é de conformidade legal e ética trabalhista, não de espaço em disco."
        ]
    },
    // Q78
    {
        domain: "DOM4",
        q: "Ao contratar uma empresa especializada para limpar o prédio à noite, quais controles a organização contratante deve aplicar em relação aos funcionários terceirizados da limpeza?",
        options: [
            "Dar a eles a senha de administrador do banco de dados para limparem a tela.",
            "Proibir a limpeza do escritório durante todo o ano.",
            "Formalizar requisitos de confidencialidade no contrato com a prestadora, exigir identificação/crachá, restringir o acesso deles às Áreas Seguras (data center) e aplicar a Política de Mesa Limpa nos escritórios.",
            "Nomear o encarregado da limpeza como novo CISO da organização."
        ],
        answer: 2,
        explanations: [
            "Equipe de limpeza física não deve ter acesso lógico a sistemas.",
            "A manutenção predial é necessária, bastando aplicar controles adequados.",
            "Combinar cláusulas contratuais, restrição de acesso físico às salas seguras e Mesa Limpa (papéis trancados nas gavetas) mitiga o risco de exposição durante a limpeza.",
            "O CISO é um cargo executivo de segurança da informação."
        ]
    },
    // Q79
    {
        domain: "DOM4",
        q: "Qual instituto norte-americano vinculado ao Departamento de Comércio dos EUA é mundialmente famoso por publicar padrões detalhados de cibersegurança (como a série SP 800 e o Cybersecurity Framework), sendo a referência primária nos Estados Unidos enquanto a ISO predomina na Europa?",
        options: [
            "GDPR.",
            "EXIN.",
            "ANPD.",
            "NIST (National Institute of Standards and Technology / Instituto Nacional de Padrões e Tecnologia)."
        ],
        answer: 3,
        explanations: [
            "GDPR é a lei europeia de proteção de dados.",
            "EXIN é o instituto internacional de exames e certificação profissional.",
            "ANPD é a Autoridade Nacional de Proteção de Dados do Brasil.",
            "O NIST é o órgão governamental dos EUA responsável pelos padrões tecnológicos e de segurança norte-americanos."
        ]
    },
    // Q80
    {
        domain: "DOM4",
        q: "Durante uma auditoria de conformidade, verifica-se que um funcionário baixou cópias de livros técnicos protegidos por direitos autorais na internet e os colocou na pasta pública da rede interna para todos os colegas lerem sem comprar. Qual requisito de conformidade da ISO/IEC 27002 foi violado?",
        options: [
            "Direitos de Propriedade Intelectual (PI / Copyright).",
            "Sincronização de relógios NTP.",
            "Manutenção de geradores a diesel.",
            "Proteção contra incêndio por gás inerte."
        ],
        answer: 0,
        explanations: [
            "Distribuir obras, livros ou softwares protegidos sem licença viola as leis de Propriedade Intelectual e expõe a organização a processos judiciais.",
            "NTP trata do horário dos logs.",
            "Geradores tratam de disponibilidade elétrica.",
            "Gases inertes tratam de segurança física no data center."
        ]
    },
    // Q81
    {
        domain: "DOM4",
        q: "Por que a 'Preservação de Evidências' (Coleta de Evidências Forenses) após um incidente grave exige procedimentos cuidadosos que mantenham a 'Cadeia de Custódia' e a integridade dos logs?",
        options: [
            "Para que os logs possam ser alterados manualmente pelo gerente antes de mostrar ao juiz.",
            "Para garantir que as provas digitais sejam admissíveis e tenham validade legal em uma eventual ação judicial ou processo disciplinar, provando que não foram adulteradas.",
            "Porque logs sem cadeia de custódia pegam fogo espontaneamente.",
            "Para vender os logs para emissoras de televisão."
        ],
        answer: 1,
        explanations: [
            "Alterar logs destrói a integridade da prova e constitui fraude processual.",
            "Se um incidente resultar em processo civil, criminal ou demissão por justa causa, a empresa precisa provar (via hashes e cadeia de custódia) que os registros coletados são autênticos e íntegros.",
            "Arquivos digitais não sofrem combustão.",
            "Evidências de incidentes são estritamente confidenciais."
        ]
    },
    // Q82
    {
        domain: "DOM4",
        q: "O que significa demonstrar 'Due Care' (Devido Cuidado) e 'Due Diligence' (Devida Diligência) perante clientes e acionistas após a empresa sofrer uma tentativa de ataque cibernético?",
        options: [
            "Significa esconder o ataque de todo mundo e apagar os servidores.",
            "Significa culpar exclusivamente o provedor de internet.",
            "Significa comprovar que a direção pesquisou e avaliou os riscos previamente (Due Diligence) e adotou todas as medidas e controles razoáveis de proteção (Due Care), agindo com responsabilidade.",
            "Significa cancelar todos os contratos de clientes no dia seguinte."
        ],
        answer: 2,
        explanations: [
            "Ocultar incidentes graves agrava a responsabilidade legal da diretoria.",
            "A empresa não pode terceirizar sua responsabilidade de governança.",
            "Quando uma organização mantém um SGSI ativo baseado na ISO 27001, ela comprova que não foi negligente: investigou os riscos (Diligence) e aplicou os controles adequados (Care).",
            "Cancelar contratos encerraria a própria empresa."
        ]
    },
    // Q83
    {
        domain: "DOM4",
        q: "Quando uma organização realiza uma mudança importante — como abrir uma nova filial em outro país, lançar um aplicativo de vendas online ou mudar para trabalho remoto — o que ela deve fazer imediatamente em relação ao seu SGSI?",
        options: [
            "Ignorar a mudança e esperar 5 anos até a próxima renovação do certificado.",
            "Rasgar a Política de Segurança atual e ficar sem regras por 6 meses.",
            "Desligar o Help Desk durante a inauguração.",
            "Revisar a Avaliação de Riscos para identificar as novas ameaças e vulnerabilidades trazidas pela mudança e ajustar os controles necessários (atualizando a SoA se aplicável)."
        ],
        answer: 3,
        explanations: [
            "Esperar anos após uma mudança estrutural deixa a nova operação desprotegida.",
            "A política corporativa continua válida e ampara a revisão dos controles.",
            "Mudanças aumentam a demanda de suporte, exigindo o Help Desk ativo.",
            "Qualquer mudança significativa no contexto de negócios ou na infraestrutura de TI dispara obrigatoriamente uma nova análise de riscos dentro do ciclo PDCA."
        ]
    },
    // Q84
    {
        domain: "DOM4",
        q: "Qual é o benefício estratégico final de manter um Sistema de Gestão de Segurança da Informação (SGSI) operando em melhoria contínua segundo a ISO/IEC 27001?",
        options: [
            "Assegurar de forma sistemática a confidencialidade, integridade e disponibilidade das informações, mantendo os riscos sob controle aceitável e gerando confiança para clientes, parceiros e partes interessadas.",
            "Garantir que nenhum computador da empresa jamais apresente defeito de hardware pelo resto da história.",
            "Impedir que chova ou caia granizo na cidade onde fica a sede da empresa.",
            "Substituir o departamento comercial e dobrar o preço dos produtos automaticamente."
        ],
        answer: 0,
        explanations: [
            "O SGSI alinha pessoas, processos e tecnologia para proteger continuamente a confiabilidade da informação e dar suporte seguro aos objetivos de negócio.",
            "Equipamentos físicos sempre terão desgaste (MTBF), mas o SGSI mitiga o impacto com redundância e continuidade.",
            "O SGSI não controla o clima, mas protege a organização contra as consequências de eventos climáticos.",
            "O SGSI protege e apoia o negócio, mas não substitui a atividade comercial fim da empresa."
        ]
    }
);