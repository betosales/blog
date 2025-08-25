---
title: Introdução e primeiros passos a linguagem Python
description: Conheça a história do Python, sua evolução ao longo dos anos e aprenda os primeiros passos para começar a programar.
publishDate: 2025-08-22
updatedDate: 2025-08-22 19:17
tags:
    - fundamentos
    - programação
    - python
    - iniciante
draft: false
seriesId: fundamentos-python
orderInSeries: 1
---
Se você chegou aqui, provavelmente já ouviu falar que Python é uma das linguagens mais usadas no mundo.  
Mas por que isso aconteceu? Foi sorte, moda ou mérito técnico?

---

## Um pouco de história

O Python nasceu em **1989**, quando **Guido van Rossum** trabalhava no **CWI (Centrum Wiskunde & Informatica)**, na Holanda.  
Ele queria criar uma linguagem tão fácil de escrever quanto o inglês, mas sem abrir mão de recursos poderosos.  

O nome “Python” não vem da cobra: Guido era fã do grupo de comédia **Monty Python**. É por isso que exemplos clássicos de código usam nomes como `spam` e `eggs`.

Linha do tempo rápida:

- **1991** → Python 0.9.0 (funções, exceções e módulos já estavam lá).  
- **2000** → Python 2.0 (introduz list comprehensions e coleta de lixo).  
- **2008** → Python 3.0 (grande ruptura: Unicode nativo, `print()` como função, revisão de várias inconsistências).  
- **2020** → Python 2 é oficialmente descontinuado. Python 3 é o padrão.  

Hoje, o Python é mantido pela **Python Software Foundation (PSF)** e está no top 3 do ranking **TIOBE** de linguagens mais usadas.

---

## Por que Python decolou?

- **Sintaxe limpa**: não exige ponto e vírgula, chaves ou excesso de símbolos.  
- **Curva de aprendizado baixa**: o primeiro programa roda em minutos.  
- **Comunidade gigante**: milhões de pacotes no PyPI.  
- **Versatilidade**: ciência de dados, IA, web, automação, DevOps.  
- **Empresas usam**: Google, Netflix, Instagram, Spotify e muitas outras.

---

## Instalando Python

1. Baixe em [python.org/downloads](https://www.python.org/downloads/)  
2. Após instalar, verifique:

```bash
python3 --version
# ou
python --version
```

3. Crie um ambiente virtual (boa prática desde o início):

```bash
python3 -m venv .venv
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\Activate.ps1 # Windows
```

---

## REPL: experimentando sem medo

O REPL (Read-Eval-Print Loop) é a “calculadora turbinada” do Python.

```bash
python3
```

Dentro dele:

```python
print("Olá, Python!")
2 + 2
len("Fundamentos")
```

Esse modo é ótimo para testar ideias sem criar arquivos.

---

## Seu primeiro programa

Crie um arquivo chamado `hello.py`:

```python
print("Olá, mundo! Meu primeiro programa em Python.")
```

Rode:

```bash
python3 hello.py
```

Simples assim. A partir daqui, o céu é o limite.

---

## Conclusão

Python não ficou famoso por acaso. A mistura de **história, comunidade e design inteligente** o transformou em uma das linguagens mais importantes da era digital.  
Nos próximos capítulos desta série, vamos aprofundar em conceitos fundamentais: começando com **variáveis e tipos de dados**.

---

> Dica: experimente rodar o REPL agora mesmo e brincar com `print(2 * 10)` ou `len("Python")`. Quanto mais cedo você mexer no código, mais rápido o aprendizado se fixa.