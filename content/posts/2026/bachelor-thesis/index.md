---
title: "Thesis: Simulating Rowhammer Attacks on Encrypted Memory"
tags: ["thesis", "research", "security", "rowhammer"]
date: "2026-07-21"
type: "post"
showTableOfContents: false
---

In the beginning 2026 I did my bachelor's thesis in cooperation with the [Institute of Information Security](https://www.isec.tugraz.at/) at TU Graz.
I am happy that I was now able to complete it and would also like to thank my supervisor **Lukas Lamster**.
He truly did an excellent job by sharing valuable insights and giving me guidance using his expertise.

> Read the full thesis here: <a href="simulating-rowhammer-attacks-on-encryped-memory.pdf" data-cold>Simulating Rowhammer Attacks on Encrypted Memory</a>

# Abstract
Rowhammer attacks remain a serious threat to modern computing systems, especially in cloud environments where victims may share hardware with attackers.
While memory encryption protects the confidentiality of data in memory, it is unclear whether encryption without integrity protection can effectively defend against Rowhammer-induced memory corruption.

This work presents a simulation-based analysis of Rowhammer attacks against encrypted but unauthenticated memory.
The evaluation focuses on x86 systems and analyzes how Rowhammer-induced bit flips propagate under different encryption modes.
Evaluated encryption modes in this work are Cipher Block Chaining (CBC), Counter (CTR), and Xor-Encrypt-Xor (XEX).
The results show that Rowhammer-induced bit flips can still produce valid corrupted page table entries (PTEs) with significant probability.
CBC mode yields success probabilities between 20% and 65%, CTR mode between 64% and 99%, and XEX mode between 0.1% and 50%.
Our proposed simulator generates random PTEs, encrypts them, injects bit flips, and evaluates whether the resulting corrupted PTEs remain valid after decryption.

Overall, the findings demonstrate that pure memory encryption alone is not a sufficient defense against Rowhammer attacks on page tables.
Additional integrity protection or dedicated Rowhammer mitigation mechanisms remain necessary to provide reliable security.

