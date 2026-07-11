const modules = [
  {
    id: "probability", n: "01", title: "Probability without the maze", time: 24, weight: "very high",
    summary: "Events, complements, conditioning, Bayes, independence, and without-replacement sampling.",
    rule: "Write the denominator in words before using Bayes.",
    content: `
      <h2>The 30-second event translation</h2>
      <p>Turn every sentence into events before touching numbers. Use $\\bar A$ for “not $A$”, $A \\cap B$ for “both”, and $A \\cup B$ for “at least one”. Most probability mistakes in these exams are translation mistakes—not arithmetic mistakes.</p>
      <div class="formula">$$P(A \\cup B)=P(A)+P(B)-P(A \\cap B)$$ $$P(A\\mid B)=\\frac{P(A \\cap B)}{P(B)}$$</div>
      <div class="shortcut"><b>FAST TRICK</b>“At least one” almost always invites the complement: $1-P(\\text{none})$.</div>
      <h2>Independence is an equation, not a feeling</h2>
      <p>Events are independent exactly when $P(A \\cap B)=P(A)P(B)$. Mutually exclusive nonzero events are automatically dependent. In tables, independence also gives $P(B\\mid A)=P(B)$, letting you fill missing cells immediately.</p>
      <div class="trap"><b>EXAM TRAP</b>“Drawn randomly” does not mean successive draws are independent. Without replacement → use combinations or conditional probabilities.</div>
      <h2>Bayes in one reliable layout</h2>
      <div class="worked"><b>Pattern: positive medical test</b><ol><li>Name prevalence: $P(D)$.</li><li>Name sensitivity: $P(+\\mid D)$, and false positive: $P(+\\mid \\bar D)$.</li><li>Compute all positives: $P(+)=P(+\\mid D)P(D)+P(+\\mid \\bar D)P(\\bar D)$.</li><li>Wanted fraction: $P(D\\mid +)=\\dfrac{\\text{true positives}}{\\text{all positives}}$.</li></ol></div>
      <h2>Counting: decide replacement first</h2>
      <ul><li>Exactly $k$ successes in $n$ independent trials → Binomial.</li><li>Counts across 3+ categories → Multinomial.</li><li>Sample from a finite population without replacement → Hypergeometric.</li><li>Order matters in a changing process → probability tree.</li></ul>`
  },
  {
    id: "distributions", n: "02", title: "Distribution recognition", time: 28, weight: "very high",
    summary: "Binomial, geometric, Poisson, hypergeometric, uniform, exponential, and normal—chosen by story clues.",
    rule: "Choose the distribution from the experiment, never from the formula list.",
    content: `
      <h2>The recognition dictionary</h2>
      <table class="decision-table"><thead><tr><th>Story</th><th>Model</th><th>Memory hook</th></tr></thead><tbody>
      <tr><td># successes in fixed $n$ independent trials</td><td>$\\operatorname{Bin}(n,p)$</td><td>fixed finish</td></tr>
      <tr><td># trials until first success</td><td>$\\operatorname{Geo}(p)$</td><td>moving finish</td></tr>
      <tr><td># rare events per interval</td><td>$\\operatorname{Pois}(\\lambda)$</td><td>count in space/time</td></tr>
      <tr><td>waiting time with no memory</td><td>$\\operatorname{Exp}(\\lambda)$</td><td>continuous geometric</td></tr>
      <tr><td>sample without replacement</td><td>$\\operatorname{Hypergeom}(N,K,n)$</td><td>finite urn</td></tr>
      <tr><td>equal density on $[a,b]$</td><td>$U(a,b)$</td><td>length ratio</td></tr></tbody></table>
      <h2>What to memorize cold</h2>
      <div class="formula">$$\\operatorname{Bin}:\\ E[X]=np,\\quad \\operatorname{Var}(X)=np(1-p)$$ $$\\operatorname{Geo}:\\ E[X]=\\frac1p,\\quad \\operatorname{Var}(X)=\\frac{1-p}{p^2},\\quad P(X&gt;k)=(1-p)^k$$ $$\\operatorname{Pois}:\\ E[X]=\\operatorname{Var}(X)=\\lambda$$ $$\\operatorname{Exp}:\\ E[X]=\\frac1\\lambda,\\quad \\operatorname{Var}(X)=\\frac1{\\lambda^2},\\quad P(X&gt;t)=e^{-\\lambda t}$$ $$U(a,b):\\ E[X]=\\frac{a+b}{2},\\quad \\operatorname{Var}(X)=\\frac{(b-a)^2}{12}$$</div>
      <div class="shortcut"><b>FAST TRICK</b>If $X$ has CDF $F$ and “success” is $X\\le c$, first compute $p=F(c)$; the number checked until that first success is geometric.</div>
      <div class="trap"><b>PARAMETER TRAP</b>Some notes define $\\operatorname{Geo}$ as failures before success; these exams typically count trials including the success. Check the support before using $E[X]$.</div>
      <h2>Transformations</h2><p>If $Y=aX+b$, then $E[Y]=aE[X]+b$ and $\\operatorname{Var}(Y)=a^2\\operatorname{Var}(X)$. For normal $X$, the transformed $Y$ is also normal. Adding independent normals: add means and add variances—not standard deviations.</p>`
  },
  {
    id: "moments", n: "03", title: "Expectation, variance & correlation", time: 22, weight: "high",
    summary: "Linear combinations, covariance expansion, correlation shortcuts, joint tables, and estimators.",
    rule: "Expectation is linear always. Variance needs covariance unless independence is given.",
    content: `
      <h2>The expansion that unlocks the section</h2>
      <div class="formula">$$\\operatorname{Var}(aX+bY)=a^2\\operatorname{Var}(X)+b^2\\operatorname{Var}(Y)+2ab\\operatorname{Cov}(X,Y)$$ $$\\operatorname{Cov}(aX+bY,cX+dY)=ac\\operatorname{Var}(X)+bd\\operatorname{Var}(Y)+(ad+bc)\\operatorname{Cov}(X,Y)$$</div>
      <p>For independent variables covariance is zero. The reverse is not generally true. Correlation is covariance with units removed:</p>
      <div class="formula">$$\\rho_{X,Y}=\\frac{\\operatorname{Cov}(X,Y)}{\\operatorname{SD}(X)\\operatorname{SD}(Y)}$$</div>
      <div class="shortcut"><b>ZERO-CALC TRICK</b>If $Y=aX+b$ exactly, correlation is $+1$ when $a&gt;0$ and $-1$ when $a&lt;0$. A 2020 exam question collapses instantly this way.</div>
      <h2>Sums that share pieces</h2><p>When $W=X+Y$ and $X,Y$ are independent, $\\operatorname{Cov}(W,X)=\\operatorname{Var}(X)$. Then divide by $\\operatorname{SD}(W)\\operatorname{SD}(X)$. This recurring trick appears in different stories: scores, hits, and total quantities.</p>
      <h2>Bias: take expectation mechanically</h2><p>An estimator $T$ is unbiased for $\\theta$ when $E[T]=\\theta$. Constants remain constants; sample means target $\\mu$; the sample variance with denominator $n-1$ targets $\\sigma^2$.</p>
      <div class="trap"><b>EXAM TRAP</b>The parameter $\\mu$ or $p$ is fixed—it does not have a sampling distribution. The estimator $\\bar X$ or $\\hat p$ does.</div>`
  },
  {
    id: "clt", n: "04", title: "Normal, sampling & CLT", time: 31, weight: "very high",
    summary: "Standardization, sums vs averages, CLT, normal approximations, continuity correction, percentiles.",
    rule: "Write the mean and variance of the exact quantity asked before standardizing.",
    content: `
      <h2>One Z move, used everywhere</h2>
      <div class="formula">$$Z=\\frac{\\text{value}-\\text{mean}}{\\text{standard deviation}}$$</div>
      <p>First name the quantity. If $X_1,\\ldots,X_n$ are iid with mean $\\mu$ and variance $\\sigma^2$:</p>
      <div class="formula">$$S_n=\\sum_{i=1}^nX_i:\\quad E[S_n]=n\\mu,\\quad \\operatorname{Var}(S_n)=n\\sigma^2$$ $$\\bar X:\\quad E[\\bar X]=\\mu,\\quad \\operatorname{Var}(\\bar X)=\\frac{\\sigma^2}{n},\\quad \\operatorname{SE}(\\bar X)=\\frac{\\sigma}{\\sqrt n}$$</div>
      <div class="trap"><b>THE #1 CLT TRAP</b>Sums get standard deviation $\\sigma\\sqrt n$. Averages get $\\sigma/\\sqrt n$. Write $S_n$ or $\\bar X$ in a box before calculating.</div>
      <h2>When approximation is legal</h2><ul><li>If the population is normal, $\\bar X$ is exactly normal for every $n$.</li><li>Otherwise, CLT gives an approximation for sufficiently large $n$.</li><li>For $\\operatorname{Bin}(n,p)$, normal approximation needs $np$ and $n(1-p)$ comfortably large.</li></ul>
      <div class="shortcut"><b>CONTINUITY CORRECTION</b>For integer $X$: $P(X\\ge35)$ becomes $P(Y&gt;34.5)$; $P(X\\le35)$ becomes $P(Y&lt;35.5)$; $P(X=35)$ uses $[34.5,35.5]$.</div>
      <h2>Percentiles run $Z$ backward</h2><p>If $P(X\\le x_p)=p$ for $X\\sim N(\\mu,\\sigma^2)$, then $x_p=\\mu+z_p\\sigma$. “Top $10\\%$” means the 90th percentile, not $z_{0.1}$.</p>`
  },
  {
    id: "estimation", n: "05", title: "Confidence intervals & sample size", time: 32, weight: "very high",
    summary: "Mean/proportion intervals, margin of error, reverse-engineering intervals, and minimum n.",
    rule: "Every interval is $\\text{estimate}\\pm\\text{critical value}\\times\\text{standard error}$.",
    content: `
      <h2>The universal interval skeleton</h2>
      <div class="formula">$$\\text{point estimate}\\ \\pm\\ \\text{critical value}\\times\\operatorname{SE}$$</div>
      <table class="decision-table"><thead><tr><th>Target</th><th>Use</th><th>SE</th></tr></thead><tbody><tr><td>$\\mu$, $\\sigma$ known</td><td>$z$</td><td>$\\sigma/\\sqrt n$</td></tr><tr><td>$\\mu$, $\\sigma$ unknown, normal</td><td>$t_{n-1}$</td><td>$s/\\sqrt n$</td></tr><tr><td>$p$</td><td>$z$</td><td>$\\sqrt{\\hat p(1-\\hat p)/n}$</td></tr><tr><td>paired difference</td><td>one-sample $t$ on $D$</td><td>$s_D/\\sqrt n$</td></tr></tbody></table>
      <h2>Reverse-engineer any interval</h2><p>Midpoint $=$ estimate. Half the length $=$ margin of error. Then divide by the critical value to recover standard error, or solve for $s$ or $n$. This shortcut repeatedly appears in the recent papers.</p>
      <div class="formula">$$\\text{center}=\\frac{L+U}{2},\\qquad \\text{margin}=\\frac{U-L}{2}$$</div>
      <h2>Minimum sample size</h2><p>Solve the margin inequality for $n$ and <b>always round up</b>. For a proportion with no pilot estimate, use $p(1-p)=0.25$—the worst case.</p>
      <div class="formula">$$\\text{mean:}\\quad n\\ge\\left(\\frac{z^*\\sigma}{d}\\right)^2$$ $$\\text{proportion:}\\quad n\\ge\\frac{(z^*)^2p(1-p)}{d^2}$$</div>
      <div class="trap"><b>WORDING TRAP</b>“Interval length $\\le 0.1$” means margin $d\\le0.05$. The exam offers the answer you get by forgetting to halve it.</div>`
  },
  {
    id: "testing", n: "06", title: "Hypothesis tests that never blur", time: 38, weight: "very high",
    summary: "$H_0/H_1$, tail direction, $p$-values, Type I/II, power, and the CI-test bridge.",
    rule: "The claim determines $H_1$; $H_1$ determines the tail.",
    content: `
      <h2>The five-line ritual</h2><ol><li>Define the population parameter.</li><li>Write $H_0$ and $H_1$ with direction.</li><li>Choose statistic and check assumptions.</li><li>Compute statistic and $p$-value.</li><li>Compare $p$-value to $\\alpha$; conclude in the story's language.</li></ol>
      <div class="formula">$$p\\text{-value}\\le\\alpha\\ \\Longrightarrow\\ \\text{reject }H_0$$ $$p\\text{-value}&gt;\\alpha\\ \\Longrightarrow\\ \\text{do not reject }H_0$$</div>
      <div class="shortcut"><b>FREE POINT</b>Changing $\\alpha$ never changes the $p$-value. It only changes the decision threshold.</div>
      <h2>Tails without guessing</h2><ul><li>“increased / greater” → right tail.</li><li>“decreased / less” → left tail.</li><li>“changed / different” → two tails.</li></ul>
      <p>If Excel gives a two-tail $p$-value and the requested one-sided direction agrees with the sign of $t$, halve it. If the sign points the wrong way, the one-tail $p$-value is larger than $0.5$.</p>
      <h2>Errors and power</h2><div class="formula">$$\\text{Type I: reject true }H_0;\\quad P(\\text{Type I})=\\alpha$$ $$\\text{Type II: do not reject false }H_0;\\quad P(\\text{Type II})=\\beta$$ $$\\text{Power}=1-\\beta$$</div>
      <div class="trap"><b>LANGUAGE TRAP</b>“Accept $H_0$” is too strong. Say “do not reject $H_0$.” Lack of evidence is not proof of equality.</div>
      <h2>The confidence-interval bridge</h2><p>For a two-sided test at $\\alpha$, reject $\\theta=\\theta_0$ exactly when the matching $(1-\\alpha)$ confidence interval excludes $\\theta_0$.</p>`
  },
  {
    id: "twosample", n: "07", title: "Two samples & Excel output", time: 34, weight: "high",
    summary: "Paired vs independent, equal variances, difference of means, and output-table reconstruction.",
    rule: "Same person twice means one sample of differences—not two samples.",
    content: `
      <h2>Pick the design before the test</h2><table class="decision-table"><thead><tr><th>Data design</th><th>Correct object</th></tr></thead><tbody><tr><td>before/after on same units</td><td>$D_i=X_i-Y_i$; one-sample $t$</td></tr><tr><td>matched pairs</td><td>$D_i$; one-sample $t$</td></tr><tr><td>separate unrelated groups</td><td>two-sample $t$</td></tr><tr><td>known population variances</td><td>two-sample $z$</td></tr></tbody></table>
      <div class="formula">$$\\operatorname{Var}(\\bar X-\\bar Y)=\\frac{\\sigma_X^2}{n_X}+\\frac{\\sigma_Y^2}{n_Y}\\qquad\\text{(independent samples)}$$</div>
      <h2>Excel reconstruction</h2><ul><li><b>$t$ Stat</b> carries the direction.</li><li><b>two-tail $p$</b> is twice the agreeing one-tail $p$.</li><li><b>df</b> for paired test is number of pairs $-1$.</li><li><b>Pooled variance</b> appears only under the equal-variance assumption.</li></ul>
      <div class="shortcut"><b>PAIRING PAYOFF</b>$\\operatorname{Var}(X-Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)-2\\operatorname{Cov}(X,Y)$. Strong positive within-pair correlation shrinks noise dramatically.</div>
      <div class="trap"><b>EXAM TRAP</b>Two columns in Excel do not automatically mean independent samples. Read how subjects were collected.</div>`
  },
  {
    id: "regression", n: "08", title: "Regression, ANOVA & $\\chi^2$", time: 40, weight: "very high",
    summary: "Simple regression identities, significance, incomplete ANOVA tables, goodness-of-fit, and degrees of freedom.",
    rule: "In simple regression, the slope $t$-test and regression $F$-test tell the same story: $F=t^2$.",
    content: `
      <h2>Simple regression core</h2>
      <div class="formula">$$\\hat y=b_0+b_1x$$ $$b_1=\\frac{S_{xy}}{S_{xx}},\\qquad b_0=\\bar y-b_1\\bar x$$ $$R^2=\\frac{SSR}{SST}=1-\\frac{SSE}{SST},\\qquad r=\\operatorname{sign}(b_1)\\sqrt{R^2}$$</div>
      <p>$R^2$ is the fraction of variation in $Y$ explained by the linear model. It is not “the probability the model is correct.” $MSE=SSE/(n-2)$ estimates $\\sigma^2$.</p>
      <h2>Rebuild the ANOVA table</h2><div class="formula">$$SST=SSR+SSE$$ $$df:\\quad 1,\\ n-2,\\ n-1$$ $$MSR=\\frac{SSR}{1},\\qquad MSE=\\frac{SSE}{n-2}$$ $$F=\\frac{MSR}{MSE}=t^2$$</div>
      <div class="shortcut"><b>FAST TRICK</b>If you know $R^2$ and the slope sign, get $r$ instantly. If you know $F$, get $|t|=\\sqrt F$. These conversions bypass half a page of work.</div>
      <h2>$\\chi^2$ goodness-of-fit</h2><p>Compute expected counts $E_i=np_i$, combine categories if expected counts are too small, then:</p>
      <div class="formula">$$\\chi^2=\\sum_i\\frac{(O_i-E_i)^2}{E_i}$$ $$df=(\\#\\text{ final categories})-1-(\\#\\text{ parameters estimated from data})$$</div>
      <div class="trap"><b>DEGREES-OF-FREEDOM TRAP</b>Estimating $\\lambda$ for a Poisson model costs one $df$. Combining tail categories changes the category count.</div>`
  }
];

