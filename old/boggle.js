/*Boggle JS*/
function init(){
	document.getElementById("start").disabled = false;
	document.getElementById("enter").disabled = true;
	document.getElementById("finished").disabled = true;
}

function words(x){
	switch (x){
		case 1:
			var word = new Array("naxsepnoi","expansion","saponine","epinaos","pannose","pension","pinones","saponin","senopia","spinone","anions","aspine","axions","axones","eonian","inanes","insane","inspan","nasion","nosean","opines","paeons","panino","pannes","peason","pennia","pennis","pianos","pinnae","pinnas","pinons","ponies","sannie","sannop","sienna","soapie","spinae","xenias","xenons","aeons","anion","anise","annex","aspen","axion","axone","axons","eosin","exons","expos","inane","isnae","napes","neaps","neons","nines","nipas","nixes","noise","nonas","nones","nonis","noxes","opens","opine","opsin","oxies","paeon","pains","paise","panes","panne","paseo","paxes","peans","peins","penis","penna","penni","peons","piano","pians","pinas","pines","pinna","pinon","pions","pixes","poise","pones","poxes","psion","psoae","psoai","saine","senna","sepia","sneap","snipe","snoep","sonne","spain","spane","spean","spina","spine","xenia","xenon","aeon","aine","ains","anes","anis","anno","anns","anon","apes","apex","apos","apse","apso","axes","axis","axon","eans","eina","eoan","eons","epos","exon","expo","inns","ions","isna","nain","nane","nans","naoi","naos","nape","naps","neap","neon","neps","nies","nine","nipa","nips","nixe","noes","nona","none","noni","nope","nose","ones","onie","open","opes","oxen","oxes","pain","pais","pane","pans","pase","pean","peas","pein","peni","pens","peon","peso","pian","pias","pies","pina","pine","pins","pion","pise","piso","poas","pois","pone","pons","pose","sain","sane","saxe","sean","sena","sien","sine","sipe","snap","snip","soap","sone","spae","span","spie","spin","ain","ais","ane","ani","ann","ans","ape","apo","asp","axe","ean","eas","ens","eon","exo","inn","ins","ion","ios","iso","nae","nan","nap","nas","nep","nie","nip","nis","nix","non","nos","nox","oes","ois","one","ons","ope","ops","ose","pan","pas","pax","pea","pen","pes","pia","pie","pin","pis","pix","poa","poi","pos","pox","psi","sae","sai","san","sap","sax","sea","sei","sen","sex","sin","sip","six","son","sop","sox","spa","xis","ae","ai","an","as","ax","ea","en","es","ex","in","io","is","na","ne","no","oe","oi","on","op","os","ox","pa","pe","pi","po","si","so","xi");
			break;		
		case 2:
			var word = new Array("roerspsg","progress","gropers","grosers","grosser","pressor","prosers","gorses","groper","gropes","groser","ogress","porers","porges","posers","posser","prores","proser","proses","repros","rogers","ropers","rosser","sogers","spores","sprogs","ergos","gesso","goers","gores","gorps","gorse","gosse","grope","gross","ogres","pesos","porer","pores","porge","poser","poses","posse","press","progs","prore","prose","pross","regos","repos","repro","roger","roper","ropes","rores","roses","segos","serrs","soger","sorer","sores","speos","spore","sprog","egos","epos","ergo","ergs","eros","errs","geos","gers","goer","goes","gore","gorp","goss","ogre","opes","ores","oses","pegs","peso","pore","pose","poss","prog","pros","rego","regs","reos","repo","reps","roes","rope","rore","rose","sego","segs","seps","serr","sers","sogs","sops","sore","ego","erg","err","ers","ess","geo","ger","goe","gor","gos","oes","ope","ops","ore","ors","ose","peg","per","pes","pos","pre","pro","reg","reo","rep","res","roe","seg","ser","sog","sop","sos","er","es","go","oe","op","or","os","pe","po","re","so");
			break;
		case 3:
			var word = new Array("esfisoid","ossified","iodises","diesis","fossed","iodise","defis","doses","eidos","feods","fides","fidos","foids","fosse","issei","seifs","sides","defi","defo","deif","desi","dies","difs","diss","does","dose","doss","dsos","feds","feis","feod","fess","fido","fids","foes","foid","foss","ides","isos","odes","oses","seif","seis","side","sies","sods","def","dei","die","dif","dis","doe","dof","dos","dso","eds","efs","ess","fed","fes","fid","fie","foe","ide","ids","ifs","ios","iso","ode","ods","oes","ois","ose","sed","sei","sif","sis","sod","sos","de","di","do","ed","ef","es","fe","id","if","io","is","od","oe","of","oi","os","si","so");
			break;
		case 4:
			var word = new Array("smiriten","interims","minister","misinter","entrism","interim","miniest","minster","minters","mintier","miriest","mistier","remints","rimiest","termini","estrin","imines","inerts","insert","inters","intime","intire","merits","miners","minier","minter","mirins","mister","miters","mitier","mitres","niters","nitres","remint","remits","seniti","sinter","smiter","smriti","stimie","timers","tinier","tinies","triens","trines","emirs","emits","imine","inerm","inert","inset","inter","intis","items","meins","meint","meris","merit","metis","miens","miner","mines","minis","mints","mires","mirin","miser","miter","mites","mitis","mitre","neist","nerts","nisei","niter","nites","nitre","reins","reist","remit","rents","resin","resit","riems","rimes","rines","rinse","risen","rites","senti","serin","sient","siren","smite","snirt","stein","stern","stime","stire","strim","teins","terms","terns","tiers","timer","times","tines","tires","tries","trims","trine","trins","emir","emit","erns","erst","inti","ires","iris","isit","item","mein","ment","meri","mets","mien","mine","mini","mint","mire","miri","mirs","mise","mist","mite","nest","nets","nies","nims","nisi","nite","nits","rein","reis","rems","rens","rent","rest","rets","riem","rime","rims","rine","rins","rise","rite","rits","seir","semi","sent","sien","simi","sine","sire","siri","site","smir","smit","snit","stem","sten","stie","stim","stir","tein","tems","tens","term","tern","tier","ties","time","tine","tins","tire","tres","trie","trim","trin","ems","ens","erm","ern","ers","est","ins","ire","ism","its","men","mes","met","mir","mis","net","nie","nim","nis","nit","rei","rem","ren","res","ret","rim","rin","rit","sei","sen","ser","set","sim","sin","sir","sit","sri","ten","tes","tie","tin","tis","em","en","er","es","et","in","is","it","me","mi","ne","re","si","st","te","ti");
			break;
		case 5:
			var word = new Array("tmcenpotine","incompetent","pentimento","competent","impotence","contempt","entoptic","imponent","impotent","neotenic","ointment","penitent","pentomic","pimenton","pinecone","pointmen","centime","centimo","compete","contemn","content","eminent","emption","entomic","entopic","entotic","epitome","meconin","mention","metopic","minette","miocene","nepotic","nominee","nonette","nonetti","onetime","pentice","pentito","picotee","pimento","pontine","potence","potteen","tonemic","tonetic","tontine","totemic","cement","cenote","coempt","conine","connie","emetic","emetin","entice","icemen","impone","incent","incept","income","intent","intone","metope","mitten","nettie","nincom","nocent","noetic","notice","optime","pecten","pectin","peinct","penmen","petite","picene","picote","piecen","piemen","piment","pinene","pinnet","pitmen","pitten","poetic","pointe","ponent","pontic","pontie","poteen","potent","potmen","ptotic","tenpin","tentie","tinmen","tinpot","tiptoe","titmen","toneme","tonite","topmen","cento","comet","compt","comte","conin","conne","conte","copen","ctene","emote","ettin","impot","inept","meint","mento","metic","mince","monie","monte","moten","motet","motte","nempt","nepit","netop","niece","niton","noint","nomen","nomic","nonce","nonet","octet","oncet","ontic","opine","optic","pence","penie","penne","penni","petit","petti","petto","picot","piece","pinon","pinot","pinto","piton","point","ponce","potin","tempi","tempo","tempt","tenet","tenne","tenno","tenon","timon","tinct","tonic","tonne","topee","topic","totem","cent","cepe","cete","cine","cion","cite","cito","coin","coit","come","comp","cone","coni","conn","cope","cote","cott","eine","emic","emit","empt","epic","eten","etic","icon","into","item","meet","mein","mene","meno","ment","mete","mice","mico","mien","mine","mino","mint","mite","mitt","moit","mope","mote","moti","mott","neem","neep","nemn","nene","neon","nete","nett","nice","nine","nite","nome","none","noni","nope","note","nott","oint","omen","omit","once","onie","open","otic","peen","pein","pene","peni","pent","peon","pice","piet","pine","pint","pion","poem","poet","pome","pone","pont","pote","pott","teem","teen","tein","teme","temp","tene","tent","tete","tice","time","tine","tint","tipt","tite","toit","tome","tone","tope","topi","tote","cee","cep","cit","con","cop","cot","eco","een","eme","emo","ene","eon","ice","imp","inn","ion","mee","men","met","mic","moc","moe","moi","mon","mop","mot","nee","nep","net","nie","nim","nip","nit","nom","non","not","one","ope","opt","pec","pee","pen","pet","pic","pie","pin","pit","poi","pot","tec","tee","ten","tet","tic","tie","tin","tip","tit","toc","toe","tom","ton","top","tot","ee","em","en","et","in","io","it","me","mi","mo","ne","no","oe","oi","om","on","op","pe","pi","po","te","ti","to");
			break;
		case 6:
			var word = new Array("dabpeaatl","adaptable","baldpate","ablated","datable","palated","abated","ablate","alated","albata","atabal","balata","palate","plated","tabled","talpae","abate","abled","ablet","adapt","adept","alaap","alapa","alate","aldea","apted","baaed","baled","bated","bepat","blade","blate","bleat","datal","dealt","delta","labda","lated","leapt","lepta","padle","palea","paled","palet","pated","pedal","pelta","petal","plate","plead","pleat","tabla","table","talea","talpa","taped","tepal","abed","abet","able","alae","alap","alba","albe","aped","atap","baal","bade","bael","bald","bale","bate","bead","beat","belt","beta","blad","blae","blat","bled","blet","daal","dale","dalt","data","date","deal","debt","delt","lade","late","lead","leap","leat","lept","paal","pale","pate","peal","peat","peba","pela","pelt","plat","plea","pleb","pled","taal","taed","tael","tala","tale","tapa","tape","tead","teal","tela","teld","tepa","aal","aba","ala","alb","ale","alp","alt","ape","apt","ate","baa","bad","bal","bap","bat","bed","bel","bet","dab","dae","dal","dap","deb","del","eat","eld","elt","eta","lab","lad","lap","lat","lea","led","lep","let","pad","pal","pat","pea","ped","pel","pet","tab","tad","tae","tap","tea","ted","tel","aa","ab","ad","ae","al","at","ba","be","da","de","ea","ed","el","et","la","pa","pe","ta","te");
			break;
		case 7:
			var word = new Array("voneucder","uncovered","coendure","verecund","coenure","covered","crunode","decurve","encoder","encored","overdue","uncover","cendre","cerned","conder","conure","corned","corvee","coured","curved","decern","devore","devour","doucer","encode","encore","endure","enduro","enured","nerved","oeuvre","ovened","overed","recode","redone","reduce","rounce","uncoer","uncord","undoer","unrove","vender","vendor","vendue","ceder","cered","cerne","coden","coder","coned","cored","cornu","coude","courd","coure","coved","coven","cover","credo","creed","crone","crude","cruve","cured","curve","cuvee","decor","deuce","devon","donee","doner","doree","douce","doven","dover","drone","drove","dunce","duroc","educe","ender","endue","enure","erned","erode","erven","nerve","never","nuder","oncer","ounce","recon","redon","revue","ronde","rouen","round","roved","roven","runed","undee","under","unred","urdee","uredo","urned","venue","vodun","cede","cere","cero","code","coed","cond","cone","cord","core","corn","cour","cove","cred","cree","crud","crue","cued","curd","cure","curn","deco","deen","deer","deev","dene","dere","dern","dero","derv","doen","doer","done","dore","douc","doun","dour","dove","dree","duce","dune","dure","durn","duro","ecod","ecru","eevn","ered","erev","erne","eruv","euro","even","ever","evoe","need","nerd","neve","node","nude","nurd","once","oner","ourn","oven","over","rede","redo","reed","reen","rend","rode","roed","rone","roue","rove","rude","rued","rund","rune","udon","unce","unco","unde","undo","urde","veer","vend","verd","vrou","cee","cod","con","cor","cru","cud","cue","cur","dee","den","dev","doc","doe","don","dor","due","dun","duo","eco","ecu","een","end","ene","eon","ere","ern","eve","evo","ned","nee","nod","nor","nur","ode","one","orc","ord","ore","oud","our","rec","red","ree","ren","reo","rev","roc","rod","roe","ruc","rud","rue","run","udo","urd","ure","urn","vee","voe","vor","de","do","ed","ee","en","er","ne","no","nu","od","oe","on","or","ou","re","un","ur");
			break;
		case 8:
			var word = new Array("einllmiu","illumine","milline","mullein","illume","limuli","lumine","milieu","millie","mullen","nielli","unlime","ileum","ilium","imine","limen","linum","lumen","mille","ulmin","lien","lieu","lime","limn","line","lune","mein","mell","menu","mien","mile","mill","mine","mini","muil","mule","mull","muni","neum","nill","null","ell","elm","emu","ill","lei","leu","lie","lin","lum","mel","men","meu","mil","mun","nie","nil","nim","ule","uni","el","em","en","in","li","me","mi","mu","ne","nu","um","un");
			break;
	}
	return word;
}

