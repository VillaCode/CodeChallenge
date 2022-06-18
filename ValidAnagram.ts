function isAnagram(s: string, t: string): boolean {
    
   
    if (t.length !== s.length) return false;
    const m = {};
    
    for (let c of s) m[c] = (m[c] || 0) + 1;
    for (let c of t) if (!m[c]--) return false;
    return true;
    
    
};