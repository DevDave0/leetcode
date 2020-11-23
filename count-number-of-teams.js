let numTeams = (A, ans = 0) => {
    let N = A.length;
    for (let i = 0; i < N; ++i)
        for (let j = i + 1; j < N; ++j)
            for (let k = j + 1; k < N; ++k)
                if ((A[i] < A[j] && A[j] < A[k]) || (A[i] > A[j] && A[j] > A[k]))
                    ++ans;
    return ans;
};