const questions = [
  { topic:"Probability", q:"$A$ and $B$ are mutually exclusive with $P(A)=0.3$ and $P(B)=0.4$. Are they independent?", o:["Yes, because their intersection is empty","No, because $0\\ne0.3\\times0.4$","Yes, because their probabilities sum below $1$","Not enough information"], a:1, e:"For independence, $P(A\\cap B)$ must equal $P(A)P(B)=0.12$. Mutual exclusivity gives $0$, so nonzero disjoint events are dependent." },
  { topic:"Distributions", q:"Products are inspected until the first defective item. Each item is independently defective with probability $0.08$. Which model fits the number inspected?", o:["Binomial","Poisson","Geometric","Hypergeometric"], a:2, e:"The stopping time is the first success (defective), so the count including that item is $\\operatorname{Geo}(0.08)$." },
  { topic:"CLT", q:"$X$ has mean $12$ and standard deviation $5$. For $100$ independent observations, what are the mean and standard deviation of their sum?", o:["$12$ and $0.5$","$1200$ and $50$","$1200$ and $500$","$12$ and $50$"], a:1, e:"For a sum: $E[S]=n\\mu=1200$ and $\\operatorname{SD}(S)=\\sigma\\sqrt n=5\\times10=50$." },
  { topic:"Normal approximation", q:"To approximate $P(X\\ge35)$ for an integer-valued binomial $X$ with a normal $Y$, which boundary is correct?", o:["$P(Y\\ge35)$","$P(Y\\ge35.5)$","$P(Y&gt;34.5)$","$P(Y&gt;33.5)$"], a:2, e:"The integer $35$ owns the interval $[34.5,35.5)$, so include it by starting at $34.5$." },
  { topic:"Confidence intervals", q:"A confidence interval is $[4.2,7.8]$. What are the point estimate and margin of error?", o:["$6$ and $3.6$","$6$ and $1.8$","$5.1$ and $1.8$","$7.8$ and $4.2$"], a:1, e:"Midpoint $=(4.2+7.8)/2=6$. Half-length $=(7.8-4.2)/2=1.8$." },
  { topic:"Sample size", q:"You require a proportion confidence interval of total length at most $0.10$. What margin $d$ belongs in the sample-size formula?", o:["$0.10$","$0.05$","$0.20$","$0.01$"], a:1, e:"Total length is $2d$, so $d=0.05$. This exact wording is a recurring distractor." },
  { topic:"Testing", q:"A test produced $p\\text{-value}=0.08$. What happens if $\\alpha$ changes from $0.05$ to $0.10$?", o:["$p$-value decreases","$p$-value increases","$p$-value stays $0.08$; the decision changes","Both stay unchanged"], a:2, e:"The data and null distribution determine the $p$-value. At $\\alpha=.05$ do not reject; at $\\alpha=.10$ reject." },
  { topic:"Testing", q:"The claim is that the mean waiting time has decreased from $20$ minutes. Which alternative is correct?", o:["$H_1:\\mu\\ne20$","$H_1:\\mu&gt;20$","$H_1:\\mu&lt;20$","$H_1:\\bar x&lt;20$"], a:2, e:"The claim sets a left-tailed population hypothesis. Hypotheses concern $\\mu$, never the observed $\\bar x$." },
  { topic:"Two samples", q:"Weights of the same $10$ people are recorded before and after a diet. Which analysis is correct?", o:["Independent two-sample $z$","Independent two-sample $t$","One-sample $t$ on the $10$ differences","$\\chi^2$ test"], a:2, e:"Repeated measurements are paired. Reduce each person to one difference and run a one-sample $t$ test." },
  { topic:"Excel output", q:"Excel reports two-tail $p=0.075$ and a positive $t$. For $H_1:\\mu_1&gt;\\mu_2$, what is the one-tail $p$-value?", o:["$0.150$","$0.075$","$0.0375$","$0.925$"], a:2, e:"The statistic points in the alternative's direction, so halve the two-sided $p$-value: $0.0375$." },
  { topic:"Regression", q:"A simple regression has $R^2=0.36$ and a negative fitted slope. What is $r$?", o:["$0.36$","$-0.36$","$0.60$","$-0.60$"], a:3, e:"$|r|=\\sqrt{R^2}=0.60$, and correlation has the slope's sign." },
  { topic:"Regression", q:"In simple linear regression, the slope test gives $t=2.4$. What is the regression $F$ statistic?", o:["$1.55$","$2.4$","$4.8$","$5.76$"], a:3, e:"With one predictor, $F=t^2=2.4^2=5.76$." },
  { topic:"Chi-square", q:"A Poisson goodness-of-fit test uses $4$ final categories and estimates $\\lambda$ from the sample. What is $df$?", o:["$4$","$3$","$2$","$1$"], a:2, e:"$df=k-1-m=4-1-1=2$." },
  { topic:"Estimators", q:"Which statement is correct?", o:["The unknown $\\mu$ is normally distributed","An unbiased estimator must equal the parameter in every sample","$E[\\bar X]=\\mu$, so $\\bar X$ is unbiased for $\\mu$","A larger $\\alpha$ produces a smaller $p$-value"], a:2, e:"Unbiasedness is an expectation property across repeated samples; an individual estimate need not equal $\\mu$." },
  { topic:"Correlation", q:"If $Y=3X-7$ exactly and $\\operatorname{Var}(X)&gt;0$, then $\\operatorname{Corr}(X,Y)$ equals:", o:["$0$","$1$","$3$","It depends on $\\operatorname{Var}(X)$"], a:1, e:"A perfect positive linear transformation has correlation $+1$; scale and shift do not change it." }
];

