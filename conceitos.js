const conceitosDidaticos = [
    {
        id: 1,
        domain: "DOM1",
        tema: "1. Dados vs. Informação e Gestão",
        analogiaTitulo: "Os Ingredientes na Bancada vs. O Prato Servido",
        analogia: "Farinha, ovos e números soltos em uma planilha são apenas Dados (matéria-prima crua). Quando o cozinheiro junta tudo em uma receita e entrega uma fatura ou prato pronto para o cliente, vira Informação — porque agora tem significado útil para quem recebeu.",
        macete: "DADO = Descontextualizado (fatos/números brutos no banco). INFORMAÇÃO = Interpretada (com significado para o destinatário, como a fatura do cliente). Gerenciamento = Aproveitar o VALOR; Análise = Entender o FLUXO.",
        resumo: "Na literatura da EXIN, dados e informação representam estágios diferentes de maturidade: a informação nasce quando atribuímos contexto e significado aos dados para um destinatário específico.",
        itens: [
            {
                titulo: "Dados (Matéria-prima Bruta)",
                desc: "São fatos, números, caracteres ou símbolos isolados (estruturados ou não estruturados). Dentro de um banco de dados com milhões de registros telefônicos, esses registros brutos são apenas dados, mas já possuem valor e exigem proteção técnica."
            },
            {
                titulo: "Informação (Dados com Significado)",
                desc: "Quando os dados são processados, contextualizados e entregues a alguém que os compreende, tornam-se informação. O valor da informação é determinado pelo destinatário — por isso, uma fatura enviada a um cliente contém exclusivamente informação para ele."
            },
            {
                titulo: "Gerenciamento da Informação",
                desc: "Disciplina ampla que descreve como a organização planeja, coleta, organiza, utiliza, controla, dissemina e descarta sua informação. Seu foco primordial é garantir que o valor da informação seja identificado e aproveitado ao máximo pelos negócios."
            },
            {
                titulo: "Análise da Informação",
                desc: "Diferente do gerenciamento global, a análise da informação tem foco diagnóstico: serve para fornecer uma visão clara de como a organização lida com a informação e mapear exatamente como ela flui através dos departamentos."
            }
        ],
        dicaProva: "Duas pegadinhas clássicas: 1) Nunca marque que 'dados não têm valor' ou 'não exigem segurança' — tanto dados quanto informações têm valor e exigem proteção. 2) O valor de um dado nunca vem do seu 'conteúdo bruto isolado', mas sim do seu contexto comercial e custo de reconstrução."
    },
    {
        id: 2,
        domain: "DOM1",
        tema: "2. Confiabilidade (Tríade CIA) e Hexagrama Parkeriano",
        analogiaTitulo: "O Cheque Bancário Dentro do Envelope",
        analogia: "Pense em um cheque dentro de um envelope: Confidencialidade é ninguém abrir o envelope no caminho. Integridade é ninguém adulterar o valor de R$ 100 para R$ 1.000 (Exatidão) e não faltar nenhuma folha anexa (Completude). Disponibilidade é o caixa do banco estar funcionando quando você for descontar. Se roubarem o envelope lacrado sem conseguir abrir, você perdeu a Posse. Se o cheque estiver em uma moeda extinta que ninguém aceita, perdeu a Utilidade.",
        macete: "CONFIABILIDADE = C + I + D (Confidencialidade, Integridade, Disponibilidade). Viu Exatidão ou Completude? Fazem parte da INTEGRIDADE! Fita criptografada roubada = Perdeu POSSE. Perdeu a chave ou mudou codificação (EBCDIC/ASCII) = Perdeu UTILIDADE.",
        resumo: "A EXIN usa o termo 'Confiabilidade da Informação' (Reliability) para englobar a Tríade CIA, enquanto a literatura técnica expande esses pilares com o Hexagrama Parkeriano (Donn Parker) e atributos de prova de autoria.",
        itens: [
            {
                titulo: "Confidencialidade (Exclusividade de Acesso)",
                desc: "Garante que a informação seja acessível apenas a pessoas ou processos autorizados. Se funcionários mandam imprimir relatórios e demoram a buscá-los na impressora da recepção, a confidencialidade é comprometida (a disponibilidade e a integridade no papel continuam intactas)."
            },
            {
                titulo: "Integridade (Exatidão + Completude)",
                desc: "Protege a informação contra alterações não autorizadas ou acidentais. Divide-se em Exatidão (os dados refletem a realidade sem erros) e Completude (nenhuma parte do registro foi omitida ou apagada)."
            },
            {
                titulo: "Disponibilidade (Acesso Quando Necessário)",
                desc: "Garante que usuários autorizados consigam acessar a informação e os sistemas sempre que precisarem. Depende de redundância, backups, energia (UPS/Gerador) e proteção contra ataques de negação de serviço (DDoS)."
            },
            {
                titulo: "Posse ou Controle (Hexagrama Parkeriano)",
                desc: "Trata da custódia física ou lógica do meio onde o dado está gravado. Se um ladrão furta um cofre com fitas criptografadas, ele não consegue ler nada (confidencialidade mantida), mas a empresa perdeu imediatamente a Posse sobre aquele ativo."
            },
            {
                titulo: "Utilidade (Hexagrama Parkeriano)",
                desc: "Garante que a informação esteja em formato compreensível e utilizável na prática. Se os dados estão seguros e íntegros no servidor, mas foram exportados em EBCDIC para um sistema que só lê ASCII (ou se a chave de descriptografia foi perdida), houve perda de Utilidade."
            },
            {
                titulo: "Autenticidade e Não-repúdio (Irretratabilidade)",
                desc: "Autenticidade assegura que um usuário, sistema ou documento é genuinamente quem afirma ser. Não-repúdio garante provas (via assinatura digital e logs sincronizados) de que o autor não pode negar ter enviado uma mensagem ou realizado uma transação."
            }
        ],
        dicaProva: "Se a questão perguntar 'Além de integridade e confidencialidade, qual é o terceiro aspecto da confiabilidade?', responda Disponibilidade. Exatidão e Completude são distratores porque já estão contidos dentro da Integridade!"
    },
    {
        id: 3,
        domain: "DOM4",
        tema: "3. Responsabilização vs. Auditabilidade",
        analogiaTitulo: "O Motorista do Caminhão vs. A Caixa-Preta (Tacógrafo)",
        analogia: "Responsabilização é o motorista assinar que responde pela entrega da carga no prazo. Auditabilidade é o caminhão ter tacógrafo e câmera funcionando, prontos para que um fiscal independente possa checar toda a viagem quando quiser.",
        macete: "RESPONSABILIZAÇÃO = Ser responsável pelos RESULTADOS das atividades. AUDITABILIDADE = PRONTIDÃO para ser submetido a uma avaliação independente (não confunda com 'ser aprovado na auditoria'!).",
        resumo: "Para que a governança de segurança funcione, cada atividade precisa ter um responsável claro pelos resultados e deixar rastros verificáveis por terceiros.",
        itens: [
            {
                titulo: "Responsabilização (Accountability)",
                desc: "Significa responder formalmente pelos resultados das atividades de uma organização, departamento ou ação individual. Exige que cada ativo e processo tenha um proprietário claramente definido (evitando contas compartilhadas)."
            },
            {
                titulo: "Auditabilidade (Auditability)",
                desc: "Refere-se ao grau de preparação e prontidão de uma organização para ser submetida a uma auditoria independente. Significa manter políticas documentadas, logs íntegros e registros de execução organizados para comprovar conformidade."
            }
        ],
        dicaProva: "Na prova oficial, descarte alternativas que associem esses termos à lei financeira Sarbanes-Oxley (SOX), contabilidade bancária ou ao fato de 'já ter sido aprovado em uma auditoria'."
    },
    {
        id: 4,
        domain: "DOM4",
        tema: "4. Hierarquia Documental e Papéis (CISO, ISO, LISO, Owner)",
        analogiaTitulo: "Do Arquiteto Chefe ao Manual da Obra",
        analogia: "A Diretoria diz o objetivo do negócio. O CISO traduz isso em estratégia de segurança. A Política é a carta de intenção da chefia ('apoiamos a segurança'). O Plano de Segurança é o cronograma detalhando quais portas e alarmes serão comprados. O Procedimento é o passo a passo obrigatório do vigia, e a Diretriz é apenas um cartaz de boas dicas na parede.",
        macete: "CISO = Converte estratégia de NEGÓCIO em SEGURANÇA. POLÍTICA = Dá orientação e suporte. PLANO = Concretiza a política com detalhes. PROCEDIMENTO = Passo a passo obrigatório (melhor forma de garantir acesso apropriado). DIRETRIZ = Recomendação opcional (não obrigatória).",
        resumo: "A governança de segurança divide as responsabilidades entre cargos estratégicos/operacionais e organiza as regras desde o nível executivo até as tarefas técnicas.",
        itens: [
            {
                titulo: "Política de Segurança vs. Plano de Segurança",
                desc: "A Política é um documento curto de alto nível aprovado pela direção para dar orientação e suporte à segurança. O Plano de Segurança concretiza a política na prática, detalhando quais controles foram escolhidos, orçamentos e quem é responsável pelo quê."
            },
            {
                titulo: "Procedimentos Operacionais vs. Diretrizes",
                desc: "Procedimentos descrevem o passo a passo obrigatório de como executar processos de forma segura (sendo a forma mais eficaz de assegurar acesso apropriado à informação). Diretrizes (Guidelines) são recomendações consultivas e orientativas, sem caráter obrigatório."
            },
            {
                titulo: "Gestão Geral, CISO, ISO, LISO e Policy Officer",
                desc: "A Gestão Geral define a estratégia de negócios. O CISO (nível executivo mais alto de segurança) converte a estratégia de negócios em estratégia geral de segurança. O ISO aplica a política em uma unidade de negócios; o LISO cuida das leis locais e segurança física das filiais; o Policy Officer mantém o texto da política."
            },
            {
                titulo: "Proprietário do Ativo (Owner) vs. Custodiante",
                desc: "O Proprietário do Ativo (geralmente um gestor de negócios) responde pelo valor do ativo e é o único com autoridade para definir ou alterar sua classificação de sigilo. O Custodiante (equipe de TI) administra tecnicamente o ativo (fazendo backups e aplicando permissões) conforme ordens do proprietário."
            }
        ],
        dicaProva: "Cuidado com a alternativa 'Desenvolver instruções de trabalho para todas as tarefas': a EXIN considera isso excessivamente detalhado e prescritivo, apontando 'Definir procedimentos operacionais' como a resposta correta."
    },
    {
        id: 5,
        domain: "DOM4",
        tema: "5. Família ISO/IEC 27000, SGSI e Ciclo PDCA",
        analogiaTitulo: "Dicionário (27000), Edital do Fiscal (27001) e Livro de Receitas (27002)",
        analogia: "Para ganhar o selo de qualidade no seu restaurante: a ISO 27000 é o dicionário de termos culinários; a ISO 27001 é a lista de exigências obrigatórias que o fiscal usa para te dar o certificado; a ISO 27002 é o manual prático explicando como limpar a cozinha; e a ISO 27005 ensina a calcular o risco de intoxicação.",
        macete: "Final 0 = Vocabulário. Final 1 = Requisitos obrigatórios do SGSI (Certificável). Final 2 = Implementação de Controles (Guia prático). Final 5 = Gestão de Riscos. PDCA: Plan (Escopo/Risco/SoA) ➔ Do (Implantar/Treinar) ➔ Check (Auditar para achar fragilidades) ➔ Act (Corrigir).",
        resumo: "As normas da ISO (Organização Internacional de Padronização) são as mais usadas na Europa e no Brasil para estruturar e auditar um Sistema de Gestão de Segurança da Informação (SGSI).",
        itens: [
            {
                titulo: "ISO/IEC 27001 vs. ISO/IEC 27002",
                desc: "A ISO 27001 define os requisitos obrigatórios (Cláusulas 4 a 10) de um SGSI e é a única norma da série contra a qual uma empresa pode ser auditada e certificada. A ISO 27002 é um código de prática que fornece diretrizes detalhadas para a implementação dos controles listados no Anexo A."
            },
            {
                titulo: "ISO/IEC 27000 e ISO/IEC 27005",
                desc: "A ISO 27000 apresenta a visão geral e o vocabulário (definições dos termos) de toda a família. Já a ISO 27005 é uma norma de apoio focada especificamente nas metodologias de gestão de riscos de segurança da informação."
            },
            {
                titulo: "Cláusulas 4 a 10 vs. Anexo A (SoA)",
                desc: "Uma empresa que busca certificação ISO 27001 não pode excluir nenhum requisito das cláusulas 4 a 10. Já os controles do Anexo A podem ser incluídos ou excluídos conforme a análise de riscos, desde que cada decisão seja formalmente justificada na Declaração de Aplicabilidade (SoA)."
            },
            {
                titulo: "O Ciclo PDCA de Melhoria Contínua",
                desc: "Plan: definir escopo, política, avaliar riscos e emitir a SoA. Do: implementar o plano de tratamento de riscos, instalar controles e treinar pessoal. Check: monitorar KPIs, realizar análise crítica pela direção e auditar regularmente o SGSI (para detectar fragilidades nos controles). Act: aplicar ações corretivas."
            }
        ],
        dicaProva: "Por que é importante auditar regularmente o SGSI? Resposta oficial: 'Porque as auditorias detectam fragilidades na implementação de controles de segurança da informação' (não marque que é por exigência de contratos de clientes ou leis gerais)."
    },
    {
        id: 6,
        domain: "DOM2",
        tema: "6. Equação do Risco, Ameaças, Vulnerabilidades e Danos",
        analogiaTitulo: "O Mosquito, a Janela sem Tela e o Balde d'Água",
        analogia: "O mosquito da dengue lá fora é a Ameaça. A janela aberta sem tela é a Vulnerabilidade (falta de proteção). A chance de você ser picado e ficar internado é o Risco (Probabilidade + Consequência). E se pegar fogo na cortina e os bombeiros jogarem água: o fogo queimou a cortina (Dano Direto) e a água dos bombeiros manchou o tapete (Dano Indireto).",
        macete: "RISCO = PROBABILIDADE × CONSEQUÊNCIA (Impacto). Falta de patch = VULNERABILIDADE. Pen drive com vírus = Ameaça HUMANA (alguém colocou lá!). Água dos extintores/bombeiros no incêndio = DANO INDIRETO.",
        resumo: "Antes de escolher qualquer controle, a organização precisa entender como ameaças e vulnerabilidades interagem para gerar riscos e danos ao negócio.",
        itens: [
            {
                titulo: "O que Determina o Risco?",
                desc: "Dois fatores de alto nível determinam o risco: a probabilidade de um evento acontecer (derivada do cruzamento entre ameaça e vulnerabilidade) e as suas consequências (impacto) para a organização."
            },
            {
                titulo: "Ameaças Humanas vs. Não Humanas",
                desc: "Ameaça é a causa potencial de um incidente indesejado. Ameaças humanas exigem ação intencional ou acidental de uma pessoa (ex: um pen drive que transmite vírus para a rede, pois sempre é inserido por alguém). Ameaças não humanas vêm do ambiente ou falhas físicas (raios, enchentes, vazamentos de água, excesso de pó)."
            },
            {
                titulo: "Vulnerabilidade (Falta de Proteção)",
                desc: "É uma fraqueza interna em um ativo, sistema ou processo que pode ser explorada por uma ameaça. Um servidor de banco de dados que não possui os patches de segurança mais recentes é o exemplo clássico de vulnerabilidade."
            },
            {
                titulo: "Danos Diretos vs. Danos Indiretos",
                desc: "Danos diretos são provocados imediatamente pelo agente do incidente (ex: computadores queimados, documentos queimados e fitas derretidas pelo calor do incêndio). Danos indiretos são efeitos colaterais ou secundários, como os estragos causados pela água usada pelos bombeiros/extintores para apagar o fogo."
            }
        ],
        dicaProva: "Na questão sobre 'o que deve ser conhecido para determinar o risco', a alternativa 'as ameaças que a organização enfrenta e o quão vulnerável ela é' está ERRADA porque descreve apenas a probabilidade, esquecendo as consequências (impacto) no negócio!"
    },
    {
        id: 7,
        domain: "DOM2",
        tema: "7. Análise de Riscos (Objetivos, Qualitativa e Quantitativa)",
        analogiaTitulo: "O Orçamento do Mecânico Antes de Consertar o Carro",
        analogia: "Quando o mecânico avalia seu carro, ele olha quanto o carro vale, quais peças estão gastas e se o conserto compensa o preço. Essa avaliação é a Análise de Risco. Pegar a chave de fenda e trocar o motor já não faz parte da análise — é a execução do conserto!",
        macete: "Análise de Risco NÃO IMPLEMENTA controles (implementar vem depois!). QUALITATIVA = Qualidade/Escalas subjetivas (Baixo, Médio, Alto). QUANTITATIVA = Quantia financeira (ALE = SLE × ARO).",
        resumo: "A análise de riscos identifica o que precisa ser protegido e se o custo das medidas de segurança é justificável perante o tamanho do prejuízo potencial.",
        itens: [
            {
                titulo: "Os 3 Objetivos Principais da Análise de Risco",
                desc: "1) Identificar os ativos da organização e determinar o seu valor; 2) Determinar as vulnerabilidades e ameaças importantes que os afetam; 3) Balancear os custos estimados de um incidente contra os custos de implementar um controle."
            },
            {
                titulo: "Fronteira entre Análise e Tratamento",
                desc: "A análise de risco é um processo puramente diagnóstico e de apoio à decisão. 'Implementar medidas e controles' NÃO é objetivo da análise de risco — a implementação prática ocorre apenas na fase seguinte (Tratamento de Riscos)."
            },
            {
                titulo: "Análise Qualitativa de Riscos",
                desc: "Utiliza matrizes e escalas descritivas (como Baixo, Médio, Alto e Crítico) baseadas em cenários, reputação e julgamento de especialistas. É mais rápida e fácil de aplicar quando é difícil atribuir um valor financeiro exato ao impacto."
            },
            {
                titulo: "Análise Quantitativa (AV, EF, SLE, ARO, ALE)",
                desc: "Trabalha com métricas monetárias e estatísticas: multiplica-se o Valor do Ativo (AV) pelo Fator de Exposição (EF, percentual destruído) para achar a Expectativa Única de Perda (SLE). Multiplicando a SLE pela frequência anual (ARO), obtém-se a Expectativa Anual de Perda (ALE)."
            }
        ],
        dicaProva: "Grave a relação: SLE = AV × EF e ALE = SLE × ARO. E na pergunta 'O que NÃO é um objetivo principal de uma análise de risco?', marque imediatamente 'Implementar medidas e controles'."
    },
    {
        id: 8,
        domain: "DOM2",
        tema: "8. Estratégias de Tratamento de Riscos",
        analogiaTitulo: "As 4 Atitudes Diante de um Mar Agitado",
        analogia: "Você olha o mar cheio de tubarões: Evitar é decidir não entrar na água. Reduzir (Mitigar) é entrar dentro de uma gaiola de aço. Transferir é contratar um seguro de vida milionário. Aceitar (Suportar) é pular na água sem proteção sabendo do perigo.",
        macete: "Viu HOSPITAL na questão? Marque EVITAR O RISCO (em hospital não se aceita dano a pacientes!). Viu SEGURO ou TERCEIRIZAR sob contrato? Marque TRANSFERIR. Viu instalar controle/alarme? Marque REDUZIR/MITIGAR.",
        resumo: "Depois de calcular o risco na análise, a direção da empresa deve escolher uma entre quatro respostas estratégicas para lidar com cada risco identificado.",
        itens: [
            {
                titulo: "Evitar o Risco (Terminar a Atividade)",
                desc: "Consiste em eliminar a exposição ao risco interrompendo a atividade que o causa ou mudando radicalmente o processo. Na literatura da EXIN, é a estratégia mais adequada para um HOSPITAL, pois quando a vida de pacientes está em jogo, danos nunca são aceitáveis."
            },
            {
                titulo: "Reduzir / Mitigar o Risco",
                desc: "É a estratégia mais comum no ambiente corporativo: consiste em implementar controles de segurança (preventivos, detectivos ou repressivos) para diminuir a probabilidade de a ameaça ocorrer ou minimizar o impacto dos danos."
            },
            {
                titulo: "Transferir / Compartilhar o Risco",
                desc: "Consiste em repassar o impacto financeiro ou a execução operacional do risco para um terceiro mediante pagamento — por exemplo, contratar uma apólice de seguro contra incêndio ou terceirizar um serviço com cláusulas de SLA (lembrando que a responsabilidade legal final permanece com o contratante)."
            },
            {
                titulo: "Aceitar / Suportar o Risco (Retenção)",
                desc: "Decisão formal da direção de conviver com o risco sem aplicar novos controles. Ocorre quando o risco já é muito baixo (Risco Residual aceitável) ou quando o custo do controle é maior do que o dano que o incidente causaria."
            }
        ],
        dicaProva: "Atenção redobrada à questão do Hospital: no mundo real poderíamos pensar em 'reduzir', mas o gabarito oficial da EXIN crava 'Evitar o risco', justificando que danos a pacientes nunca são aceitáveis."
    },
    {
        id: 9,
        domain: "DOM2",
        tema: "9. Controles no Ciclo de Vida do Incidente",
        analogiaTitulo: "Fechadura, Alarme, Extintor e Pedreiro",
        analogia: "Antes do ladrão ou incêndio: Fechadura trancada (Preventivo). Na hora que a fumaça sobe: Sensor apitando (Detectivo). Enquanto o fogo está queimando: Jogar água com extintor ou mandar a equipe trabalhar na filial ao lado para não parar a empresa (Repressivo). Depois que o fogo apagou: Chamar o pedreiro para reformar a sala (Corretivo).",
        macete: "Linha do tempo: AMEAÇA ➔ INCIDENTE ➔ DANO ➔ RECUPERAÇÃO. Tudo que age DURANTE a emergência para diminuir o estrago (extinguir incêndio ou mudar para stand-by arrangement) é REPRESSIVO e fica ENTRE INCIDENTE E DANO!",
        resumo: "Os controles de segurança são classificados conforme o momento exato em que atuam dentro da linha do tempo de um incidente (Ameaça ➔ Incidente ➔ Dano ➔ Recuperação).",
        itens: [
            {
                titulo: "Controle Preventivo (Entre Ameaça e Incidente)",
                desc: "Atua antes que o incidente ocorra, reduzindo a probabilidade de a ameaça explorar a vulnerabilidade (ex: trancar documentos em cofre, instalar firewalls, exigir senhas e controle de acesso físico)."
            },
            {
                titulo: "Controle Detectivo (No Momento do Incidente)",
                desc: "Não impede o evento, mas identifica imediatamente que um incidente está ocorrendo e dispara o alerta para acionar a resposta (ex: detectores de fumaça, sensores de movimento PIR, IDS e monitoramento de logs)."
            },
            {
                titulo: "Controle Repressivo (Entre Incidente e Dano)",
                desc: "Entra em ação imediatamente após o incidente começar para conter o evento e minimizar o tamanho do Dano. Dois exemplos oficiais da prova: extinguir o incêndio após sua detecção e transferir funcionários para trabalhar em uma filial reserva (stand-by arrangement)."
            },
            {
                titulo: "Controle Corretivo (Entre Dano e Recuperação)",
                desc: "Atua após o dano já ter acontecido, com o objetivo de consertar os ativos afetados e devolver a operação à normalidade (ex: reparação física do prédio queimado, restauração de backups e aplicação de patches corretivos)."
            }
        ],
        dicaProva: "Duas questões clássicas do exame: 1) Extinguir o incêndio é controle REPRESSIVO (reparar os danos é corretivo; contratar seguro é transferência). 2) A mudança para um stand-by arrangement fica localizada 'Entre as etapas de incidente e de dano'."
    },
    {
        id: 10,
        domain: "DOM1",
        tema: "10. Classificação da Informação e Proteção de Ativos",
        analogiaTitulo: "Separar as Roupas Delicadas vs. Colocar a Etiqueta",
        analogia: "Classificar é você separar suas roupas em 'Dia a dia', 'Festa' e 'Muito Delicada' para saber como lavar cada uma. Designação (Rotulagem) é costurar a etiqueta na gola escrita 'Lavar a seco' para todo mundo reconhecer rápido.",
        macete: "CLASSIFICAÇÃO = Estruturar pela SENSIBILIDADE. ROTULAR = DESIGNAÇÃO (apenas colocar o rótulo). Proteger PEN DRIVE = Criptografia. Desenvolver SISTEMAS = Garantir redundância dos servidores.",
        resumo: "Classificar ativos permite aplicar controles proporcionais à sensibilidade de cada informação e à natureza física ou lógica de cada equipamento.",
        itens: [
            {
                titulo: "Objetivo da Classificação da Informação",
                desc: "Consiste em estruturar a informação em níveis de acordo com a sua sensibilidade e criticidade para o negócio (ex: Público, Interno, Confidencial, Secreto), garantindo que receba o grau adequado de proteção."
            },
            {
                titulo: "Designação (Rotulagem / Labeling)",
                desc: "Uma vez que o Proprietário do Ativo classificou a informação, a Designação é o procedimento prático de aplicar um rótulo visível (cabeçalho, carimbo ou metadado) para facilitar o reconhecimento por quem manuseia o documento."
            },
            {
                titulo: "Proteção Adequada por Tipo de Ativo",
                desc: "O controle depende da natureza do ativo: para proteger um pen drive (mídia removível facilmente perdida), o controle mais apropriado é a criptografia. Para laptops, exige-se gestão de contas e senhas (alocar a um único usuário não basta)."
            },
            {
                titulo: "Segurança no Desenvolvimento de Sistemas",
                desc: "Ao projetar e desenvolver novos sistemas de informação, a segurança deve ser considerada desde o início (Security by Design). Na prova oficial, garantir a redundância dos servidores é o controle técnico que apoia o desenvolvimento seguro visando disponibilidade."
            }
        ],
        dicaProva: "Não caia na armadilha: se a pergunta for 'Qual é o objetivo da classificação da informação?', NUNCA marque 'Rotular a informação para facilitar seu reconhecimento' (isso é Designação). Marque 'Estruturar a informação de acordo com sua sensibilidade'."
    },
    {
        id: 11,
        domain: "DOM3",
        tema: "11. Modelos de Controle de Acesso e Segregação de Funções",
        analogiaTitulo: "Dono da Festa (DAC), Quartel (MAC), Uniforme (RBAC) e Cofre de 2 Chaves (Segregação)",
        analogia: "No DAC, a pasta é sua e você convida quem quiser. No MAC, o sistema do quartel manda: se o documento é 'Ultrassecreto', nem quem o escreveu pode mostrar a um soldado raso. No RBAC, você ganha a chave porque vestiu o uniforme de 'Gerente'. E a Segregação de Funções é o lançamento de um míssil: duas pessoas precisam girar suas chaves separadas para ninguém fazer besteira sozinho.",
        macete: "DAC = Dono decide. MAC = Mandatório/Militar (sistema central bloqueia por rótulo). RBAC = Role/Cargo. CBAC = Claims/Atributos. SEGREGAÇÃO DE FUNÇÕES = Minimizar alterações não autorizadas ou não intencionais. Mudou de cargo e somou acessos antigos = PRIVILEGE CREEP.",
        resumo: "O controle de acesso lógico garante que apenas usuários e processos autorizados leiam ou modifiquem dados, seguindo quatro passos (Identificação, Autenticação, Autorização e Auditoria).",
        itens: [
            {
                titulo: "DAC (Discricionário) vs. MAC (Mandatório)",
                desc: "No DAC, o proprietário/criador do arquivo decide livremente a quem conceder acesso (flexível, mas sujeito a erros). No MAC, o sistema operacional impõe o controle centralizado cruzando o rótulo de sigilo do arquivo com a credencial do usuário; nem o criador do arquivo pode compartilhá-lo com quem não tem credencial."
            },
            {
                titulo: "RBAC (Baseado em Funções) vs. CBAC (Reivindicações)",
                desc: "No RBAC, as permissões são atribuídas a cargos/funções (Roles, como 'Analista de RH') e o usuário herda o acesso do seu cargo. No CBAC (Claims-Based), o acesso é liberado dinamicamente avaliando atributos e declarações comprovadas pelo usuário (ex: 'possui contrato ativo')."
            },
            {
                titulo: "Segregação de Funções (Segregation of Duties)",
                desc: "Consiste em dividir etapas de uma tarefa crítica entre pessoas diferentes (ex: quem cadastra o fornecedor não pode aprovar o pagamento; quem programa não publica em produção). A razão mais importante é minimizar a possibilidade de alterações não autorizadas ou não intencionais."
            },
            {
                titulo: "Menor Privilégio e Privilege Creep",
                desc: "O Menor Privilégio determina que usuários recebam apenas os acessos mínimos necessários para sua função. Quando um colaborador muda de cargo na empresa e recebe os acessos novos sem que os antigos sejam revogados, ocorre o Privilege Creep (Acúmulo de Privilégios)."
            }
        ],
        dicaProva: "Na questão sobre a razão mais importante da Segregação de Funções, descarte 'responsabilizar conjuntamente todos os funcionários' ou 'tornar claro quem é responsável pelo quê'. Marque 'Minimizar a possibilidade de alterações não autorizadas ou não intencionais'."
    },
    {
        id: 12,
        domain: "DOM4",
        tema: "12. Recursos Humanos, Código de Conduta e Conscientização",
        analogiaTitulo: "O Regimento do Condomínio e o Treino Sob Medida",
        analogia: "O Código de Conduta é o livro de regras de convivência da empresa (onde está escrito que você não pode usar o e-mail do trabalho para fins pessoais). E para treinar os funcionários, não adianta comprar um vídeo genérico da internet; tem que ser um treino feito sob medida para a rotina daquela empresa.",
        macete: "Regra que proíbe e-mail pessoal = CÓDIGO DE CONDUTA. Contrato de sigilo = NDA. Antecedentes criminais = CERTIFICADO DE BOA ÍNDOLE. Conscientização mais eficaz = Programa ESPECÍFICO para a organização.",
        resumo: "Controles organizacionais aplicados antes, durante e no encerramento do vínculo de trabalho para reduzir vulnerabilidades comportamentais humanas.",
        itens: [
            {
                titulo: "Código de Conduta e Uso Aceitável",
                desc: "Documento interno (muitas vezes parte do manual do funcionário) que estabelece o comportamento ético esperado e as regras de uso dos ativos — é nele que consta a regra proibindo o uso do e-mail da empresa para fins pessoais."
            },
            {
                titulo: "Monitoramento Legal de Funcionários",
                desc: "Segundo a literatura da EXIN, o empregador tem permissão para monitorar o uso de e-mail e internet corporativa pelos colaboradores, desde que exista uma política/código de conduta claro e os funcionários tenham sido previamente informados de que o monitoramento pode ocorrer."
            },
            {
                titulo: "NDA, Certificado de Boa Índole e Demissão",
                desc: "Na contratação, verifica-se o Certificado de Boa Índole (ausência de antecedentes criminais emitida por órgão oficial) e assina-se o NDA (Acordo de Não Divulgação para proteger segredos). Na demissão, revogam-se imediatamente todos os acessos lógicos e crachás."
            },
            {
                titulo: "Programa de Conscientização (Security Awareness)",
                desc: "Como treinamentos externos ou cursos online genéricos não refletem os processos e riscos reais da empresa, a forma mais eficaz de criar conscientização é elaborar um programa de conscientização específico para a organização."
            }
        ],
        dicaProva: "Nunca marque que o GDPR ou o NDA proíbem o uso de e-mail corporativo para fins pessoais — essa regra pertence ao Código de Conduta!"
    },
    {
        id: 13,
        domain: "DOM3",
        tema: "13. Segurança Física, Os 4 Anéis de Proteção e Data Center",
        analogiaTitulo: "As 4 Cebolas do Castelo e a UTI dos Servidores",
        analogia: "Proteger fisicamente uma empresa é como descascar uma cebola de 4 camadas: 1) Cerca do terreno (Anel externo), 2) Parede e janela blindada (Prédio), 3) Mesas do escritório (Espaço de trabalho) e 4) Cofre dos servidores (Área segura). Lá dentro da sala de servidores, o ar-condicionado é para as máquinas não derreterem (e nunca guarde fitas de backup lá dentro!).",
        macete: "Os 4 Anéis: EXTERNO ➔ PRÉDIO ➔ ESPAÇO DE TRABALHO ➔ ÁREA SEGURA ('Área intermediária' é FALSA!). Vidro inquebrável = Controle FÍSICO. Sem GERADOR = Bateria acaba em minutos/horas. Ar-condicionado = Refrigera equipamentos e desumidifica (Fitas de backup NUNCA ficam na sala de servidores!).",
        resumo: "A segurança física aplica defesa em profundidade por meio de barreiras concêntricas e controles ambientais para garantir confidencialidade e disponibilidade.",
        itens: [
            {
                titulo: "Os 4 Anéis de Proteção Física",
                desc: "A literatura oficial define exatamente quatro anéis concêntricos: 1) Anel externo (terreno ao redor, cercas, iluminação); 2) Prédio (paredes externas, portas, uso de vidro inquebrável); 3) Espaço de trabalho (salas internas de escritório); e 4) Área segura (sala de servidores/data center)."
            },
            {
                titulo: "Eclusa (Mantrap), Crachás e Sensores PIR",
                desc: "A eclusa (Mantrap, câmara com duas portas intertravadas) impede a entrada de carona (Tailgating/Piggybacking). Os crachás devem ser visíveis internamente, mas sem o nome/logotipo da empresa para não entregarem o endereço caso sejam perdidos na rua. Sensores passivos de infravermelho (PIR) detectam o calor humano no escuro."
            },
            {
                titulo: "Climatização e Combate a Incêndio na Sala Segura",
                desc: "O ar-condicionado na sala dos servidores serve para refrigerar o ar, remover o calor gerado pelos equipamentos, desumidificar e filtrar a poeira. No combate a incêndios, usam-se gases inertes (com alarme prévio de evacuação humana pela queda de oxigênio), sendo proibido usar pó químico porque corrói os circuitos."
            },
            {
                titulo: "Bancos de Baterias (UPS) vs. Gerador de Energia",
                desc: "Bancos de baterias (UPS/No-break) protegem apenas contra oscilações e cortes curtos de energia (durando minutos ou poucas horas). Se um data center tem baterias mas não possui um gerador (a diesel), o risco é a falta de energia durar mais que algumas horas e derrubar tudo."
            }
        ],
        dicaProva: "Três pegadinhas oficiais: 1) 'Área intermediária' NÃO é um anel de proteção! 2) Fitas de backup NUNCA ficam na sala de servidores (logo, o ar-condicionado de lá não é para proteger fitas). 3) O gerador não 'alimenta' o banco de baterias; ele substitui a bateria quando o corte é longo."
    },
    {
        id: 14,
        domain: "DOM2",
        tema: "14. Malwares (Trojan, Worm, Vírus, Bomba Lógica, Spyware)",
        analogiaTitulo: "O Presente Grego, O Clone Autônomo e o Despertador Oculto",
        analogia: "O Trojan finge ser uma calculadora útil, mas faz maldades escondido por trás. O Worm é um invasor que se clona sozinho pela rede infectando máquina por máquina sem ninguém clicar. O Vírus é um parasita que precisa grudar num arquivo e esperar alguém dar duplo clique. A Bomba Lógica fica dormindo até chegar uma data ou demissão.",
        macete: "'Além da função aparente, realiza atividades secundárias' = TROJAN. 'Cria uma rede de computadores contaminados ao se replicar' = WORM. 'Dispara quando condições específicas são atendidas' = BOMBA LÓGICA. 'Coleta dados e envia a terceiros' = SPYWARE.",
        resumo: "Cada código malicioso possui uma mecânica específica de infecção, ativação ou propagação que é cobrada literalmente nas questões da EXIN.",
        itens: [
            {
                titulo: "Trojan (Cavalo de Troia)",
                desc: "É um programa que, além da função útil que aparentemente desempenha para o usuário, realiza propositalmente atividades secundárias ocultas em segundo plano (como abrir portas ou alterar dados), comprometendo a integridade e confidencialidade."
            },
            {
                titulo: "Worm (Verme) vs. Vírus",
                desc: "O Worm é um malware autônomo que cria uma rede de computadores contaminados ao se replicar automaticamente pela rede explorando vulnerabilidades, sem precisar de arquivo hospedeiro ou clique humano. Já o Vírus exige um arquivo hospedeiro (ex: .exe) e ação do usuário."
            },
            {
                titulo: "Bomba Lógica (Logic Bomb) e Backdoor",
                desc: "A Bomba Lógica é um trecho de código inserido em um software que permanece inativo até que uma condição específica seja atendida (como uma data ou a demissão do programador). O Backdoor (porta dos fundos) é um atalho oculto criado para contornar a autenticação normal."
            },
            {
                titulo: "Spyware, Ransomware e Kernel Rootkit",
                desc: "O Spyware coleta informações do computador do usuário e as envia silenciosamente para terceiros. O Ransomware sequestra dados via criptografia exigindo pagamento de resgate. O Rootkit em nível de kernel altera o núcleo do sistema operacional para se esconder, exigindo formatação e reinstalação completa do zero."
            }
        ],
        dicaProva: "Grave as duas frases exatas do PDF oficial da EXIN: 1) 'Além da função que aparentemente desempenha, realiza propositalmente atividades secundárias' = Trojan. 2) 'Cria uma rede de computadores contaminados ao se replicar' = Worm."
    },
    {
        id: 15,
        domain: "DOM3",
        tema: "15. Segurança de Redes e Trabalho Remoto",
        analogiaTitulo: "O Túnel Blindado até Casa (VPN) e a Sala de Visitas (DMZ)",
        analogia: "Quando o funcionário vai trabalhar de casa, ele precisa de um túnel privado blindado no meio da internet pública para chegar à empresa: isso é a VPN. Já a DMZ é a sala de espera na entrada da empresa: clientes da internet acessam o site ali sem nunca entrar na rede interna (LAN).",
        macete: "Mudou a política para permitir TRABALHO REMOTO? Marque usar uma VPN! IDS = Apenas DETECTA e alerta. IPS = Fica em linha e PREVINE (bloqueia). FALSO NEGATIVO = Ataque real não detectado (o pior cenário!). TRAFFIC PADDING = Fluxo contínuo cifrado contra análise de tráfego.",
        resumo: "Controles de arquitetura e monitoramento de rede para isolar servidores públicos, proteger conexões externas e detectar pacotes maliciosos.",
        itens: [
            {
                titulo: "Trabalho Remoto e Uso de VPN",
                desc: "Se uma organização altera sua política e passa a autorizar que funcionários trabalhem remotamente, o controle específico que deve ser implementado agora é o uso de uma VPN (Rede Privada Virtual) para criar um túnel criptografado até a rede corporativa."
            },
            {
                titulo: "Firewall (Default Deny) e Zona Desmilitarizada (DMZ)",
                desc: "O Firewall filtra o tráfego seguindo a regra Default Deny (tudo é bloqueado por padrão, exceto o que for explicitamente autorizado). A DMZ é uma sub-rede perimetral que isola os servidores públicos (Web, E-mail) da rede local interna (LAN)."
            },
            {
                titulo: "IDS vs. IPS (Falso Positivo e Falso Negativo)",
                desc: "O IDS analisa o tráfego (por assinatura ou por anomalia comportamental) e apenas emite alertas; o IPS fica em linha (in-line) e bloqueia os pacotes maliciosos. Um Falso Positivo é um alarme falso em tráfego legítimo; um Falso Negativo é quando um ataque real passa sem gerar nenhum alerta."
            },
            {
                titulo: "Preenchimento de Tráfego (Traffic Padding)",
                desc: "Mesmo com criptografia, um espião pode descobrir segredos analisando o aumento no volume de pacotes trocados entre duas sedes. O Preenchimento de Tráfego injeta um fluxo contínuo de dados falsos criptografados para manter o volume constante e impedir essa análise."
            }
        ],
        dicaProva: "Na questão sobre liberar o trabalho remoto, o gabarito oficial explica que 'Criar VLANs', 'Instalar firewalls' e 'Criptografar a rede interna' já deveriam ter sido implementados antes; o controle específico para conexão remota é a VPN."
    },
    {
        id: 16,
        domain: "DOM3",
        tema: "16. Criptografia e Infraestrutura de Chave Pública (ICP / PKI)",
        analogiaTitulo: "O Cadeado Aberto (Chave Pública), o Segredo no Bolso (Privada) e o Cartório (ICP)",
        analogia: "Na criptografia Assimétrica, você espalha cadeados abertos com seu nome por aí (Chave Pública) — todo mundo pode ver e usar para trancar uma caixa para você. Mas a chave que abre esse cadeado fica escondida no seu bolso (Chave Privada): se ela vazar, você precisa trocar tudo! E a ICP (PKI) é o Cartório Digital que garante de quem é cada cadeado público.",
        macete: "SIMÉTRICA = 1 chave igual (Muito rápida). ASSIMÉTRICA = 2 chaves (Pública + Privada). Quando fornecer novas chaves assimétricas? Apenas quando a CHAVE PRIVADA se torna conhecida! O que a ICP (PKI) faz? Verifica a qual pessoa/sistema pertence uma CHAVE PÚBLICA específica!",
        resumo: "Pelo Princípio de Kerckhoffs, o algoritmo criptográfico deve ser público e toda a segurança deve residir exclusivamente no sigilo da chave.",
        itens: [
            {
                titulo: "Criptografia Simétrica vs. Assimétrica (Híbrida)",
                desc: "A Simétrica usa a mesma chave secreta para cifrar e decifrar (é extremamente rápida para grandes volumes, mas difícil de enviar a chave em segurança). A Assimétrica usa um par de chaves (Pública e Privada), resolvendo a distribuição de chaves, porém é lenta. Na prática (HTTPS), usa-se a Híbrida: assimétrica para trocar a chave de sessão e simétrica para cifrar os dados."
            },
            {
                titulo: "Confidencialidade vs. Assinatura Digital e Comprometimento",
                desc: "Para enviar um segredo confidencial a Maria, cifra-se com a Chave Pública de Maria (só a Privada dela abre). Para assinar digitalmente (Não-repúdio), o autor usa sua própria Chave Privada. Como a chave pública é aberta a todos, novas chaves só precisam ser geradas quando a CHAVE PRIVADA se torna conhecida."
            },
            {
                titulo: "Função Hash (Criptografia Unidirecional)",
                desc: "Algoritmo matemático de mão única (irreversível) que converte qualquer arquivo ou senha em um resumo alfanumérico de tamanho fixo. Serve para verificar integridade e armazenar senhas sem que ninguém consiga revertê-las."
            },
            {
                titulo: "O Papel da ICP / PKI (CA, RA e CRL)",
                desc: "Uma Infraestrutura de Chave Pública (ICP) fornece garantia, por meio de certificados digitais, sobre qual pessoa ou sistema pertence a uma chave pública específica. A Autoridade de Registro (RA) valida os documentos do solicitante, e a Autoridade Certificadora (CA) emite o certificado e publica a Lista de Revogação (CRL)."
            }
        ],
        dicaProva: "Grave estas duas respostas exatas do simulado oficial: 1) Na criptografia assimétrica, novas chaves devem ser fornecidas 'Quando a chave privada se torna conhecida'. 2) Uma ICP 'Verifica qual pessoa ou sistema pertence a uma chave pública específica'."
    },
    {
        id: 17,
        domain: "DOM2",
        tema: "17. Gestão de Incidentes, Help Desk e Escalonamento",
        analogiaTitulo: "O Balcão de Triagem do Pronto-Socorro",
        analogia: "Se um funcionário descobre um incidente, ele não bate na porta do Diretor nem do CISO; ele liga primeiro para o Help Desk (triagem). E o atendente do Help Desk não pode esquecer de anotar o nome de quem ligou! Se o problema for técnico demais, passa para um especialista (Horizontal); se precisar de decisão de chefia, sobe para o diretor (Vertical).",
        macete: "Detectou incidente? Notifique primeiro o HELP DESK! O que faltou registrar no chamado (além de data, descrição e consequências)? O NOME DA PESSOA que notificou! Escalonamento FUNCIONAL = Horizontal (Técnico). HIERÁRQUICO = Vertical (Chefia).",
        resumo: "Processo formal para diferenciar fraquezas, eventos e incidentes, garantindo triagem centralizada, contenção rápida e aprendizado contínuo.",
        itens: [
            {
                titulo: "Fraqueza vs. Evento vs. Incidente",
                desc: "Fraqueza é uma falha visível num controle ainda não explorada (porta que não tranca). Evento é qualquer ocorrência observável no sistema (antivírus bloqueando malware). Incidente é um evento que compromete ou tem alta probabilidade de comprometer a segurança e as operações do negócio."
            },
            {
                titulo: "Notificação Inicial ao Help Desk e Registro",
                desc: "Quando um funcionário detecta um incidente, deve notificar primeiro o HELP DESK (evitando escalar diretamente para o Gerente, ISO ou ISM, pois cabe ao Help Desk fazer a triagem inicial). No registro do chamado, além de data/hora, descrição e consequências, é obrigatório registrar o nome da pessoa que notificou o incidente."
            },
            {
                titulo: "Escalonamento Funcional vs. Hierárquico",
                desc: "Se o atendente de nível 1 não tem conhecimento técnico para resolver o chamado, realiza o Escalonamento Funcional (Horizontal) para especialistas de nível 2/3. Se o incidente exigir autorização de recursos ou decisão executiva (como desligar o site de vendas), realiza-se o Escalonamento Hierárquico (Vertical)."
            },
            {
                titulo: "Contenção, Lições Aprendidas e Divulgação Responsável",
                desc: "Confirmado o incidente, a Contenção isola imediatamente os sistemas para impedir que o dano se espalhe. Após a recuperação, a fase de Lições Aprendidas melhora os controles para evitar recorrência. Já a Divulgação Responsável ocorre quando um pesquisador externo avisa a empresa em sigilo sobre uma falha e aguarda o patch antes de publicá-la."
            }
        ],
        dicaProva: "Duas questões certas no exame oficial: 1) Quem o funcionário notifica primeiro ao detectar um incidente? O Help Desk! 2) Qual informação essencial faltou se o atendente anotou apenas data/hora, descrição e consequências? O nome da pessoa que notifica o incidente!"
    },
    {
        id: 18,
        domain: "DOM2",
        tema: "18. Continuidade de Negócios (BCM), RTO/RPO e Backups",
        analogiaTitulo: "A Máquina do Tempo (RPO), O Cronômetro de Parada (RTO) e as Fitas",
        analogia: "O sistema caiu às 15h: RPO olha para trás ('quantas horas de dados gravados podemos perder?'). RTO olha para frente ('em quantas horas o sistema tem que voltar a funcionar?'). No backup: Incremental é econômico na rotina, mas na hora de restaurar exige o Full de domingo + TODOS os incrementais da semana. O Diferencial restaura só com 2 mídias (Full + último Diferencial).",
        macete: "Foco do BCM = Permitir que processos de negócios continuem SEM INTERRUPÇÃO. RPO = Passado (Perda máxima de dados em tempo). RTO = Futuro (Tempo máximo parado até recuperar). Restaurar INCREMENTAL = Full + TODOS os incrementais. Restaurar DIFERENCIAL = Full + ÚLTIMO diferencial.",
        resumo: "O Gerenciamento da Continuidade de Negócios (BCM) protege os processos críticos contra interrupções graves e organiza a recuperação técnica e operacional.",
        itens: [
            {
                titulo: "Foco do BCM, BCP (PCN) e DRP (PRD)",
                desc: "O foco do BCM é permitir que atividades e processos de negócios continuem sem interrupção (e se recuperem rápido em crises). O BCP (Plano de Continuidade de Negócios) cuida da operação do negócio como um todo (pessoas, atendimento, filiais), enquanto o DRP (Recuperação de Desastres) foca na restauração técnica da TI."
            },
            {
                titulo: "BIA, RTO (Tempo) e RPO (Ponto de Dados)",
                desc: "A Análise de Impacto no Negócio (BIA) define duas métricas: o RTO (Recovery Time Objective), que é o tempo máximo tolerável que um sistema pode ficar fora do ar após o desastre; e o RPO (Recovery Point Objective), que é a perda máxima de dados tolerável medida em tempo (definindo a frequência dos backups)."
            },
            {
                titulo: "Locais Alternativos (Cold, Warm, Hot e Móvel)",
                desc: "Cold Site: sala vazia só com energia e rede (leva dias/semanas). Warm Site: possui servidores instalados, mas exige restaurar fitas (leva horas). Hot Site: espelhado em tempo real, assume em minutos (atende RTO mínimo e RPO zero). Hotsite sob demanda (Móvel): caminhões/contêineres equipados enviados ao local do sinistro."
            },
            {
                titulo: "Backups: Completo (Full), Incremental e Diferencial",
                desc: "O Full copia tudo e limpa o archive bit. O Incremental copia só o que mudou desde o último backup de qualquer tipo (rápido para gravar, mas exige o Full + todos os incrementais em ordem para restaurar). O Diferencial copia tudo desde o último Full (exige apenas 2 mídias para restaurar: o último Full + o último Diferencial)."
            }
        ],
        dicaProva: "Cuidado para não confundir RTO com MTBF (Tempo Médio Entre Falhas): MTBF é uma métrica de confiabilidade de fabricação de hardware (ex: disco rígido projetado para rodar 1.500.000 horas), enquanto RTO é a meta de tempo de retomada após um desastre."
    },
    {
        id: 19,
        domain: "DOM4",
        tema: "19. Conformidade Legal (GDPR/LGPD) e Terceirização",
        analogiaTitulo: "A Lei Obrigatória para Todos vs. O Contrato com o Fornecedor",
        analogia: "Seguir a ISO 27001 é opcional, mas cumprir a lei de proteção de dados (GDPR/LGPD) é obrigatório para todas as empresas! Para começar a cumprir a lei na empresa, o 1º passo é transformá-la numa Política de Privacidade interna. E se terceirizar a TI, você coloca as regras num acordo (SLA), lembrando que o dono dos dados continua sendo sempre você.",
        macete: "Ato imposto a TODAS as organizações = GDPR (ISO não é lei!). 1ª medida para cumprir a lei de dados = Converter a legislação em uma POLÍTICA DE PRIVACIDADE. Terceirizou a TI? Formalizar os requisitos de segurança em um ACORDO!",
        resumo: "Obrigações legais de proteção de dados pessoais e regras de governança para gerenciar riscos quando serviços de TI são terceirizados a fornecedores.",
        itens: [
            {
                titulo: "Legislação Obrigatória vs. Normas Voluntárias",
                desc: "Normas como a ISO/IEC 27001 e 27002 são padrões voluntários de boas práticas. Já o Regulamento Geral sobre a Proteção de Dados (GDPR / LGPD) é um ato legislativo governamental que pode ser imposto obrigatoriamente a todas as organizações que tratam dados pessoais."
            },
            {
                titulo: "Primeira Medida para Cumprir a Lei de Privacidade",
                desc: "Quando um profissional fica encarregado de assegurar que a organização cumpra a legislação de proteção de dados pessoais, a primeira medida que deve tomar é converter a legislação em uma política de privacidade interna para orientar a empresa (além de aplicar técnicas como anonimização e pseudonimização)."
            },
            {
                titulo: "Segurança na Terceirização de TI (Fornecedores)",
                desc: "Ao terceirizar parte da TI, a melhor forma de garantir a segurança da informação é formalizar os requisitos de segurança para o fornecedor em um acordo (contrato / SLA). Não se deve nomear um novo ISO no fornecedor nem obrigá-lo a usar os procedimentos internos do cliente."
            },
            {
                titulo: "Responsabilidade Final e Subcontratados (Cadeia)",
                desc: "A organização cliente continua SEMPRE sendo a responsável final (Accountable) pelos seus dados e pela privacidade perante a lei. Se o fornecedor decidir subcontratar outra empresa (quarteirização), a contratante deve avaliar os novos riscos e exigir no SLA que o fornecedor principal garanta a conformidade dos subcontratados."
            }
        ],
        dicaProva: "Três questões diretas da prova: 1) Qual ato pode ser imposto a todas as organizações? GDPR. 2) Primeira medida de Sara para cumprir a lei de dados? Converter a legislação em uma política de privacidade. 3) Melhor forma de garantir segurança com fornecedor? Formalizar os requisitos em um acordo."
    }
];