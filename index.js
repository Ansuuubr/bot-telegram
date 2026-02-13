const { Telegraf, Markup } = require('telegraf');

// Seu token configurado
const bot = new Telegraf('8230654372:AAG1zRcaHNbKbZ4BA1AM_1ZmwWZdgUc_xWI');

// Mensagem inicial ao digitar /start
bot.start((ctx) => {
    const nome = ctx.from.first_name;
    
    ctx.reply(`Olá, ${nome}! 👋\nBem-vindo ao atendimento automatizado da NTEC e Go=Play.\nComo podemos te ajudar hoje?`, 
        Markup.keyboard([
            ['💻 Manutenção (NTEC)', '🕹️ Fliperamas (Go=Play)'],
            ['📍 Localização', '👨‍💻 Falar com Lopes']
        ]).resize()
    );
});

// Resposta para NTEC
bot.hears('💻 Manutenção (NTEC)', (ctx) => {
    ctx.reply('🔧 *NTEC - Assistência Técnica*\n\nRealizamos manutenção em:\n• Notebooks (Limpeza e Reparo)\n• Computadores (Upgrade e Software)\n\nDigite sua dúvida ou mande uma foto do problema!', { parse_mode: 'Markdown' });
});

// Resposta para Go=Play
bot.hears('🕹️ Fliperamas (Go=Play)', (ctx) => {
    ctx.reply('🎮 *Go=Play - Diversão Retrô*\n\nFabricamos Bartops e Fliperamas com sistema Batocera.\n\nQual desses você quer saber mais?\n1. Modelos Disponíveis\n2. Envio para outros estados', { parse_mode: 'Markdown' });
});

// Resposta para Localização
bot.hears('📍 Localização', (ctx) => {
    // Aqui você pode colocar o endereço da sua loja em Campo Grande
    ctx.reply('📍 Estamos localizados em Campo Grande - MS.\n[Link do Google Maps]');
});

// Encaminhamento para você
bot.hears('👨‍💻 Falar com Lopes', (ctx) => {
    ctx.reply('Entendido! Vou avisar o Lopes. Enquanto isso, pode descrever o que precisa?');
    // Aqui poderíamos adicionar uma função para ele te mandar uma mensagem privada avisando do cliente.
});

bot.launch().then(() => {
    console.log("🚀 Bot do Telegram rodando com sucesso!");
});

// Parada amigável para o processo
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
