export type Principle = {
  id: number;
  sphere: string;
  title: string;
  statement: string;
  detail: string;
};

export const spheres = [
  "Innere Ordnung",
  "Die Seelenwelt",
  "Die Seelengruppe",
  "Charakter-Alchemie",
  "Die neue Zivilisation"
] as const;

export const principles: Principle[] = [
  {
    id: 1,
    sphere: "Innere Ordnung",
    title: "Unsterbliche Seele",
    statement: "Ich erkenne, dass ich eine unsterbliche Seele bin, die eine menschliche Erfahrung macht.",
    detail:
      "Ich bin nicht mein Körper. Ich bin nicht mein Name, meine Geschichte, meine Rolle. Ich bin eine Seele — ein Wesen aus Licht und Energie, das sich für diese Inkarnation in einen menschlichen Körper eingekleidet hat. Dieser Körper ist mein Werkzeug, nicht mein Wesen. Diese Erkenntnis ist nicht nur ein Gedanke — sie ist die Grundlage, auf der alles andere ruht. Wenn ich vergesse, wer ich bin, kehre ich zu dieser Wahrheit zurück."
  },
  {
    id: 2,
    sphere: "Innere Ordnung",
    title: "Verantwortung",
    statement: "Ich nehme Verantwortung für mein Leben als bewusst gewählte Lernreise.",
    detail:
      "Mein Leben ist kein Zufall. Es ist keine Strafe. Es ist keine blinde Laune des Schicksals. Ich habe dieses Leben — mit all seinen Schwierigkeiten, seinen Gaben, seinen Menschen und seinen Wendungen — vor meiner Inkarnation bewusst gewählt. Das bedeutet nicht, dass alles leicht ist. Es bedeutet, dass alles einen Sinn hat. Und es bedeutet, dass ich die Verantwortung für mein Leben bei mir selbst suche — nicht zuerst außen."
  },
  {
    id: 3,
    sphere: "Innere Ordnung",
    title: "Seelenwissen",
    statement: "Ich vertraue dem inneren Wissen meiner Seele über das Ego hinaus.",
    detail:
      "Mein Ego ist laut. Es urteilt, vergleicht, zweifelt, begehrt. Meine Seele ist leise. Sie weiß. Nicht immer in Worten — oft in Gefühlen, Impulsen, stillen Gewissheiten, die nicht zu erklären sind, aber sich tief richtig anfühlen. Ich lerne, diese beiden Stimmen zu unterscheiden. Und wenn sie in Konflikt stehen, übe ich, der Seele zu vertrauen — auch wenn das Ego protestiert."
  },
  {
    id: 4,
    sphere: "Innere Ordnung",
    title: "Selbstbeobachtung",
    statement: "Ich übe den Weg der Selbstbeobachtung ohne Selbstverurteilung.",
    detail:
      "Ich schaue ehrlich auf mich selbst. Ich sehe meine Muster, meine Schwächen, meine Fehler — nicht um mich zu bestrafen, sondern um mich zu verstehen. Selbstbeobachtung ohne Mitgefühl wird zur Selbstfolter. Mitgefühl ohne Selbstbeobachtung wird zur Selbsttäuschung. Ich brauche beides: den klaren Blick und das warme Herz. Ich bin eine Seele in einem menschlichen Körper — Fehler sind Teil des Lernens, nicht Beweise meines Versagens."
  },
  {
    id: 5,
    sphere: "Innere Ordnung",
    title: "Annahme der Hülle",
    statement:
      "Ich nehme den Körper, die Familie und die Lebensumstände, die ich gewählt habe, als sinnvolle Hülle meiner Seelenreise an.",
    detail:
      "Dieser Körper — mit seinen Stärken und Grenzen. Diese Familie — mit ihrer Liebe und ihren Wunden. Dieses Land, diese Zeit, diese Umstände. Ich habe sie gewählt. Nicht willkürlich, sondern weil sie genau das Lernfeld enthalten, das meine Seele in dieser Inkarnation braucht. Annahme bedeutet nicht, alles gutzuheißen. Sie bedeutet, aufzuhören, gegen die Grundbedingungen meines Lebens zu kämpfen — und stattdessen zu fragen: Was will ich hier lernen?"
  },
  {
    id: 6,
    sphere: "Die Seelenwelt",
    title: "Geistführer",
    statement: "Ich halte die Verbindung zu meinen Geistführern und meiner höheren Seele aufrecht.",
    detail:
      "Ich bin nicht allein. Ich war nie allein. Jede Seele hat Begleiter auf der anderen Seite — Geistführer, die ihren Weg kennen, die sie liebevoll begleiten und die nie eingreifen, ohne gefragt zu werden. Meine höhere Seele — der Teil von mir, der nicht vollständig inkarniert ist — trägt das Wissen des gesamten Weges. Ich pflege diese Verbindung durch Stille, Meditation, Gebet und die Bereitschaft zuzuhören."
  },
  {
    id: 7,
    sphere: "Die Seelenwelt",
    title: "Vergangene Leben",
    statement: "Ich erkenne die Weisheit vergangener Leben als Teil meines Wachstumspfades.",
    detail:
      "Ich bin älter als dieses Leben. Ich habe bereits gelebt — als Mann und als Frau, als Arm und als Reich, in Kulturen und Zeiten, die sich von dieser fundamental unterscheiden. Die Muster, die mich in diesem Leben prägen — tiefe Talente, unerklärliche Ängste, sofortige Verbindungen zu bestimmten Menschen oder Orten — tragen oft die Erinnerung vergangener Leben in sich. Ich begegne diesen Mustern mit Neugier statt mit Ablehnung."
  },
  {
    id: 8,
    sphere: "Die Seelenwelt",
    title: "Inkarnationsplan",
    statement: "Ich vertraue darauf, dass mein Leben vor der Inkarnation sinnvoll geplant wurde.",
    detail:
      "Bevor ich in diesen Körper eintrat, habe ich gemeinsam mit meinen Geistführern und meiner Seelengruppe einen Plan für dieses Leben entworfen. Nicht jeden Detail — der freie Wille bleibt heilig. Aber die großen Themen, die zentralen Begegnungen, die wesentlichen Lektionen — sie wurden bewusst gesetzt. Wenn das Leben mich vor Herausforderungen stellt, die ich nicht verstehe, erinnere ich mich: Es gibt einen größeren Zusammenhang, den mein menschlicher Geist vielleicht nicht vollständig sieht."
  },
  {
    id: 9,
    sphere: "Die Seelenwelt",
    title: "Zwischenwelt",
    statement:
      "Ich anerkenne die Zwischenwelt als eigentliche Heimat meiner Seele — das irdische Leben als bewusst gewählten Aufenthalt.",
    detail:
      "Das Leben zwischen den Leben ist nicht der Tod — es ist das Zuhause. Die Inkarnation ist der Aufenthalt. Ich lebe in diesem Körper wie ein Reisender in einem fremden Land — vollständig präsent, vollständig engagiert, und gleichzeitig wissend, dass ich eine Heimat habe, zu der ich zurückkehren werde. Diese Perspektive verändert alles: Sie nimmt dem Tod seinen Schrecken, dem Leben seinen krampfhaften Ernst und dem Leid seine absolute Endgültigkeit."
  },
  {
    id: 10,
    sphere: "Die Seelenwelt",
    title: "Kosmische Ordnung",
    statement: "Ich erkenne die kosmische Ordnung höherer Wesenheiten an und bette mich vertrauensvoll in sie ein.",
    detail:
      "Es gibt eine Ordnung jenseits meines Verstehens. Newton beschreibt einen Rat höherer Wesenheiten — Seelen von außerordentlicher Reife und Weisheit, die den Inkarnationsprozess begleiten und die Entwicklung der Seelen führen. Ich muss diese Ordnung nicht vollständig verstehen, um ihr zu vertrauen. Wie ein Kind, das nicht alle Entscheidungen seiner Eltern begreift und ihnen dennoch grundlegend vertrauen kann — so bette ich mich in die kosmische Ordnung ein, ohne sie kontrollieren zu müssen."
  },
  {
    id: 11,
    sphere: "Die Seelengruppe",
    title: "Weggefährten",
    statement: "Ich erkenne, dass ich mit bestimmten Seelen durch viele Leben gemeinsam wachse.",
    detail:
      "Es gibt Menschen in meinem Leben, bei denen ich sofort das Gefühl habe: Ich kenne dich. Diese tiefe Vertrautheit ist kein Zufall — sie ist Erinnerung. Meine Seelengruppe ist der Kreis von Seelen, mit denen ich immer wieder inkarniere, in wechselnden Rollen: heute mein Vater, in einem anderen Leben mein Freund, in einem weiteren mein Kind. Diese Seelen sind meine tiefsten Weggefährten — und ich bin es für sie."
  },
  {
    id: 12,
    sphere: "Die Seelengruppe",
    title: "Achtsamkeit in Reibung",
    statement:
      "Ich begegne meinen Seelengeschwistern mit besonderer Achtsamkeit — auch wenn die Begegnung schwierig ist.",
    detail:
      "Nicht alle Seelengeschwister begegnen mir als Freunde. Manche kommen als Herausforderung — als Konflikt, als Schmerz, als tiefe Reibung. Das ist kein Zufall und kein Fehler. Es ist ein bewusstes Arrangement: Diese Seele hat sich bereit erklärt, mir eine schwierige Lektion zu geben — aus Liebe, nicht aus Feindschaft. Ich begegne auch schwierigen Menschen mit dieser Möglichkeit im Hinterkopf."
  },
  {
    id: 13,
    sphere: "Die Seelengruppe",
    title: "Beziehungslektionen",
    statement: "Ich verstehe, dass meine engsten Beziehungen oft die tiefsten Seelenlektionen tragen.",
    detail:
      "Mein Partner, meine Kinder, meine Eltern, meine engsten Freunde — sie sind nicht zufällig in meinem Leben. Sie sind die Menschen, mit denen ich die intensivsten Lektionen vereinbart habe. Deshalb sind die engsten Beziehungen oft die schwierigsten. Deshalb treffen sie am tiefsten. Deshalb fordern sie am meisten. Ich begegne diesen Beziehungen nicht als Bürde, sondern als die wichtigsten Lernräume meines Lebens."
  },
  {
    id: 14,
    sphere: "Die Seelengruppe",
    title: "Gruppenentwicklung",
    statement: "Ich trage bewusst zur Entwicklung unserer gemeinsamen Seelengruppe bei.",
    detail:
      "Mein Wachstum ist nicht nur meins. Wenn ich mich entwickle, entwickle ich mich auch im Namen meiner Seelengruppe — denn wir sind miteinander verwoben. Wenn ich eine Lektion lerne, die wir gemeinsam als Gruppe vereinbart haben, entlaste ich auch die anderen. Ich trage diese Verantwortung bewusst: Meine Seelenmeisterschaft ist ein Geschenk nicht nur an mich, sondern an alle, mit denen ich durch die Zeiten reise."
  },
  {
    id: 15,
    sphere: "Charakter-Alchemie",
    title: "Life Review",
    statement:
      "Ich nehme die Überprüfung meines Lebens nicht als Gericht, sondern als liebevolles Lernen wahr — im Tod wie im Leben.",
    detail:
      "Nach dem Tod durchläuft jede Seele einen Life Review — eine vollständige, ungeschönte Betrachtung des gelebten Lebens. Newton beschreibt diesen Prozess nicht als Strafe, sondern als tiefes Lernen: Man erlebt nicht nur die eigenen Handlungen, sondern auch ihre Wirkung auf andere — von innen. Kein Richter urteilt. Die Seele selbst versteht. Ich praktiziere diesen Life Review bereits im Leben: regelmäßige, ehrliche, mitfühlende Selbstbetrachtung — nicht um zu verurteilen, sondern um zu verstehen."
  },
  {
    id: 16,
    sphere: "Charakter-Alchemie",
    title: "Seelenspezialisierung",
    statement:
      "Ich erkenne, dass meine Seele eine Reife und eine Spezialisierung trägt, die mich zu bestimmten Beiträgen beruft.",
    detail:
      "Seelen entwickeln im Laufe vieler Inkarnationen nicht nur allgemeine Reife — sie entwickeln auch Spezialisierungen: bestimmte Talente, Fähigkeiten und Rollen, die sie besonders gut erfüllen können. Heiler, Lehrer, Hüter, Schöpfer, Krieger des Lichts. Ich spüre in mir, wozu meine Seele berufen ist — und ich verfolge diesen Ruf, auch wenn der Weg ungewiss erscheint."
  },
  {
    id: 17,
    sphere: "Charakter-Alchemie",
    title: "Energiehygiene",
    statement: "Ich achte auf die natürliche Energie meiner Seele und pflege sie bewusst im Alltag.",
    detail:
      "Newton beschreibt Seelenenergie als reales Phänomen — als Licht, das klarer oder trüber sein kann, je nach Entwicklungsstand und innerem Zustand. Was trübt meine Energie? Ungelöste Konflikte, Ressentiments, Angst, Sucht, Unehrlichkeit. Was klärt sie? Vergebung, Stille, Liebe, Integrität, Dienst. Ich beobachte meinen energetischen Zustand und pflege ihn aktiv — nicht als esoterisches Konzept, sondern als praktische tägliche Hygiene."
  },
  {
    id: 18,
    sphere: "Charakter-Alchemie",
    title: "Bewusste Inkarnation",
    statement: "Ich weiß, dass jede Inkarnation eine bewusste Wahl war — und lebe sie entsprechend.",
    detail:
      "Ich habe dieses Leben nicht zufällig bekommen. Ich habe es gewählt — mit dem Wissen, was es bringen würde, und dem Willen, daran zu wachsen. Diese Erkenntnis ist keine Entschuldigung für Passivität — sie ist eine Einladung zur vollen Übernahme meines Lebens. Ich lebe diese Inkarnation so vollständig wie möglich: präsent, mutig, offen, engagiert."
  },
  {
    id: 19,
    sphere: "Charakter-Alchemie",
    title: "Lektion im Schmerz",
    statement: "Ich begegne Herausforderungen als bewusst gewählte Lektionen meiner Seele.",
    detail:
      "Wenn das Leben mich bricht, wenn Schmerz kommt, wenn Verlust mich trifft — ich frage nicht zuerst: Warum passiert mir das? Ich frage: Was will ich hier lernen? Das ist keine naive Schönfärberei. Es ist die tiefste verfügbare Perspektive auf menschliches Leid. Nicht jeder Schmerz muss sofort verstanden werden. Aber jeder Schmerz trägt die Möglichkeit einer Lektion in sich — und ich bleibe offen für sie."
  },
  {
    id: 20,
    sphere: "Charakter-Alchemie",
    title: "Mitgefühl",
    statement: "Ich kultiviere Mitgefühl — zuerst für mich selbst, dann für alle anderen.",
    detail:
      "Mitgefühl beginnt innen. Wer sich selbst nicht mit Mitgefühl begegnet, kann anderen kein echtes Mitgefühl schenken — nur Pflicht, Mitleid oder Projektion. Ich übe, mit mir selbst so zu sprechen, wie ich mit einem guten Freund sprechen würde: ehrlich, aber warm. Klar, aber liebevoll. Von diesem inneren Fundament aus wächst echtes Mitgefühl für andere — nicht als Aufopferung, sondern als natürlicher Ausdruck von Fülle."
  },
  {
    id: 21,
    sphere: "Charakter-Alchemie",
    title: "Transformation",
    statement: "Ich transformiere Angst, Urteil und Ego in Verständnis und Liebe.",
    detail:
      "Angst ist der häufigste Zustand des Egos. Urteil ist Angst, die nach außen projiziert wird. Ego ist die Illusion, getrennt und allein zu sein. Ich bekämpfe diese Zustände nicht — Bekämpfung stärkt sie. Ich transformiere sie: indem ich die Angst anschaue, ihre Wurzel verstehe und ihr mit Mitgefühl begegne. Indem ich das Urteil über andere als Spiegel meiner eigenen ungelösten Themen erkenne. Indem ich das Ego als nützliches Werkzeug führe, statt von ihm geführt zu werden."
  },
  {
    id: 22,
    sphere: "Charakter-Alchemie",
    title: "Karma-Auflösung",
    statement:
      "Ich löse ungelöste Muster und Karma aktiv auf — nicht durch Vermeidung, sondern durch bewusstes Durchleben.",
    detail:
      "Karma ist keine Strafe — es ist ungelöste Energie, die nach Abschluss sucht. Diese Energie zeigt sich als Wiederholungsmuster: in Beziehungen, in Konflikten, in Selbstsabotage, in körperlichen Beschwerden. Ich umgehe diese Muster nicht — ich gehe hindurch. Bewusst, mutig, mit Unterstützung wo nötig. Jedes Muster, das ich auflöse, reinigt meine Seelenenergie und befreit mich für den nächsten Schritt."
  },
  {
    id: 23,
    sphere: "Charakter-Alchemie",
    title: "Integrität",
    statement: "Ich handele mit Integrität, denn jede Handlung formt meinen Seelencharakter.",
    detail:
      "Integrität bedeutet: Meine Handlungen stimmen mit meinen Werten überein — auch wenn niemand zuschaut. Auch wenn es unbequem ist. Auch wenn die Lüge einfacher wäre. Jede Handlung hinterlässt eine energetische Signatur in meiner Seele. Kleine Unehrlichkeiten summieren sich genauso wie kleine Akte der Integrität. Ich entscheide mich täglich — in kleinen Momenten — für den Weg der Seele."
  },
  {
    id: 24,
    sphere: "Charakter-Alchemie",
    title: "Freude & Leichtigkeit",
    statement:
      "Ich kultiviere Freude und Leichtigkeit als echten Ausdruck meiner Seele — nicht als Ablenkung, sondern als spirituellen Zustand.",
    detail:
      "Seelenmeisterschaft ist kein ernstes, graues Unterfangen. Newton beschreibt die Zwischenwelt als Ort tiefer Freude, Humor und Leichtigkeit — das ist der natürliche Zustand der Seele. Je mehr ich mich von Ego, Angst und Anhaftung befreie, desto mehr kehrt diese natürliche Freude zurück. Ich kultiviere sie aktiv: durch Spiel, durch Lachen, durch Genuss der einfachen Dinge — als spirituelle Praxis, nicht als Flucht."
  },
  {
    id: 25,
    sphere: "Charakter-Alchemie",
    title: "Innere Sprache",
    statement: "Ich lerne die Sprache meiner Seele: Symbole, Träume, Intuition und innere Bilder.",
    detail:
      "Die Seele spricht nicht in Worten. Sie spricht in Bildern, Gefühlen, Träumen, Synchronizitäten — in der plötzlichen Gewissheit, die keiner Erklärung bedarf. Diese Sprache ist real. Sie ist präzise. Aber sie muss gelernt werden — wie jede andere Sprache. Ich nehme mir Zeit, die Signale meiner Seele zu bemerken, aufzuzeichnen und zu verstehen. Ein Traumtagebuch, ein Symboljournal, stille Reflexion nach bedeutsamen Erlebnissen."
  },
  {
    id: 26,
    sphere: "Charakter-Alchemie",
    title: "Macht der Stille",
    statement: "Ich schaffe Stille, damit die leise Stimme der Seele gehört werden kann.",
    detail:
      "Die Seele flüstert. Das Ego schreit. In einer Welt voller Lärm, Ablenkung und konstanter Stimulation ist Stille eine radikale Praxis. Ich schaffe sie täglich — nicht nur in der formalen Meditation, sondern in bewussten Momenten der Unterbrechung: kein Telefon, keine Musik, keine Ablenkung. Nur ich und das, was in mir ist. In dieser Stille beginnt die Seele zu sprechen."
  },
  {
    id: 27,
    sphere: "Charakter-Alchemie",
    title: "Intuition",
    statement: "Ich vertraue meiner Intuition als direktem Ausdruck meines Seelenwissens.",
    detail:
      "Intuition ist kein irrationales Bauchgefühl — sie ist das Wissen der Seele, das durch den Körper spricht. Wenn ich eine tiefe, ruhige Gewissheit spüre — jenseits von Wunschdenken, jenseits von Angst — dann ist das die Stimme meiner Seele. Ich lerne, sie von den Stimmen des Egos zu unterscheiden. Und ich lerne, ihr zu vertrauen — auch wenn der Verstand Einwände hat."
  },
  {
    id: 28,
    sphere: "Die neue Zivilisation",
    title: "Seele in jedem",
    statement: "Ich erkenne in jedem Menschen eine Seele auf ihrem eigenen Entwicklungsweg.",
    detail:
      "Jeder Mensch, dem ich begegne — der Obdachlose auf der Straße, der aggressive Fremde, der schwierige Kollege, das weinende Kind — ist eine Seele. Eine unsterbliche, ewige Seele, die gerade eine menschliche Erfahrung macht. Diese Seele ist nicht weniger wert als meine. Sie ist nicht weiter von der Quelle entfernt als ich. Sie befindet sich an einem anderen Punkt ihrer Reise — das ist alles. Diese Erkenntnis verändert jeden Blick, jeden Satz, jede Begegnung."
  },
  {
    id: 29,
    sphere: "Die neue Zivilisation",
    title: "Dienst aus Fülle",
    statement: "Ich diene anderen nicht aus Pflicht, sondern aus aufrichtigem Mitgefühl.",
    detail:
      "Dienst, der aus Pflicht entsteht, erschöpft. Dienst, der aus Mitgefühl entsteht, nährt. Ich helfe nicht, um gut dazustehen, um Schuld zu vermeiden oder um Anerkennung zu erhalten. Ich helfe, weil ich verstanden habe, dass wir alle verbunden sind — und dass das Wohl des anderen mein Wohl ist. Dieser Dienst setzt voraus, dass mein eigenes Gefäß voll ist. Ich kann nicht aus dem Leeren schenken."
  },
  {
    id: 30,
    sphere: "Die neue Zivilisation",
    title: "Freier Wille",
    statement:
      "Ich respektiere den freien Willen jeder Seele so tief, dass ich nicht helfe, wo keine Hilfe gefragt ist — auch wenn es schwer fällt.",
    detail:
      "Das ist eines der schwierigsten Gebote. Ich sehe einen Menschen leiden und möchte eingreifen. Ich sehe einen Fehler und möchte korrigieren. Ich sehe einen Weg und möchte ihn zeigen. Aber jede Seele hat das Recht, ihren eigenen Weg zu gehen — auch wenn dieser Weg durch Schmerz führt. Newton beschreibt, dass selbst Geistführer nicht eingreifen, ohne gefragt zu werden. Ich respektiere dieses Prinzip: Ich biete an, ich öffne mich, ich bin verfügbar — aber ich dränge mich nicht auf."
  },
  {
    id: 31,
    sphere: "Die neue Zivilisation",
    title: "Kollektives Feld",
    statement: "Ich trage bewusst zur Entwicklung einer höheren kollektiven Bewusstseinsstufe bei.",
    detail:
      "Meine persönliche Entwicklung ist nicht nur persönlich. Jede Seele, die in Klarheit, Liebe und Integrität lebt, verändert das Feld um sich herum. Ich bin ein Knotenpunkt in einem lebendigen Netz des Bewusstseins. Was ich in mir transformiere, wirkt nach außen — in meine Familie, meinen Freundeskreis, meine Gemeinschaft, die Welt. Ich nehme diese Verantwortung ernst: Meine innere Arbeit ist mein größter Beitrag zur Zivilisation."
  },
  {
    id: 32,
    sphere: "Die neue Zivilisation",
    title: "Verkörpertes Beispiel",
    statement: "Ich lebe als Beispiel dafür, dass Seelenmeisterschaft im Alltag möglich ist.",
    detail:
      "Ich missioniere nicht. Ich predige nicht. Ich überzeuge nicht durch Worte. Ich lebe. Das ist die wirksamste Form des Zeugnisses: ein Leben, das die Gebote nicht beschreibt, sondern verkörpert. Wenn Menschen fragen, was mich trägt, was mich ruhig macht, was mir Kraft gibt — dann teile ich offen. Aber der erste und stärkste Beweis ist das Leben selbst."
  },
  {
    id: 33,
    sphere: "Die neue Zivilisation",
    title: "Vision halten",
    statement: "Ich halte die Vision einer Zivilisation aufrecht, die auf Seelenwachstum gegründet ist.",
    detail:
      "Ich halte eine Vision in mir, die größer ist als mein persönliches Leben: eine Menschheit, die sich erinnert, was sie ist. Eine Zivilisation, die nicht auf Konsum, Kontrolle und Konkurrenz gegründet ist, sondern auf Bewusstsein, Mitgefühl und Wahrheit. Diese Vision ist nicht naiv — sie ist die einzige, die dauerhaft trägt. Ich halte sie lebendig in mir — als inneres Bild, als Gebet, als Lebensrichtung."
  },
  {
    id: 34,
    sphere: "Die neue Zivilisation",
    title: "Einheitsbewusstsein",
    statement:
      "Ich erkenne, dass alle Seelen aus derselben universellen Quelle entstammen — und kehre in meinem Bewusstsein täglich zu dieser Einheit zurück.",
    detail:
      "Am Ende aller Wege steht eine Wahrheit: Wir sind eins. Alle Seelen — ob jung oder alt, ob lichtvoll oder noch tief in Dunkelheit — entstammen derselben universellen Quelle und kehren zu ihr zurück. Die Trennung, die wir erleben, ist real als Erfahrung — und eine Illusion als Wesenswahrheit. Ich kehre täglich zu dieser Einheit zurück: in der Meditation, im Blick auf einen anderen Menschen, im Staunen vor dem Nachthimmel. Dieser Rückkehr ist das Ziel — und der Weg selbst."
  },
  {
    id: 35,
    sphere: "Die neue Zivilisation",
    title: "Lebendige Wahrheit",
    statement:
      "Ich halte mein Weltbild lebendig — ich vertraue dem gegenwärtigen Wissen und bleibe offen für tiefere Wahrheit.",
    detail:
      "Ich halte die Erkenntnisse, auf denen mein Weg gründet, nicht für das letzte Wort der Wahrheit — sondern für das tiefste bisher verfügbare Licht. Ich verfolge neue Forschung, neue Erfahrungen und neue Erkenntnisse mit Offenheit und Neugier. Was sich bewährt, bleibt. Was durch tiefere Wahrheit überholt wird, lasse ich los — ohne Angst, ohne Krampf. Mein Fundament ist nicht ein festes Wissensgebäude, sondern die lebendige Ausrichtung auf Wahrheit selbst."
  }
];
