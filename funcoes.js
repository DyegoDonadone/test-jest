const funcoes = {

    somarDoisValores: (v1, v2) => v1 + v2,
    sempreNulo: () => null,
    codigoValido: function (codigo) {
        if (codigo >= 100 && codigo <= 999)
            return true;
        else
            return false;
    }
}

module.exports = funcoes;