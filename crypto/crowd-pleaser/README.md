# Crowd pleaser

Poeng: 20

## Beskrivelse

Alles favoritt-krypto er tilbake! Bjarne har kryptert flagget med en 4-byte XOR nøkkel. Klarer du å løse det?

Ciphertext:

```
9049b59b8e48a2a5ae32aced925ec3ed9434a5918c6587
```

## Løsning

Du kan bruke known key attack her. Du vet flagget starter med `PHOENIX`, og nøkkelen er 4 byte lang. Siden du har plaintext og ciphertext, kan du derfor regne fram til hva nøkkelen er.

## Flagg

```
PHOENIX{n3V3R_93T5_OLd}
```