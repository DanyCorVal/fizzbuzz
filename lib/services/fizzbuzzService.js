class FizzbuzzService {
    
    static applyValidationInExplorer({name, score}) {
        var trick = score % 3 === 0 && score % 5 === 0 ? 'FIZZBUZZ' : (score % 3 === 0 ? 'FIZZ' : (score % 5 === 0 ? 'BUZZ' : 1))
        return { name: name, score: score, trick: trick } 
    }
} 

module.exports = FizzbuzzService;