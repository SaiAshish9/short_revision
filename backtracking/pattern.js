function naive(txt, pat) {
    const m = pat.length
    const n = txt.length
    // console.log(pat,txt,m,n)
    for (let i = 0; i <= n - m; i++) {
        let j
        for (j = 0; j < m; j++) {
            if (txt[i + j] != pat[j])
                break;
        }
        if (j == m)
            console.log("pattern found at:" + i)
    }
}

const txt = "AABAACAADAABAAABAA"
const pat = "AABA"
naive(txt, pat)

// O(m*n)