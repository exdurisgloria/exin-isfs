const glossaryCategories = [
    {
        category: "1. Tríade CIA, Hexagrama Parkeriano e Atributos da Informação",
        terms: [
            {
                term: "Confidencialidade",
                definition: "Garantia de que a informação seja acessível apenas a pessoas, entidades ou processos expressamente autorizados.",
                example: "Um analista deixa um relatório impresso de salários na impressora compartilhada do corredor. Mesmo que apenas um colega leia por curiosidade, houve violação direta de confidencialidade."
            },
            {
                term: "Integridade",
                definition: "Salvaguarda da exatidão, completeza e confiabilidade da informação e dos métodos de processamento contra alterações não autorizadas ou acidentais.",
                example: "Um invasor intercepta um arquivo de folha de pagamento e altera os dígitos da própria conta bancária para receber valores indevidos, comprometendo a integridade do registro."
            },
            {
                term: "Disponibilidade",
                definition: "Garantia de que usuários autorizados obtenham acesso à informação e aos ativos correspondentes sempre que necessário.",
                example: "O banco de dados principal de uma loja virtual trava durante o horário de pico devido à falta de espaço em disco, impedindo que clientes legítimos fechem suas compras."
            },
            {
                term: "Posse ou Controle (Hexagrama Parkeriano)",
                definition: "Atributo do Hexagrama Parkeriano que trata da detenção física ou lógica do meio onde a informação reside, independentemente de a confidencialidade ter sido quebrada.",
                example: "Um ladrão furta um cofre lacrado contendo fitas de backup criptografadas. Ele não consegue ler os dados (a confidencialidade está intacta), mas a empresa já perdeu a Posse ou Controle sobre o ativo."
            },
            {
                term: "Utilidade (Hexagrama Parkeriano)",
                definition: "Capacidade de a informação ser compreendida, interpretada e usada na prática para a finalidade a que se destina.",
                example: "Os dados da empresa estão íntegros, seguros e disponíveis no servidor, mas foram exportados na codificação antiga EBCDIC e os sistemas novos só leem ASCII. Ou então, os dados foram criptografados e a chave foi perdida: a informação perdeu sua Utilidade."
            },
            {
                term: "Autenticidade",
                definition: "Garantia de que uma entidade (usuário, sistema ou documento) é genuinamente quem afirma ser.",
                example: "Um atacante envia um e-mail falsificando o endereço do diretor financeiro (Spoofing). A mensagem falha no atributo de autenticidade da origem."
            },
            {
                term: "Não-repúdio (Irretratabilidade)",
                definition: "Capacidade de provar inequivocamente que uma ação, transação ou envio de mensagem foi realizado por determinada entidade, impedindo que ela negue a autoria posteriormente.",
                example: "Um fornecedor assina digitalmente um contrato com sua chave privada e depois alega na justiça que não concordou com os termos. A assinatura digital combinada a trilhas de auditoria sincronizadas garante o não-repúdio."
            },
            {
                term: "Valor do Dado vs. Contexto",
                definition: "Na literatura da EXIN, o valor da informação não reside no dado bruto isolado, mas sim no seu contexto comercial, custo de reconstrução, importância estratégica e impacto caso seja perdido ou divulgado.",
                example: "Uma lista de números soltos não vale nada isoladamente, mas quando associada aos nomes dos clientes e limites de crédito da empresa, torna-se um ativo crítico de alto valor."
            }
        ]
    },
    {
        category: "2. Governança, Hierarquia Documental e SGSI (ISO 27001 / 27002)",
        terms: [
            {
                term: "SGSI (Sistema de Gestão de Segurança da Informação)",
                definition: "Parte do sistema global de gestão da organização, baseada na abordagem de riscos de negócio, para estabelecer, implementar, operar, monitorar, analisar criticamente, manter e melhorar a segurança da informação.",
                example: "A empresa estrutura políticas, papéis, matriz de riscos, auditorias e planos de melhoria contínua seguindo o padrão ISO/IEC 27001."
            },
            {
                term: "ISO/IEC 27001 vs. ISO/IEC 27002",
                definition: "A ISO 27001 define os requisitos obrigatórios (Cláusulas 4 a 10) e lista os controles de referência no Anexo A para certificação do SGSI. A ISO 27002 é um guia (código de prática) com recomendações detalhadas de como implementar os controles, sem fins de certificação direta.",
                example: "A empresa é auditada e certificada na ISO 27001, mas o engenheiro de segurança usa o livro da ISO 27002 para consultar as melhores práticas de como implementar o controle de tela limpa."
            },
            {
                term: "Cláusulas Mandatórias (4 a 10) vs. Anexo A",
                definition: "Para obter a certificação ISO 27001, a organização NÃO pode excluir nenhum requisito das cláusulas 4 a 10. Já os controles do Anexo A podem ser excluídos, desde que haja justificativa formal documentada.",
                example: "Uma empresa não pode decidir 'pular' a Auditoria Interna (Cláusula 9), mas pode excluir um controle do Anexo A sobre desenvolvimento de software caso não desenvolva nenhum sistema."
            },
            {
                term: "SoA (Statement of Applicability / Declaração de Aplicabilidade)",
                definition: "Documento obrigatório na fase Plan do SGSI que relaciona todos os controles do Anexo A da ISO 27001, declarando quais foram selecionados ou excluídos e detalhando a justificativa para cada decisão.",
                example: "Durante a auditoria externa, o auditor solicita a SoA para verificar por que a empresa optou por não aplicar controles de proteção para trabalho remoto."
            },
            {
                term: "Ciclo PDCA (Plan, Do, Check, Act)",
                definition: "Modelo de melhoria contínua do SGSI: Plan (escopo, política, avaliação de riscos, SoA, RTP); Do (implementar controles e treinamentos); Check (auditorias internas, análise de KPIs, revisão pela direção); Act (ações corretivas e melhorias).",
                example: "Identificar em uma auditoria que os backups falharam ocorre na fase Check; alterar o script e substituir a fita defeituosa para corrigir a causa raiz ocorre na fase Act."
            },
            {
                term: "Hierarquia Documental: Política, Norma (Padrão), Procedimento e Diretriz",
                definition: "1) Política: documento estratégico de alto nível aprovado pela direção (obrigatório). 2) Norma/Padrão: regra técnica ou métrica específica (obrigatória). 3) Procedimento: passo a passo operacional de como executar uma tarefa (obrigatório). 4) Diretriz (Guideline): recomendação e conselho orientativo (NÃO obrigatório).",
                example: "A Política exige acesso seguro; o Padrão exige senhas de 12 caracteres; o Procedimento explica passo a passo como resetar a senha no AD; a Diretriz dá dicas de como criar frases fáceis de lembrar."
            },
            {
                term: "Due Care (Devido Cuidado) vs. Due Diligence (Devida Diligência)",
                definition: "Due Diligence é o ato de investigar, pesquisar e entender os riscos e ameaças antes de tomar decisões. Due Care é a ação prática de implementar os controles e tomar as medidas razoáveis para proteger a organização.",
                example: "Auditar a segurança de um fornecedor antes de assinar contrato é Due Diligence; configurar firewalls e exigir cláusulas de confidencialidade no contrato é Due Care."
            },
            {
                term: "Papéis: CISO/ISO, LISO, Proprietário do Ativo e Custodiante",
                definition: "CISO/ISO: responsável corporativo por planejar e supervisionar a segurança. LISO (Local ISO): aplica as regras localmente garantindo conformidade com leis regionais e segurança física da filial. Proprietário (Asset Owner): gestor responsável pelo valor e pela classificação do ativo. Custodiante (TI): administra tecnicamente o ativo (ex: faz backups) conforme ordens do proprietário.",
                example: "O Diretor de RH (Proprietário) classifica a folha salarial como 'Confidencial' e autoriza quem pode vê-la; o Administrador de Banco de Dados (Custodiante) configura as permissões no servidor."
            }
        ]
    },
    {
        category: "3. Gestão de Riscos (Qualitativa, Quantitativa e Tratamento)",
        terms: [
            {
                term: "Ativo, Ameaça, Vulnerabilidade e Risco",
                definition: "Ativo: algo de valor para a empresa. Ameaça: causa potencial de um incidente indesejado (externa/interna, humana/natural). Vulnerabilidade: fraqueza em um ativo ou controle que pode ser explorada. Risco: probabilidade de uma ameaça explorar uma vulnerabilidade causando impacto ao negócio.",
                example: "O servidor web (Ativo) possui um sistema desatualizado (Vulnerabilidade) que pode ser atacado por um hacker (Ameaça), gerando perda financeira e queda do site (Risco)."
            },
            {
                term: "Análise Quantitativa: AV, EF, SLE, ARO e ALE",
                definition: "AV (Asset Value): valor total do ativo. EF (Exposure Factor / Fator de Exposição): percentual do ativo perdido em um incidente. SLE (Single Loss Expectancy): perda financeira de um único evento (SLE = AV × EF). ARO (Annual Rate of Occurrence): frequência anual estimada. ALE (Annual Loss Expectancy): perda anual esperada (ALE = SLE × ARO).",
                example: "Um armazém vale $ 500.000 (AV). Um incêndio destrói 25% dele (EF = 0,25), gerando uma perda única (SLE) de $ 125.000. Se ocorre 1 vez a cada 10 anos (ARO = 0,1), a perda anual esperada (ALE) é de $ 12.500."
            },
            {
                term: "Viabilidade Financeira de um Controle (Custo vs. Benefício)",
                definition: "Um controle de segurança só é financeiramente viável se o seu custo anual de implementação e manutenção for menor do que a redução que ele proporciona na Expectativa Anual de Perda (ALE pré-controle menos ALE pós-controle).",
                example: "Se a ALE de um risco é R$ 50.000 e uma ferramenta reduz esse risco em 80% (economia de R$ 40.000/ano), mas a licença anual da ferramenta custa R$ 45.000, o controle NÃO é financeiramente viável."
            },
            {
                term: "Análise Qualitativa de Riscos",
                definition: "Método de avaliação que utiliza escalas descritivas e subjetivas (ex: Baixo, Médio, Alto, Crítico) baseadas em cenários e julgamento de especialistas, sem exigir cálculos financeiros exatos.",
                example: "A equipe classifica o risco de vazamento de reputação da marca em uma matriz 5x5 como 'Impacto Muito Alto' e 'Probabilidade Média'."
            },
            {
                term: "Tratamento de Riscos: Mitigação, Transferência, Evitação e Aceitação",
                definition: "1) Mitigação (Redução): aplicar controles para diminuir probabilidade ou impacto. 2) Transferência (Compartilhamento): passar o impacto financeiro ou operacional a terceiros (seguros, terceirização com SLA). 3) Evitação (Rejeição): encerrar a atividade ou processo que gera o risco. 4) Aceitação (Retenção): assumir o risco conscientemente quando o custo do controle supera o dano.",
                example: "Desligar um aplicativo legado vulnerável para não lidar mais com dados de cartões é Evitação; contratar seguro cibernético é Transferência; instalar um IPS é Mitigação."
            },
            {
                term: "Risco Residual",
                definition: "A parcela de risco que permanece mesmo após a implementação dos controles e medidas de tratamento selecionados pela organização. Deve ser formalmente aprovado pela direção.",
                example: "Mesmo com antivírus, firewall e treinamento em dia, ainda existe uma pequena chance de um ataque dia-zero ter sucesso; esse percentual restante é o risco residual."
            },
            {
                term: "Classificação de Controles: Preventivo, Detectivo, Repressivo e Corretivo",
                definition: "Preventivo: impede que o incidente ocorra. Detectivo: identifica e alerta durante ou logo após a ocorrência. Repressivo: reduz e limita o impacto enquanto o incidente acontece. Corretivo: restaura o ambiente após o dano.",
                example: "Trancar documentos no cofre é Preventivo; sensor de fumaça é Detectivo; sistema de gás que apaga o fogo é Repressivo; restaurar o backup é Corretivo."
            }
        ]
    },
    {
        category: "4. Controle de Acesso Lógico, Identidade e Pessoas (RH)",
        terms: [
            {
                term: "Etapas do Acesso: Identificação, Autenticação, Autorização e Auditoria (Accounting)",
                definition: "1) Identificação: declarar quem você é (login/crachá). 2) Autenticação: provar que você é quem diz ser (senha/biometria). 3) Autorização: verificar o que você tem permissão para fazer (ler/gravar). 4) Auditoria/Accounting: registrar em log tudo o que foi feito.",
                example: "Digitar 'matheus.soc' é Identificação; colocar a senha e o token MFA é Autenticação; o sistema liberar a pasta de logs é Autorização; gravar o horário de acesso no SIEM é Accounting."
            },
            {
                term: "DAC (Discretionary Access Control / Controle Discricionário)",
                definition: "Modelo flexível onde o próprio dono/criador do arquivo ou recurso decide livremente quem pode acessá-lo e define as permissões.",
                example: "Um usuário cria uma planilha no Google Drive pessoal ou em uma pasta de rede Windows e compartilha com permissão de edição diretamente com três colegas."
            },
            {
                term: "MAC (Mandatory Access Control / Controle Mandatório)",
                definition: "Modelo rígido gerenciado centralmente pelo sistema operacional, que cruza o rótulo de sigilo do arquivo (Objeto) com a credencial de segurança do usuário (Sujeito). O criador do arquivo NÃO pode conceder acesso a ninguém.",
                example: "Em um sistema militar, mesmo que um coronel crie um documento classificado como 'Ultrassecreto', ele não consegue enviar ou dar permissão de leitura a um sargento cuja credencial é apenas 'Confidencial'."
            },
            {
                term: "RBAC (Role-Based Access Control / Controle Baseado em Funções)",
                definition: "Modelo corporativo padrão onde as permissões são agrupadas em papéis/cargos (Roles). O usuário recebe acesso aos recursos de acordo com a função que exerce na empresa.",
                example: "Todo funcionário contratado para o cargo de 'Analista de SOC Nível 1' recebe automaticamente o pacote de permissões de leitura no SIEM e abertura de tickets."
            },
            {
                term: "CBAC / ABAC (Controle Baseado em Reivindicações / Atributos)",
                definition: "Modelo dinâmico onde o acesso é liberado com base na comprovação de declarações ou atributos contextuais (reivindicações/claims), como idade, localização, certificação ativa ou empresa parceira, sem depender de um cargo fixo.",
                example: "Um portal libera o download de um manual técnico para qualquer usuário externo que comprove o atributo 'Possui contrato de manutenção ativo' e 'Acessando em horário comercial'."
            },
            {
                term: "Princípio do Menor Privilégio e Need-to-Know (Necessidade de Conhecer)",
                definition: "Menor Privilégio garante que usuários e processos operem apenas com os direitos mínimos necessários para sua tarefa. Need-to-Know restringe o acesso apenas às informações estritamente necessárias para concluir uma atividade específica.",
                example: "Mesmo um administrador de sistemas usa uma conta comum no dia a dia e só eleva privilégios quando precisa instalar uma atualização."
            },
            {
                term: "Privilege Creep (Acúmulo de Privilégios)",
                definition: "Falha de gestão de acesso onde um funcionário muda de cargo ou setor dentro da empresa, recebe as novas permissões da área nova, mas suas permissões antigas não são revogadas.",
                example: "Um analista do Financeiro é transferido para a equipe de TI; após a mudança, ele ganha acesso aos servidores e continua conseguindo aprovar pagamentos no sistema antigo."
            },
            {
                term: "Segregação de Funções (Segregation of Duties - SoD)",
                definition: "Divisão de etapas de um processo crítico entre duas ou mais pessoas diferentes para impedir que um único indivíduo possa cometer uma fraude ou erro grave e ocultá-lo.",
                example: "O desenvolvedor que escreve o código não tem permissão para aprovar e publicar a mudança diretamente no servidor de produção."
            }
        ]
    },
    {
        category: "5. Segurança Física e do Ambiente (Capítulo 11)",
        terms: [
            {
                term: "Anéis de Proteção (Protection Rings / Defesa em Profundidade Física)",
                definition: "Conceito de segurança física em camadas concêntricas ao redor do ativo crítico, indo desde o perímetro externo (cercas, iluminação) até o prédio (portaria, recepção), ala interna (portas com crachá) e sala-cofre (biometria, racks trancados).",
                example: "Para chegar ao servidor central, um visitante precisa passar pela cancela do estacionamento, cadastrar-se na recepção, passar pela catraca e ser acompanhado até o data center."
            },
            {
                term: "Diretrizes de Crachás e Visibilidade (Regra EXIN)",
                definition: "O crachá deve ser usado de forma visível dentro das dependências da empresa, mas NÃO deve conter o logotipo ou o nome da empresa caso seja usado fora do prédio, para não revelar a qual organização o crachá dá acesso caso seja perdido.",
                example: "Um funcionário perde o crachá no metrô; como o cartão é neutro e tem apenas um código interno sem o nome da empresa, quem encontrar não saberá onde usá-lo."
            },
            {
                term: "Mantrap (Eclusa) vs. Tailgating / Piggybacking",
                definition: "Tailgating/Piggybacking é a entrada não autorizada pegando 'carona' logo atrás de um funcionário legítimo antes que a porta feche. Mantrap (eclusa) é uma câmara com duas portas intertravadas onde a primeira deve fechar totalmente antes de a segunda abrir.",
                example: "Um invasor segura uma caixa de papelão fingindo estar com as mãos ocupadas para que um funcionário segure a porta para ele (Piggybacking); o uso de uma eclusa (Mantrap) impede essa passagem dupla."
            },
            {
                term: "Sensores Passivos de Infravermelho (PIR)",
                definition: "Dispositivos de detecção física de intrusão que monitoram variações de radiação infravermelha (calor corporal humano) movendo-se diante de superfícies com temperatura ambiente diferente (como paredes).",
                example: "À noite, com a sala de servidores totalmente escura, o sensor PIR dispara o alarme assim que detecta a assinatura térmica de um intruso caminhando pelo corredor."
            },
            {
                term: "Supressão de Incêndio: Gases Inertes vs. Pó Químico e Água",
                definition: "Em salas de servidores, deve-se usar gases inertes (Argônio, Inergen, FM-200) que abafam o fogo sem danificar circuitos. Pó químico é estritamente proibido em data centers porque corrói os metais dos componentes eletrônicos. Como gases reduzem o oxigênio, exigem aviso sonoro/visual prévio para evacuação humana.",
                example: "Usar extintor de pó químico para apagar fogo em um rack destrói todos os servidores vizinhos por corrosão química; o sistema correto dispara gás inerte após dar tempo para os técnicos saírem da sala."
            },
            {
                term: "Proteção de Energia: UPS (No-break) e Geradores",
                definition: "O UPS (Uninterruptible Power Supply) usa baterias para fornecer energia imediata em quedas curtas, filtrar picos de tensão e permitir o desligamento seguro (graceful shutdown). Para interrupções longas, o UPS mantém os servidores ligados nos primeiros minutos até que os geradores a diesel assumam a carga.",
                example: "Cai a energia da rua: o UPS segura os servidores online instantaneamente por 5 minutos enquanto o gerador a diesel dá a partida e estabiliza a tensão."
            },
            {
                term: "Política de Mesa Limpa e Tela Limpa (Clear Desk & Clear Screen)",
                definition: "Obrigatoriedade de guardar documentos em papel e mídias removíveis em gavetas trancadas ao sair da estação de trabalho, e bloquear a tela do computador com senha/protetor sempre que se afastar.",
                example: "Antes de ir ao banheiro, o analista pressiona Win+L no teclado e guarda a pasta do cliente na gaveta com chave, evitando olhares indiscretos (Shoulder Surfing)."
            }
        ]
    },
    {
        category: "6. Malwares, Engenharia Social e Ameaças Cibernéticas",
        terms: [
            {
                term: "Vírus vs. Worm (Verme)",
                definition: "O Vírus exige um arquivo hospedeiro (ex: .exe, macro) e depende da ação humana para ser executado e espalhado. O Worm é um programa autônomo que se replica e se propaga sozinho pela rede explorando vulnerabilidades, sem precisar de arquivo hospedeiro ou clique do usuário.",
                example: "Um arquivo infectado enviado por pendrive que só ativa quando o usuário dá duplo clique é um Vírus; uma praga que varre a rede local sozinha infectando máquinas via falha no protocolo SMB é um Worm."
            },
            {
                term: "Trojan (Cavalo de Troia), Backdoor e Bomba Lógica (Logic Bomb)",
                definition: "Trojan: programa que parece legítimo e útil, mas esconde funções maliciosas. Backdoor (Porta dos Fundos): mecanismo oculto que contorna a autenticação normal para dar acesso remoto ao criador. Logic Bomb: código malicioso adormecido que dispara apenas quando uma condição específica ocorre (data, evento).",
                example: "Um desenvolvedor demitido deixa uma rotina oculta no sistema financeiro que apaga o banco de dados 30 dias após seu nome sair da folha de pagamento (Bomba Lógica)."
            },
            {
                term: "Rootkit (User-mode e Kernel-mode)",
                definition: "Conjunto de ferramentas furtivas que oculta a presença do invasor, processos maliciosos e portas abertas alterando o próprio sistema operacional. Quando instalado no nível do núcleo (Kernel-mode Rootkit), torna os comandos do sistema não confiáveis, exigindo formatação completa e reinstalação do zero.",
                example: "O servidor está enviando tráfego suspeito, mas quando o administrador roda o gerenciador de tarefas ou o comando netstat, o Rootkit intercepta a chamada e esconde o processo invasor."
            },
            {
                term: "Ransomware vs. Spyware",
                definition: "Ransomware sequestra os dados através de criptografia forte e exige pagamento de resgate financeiro para liberar a chave. Spyware coleta furtivamente hábitos de navegação, digitação (keylogger) ou dados comerciais para enviá-los a terceiros sem destruir o sistema.",
                example: "Todos os arquivos do servidor aparecem com extensão .locked e um aviso na tela pedindo pagamento em Bitcoin (Ransomware)."
            },
            {
                term: "Engenharia Social: Phishing, Spear Phishing, Whaling e Vishing",
                definition: "Técnicas de manipulação psicológica para explorar a vulnerabilidade humana: Phishing (e-mails falsos em massa); Spear Phishing (ataque personalizado contra um alvo ou setor específico); Whaling (focado em altos executivos/diretores); Vishing (golpe por chamada de voz/telefone).",
                example: "Um criminoso liga para o analista de suporte fingindo ser o diretor de TI em uma emergência para convencê-lo a informar um código de acesso (Vishing)."
            },
            {
                term: "Dumpster Diving (Vasculhar Lixo)",
                definition: "Técnica onde o atacante revira lixeiras físicas da empresa em busca de relatórios impressos, organogramas, anotações de senhas ou mídias descartadas sem destruição adequada. Mitigado com fragmentadoras de papel (shredders).",
                example: "Um invasor coleta no lixo da empresa listas de ramais telefônicos e rascunhos de projetos que não foram triturados para preparar um ataque de engenharia social."
            }
        ]
    },
    {
        category: "7. Criptografia, PKI e Segurança de Redes (Capítulos 10 e 13)",
        terms: [
            {
                term: "Princípio de Kerckhoffs",
                definition: "Postulado fundamental da criptografia que afirma que a segurança de um sistema criptográfico deve residir exclusivamente no sigilo da CHAVE, e nunca no segredo do algoritmo matemático (o algoritmo deve ser público e amplamente testado).",
                example: "O algoritmo AES é totalmente aberto e conhecido mundialmente, mas continua seguro porque sem a chave secreta é matematicamente inviável decifrar os dados."
            },
            {
                term: "Criptografia Simétrica vs. Assimétrica vs. Híbrida",
                definition: "Simétrica: usa a mesma chave para cifrar e decifrar (muito rápida, ideal para grandes volumes, mas difícil de distribuir a chave). Assimétrica: usa par de chaves pública e privada (resolve a troca de chaves e permite assinatura digital, mas é lenta). Híbrida: usa a assimétrica para trocar com segurança uma chave de sessão temporária, e usa a simétrica para cifrar os dados rapidamente.",
                example: "No protocolo HTTPS (TLS), o navegador usa criptografia assimétrica apenas no início da conexão para combinar uma chave simétrica (AES), que cifrará o restante do tráfego em alta velocidade."
            },
            {
                term: "Regra de Chaves Assimétricas: Confidencialidade vs. Assinatura Digital",
                definition: "1) Para garantir CONFIDENCIALIDADE: o remetente cifra com a Chave PÚBLICA do destinatário (só a chave privada do destinatário poderá abrir). 2) Para ASSINATURA DIGITAL (Autenticidade e Não-repúdio): o remetente assina cifrando o hash com sua própria Chave PRIVADA (qualquer um valida usando a chave pública do remetente).",
                example: "Se João quer enviar um segredo que só Maria possa ler, ele cifra com a chave pública de Maria. Se João quer provar que o documento foi escrito por ele, ele assina com a chave privada de João."
            },
            {
                term: "Função Hash (Criptografia Unidirecional)",
                definition: "Algoritmo matemático irreversível (mão única) que transforma qualquer volume de dados em uma sequência alfanumérica de tamanho fixo (resumo/digest). Garante a integridade de arquivos e o armazenamento seguro de senhas.",
                example: "Ao baixar uma imagem ISO, você calcula o hash SHA-256 do arquivo; se um único bit tiver sido corrompido ou alterado na transferência, o hash resultante será completamente diferente."
            },
            {
                term: "PKI (Infraestrutura de Chave Pública): CA, RA e CRL",
                definition: "Ecossistema para gerenciar certificados digitais: RA (Autoridade de Registro) valida presencialmente ou documentalmente a identidade do solicitante; CA (Autoridade Certificadora) emite, assina digitalmente o certificado e publica a CRL (Lista de Revogação de Certificados) quando uma chave privada vaza ou perde validade.",
                example: "A chave privada de um servidor foi roubada; o administrador aciona imediatamente a CA para incluir o certificado na CRL, alertando os navegadores para não confiarem mais nele."
            },
            {
                term: "Preenchimento de Tráfego (Traffic Padding)",
                definition: "Contramedida de rede que injeta um fluxo contínuo de pacotes falsos/aleatórios criptografados na comunicação para mascarar o volume real e a frequência de envio de dados, impedindo ataques de Análise de Tráfego.",
                example: "Mesmo sem conseguir ler o conteúdo criptografado, um espião saberia que uma base militar está prestes a agir pelo aumento súbito de pacotes na rede; o Traffic Padding mantém o fluxo constante 24h por dia para esconder esse padrão."
            },
            {
                term: "IDS vs. IPS (Falso Positivo vs. Falso Negativo)",
                definition: "IDS (Detecção): analisa cópia do tráfego e apenas gera alertas (passivo). IPS (Prevenção): fica em linha (in-line) e bloqueia pacotes maliciosos em tempo real. Falso Positivo: alerta disparado por tráfego legítimo inofensivo. Falso Negativo (o mais perigoso): ataque real ocorre e o sensor não detecta nada.",
                example: "Se o IDS pode analisar tráfego por Assinatura (conhecido) ou por Anomalia (desvio da linha de base/baseline comportamental). Um Falso Negativo permite que o hacker invada sem gerar nenhum alarme no SOC."
            },
            {
                term: "DMZ (Zona Desmilitarizada) e Default Deny",
                definition: "DMZ é uma sub-rede isolada por firewalls que hospeda os servidores acessíveis pela internet (Web, E-mail), protegendo a rede interna (LAN) caso esses servidores sejam comprometidos. Default Deny (Bloqueio Padrão) é a regra de firewall onde tudo o que não for explicitamente permitido é bloqueado.",
                example: "Um invasor compromete o site público da empresa na DMZ, mas o firewall interno impede que ele alcance o banco de dados principal localizado na rede interna (LAN)."
            }
        ]
    },
    {
        category: "8. Segurança Operacional, Desenvolvimento e Incidentes (Capítulos 12, 14, 15 e 16)",
        terms: [
            {
                term: "Gerenciamento de Mudanças (Dilema Catch-22 e Rollback)",
                definition: "Processo formal para controlar alterações em produção. Envolve o dilema 'Catch-22': não atualizar expõe a falhas de segurança (avaliado pelo ISO), mas atualizar às pressas pode derrubar o sistema (avaliado pelo Gerente do Sistema). Exige aprovação prévia, testes e plano de retorno (Rollback).",
                example: "Antes de aplicar um patch crítico no servidor de vendas na sexta-feira, a mudança passa por homologação, aprovação e criação de um snapshot para Rollback imediato caso o sistema trave."
            },
            {
                term: "Segregação de Ambientes (Desenvolvimento, Teste e Produção) e Dados de Teste",
                definition: "Deve haver separação rigorosa entre os ambientes de Desenvolvimento, Teste/Homologação e Produção. Além disso, é proibido copiar bancos de dados reais de produção (com dados pessoais de clientes) diretamente para ambientes de teste sem antes anonimizá-los ou mascará-los.",
                example: "Desenvolvedores criam o código em Desenvolvimento, outra equipe homologa em Teste usando dados fictícios ou anonimizados, e apenas a equipe de Operações publica em Produção."
            },
            {
                term: "Fraqueza vs. Evento vs. Incidente de Segurança",
                definition: "Fraqueza (Weakness): falha observada em um controle que ainda não foi explorada (ex: porta destrancada). Evento: qualquer ocorrência observável em um sistema ou rede (ex: tentativa falha de login, antivírus bloqueando arquivo). Incidente: um evento ou série de eventos indesejados com alta probabilidade de comprometer as operações do negócio e a segurança da informação.",
                example: "Um funcionário reporta que o leitor de crachá quebrou (Fraqueza); o firewall registra um port scan externo bloqueado (Evento); um servidor é infectado por ransomware e para o faturamento (Incidente)."
            },
            {
                term: "Escalonamento Funcional (Horizontal) vs. Hierárquico (Vertical)",
                definition: "No gerenciamento de incidentes: Escalonamento Funcional (Horizontal) é transferir o chamado para especialistas com maior competência técnica (ex: Nível 1 para Nível 2/3). Escalonamento Hierárquico (Vertical) é acionar gestores e diretores com maior autoridade para tomada de decisão ou alocação de recursos em crises.",
                example: "O analista de helpdesk passa o alerta de malware para a equipe de engenharia forense (Funcional) e avisa o Diretor de Operações porque será necessário desligar o portal de vendas (Hierárquico)."
            },
            {
                term: "Ciclo do Incidente: Contenção, Erradicação, Recuperação e Lições Aprendidas",
                definition: "Após identificar o incidente: 1) Contenção: isolar imediatamente para impedir que o dano se espalhe. 2) Erradicação: eliminar a causa raiz e o malware. 3) Recuperação: restaurar sistemas e voltar a operar. 4) Lições Aprendidas: analisar o ocorrido após o fechamento para melhorar controles e evitar recorrência.",
                example: "Ao detectar uma máquina espalhando ransomware na rede, a primeira reação imediata é desconectar o cabo de rede/isolar a VLAN (Contenção) antes de tentar formatar ou investigar."
            },
            {
                term: "Divulgação Responsável (Responsible Disclosure)",
                definition: "Prática ética onde um pesquisador de segurança descobre uma vulnerabilidade em um produto ou site, notifica a organização de forma privada e confidencial, e aguarda um prazo acordado para que a empresa corrija a falha antes de tornar a descoberta pública.",
                example: "Um especialista encontra uma falha de injeção de SQL no portal de uma livraria, avisa o CISO da empresa em sigilo e espera 60 dias até o patch ser lançado antes de publicar seu artigo técnico."
            },
            {
                term: "Gestão de Fornecedores, SLA e Cadeia de Suprimentos (Subcontratados)",
                definition: "A responsabilidade final pela segurança dos dados NUNCA pode ser terceirizada (permanece sempre com a empresa contratante). Os requisitos de segurança devem constar no Acordo de Nível de Serviço (SLA), e o fornecedor principal deve garantir que qualquer subcontratado (quarteirizado) cumpra exatamente as mesmas políticas.",
                example: "Se uma empresa de software contratada decidir subcontratar programadores externos ou usar uma nuvem terceira, a contratante deve avaliar os novos riscos e exigir cobertura contratual no SLA."
            }
        ]
    },
    {
        category: "9. Continuidade de Negócios (BCP/DRP) e Conformidade Legal (Capítulos 17 e 18)",
        terms: [
            {
                term: "BIA (Business Impact Analysis / Análise de Impacto no Negócio)",
                definition: "Primeiro passo fundamental da gestão de continuidade: identifica os processos críticos da organização, calcula os prejuízos causados por uma interrupção ao longo do tempo e define as prioridades de recuperação (RTO e RPO).",
                example: "Através da BIA, um banco conclui que a parada do sistema de transferências gera prejuízo milionário em 15 minutos, enquanto o sistema interno de avaliação de RH pode ficar parado por 1 semana."
            },
            {
                term: "BCP (Plano de Continuidade de Negócios) vs. DRP (Plano de Recuperação de Desastres)",
                definition: "O BCP (PCN) tem escopo amplo de negócio: garante que as funções essenciais da empresa (atendimento, vendas, logística, pessoas) continuem operando em local alternativo durante a crise. O DRP (PRD) é um subconjunto técnico focado exclusivamente em restaurar a infraestrutura de TI, servidores, redes e bancos de dados.",
                example: "Após uma inundação na sede, o DRP guia a equipe de TI para subir os servidores na nuvem reserva, enquanto o BCP transfere os atendentes comerciais para trabalhar em uma filial."
            },
            {
                term: "RTO (Recovery Time Objective) vs. RPO (Recovery Point Objective)",
                definition: "RTO (olhar para a frente no tempo): tempo máximo tolerável que um sistema ou processo pode ficar fora do ar após o desastre até ser restaurado. RPO (olhar para trás no tempo): volume máximo de perda de dados tolerável medido em tempo (define a frequência mínima dos backups).",
                example: "Se o desastre ocorre às 14h, um RPO de 2 horas exige que os dados de até as 12h estejam salvos; um RTO de 4 horas exige que o sistema volte a funcionar até as 18h."
            },
            {
                term: "Locais Alternativos: Cold Site, Warm Site, Hot Site e Hotsite Móvel",
                definition: "Cold Site (Frio): sala vazia só com energia e refrigeração (recuperação leva dias/semanas). Warm Site (Morno): possui servidores e rede instalados, mas exige restaurar os backups mais recentes (leva horas/dias). Hot Site (Quente): espelhado em tempo real, pronto para assumir em minutos. Hotsite sob demanda (Móvel): unidades móveis (caminhões/contêineres equipados com data center) enviadas ao local em caso de sinistro.",
                example: "Para atender a um RTO de 10 minutos e RPO zero, a empresa mantém um Hot Site com replicação síncrona em outra cidade."
            },
            {
                term: "Estratégias de Backup: Completo (Full), Incremental e Diferencial",
                definition: "1) Full (Completo): copia todos os dados e limpa o archive bit (backup lento, restauração mais rápida com 1 mídia). 2) Incremental: copia apenas o alterado desde o ÚLTIMO backup de qualquer tipo (backup mais rápido e econômico, mas restauração mais lenta pois exige o Full + todos os incrementais em ordem). 3) Diferencial: copia tudo o que mudou desde o último Full (restauração exige apenas 2 mídias: o último Full + o último Diferencial).",
                example: "Com Full no domingo e Incrementais de segunda a sexta, se o servidor quebrar na quinta de manhã, você precisará obrigatoriamente da fita de domingo + segunda + terça + quarta."
            },
            {
                term: "Privacidade, Dados Pessoais (GDPR/LGPD) e Monitoramento de Funcionários",
                definition: "Dados pessoais pertencem ao indivíduo (titular) e só podem ser coletados para finalidades legítimas, explícitas e com retenção limitada. Quanto ao monitoramento de e-mail e internet corporativa pelos empregadores, a literatura EXIN determina que é permitido desde que exista uma política/código de conduta claro e os funcionários sejam previamente informados de que o monitoramento pode ocorrer.",
                example: "A empresa bloqueia sites maliciosos e audita o tráfego da rede interna legalmente porque todos os colaboradores assinaram ciência na Política de Uso Aceitável ao serem contratados."
            }
        ]
    }
];