const practiceBanks = {
  probability: [
    { q:"Given $P(A)=0.55$, $P(B)=0.40$, and $P(A\\cap B)=0.20$, find $P(A\\cup B)$.", o:["$0.35$","$0.75$","$0.95$","$1.15$"], a:1, e:"Use inclusion–exclusion: $0.55+0.40-0.20=0.75$." },
    { q:"A disease has prevalence $0.01$. Sensitivity is $0.90$ and the false-positive rate is $0.01$. Approximately what is $P(D\\mid +)$?", o:["$0.083$","$0.476$","$0.900$","$0.990$"], a:1, e:"True positives are $0.9(0.01)=0.009$; all positives are $0.009+0.01(0.99)=0.0189$. Thus $P(D\\mid +)=0.009/0.0189\\approx0.476$." },
    { q:"If $P(A)=0.30$ and $P(B)=0.40$, what intersection would make $A$ and $B$ independent?", o:["$0$","$0.10$","$0.12$","$0.70$"], a:2, e:"Independence requires $P(A\\cap B)=P(A)P(B)=0.30\\cdot0.40=0.12$." },
    { q:"A committee of $4$ is sampled from $20$ people, of whom $7$ support a proposal. Which expression gives exactly $3$ supporters?", o:["$\\binom73(7/20)^3(13/20)$","$\\dfrac{\\binom73\\binom{13}1}{\\binom{20}4}$","$\\binom43(7/20)^3(13/20)$","$1-(13/20)^4$"], a:1, e:"Sampling is without replacement, so use the hypergeometric count: favorable committees divided by all committees." },
    { q:"Independent events satisfy $P(A)=0.7$ and $P(B)=0.6$. Find $P(A^c\\cap B^c)$.", o:["$0.12$","$0.18$","$0.42$","$0.88$"], a:0, e:"Complements remain independent: $P(A^c)P(B^c)=0.3\\cdot0.4=0.12$." }
  ],
  distributions: [
    { q:"A die is rolled until the first six appears. Which distribution models the number of rolls?", o:["$\\operatorname{Bin}(6,1/6)$","$\\operatorname{Geo}(1/6)$","$\\operatorname{Pois}(6)$","$U(1,6)$"], a:1, e:"The finish time moves and stops at the first success, so the model is geometric." },
    { q:"If $X\\sim\\operatorname{Geo}(0.25)$ counts trials including the success, find $P(X&gt;3)$.", o:["$0.25^3$","$0.75^2$","$0.75^3$","$1-0.75^3$"], a:2, e:"More than three trials means the first three all fail: $(1-p)^3=0.75^3$." },
    { q:"Calls arrive according to $X\\sim\\operatorname{Pois}(4)$ per hour. What are $E[X]$ and $\\operatorname{Var}(X)$?", o:["$4,2$","$4,4$","$2,4$","$4,16$"], a:1, e:"For a Poisson random variable, both the mean and variance equal $\\lambda$." },
    { q:"Waiting time is exponential with mean $5$ minutes. What is the rate $\\lambda$?", o:["$5$","$1/5$","$1/25$","$25$"], a:1, e:"For $X\\sim\\operatorname{Exp}(\\lambda)$, $E[X]=1/\\lambda$, so $\\lambda=1/5$." },
    { q:"If $X\\sim U(2,8)$, what is $\\operatorname{Var}(X)$?", o:["$1/2$","$3$","$6$","$12$"], a:1, e:"$\\operatorname{Var}(X)=(8-2)^2/12=36/12=3$." }
  ],
  moments: [
    { q:"If $E[X]=4$, what is $E[3X-5]$?", o:["$7$","$9$","$12$","$17$"], a:0, e:"Expectation is linear: $3E[X]-5=12-5=7$." },
    { q:"Suppose $\\operatorname{Var}(X)=4$, $\\operatorname{Var}(Y)=9$, and $\\operatorname{Cov}(X,Y)=2$. Find $\\operatorname{Var}(X+Y)$.", o:["$11$","$13$","$15$","$17$"], a:3, e:"$4+9+2(2)=17$. Covariance contributes twice for a sum." },
    { q:"If $Y=-2X+10$ exactly and $\\operatorname{Var}(X)&gt;0$, what is $\\rho_{X,Y}$?", o:["$-2$","$-1$","$0$","$1$"], a:1, e:"An exact linear relation has correlation magnitude $1$; the negative slope gives $-1$." },
    { q:"Independent $X,Y$ have variances $5$ and $7$. Let $W=X+Y$. Find $\\operatorname{Cov}(W,X)$.", o:["$0$","$5$","$7$","$12$"], a:1, e:"$\\operatorname{Cov}(X+Y,X)=\\operatorname{Var}(X)+\\operatorname{Cov}(Y,X)=5+0$." },
    { q:"Which estimator is unbiased for $\\sigma^2$ under the usual iid assumptions?", o:["$\\frac1n\\sum(X_i-\\bar X)^2$","$\\frac1{n-1}\\sum(X_i-\\bar X)^2$","$\\bar X^2$","$\\frac1n\\sum X_i^2$"], a:1, e:"The correction from $n$ to $n-1$ makes the sample variance unbiased for $\\sigma^2$." }
  ],
  clt: [
    { q:"Independent observations have mean $10$ and standard deviation $3$. For $S_{25}=\\sum_{i=1}^{25}X_i$, what are the mean and standard deviation?", o:["$10,0.6$","$250,15$","$250,75$","$25,15$"], a:1, e:"A sum has mean $25(10)=250$ and standard deviation $3\\sqrt{25}=15$." },
    { q:"For the same population, what is the standard error of $\\bar X$ when $n=25$?", o:["$0.12$","$0.6$","$3$","$15$"], a:1, e:"The average has standard error $\\sigma/\\sqrt n=3/5=0.6$." },
    { q:"Which normal event approximates $P(X\\le20)$ for an integer-valued binomial $X$?", o:["$P(Y&lt;19.5)$","$P(Y&lt;20)$","$P(Y&lt;20.5)$","$P(Y&lt;21)$"], a:2, e:"To include the full integer mass at $20$, move the continuous boundary to $20.5$." },
    { q:"For $X\\sim N(100,15^2)$, approximately what is the $84$th percentile using $z_{0.84}\\approx1$?", o:["$85$","$100$","$115$","$225$"], a:2, e:"Run standardization backward: $x_p=100+1(15)=115$." },
    { q:"Which statement is correct?", o:["CLT makes every individual $X_i$ normal","If the population is normal, $\\bar X$ is exactly normal for any $n$","A sum has standard deviation $n\\sigma$","CLT requires known $\\sigma$"], a:1, e:"Normal populations produce exactly normal sample means. CLT concerns the distribution of sums or averages, not individual observations." }
  ],
  estimation: [
    { q:"A $95\\%$ interval for a mean with known $\\sigma$ uses which critical value?", o:["$z_{0.95}$","$z_{0.975}$","$t_{0.95,n}$","$z_{0.05}$"], a:1, e:"A two-sided $95\\%$ interval leaves $2.5\\%$ in each tail, so use $z_{0.975}$." },
    { q:"An interval is $[12,18]$. What are its estimate and margin?", o:["$12,6$","$15,3$","$15,6$","$18,3$"], a:1, e:"The center is $(12+18)/2=15$ and the half-length is $(18-12)/2=3$." },
    { q:"For a proportion with unknown $p$, $95\\%$ confidence, and margin at most $0.05$, which minimum is correct? Use $z^*=1.96$.", o:["$97$","$196$","$385$","$769$"], a:2, e:"Use the worst case $0.25$: $n\\ge1.96^2(0.25)/0.05^2=384.16$, then round up to $385$." },
    { q:"A normal sample has $n=12$ and unknown population standard deviation. Which critical distribution is used for a mean interval?", o:["$N(0,1)$","$t_{11}$","$t_{12}$","$\\chi^2_{11}$"], a:1, e:"Unknown $\\sigma$ gives a $t$ interval with $n-1=11$ degrees of freedom." },
    { q:"A problem requires total confidence-interval length at most $0.08$. Which margin goes into the sample-size formula?", o:["$0.02$","$0.04$","$0.08$","$0.16$"], a:1, e:"Interval length is twice the margin, so $d=0.08/2=0.04$." }
  ],
  testing: [
    { q:"A researcher claims the population mean has decreased from $50$. Choose the alternative.", o:["$H_1:\\mu=50$","$H_1:\\mu\\ne50$","$H_1:\\mu&lt;50$","$H_1:\\bar X&lt;50$"], a:2, e:"‘Decreased’ gives a left-tailed hypothesis about the population parameter $\\mu$." },
    { q:"A test gives $p=0.032$. What is the decision at $\\alpha=0.05$?", o:["Reject $H_0$","Do not reject $H_0$","Accept $H_0$","Increase the $p$-value"], a:0, e:"Because $0.032&lt;0.05$, reject $H_0$." },
    { q:"The same data are tested at $\\alpha=0.01$ instead. What happens to the $p$-value?", o:["It becomes smaller","It becomes larger","It stays the same","It becomes $0.01$"], a:2, e:"The $p$-value depends on the data and null model, not on the chosen significance level." },
    { q:"Failing to reject a false null hypothesis is which error?", o:["Type I","Type II","Power","Significance"], a:1, e:"A Type II error misses a real effect. Its probability is $\\beta$, and power is $1-\\beta$." },
    { q:"A two-sided test of $H_0:\\mu=10$ at $\\alpha=0.05$ matches which confidence interval rule?", o:["Reject if a $90\\%$ CI contains $10$","Reject if a $95\\%$ CI excludes $10$","Reject if a $99\\%$ CI excludes $0$","Reject if $\\bar X&gt;10$"], a:1, e:"The matching $95\\%$ interval and two-sided $5\\%$ test give the same decision." }
  ],
  twosample: [
    { q:"Blood pressure is measured on the same patients before and after treatment. Which analysis fits?", o:["Two independent proportions","One-sample $t$ on paired differences","Independent pooled $t$","$\\chi^2$ goodness-of-fit"], a:1, e:"Each patient creates one before-minus-after difference, reducing the problem to one sample." },
    { q:"Independent sample means have variances $4/20$ and $9/30$. What is $\\operatorname{Var}(\\bar X-\\bar Y)$?", o:["$0.1$","$0.5$","$1.0$","$13/50$"], a:1, e:"For independent samples, add the variances: $4/20+9/30=0.2+0.3=0.5$." },
    { q:"A paired study contains $18$ complete pairs. What are the $t$ degrees of freedom?", o:["$16$","$17$","$18$","$34$"], a:1, e:"A paired test is a one-sample test on $18$ differences, so $df=18-1=17$." },
    { q:"Excel reports positive $t$ and two-tail $p=0.084$. For the agreeing right-tailed alternative, what is the one-tail $p$?", o:["$0.021$","$0.042$","$0.084$","$0.168$"], a:1, e:"The observed sign agrees with the alternative, so halve the two-sided value: $0.084/2=0.042$." },
    { q:"When is the pooled two-sample $t$ procedure appropriate?", o:["The samples are paired","Both population variances are known","Independent normal samples with equal population variances","Both sample sizes equal $1$"], a:2, e:"Pooling estimates one common variance, so it requires independent samples and the equal-variance assumption." }
  ],
  regression: [
    { q:"A model has $SST=80$ and $SSE=20$. Find $R^2$.", o:["$0.20$","$0.25$","$0.75$","$4.00$"], a:2, e:"$R^2=1-SSE/SST=1-20/80=0.75$." },
    { q:"If $R^2=0.49$ and the fitted slope is negative, what is $r$?", o:["$-0.70$","$-0.49$","$0.49$","$0.70$"], a:0, e:"$|r|=\\sqrt{R^2}=0.70$ and $r$ takes the slope's negative sign." },
    { q:"A simple regression with $n=22$ has $SSE=60$. What is $MSE$?", o:["$2.73$","$3$","$20$","$60$"], a:1, e:"Simple regression uses $n-2=20$ error degrees of freedom: $MSE=60/20=3$." },
    { q:"The slope test gives $t=-2.5$. What is the regression $F$ statistic?", o:["$-6.25$","$-2.5$","$2.5$","$6.25$"], a:3, e:"With one predictor, $F=t^2=(-2.5)^2=6.25$." },
    { q:"A $\\chi^2$ goodness-of-fit test has $6$ final categories and estimates $2$ parameters from the sample. Find $df$.", o:["$2$","$3$","$4$","$5$"], a:1, e:"$df=k-1-m=6-1-2=3$." }
  ]
};