function boggle_init(){
	//init vars
	score = 0;
	var num = Math.floor(Math.random()*5) + 1;
	w_game = new Array; 
	w_bad = new Array;
	w_player = new Array();
	
	//clear out old data
	document.getElementById("result").innerHTML = ("");
	document.getElementById("entries").innerHTML = ("");
	
	w_game = words(num);
	w_mixed = w_game[0];
	
	//game start
	document.getElementById("letters").innerHTML = w_mixed;
	
	document.getElementById("start").disabled = true;
	document.getElementById("enter").disabled = false;
	document.getElementById("finished").disabled = true;
}

function word_entry(){
	var play = prompt("enter a word").toLowerCase();
	w_player.push(play);
	document.getElementById("entries").innerHTML = w_player.toString();
	document.getElementById("finished").disabled = false;
}

function word_check(){
	//check winning score and list bad words
	var c = w_game.length;
	var p = (w_player.length);
	for (var i = 0; i < p; i++){//every word
		var gw = false;
		for (var u = 1; u < c; u++){
			if(w_player[i] == w_game[u]){//every playable word
				score++;
				gw = true;
			}
		}
		if (!gw){
			w_bad.push(w_player[i]);
		}
	}
}

function display_results(){
	word_check();
	document.getElementById("result").innerHTML = 
	("Final Score: " + score + ". <br/><br/> invalid words: <br/>" + w_bad.toString());
	
	document.getElementById("start").disabled = false;
	document.getElementById("enter").disabled = true;
	document.getElementById("finished").disabled = true;
}