const memoryCards = [
  ["What is the union formula?", "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. Subtract the overlap once."],
  ["Fastest route to “at least one”?", "Use the complement: $1-P(\\text{none})$."],
  ["Exact independence test?", "$P(A\\cap B)=P(A)P(B)$, equivalently $P(A\\mid B)=P(A)$ when $P(B)&gt;0$."],
  ["Bayes denominator?", "All ways the evidence can happen: $\\sum_i P(E\\mid C_i)P(C_i)$."],
  ["Binomial fingerprints?", "Fixed $n$, two outcomes, constant $p$, independent trials. $E[X]=np$; $\\operatorname{Var}(X)=np(1-p)$."],
  ["Geometric tail?", "If $X$ counts trials through first success, $P(X&gt;k)=(1-p)^k$."],
  ["Poisson memory line?", "$E[X]=\\operatorname{Var}(X)=\\lambda$."],
  ["Exponential memory line?", "$E[X]=1/\\lambda$, $\\operatorname{Var}(X)=1/\\lambda^2$, and memoryless."],
  ["Variance of $aX+b$?", "$a^2\\operatorname{Var}(X)$. The shift $b$ disappears."],
  ["Variance of $X+Y$?", "$\\operatorname{Var}(X)+\\operatorname{Var}(Y)+2\\operatorname{Cov}(X,Y)$. Drop covariance only with justification."],
  ["Sum vs average standard error?", "Sum standard deviation $=\\sigma\\sqrt n$. Average standard error $=\\sigma/\\sqrt n$."],
  ["Normal percentile formula?", "$x_p=\\mu+z_p\\sigma$."],
  ["Continuity correction for $X\\ge k$?", "Use the normal boundary $k-0.5$."],
  ["Universal CI skeleton?", "$\\text{estimate}\\pm\\text{critical value}\\times\\text{standard error}$."],
  ["Unknown $\\sigma$, normal mean?", "Use $t$ with $df=n-1$ and $\\operatorname{SE}=s/\\sqrt n$."],
  ["Interval center and margin?", "$\\text{center}=(L+U)/2$; $\\text{margin}=(U-L)/2$."],
  ["Worst-case $p$ for sample size?", "Use $p(1-p)=0.25$ when $p$ is unknown."],
  ["Minimum sample size rounding?", "Always round up."],
  ["Decision from $p$-value?", "Reject $H_0$ iff $p\\text{-value}\\le\\alpha$."],
  ["Does $\\alpha$ change the $p$-value?", "No. $\\alpha$ changes only the reject/do-not-reject decision."],
  ["Type I / Type II?", "Type I: reject true $H_0$ ($\\alpha$). Type II: fail to reject false $H_0$ ($\\beta$)."],
  ["Power?", "$1-\\beta$: probability of rejecting $H_0$ when the alternative is true."],
  ["Paired-data move?", "Create $D_i=X_i-Y_i$, then use a one-sample procedure on $D$."],
  ["Regression decomposition?", "$SST=SSR+SSE$; $R^2=SSR/SST=1-SSE/SST$."],
  ["Correlation from $R^2$?", "$r=\\operatorname{sign}(b_1)\\sqrt{R^2}$."],
  ["Simple regression $F$ and $t$?", "$F=t^2$ for the slope significance test."],
  ["Regression error variance estimate?", "$MSE=SSE/(n-2)$."],
  ["$\\chi^2$ GOF degrees of freedom?", "$k-1-m$, where $m$ parameters were estimated from the sample."]
];

const state = {
  completed: JSON.parse(localStorage.getItem("statace_completed") || "[]"),
  quizBest: Number(localStorage.getItem("statace_quizBest") || 0),
  reviewed: Number(localStorage.getItem("statace_reviewed") || 0),
  memoryIndex: Number(localStorage.getItem("statace_memoryIndex") || 0),
  practiceSolved: JSON.parse(localStorage.getItem("statace_practiceSolved") || "[]"),
  practiceSelections: {},
  sessionAnswers: [], quizIndex: 0, selected: null, examMode: false, timer: null, seconds: 0
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const app = $("#app");
function save(){
  localStorage.setItem("statace_completed", JSON.stringify(state.completed));
  localStorage.setItem("statace_quizBest", state.quizBest);
  localStorage.setItem("statace_reviewed", state.reviewed);
  localStorage.setItem("statace_memoryIndex", state.memoryIndex);
  localStorage.setItem("statace_practiceSolved", JSON.stringify(state.practiceSolved));
}
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast.id); toast.id=setTimeout(()=>t.classList.remove("show"),2200); }
function typeset(root=app){
  if(!window.MathJax?.typesetPromise) return;
  window.MathJax.typesetClear?.([root]);
  window.MathJax.typesetPromise([root]).catch(error=>console.error("MathJax typesetting failed", error));
}
function progress(){ return Math.round((state.completed.length/modules.length)*100); }
function route(){ return location.hash.replace(/^#\//,"") || "dashboard"; }
function go(path){ location.hash=`#/${path}`; }
function pageHead(kicker,title,copy="",action=""){ return `<div class="page-head"><div><span class="eyebrow">${kicker}</span><h1>${title}</h1>${copy?`<p class="lede">${copy}</p>`:""}</div>${action}</div>`; }

function dashboard(){
  const p=progress();
  return `<section class="page">
    <div class="hero"><div class="hero-main"><span class="eyebrow">BUILT FROM 2020—2024 EXAMS</span><h1>Study less.<br>Recognize faster.</h1><p>The exam-first route through Probability & Statistics 094481. Learn the recurring moves, drill the traps, then simulate the pressure.</p><div class="hero-actions"><button class="primary" onclick="continueLearning()">Continue course →</button><button class="secondary" onclick="go('drill')">Quick drill</button></div></div>
    <div class="hero-side"><div class="metric-card"><span>Course mastery</span><strong>${p}%</strong><div class="progress-track"><i style="width:${p}%"></i></div></div><div class="metric-card"><span>Best drill score</span><strong>${state.quizBest}<small style="font-size:18px">/15</small></strong><span>${state.quizBest>=12?'Exam-ready accuracy':'Target: 12+ correct'}</span></div></div></div>
    <div class="grid-3">
      <button class="card priority-card" onclick="go('learn')"><div class="card-top"><span class="tag hot">highest yield</span><span>01</span></div><h3>Run the core path</h3><p>Eight focused modules ordered by prerequisite and exam frequency.</p><span class="arrow">→</span></button>
      <button class="card priority-card" onclick="go('memory')"><div class="card-top"><span class="tag mint">${memoryCards.length} cards</span><span>02</span></div><h3>Memorize the invariants</h3><p>Formulas and decisions that must become automatic under time pressure.</p><span class="arrow">→</span></button>
      <button class="card priority-card" onclick="go('exam')"><div class="card-top"><span class="tag blue">timed</span><span>03</span></div><h3>Take a pressure sprint</h3><p>Mixed questions, hard timer, explanations only after submission.</p><span class="arrow">→</span></button>
    </div>
    <div class="section-title"><div><span class="eyebrow">EXAM DNA</span><h2>What the archive actually rewards</h2><p>Five consecutive academic years reviewed; recent 2024 format is 20 multiple choice questions.</p></div></div>
    <div class="exam-dna"><div class="card"><h3>Recurring blocks across recent papers</h3><div class="bar-list">
      ${[["Inference & tests",96],["Probability & RVs",92],["Regression / ANOVA",86],["CLT & sampling",82],["Intervals / n",76],["Descriptive stats",38]].map(x=>`<div class="bar-row"><span>${x[0]}</span><div class="bar"><i style="width:${x[1]}%"></i></div><b>${x[1]}</b></div>`).join("")}
    </div><div class="card"><div class="card-top"><h3>Audit trail</h3><span class="tag mint">solutions checked</span></div><div class="audit-list"><div><span>Spring 2020 · Moed A</span><b>✓</b></div><div><span>Spring 2021 · Moed A</span><b>✓</b></div><div><span>Winter/Spring 2022 · Moed A</span><b>✓</b></div><div><span>Winter/Spring 2023 · Moed A</span><b>✓</b></div><div><span>Winter/Spring 2024 · Moed A</span><b>✓</b></div></div><p class="source-note">Priority scores are an instructional synthesis of recurrence and point leverage, not official course weights.</p></div></div>
  </section>`;
}

function learn(){
  return `<section class="page">${pageHead("THE CORE PATH","Eight modules. Forty applications.","Learn the recurring move, then apply it immediately in five focused exercises before moving on.",`<button class="secondary" onclick="go('sheet')">Open cheat sheet</button>`)}
  <div class="module-list">${modules.map(m=>{const solved=state.practiceSolved.filter(k=>k.startsWith(`${m.id}:`)).length;return `<button class="module-row ${state.completed.includes(m.id)?'done':''}" onclick="openLesson('${m.id}')"><span class="module-number">${state.completed.includes(m.id)?'✓':m.n}</span><span class="module-copy"><h3>${m.title}</h3><p>${m.summary}</p></span><span class="module-meta">${solved}/5 exercises · ${m.weight}</span><span class="module-arrow">→</span></button>`}).join("")}</div></section>`;
}

function practiceBlock(moduleId){
  const bank=practiceBanks[moduleId] || [];
  const solvedCount=bank.filter((_,i)=>state.practiceSolved.includes(`${moduleId}:${i}`)).length;
  return `<section class="practice-lab"><div class="practice-head"><div><span class="eyebrow">APPLY IT NOW</span><h2>Practice lab</h2><p>Commit to an answer before revealing the reasoning.</p></div><div class="practice-score"><strong id="practiceScore-${moduleId}">${solvedCount}/${bank.length}</strong><span>mastered</span></div></div><div class="progress-track practice-track"><i id="practiceBar-${moduleId}" style="width:${bank.length?solvedCount/bank.length*100:0}%"></i></div>
  <div class="practice-list">${bank.map((q,qi)=>{const key=`${moduleId}:${qi}`,solved=state.practiceSolved.includes(key);return `<div class="practice-card ${solved?'solved':''}" id="practice-${moduleId}-${qi}" data-checked="${solved?'true':'false'}" data-correct="${solved?'true':'false'}"><div class="practice-number">${String(qi+1).padStart(2,'0')}</div><div class="practice-content"><span class="tag ${qi<2?'mint':qi<4?'blue':'hot'}">${qi<2?'warm-up':qi<4?'apply':'exam move'}</span><h3>${q.q}</h3><div class="practice-options">${q.o.map((o,oi)=>`<button class="practice-option ${solved&&oi===q.a?'correct':''}" ${solved?'disabled':''} onclick="selectPractice('${moduleId}',${qi},${oi})"><span>${String.fromCharCode(65+oi)}</span>${o}</button>`).join('')}</div><div class="practice-feedback ${solved?'show':''}" id="practiceFeedback-${moduleId}-${qi}"><strong>${solved?'Mastered — here is the move:':''}</strong>${solved?q.e:''}</div><button class="tiny-button practice-check" id="practiceCheck-${moduleId}-${qi}" ${solved?'disabled':''} onclick="checkPractice('${moduleId}',${qi})">${solved?'Mastered ✓':'Check answer'}</button></div></div>`}).join('')}</div></section>`;
}

function lesson(id){
  const m=modules.find(x=>x.id===id) || modules[0];
  return `<section class="page">${pageHead(`MODULE ${m.n} · ${m.time} MIN`,m.title,m.summary,`<button class="secondary" onclick="go('learn')">← All modules</button>`)}
  <div class="lesson-layout"><article class="card lesson-body">${m.content}${practiceBlock(m.id)}<div class="section-title"><div><span class="eyebrow">LOCK IT IN</span><h2>Ready to move on?</h2></div></div><button class="primary complete-button" onclick="completeModule('${m.id}')">${state.completed.includes(m.id)?'Completed ✓':'Mark complete & continue →'}</button></article>
  <aside class="lesson-side"><div class="rule-card"><span class="eyebrow">MEMORIZE THIS RULE</span><strong>${m.rule}</strong></div><div class="card"><h3>Exam protocol</h3><p class="muted">1. Name the variable.<br>2. Name the model.<br>3. Write parameters.<br>4. Compute.<br>5. Sanity-check range and direction.</p></div></aside></div></section>`;
}

function drill(){ if(state.quizIndex>=questions.length){ state.quizIndex=0; state.sessionAnswers=[]; state.examMode=false; } return quizPage(); }
function quizPage(){
  const q=questions[state.quizIndex];
  return `<section class="page quiz-shell">${pageHead(state.examMode?"TIMED EXAM SPRINT":"ADAPTIVE DRILL",state.examMode?"No hints. Trust the ritual.":"One move at a time.",state.examMode?"Explanations unlock when you submit each answer.":"Mixed high-yield questions based on recurring exam patterns.",state.examMode?`<div class="timer"><strong id="timerText">${fmtTime(state.seconds)}</strong><small>remaining</small></div>`:"")}
    <div class="quiz-progress">${questions.map((_,i)=>`<i class="${i<state.quizIndex?'done':i===state.quizIndex?'current':''}"></i>`).join("")}</div>
    <div class="card question-card"><div class="question-meta"><span>${q.topic}</span><span>${state.quizIndex+1} / ${questions.length}</span></div><h2>${q.q}</h2><div class="options">${q.o.map((o,i)=>`<button class="option" data-index="${i}" onclick="selectOption(${i})"><span class="option-letter">${String.fromCharCode(65+i)}</span><span>${o}</span></button>`).join("")}</div><div class="feedback" id="feedback"></div><div class="question-actions"><button class="primary" id="quizAction" onclick="submitAnswer()">Check answer</button></div></div>
  </section>`;
}

function results(){
  const score=state.sessionAnswers.filter(Boolean).length; state.quizBest=Math.max(state.quizBest,score); save();
  return `<section class="page quiz-shell">${pageHead("SESSION COMPLETE",score>=12?"You’re reading the exam well.":"Good data. Now close the gaps.","Accuracy matters, but the real goal is recognizing the correct tool in under 30 seconds.")}
    <div class="card" style="text-align:center;padding:42px"><span class="eyebrow">SCORE</span><strong class="big-number" style="font-size:80px">${score}<small style="font-size:26px">/${questions.length}</small></strong><p class="muted">${score>=12?'Strong. Repeat in exam mode to add time pressure.':'Review the missed topics, then retake—the question order is your retrieval practice.'}</p><div style="display:flex;gap:10px;justify-content:center;margin-top:22px"><button class="primary" onclick="restartQuiz()">Try again</button><button class="secondary" onclick="go('${score>=12?'exam':'learn'}')">${score>=12?'Exam mode':'Review modules'}</button></div></div>
    <div class="section-title"><div><h2>Session map</h2></div></div><div class="grid-3">${questions.map((q,i)=>`<div class="card"><span class="tag ${state.sessionAnswers[i]?'mint':'hot'}">${state.sessionAnswers[i]?'correct':'review'}</span><h3 style="margin-top:12px">${q.topic}</h3><p class="muted" style="font-size:13px">${q.e}</p></div>`).join("")}</div></section>`;
}

function memory(){
  const i=((state.memoryIndex%memoryCards.length)+memoryCards.length)%memoryCards.length, c=memoryCards[i];
  return `<section class="page">${pageHead("SPACED RETRIEVAL","The memory deck","Say the answer out loud before flipping. Rate honestly; friction is the point.",`<button class="secondary" onclick="shuffleMemory()">Shuffle deck</button>`)}
  <div class="deck-layout"><div><div class="flashcard" id="flashcard" onclick="this.classList.toggle('flipped')"><div class="flash-inner"><div class="flash-face"><span class="tag">card ${i+1} / ${memoryCards.length}</span><h2>${c[0]}</h2><span class="flash-hint">Tap card to reveal</span></div><div class="flash-face flash-back"><span class="tag mint">answer</span><p>${c[1]}</p><span class="flash-hint">Tap card to see prompt</span></div></div></div><div class="rating"><button class="again" onclick="event.stopPropagation();rateCard('again')">Again</button><button class="hard" onclick="event.stopPropagation();rateCard('hard')">Hard</button><button class="easy" onclick="event.stopPropagation();rateCard('easy')">Easy</button></div></div>
  <aside class="deck-stats"><div class="card"><span class="eyebrow">REVIEWED</span><strong class="big-number">${state.reviewed}</strong><p>Total retrievals on this device.</p></div><div class="card"><h3>How to use this</h3><p>Do 10 cards before every problem set. “Easy” only if recall was immediate and exact.</p></div></aside></div></section>`;
}

function exam(){
  return `<section class="page">${pageHead("PRESSURE PRACTICE","Make the method survive the clock.","The recent format is three hours for 20 multiple-choice questions. This compact sprint trains the same switching cost.")}
  <div class="card exam-launch"><div><span class="tag hot">22 minute sprint</span><h2 style="margin-top:16px">15 mixed questions.<br>No notes. One pass.</h2><p>Aim for 12/15 or better with at least two minutes left. On a real paper: first pass for automatic questions, second pass for calculations, final pass for sign and tail checks.</p><div class="exam-checks"><span>Probability</span><span>CLT</span><span>Inference</span><span>Regression</span><span>$\\chi^2$</span></div></div><div><div class="timer"><strong>22:00</strong><small>hard stop</small></div><button class="primary" style="width:100%;margin-top:10px" onclick="startExam()">Start sprint →</button></div></div>
  <div class="grid-3" style="margin-top:18px"><div class="card"><span class="eyebrow">PASS 1 · 7 MIN</span><h3 style="margin-top:10px">Harvest</h3><p class="muted">Definitions, model recognition, and one-step formulas. Mark and move if setup is unclear after 30 seconds.</p></div><div class="card"><span class="eyebrow">PASS 2 · 12 MIN</span><h3 style="margin-top:10px">Calculate</h3><p class="muted">Return to multi-step questions. Write the distribution and parameters before calculator input.</p></div><div class="card"><span class="eyebrow">PASS 3 · 3 MIN</span><h3 style="margin-top:10px">Audit</h3><p class="muted">Check tail, complement, sum-vs-average, degrees of freedom, and whether the answer is a probability in $[0,1]$.</p></div></div></section>`;
}

function sheet(){
  const groups=[
    ["Probability",["$P(\\bar A)=1-P(A)$","$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$","$P(A\\mid B)=P(A\\cap B)/P(B)$","Independent $\\Longleftrightarrow P(A\\cap B)=P(A)P(B)$","At least one $=1-P(\\text{none})$"]],
    ["Moments",["$E[aX+b]=aE[X]+b$","$\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}(X)$","$\\operatorname{Var}(X\\pm Y)=\\operatorname{Var}(X)+\\operatorname{Var}(Y)\\pm2\\operatorname{Cov}(X,Y)$","$\\rho=\\operatorname{Cov}/(\\operatorname{SD}\\cdot\\operatorname{SD})$","$Y=aX+b$ exactly $\\Rightarrow\\rho=\\operatorname{sign}(a)$"]],
    ["Distributions",["$\\operatorname{Bin}: E[X]=np;\\ \\operatorname{Var}(X)=np(1-p)$","$\\operatorname{Geo}: E[X]=1/p;\\ \\operatorname{Var}(X)=(1-p)/p^2$", "$\\operatorname{Pois}: E[X]=\\operatorname{Var}(X)=\\lambda$","$\\operatorname{Exp}: E[X]=1/\\lambda;\\ \\operatorname{Var}(X)=1/\\lambda^2$","$U(a,b): E[X]=(a+b)/2;\\ \\operatorname{Var}(X)=(b-a)^2/12$"]],
    ["Sampling / CLT",["Sum: mean $n\\mu$, variance $n\\sigma^2$, standard deviation $\\sigma\\sqrt n$","Average: mean $\\mu$, variance $\\sigma^2/n$, standard error $\\sigma/\\sqrt n$","$\\hat p$: mean $p$, standard error $\\sqrt{p(1-p)/n}$","Continuity: $X\\ge k$ → boundary $k-0.5$","$x_p=\\mu+z_p\\sigma$"]],
    ["Intervals / tests",["$CI=\\text{estimate}\\pm\\text{critical}\\cdot\\operatorname{SE}$","$p\\text{-value}\\le\\alpha\\Rightarrow\\text{reject }H_0$","Unknown-$\\sigma$ mean $\\Rightarrow t_{n-1}$","Length $=2\\times$ margin","Two-sided test $\\Longleftrightarrow$ matching CI excludes null value"]],
    ["Two samples",["Paired $\\Rightarrow$ one-sample $t$ on $D_i$","Independent means: $\\operatorname{Var}(\\bar X-\\bar Y)=\\sigma_X^2/n_X+\\sigma_Y^2/n_Y$","Agreeing one-tail $p=$ two-tail $p/2$","Paired $df=\\#\\text{pairs}-1$","Equal-variance test uses pooled variance"]],
    ["Regression",["$b_1=S_{xy}/S_{xx};\\ b_0=\\bar y-b_1\\bar x$","$SST=SSR+SSE$","$R^2=SSR/SST=1-SSE/SST$","$r=\\operatorname{sign}(b_1)\\sqrt{R^2}$","$MSE=SSE/(n-2);\\ F=MSR/MSE=t^2$"]],
    ["$\\chi^2$ goodness-of-fit",["Expected $E_i=np_i$","$\\chi^2=\\sum_i(O_i-E_i)^2/E_i$","$df=k-1-m$ estimated parameters","Combine categories with tiny expected counts","Right-tailed rejection only"]]
  ];
  return `<section class="page">${pageHead("TWO-PAGE BRAIN","The repeat-until-boring sheet","Print this, rewrite it from memory, then compare. The wording rules matter as much as the equations.",`<button class="secondary" onclick="window.print()">Print sheet</button>`)}<div class="sheet-grid">${groups.map(g=>`<div class="card sheet-card"><h3>${g[0]}</h3><ul>${g[1].map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("")}</div>
  <div class="section-title"><div><span class="eyebrow">FINAL 60-SECOND AUDIT</span><h2>Before handing in</h2></div></div><div class="card"><table class="decision-table"><tbody><tr><td>□ Did I answer the requested tail?</td><td>□ Did I distinguish sum from mean?</td></tr><tr><td>□ Did I use $p_0$ in the test standard error?</td><td>□ Did I halve interval length?</td></tr><tr><td>□ Did I round minimum $n$ upward?</td><td>□ Did estimated parameters reduce $\\chi^2$ degrees of freedom?</td></tr><tr><td>□ Is every probability in $[0,1]$?</td><td>□ Does correlation stay in $[-1,1]$?</td></tr></tbody></table></div></section>`;
}

function render(){
  clearInterval(state.timer); state.timer=null;
  const r=route(), [base,id]=r.split("/");
  $$(".sidebar a").forEach(a=>a.classList.toggle("active",a.dataset.route===base));
  if(base==="lesson") app.innerHTML=lesson(id);
  else if(base==="learn") app.innerHTML=learn();
  else if(base==="drill") app.innerHTML=drill();
  else if(base==="memory") app.innerHTML=memory();
  else if(base==="exam") app.innerHTML=exam();
  else if(base==="sheet") app.innerHTML=sheet();
  else if(base==="results") app.innerHTML=results();
  else app.innerHTML=dashboard();
  typeset();
  app.focus({preventScroll:true}); window.scrollTo(0,0);
  if(state.examMode && base==="drill") runTimer();
}

window.go=go;
window.openLesson=id=>go(`lesson/${id}`);
window.continueLearning=()=>{ const next=modules.find(m=>!state.completed.includes(m.id))||modules[0]; go(`lesson/${next.id}`); };
window.completeModule=id=>{ if(!state.completed.includes(id)){state.completed.push(id);save();toast("Module complete — progress saved");} const idx=modules.findIndex(m=>m.id===id); if(idx<modules.length-1) setTimeout(()=>go(`lesson/${modules[idx+1].id}`),350); else setTimeout(()=>go("drill"),350); };
window.selectPractice=(moduleId,questionIndex,optionIndex)=>{
  const card=$(`#practice-${moduleId}-${questionIndex}`);
  if(!card || card.dataset.checked==="true") return;
  state.practiceSelections[`${moduleId}:${questionIndex}`]=optionIndex;
  $$(".practice-option",card).forEach((option,i)=>option.classList.toggle("selected",i===optionIndex));
};
window.checkPractice=(moduleId,questionIndex)=>{
  const key=`${moduleId}:${questionIndex}`,card=$(`#practice-${moduleId}-${questionIndex}`),q=practiceBanks[moduleId][questionIndex];
  if(!card) return;
  const feedback=$(`#practiceFeedback-${moduleId}-${questionIndex}`),button=$(`#practiceCheck-${moduleId}-${questionIndex}`),options=$$(".practice-option",card);
  if(card.dataset.checked==="true" && card.dataset.correct!=="true"){
    card.dataset.checked="false"; delete state.practiceSelections[key];
    options.forEach(option=>{option.disabled=false;option.classList.remove("selected","correct","wrong")});
    feedback.classList.remove("show"); feedback.innerHTML=""; button.textContent="Check answer"; return;
  }
  const selected=state.practiceSelections[key];
  if(selected===undefined){toast("Choose an answer first");return;}
  const correct=selected===q.a; card.dataset.checked="true"; card.dataset.correct=String(correct);
  options.forEach((option,i)=>{option.disabled=true;if(i===q.a)option.classList.add("correct");else if(i===selected)option.classList.add("wrong")});
  feedback.innerHTML=`<strong>${correct?'Correct — that move is now yours.':'Close the gap, then retry:'}</strong>${q.e}`; feedback.classList.add("show"); typeset(feedback);
  if(correct){
    if(!state.practiceSolved.includes(key))state.practiceSolved.push(key);
    card.classList.add("solved"); button.textContent="Mastered ✓"; button.disabled=true; save();
    const total=practiceBanks[moduleId].length,solved=practiceBanks[moduleId].filter((_,i)=>state.practiceSolved.includes(`${moduleId}:${i}`)).length;
    $(`#practiceScore-${moduleId}`).textContent=`${solved}/${total}`; $(`#practiceBar-${moduleId}`).style.width=`${solved/total*100}%`;
    if(solved===total)toast("Practice lab mastered — excellent retrieval");
  } else button.textContent="Try again";
};
window.selectOption=i=>{ if(state.selected!==null)return; state.selected=i; $$(".option").forEach((el,j)=>el.classList.toggle("selected",j===i)); };
window.submitAnswer=()=>{
  const q=questions[state.quizIndex], btn=$("#quizAction");
  if(btn.dataset.next==="1"){
    state.quizIndex++; state.selected=null;
    if(state.quizIndex>=questions.length){ clearInterval(state.timer); go("results"); } else { app.innerHTML=quizPage(); typeset(); if(state.examMode) runTimer(); }
    return;
  }
  if(state.selected===null){toast("Choose an answer first");return;}
  const correct=state.selected===q.a; state.sessionAnswers[state.quizIndex]=correct;
  $$(".option").forEach((el,j)=>{el.disabled=true;if(j===q.a)el.classList.add("correct");else if(j===state.selected)el.classList.add("wrong");});
  const f=$("#feedback"); f.innerHTML=`<strong>${correct?'Correct — clean read.':'Not this time — fix the trigger.'}</strong>${q.e}`; f.classList.add("show"); typeset(f); btn.textContent=state.quizIndex===questions.length-1?"See results →":"Next question →"; btn.dataset.next="1";
};
window.restartQuiz=()=>{ state.quizIndex=0;state.sessionAnswers=[];state.selected=null;state.examMode=false;go("drill");render(); };
window.rateCard=rating=>{ state.reviewed++; state.memoryIndex=(state.memoryIndex+(rating==="again"?0:1))%memoryCards.length; save(); toast(rating==="again"?"Queued again — good honesty":"Review logged"); app.innerHTML=memory(); typeset(); };
window.shuffleMemory=()=>{ state.memoryIndex=Math.floor(Math.random()*memoryCards.length);save();app.innerHTML=memory();typeset(); };
window.startExam=()=>{ state.quizIndex=0;state.sessionAnswers=[];state.selected=null;state.examMode=true;state.seconds=22*60;go("drill"); };
function fmtTime(sec){ const m=Math.floor(sec/60),s=sec%60;return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`; }
function runTimer(){ clearInterval(state.timer); const el=$("#timerText"); if(el)el.textContent=fmtTime(state.seconds); state.timer=setInterval(()=>{state.seconds--;const t=$("#timerText");if(t)t.textContent=fmtTime(Math.max(0,state.seconds));if(state.seconds<=0){clearInterval(state.timer);toast("Time — scoring completed answers");go("results");}},1000); }

const dialog=$("#searchDialog"), searchInput=$("#searchInput"), resultsEl=$("#searchResults");
function showSearch(){dialog.showModal();searchInput.value="";resultsEl.innerHTML=`<p class="muted" style="padding:12px">Type a topic, formula, or exam trap.</p>`;setTimeout(()=>searchInput.focus(),30);}
$("#searchButton").addEventListener("click",showSearch);
searchInput.addEventListener("input",()=>{const term=searchInput.value.toLowerCase().trim();if(!term){resultsEl.innerHTML="";return;}const hits=modules.filter(m=>(m.title+m.summary+m.content+m.rule).toLowerCase().includes(term));resultsEl.innerHTML=hits.length?hits.map(m=>`<button class="search-hit" type="button" onclick="document.querySelector('#searchDialog').close();openLesson('${m.id}')"><b>${m.title}</b><small>${m.summary}</small></button>`).join(""):`<p class="muted" style="padding:12px">No match. Try “tail”, “sample size”, or “paired”.</p>`;typeset(resultsEl);});
document.addEventListener("keydown",e=>{if(e.key==="/"&&!dialog.open&&document.activeElement.tagName!=="INPUT"){e.preventDefault();showSearch();}});
$("#resetButton").addEventListener("click",()=>{if(confirm("Reset all course progress and scores on this device?")){localStorage.removeItem("statace_completed");localStorage.removeItem("statace_quizBest");localStorage.removeItem("statace_reviewed");localStorage.removeItem("statace_memoryIndex");localStorage.removeItem("statace_practiceSolved");location.reload();}});
window.addEventListener("hashchange",render);
render();
