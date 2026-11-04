export type Principle = {
  id: number;
  sphere: string;
  statement: string;
  detail: string;
};

export const spheres = [
  "WER DU BIST",
  "WOHER DU KOMMST",
  "MIT WEM DU REIST",
  "DIE GEGENWART UND DIE INNERE STIMME",
  "WIE DU DEIN LEBEN GESTALTEST",
  "DAS GRÖSSERE BILD",
  "DIE ARBEIT AM CHARAKTER",
  "DIE EINHEIT UND DIE LIEBE",
  "DIE VERBINDUNG ZU ANDEREN",
  "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
  "DIE WISSENSCHAFT DES WACHSTUMS",
  "DAS OFFENE WELTBILD"
] as const;

export const principles: Principle[] = [
  {
    "id": 1,
    "sphere": "WER DU BIST",
    "statement": "Ich erkenne, dass ich eine unsterbliche Seele bin, die eine menschliche Erfahrung macht.",
    "detail": "Ich bin nicht mein Körper. Ich bin nicht mein Name, meine Geschichte, meine Rolle. Ich bin eine Seele — ein Wesen aus Licht und Energie, das sich für diese Inkarnation in einen menschlichen Körper eingekleidet hat. Dieser Körper ist mein Werkzeug, nicht mein Wesen. Diese Erkenntnis ist nicht nur ein Gedanke — sie ist die Grundlage, auf der alles andere ruht. Wenn ich vergesse, wer ich bin, kehre ich zu dieser Wahrheit zurück."
  },
  {
    "id": 2,
    "sphere": "WER DU BIST",
    "statement": "Ich vertraue dem inneren Wissen meiner Seele über das Ego hinaus.",
    "detail": "Mein Ego ist laut. Es urteilt, vergleicht, zweifelt, begehrt. Vieles davon ist gar nicht „ich“ im tiefsten Sinn, sondern das Tier in mir: ein biologisch altes Überlebenssystem aus Instinkt und konditionierter Angst, das auf Status, Sicherheit, Vergleich und Mangel programmiert ist, weil es das Überleben über Jahrtausende gesichert hat. Es ist nicht böse — es ist animalisch, und dies ist sein Wesen. Meine Seele ist leise. Sie weiß. Nicht immer in Worten — oft in Gefühlen, Impulsen, stillen Gewissheiten, die nicht zu erklären sind, aber sich tief richtig anfühlen. Ich lerne, diese beiden Stimmen zu unterscheiden: die eine reaktiv, animalisch, laut; die andere ruhig, wissend, leise. Und wenn sie in Konflikt stehen, übe ich, der Seele zu vertrauen — nicht indem ich das Tier bekämpfe, sondern indem ich es erkenne und führe, auch wenn es protestiert."
  },
  {
    "id": 3,
    "sphere": "WER DU BIST",
    "statement": "Ich erkenne die Göttlichkeit in mir selbst und in allem Leben.",
    "detail": "Ich verstehe mich nicht als getrennt von einer höheren Ordnung, sondern als ihren Ausdruck — genau wie jeder andere Mensch, jedes andere Lebewesen. Diese Erkenntnis ist keine Überheblichkeit, sondern eine Einladung zu Demut, Respekt und Verantwortung zugleich: Was ich anderen antue, tue ich letztlich demselben Leben an, aus dem ich selbst bestehe."
  },
  {
    "id": 4,
    "sphere": "WER DU BIST",
    "statement": "Ich übe den Weg der Selbstbeobachtung ohne Selbstverurteilung.",
    "detail": "Ich schaue ehrlich auf mich selbst. Ich sehe meine Muster, meine Schwächen, meine Fehler — nicht um mich zu bestrafen, sondern um mich zu verstehen. Selbstbeobachtung ohne Mitgefühl wird zur Selbstfolter. Mitgefühl ohne Selbstbeobachtung wird zur Selbsttäuschung. Ich brauche beides: den klaren Blick und das warme Herz. Ich bin eine Seele in einem menschlichen Körper — Fehler sind Teil des Lernens, nicht Beweise meines Versagens."
  },
  {
    "id": 5,
    "sphere": "WOHER DU KOMMST",
    "statement": "Ich halte die Verbindung zu meinen Geistführern und meiner höheren Seele aufrecht.",
    "detail": "Ich bin nicht allein. Ich war nie allein. Jede Seele hat Begleiter auf der anderen Seite — Geistführer, die ihren Weg kennen, die sie liebevoll begleiten und die nie eingreifen, ohne gefragt zu werden. Meine höhere Seele — der Teil von mir, der nicht vollständig inkarniert ist — trägt das Wissen des gesamten Weges. Ich pflege diese Verbindung durch Stille, Meditation, Gebet und die Bereitschaft zuzuhören."
  },
  {
    "id": 6,
    "sphere": "WOHER DU KOMMST",
    "statement": "Ich erkenne die Weisheit vergangener Leben als Teil meines Wachstumspfades.",
    "detail": "Ich bin älter als dieses Leben. Ich habe bereits gelebt — als Mann und als Frau, arm und reich, in Kulturen und Zeiten, die sich von dieser fundamental unterscheiden. Die Muster, die mich in diesem Leben prägen — tiefe Talente, unerklärliche Ängste, sofortige Verbindungen zu bestimmten Menschen oder Orten — tragen oft die Erinnerung vergangener Leben in sich. Ich begegne diesen Mustern mit Neugier statt mit Ablehnung."
  },
  {
    "id": 7,
    "sphere": "WOHER DU KOMMST",
    "statement": "Ich vertraue darauf, dass mein Leben vor der Inkarnation sinnvoll geplant wurde.",
    "detail": "Bevor ich in diesen Körper eintrat, habe ich gemeinsam mit meinen Geistführern und meiner Seelengruppe einen Plan für dieses Leben entworfen. Nicht jedes Detail — der freie Wille bleibt heilig. Aber die großen Themen, die zentralen Begegnungen, die wesentlichen Lektionen — sie wurden bewusst gesetzt. Wenn das Leben mich vor Herausforderungen stellt, die ich nicht verstehe, erinnere ich mich: Es gibt einen größeren Zusammenhang, den mein menschlicher Geist vielleicht nicht vollständig sieht."
  },
  {
    "id": 8,
    "sphere": "WOHER DU KOMMST",
    "statement": "Ich anerkenne die Geistwelt als eigentliche Heimat meiner Seele — das irdische Leben als bewusst gewählten Aufenthalt.",
    "detail": "Das Leben zwischen den Leben ist nicht der Tod — es ist das Zuhause. Die Inkarnation ist der Aufenthalt. Ich lebe in diesem Körper wie ein Reisender in einem fremden Land — vollständig präsent, vollständig engagiert, und gleichzeitig wissend, dass ich eine Heimat habe, zu der ich zurückkehren werde. Diese Perspektive verändert alles: Sie nimmt dem Tod seinen Schrecken, dem Leben seinen krampfhaften Ernst und dem Leid seine absolute Endgültigkeit."
  },
  {
    "id": 9,
    "sphere": "WOHER DU KOMMST",
    "statement": "Ich erkenne die kosmische Ordnung höherer Wesenheiten an und bette mich vertrauensvoll in sie ein.",
    "detail": "Es gibt eine Ordnung jenseits meines Verstehens. Newton beschreibt einen Rat höherer Wesenheiten — Seelen von außerordentlicher Reife und Weisheit, die den Inkarnationsprozess begleiten und die Entwicklung der Seelen führen. Ich muss diese Ordnung nicht vollständig verstehen, um ihr zu vertrauen. Wie ein Kind, das nicht alle Entscheidungen seiner Eltern begreift und ihnen dennoch grundlegend vertrauen kann — so bette ich mich in die kosmische Ordnung ein, ohne sie kontrollieren zu müssen."
  },
  {
    "id": 10,
    "sphere": "MIT WEM DU REIST",
    "statement": "Ich erkenne, dass ich mit bestimmten Seelen durch viele Leben gemeinsam wachse.",
    "detail": "Es gibt Menschen in meinem Leben, bei denen ich sofort das Gefühl habe: Ich kenne dich. Diese tiefe Vertrautheit ist kein Zufall — sie ist Erinnerung. Meine Seelengruppe ist der Kreis von Seelen, mit denen ich immer wieder inkarniere, in wechselnden Rollen: heute mein Vater, in einem anderen Leben mein Freund, in einem weiteren mein Kind. Diese Seelen sind meine tiefsten Weggefährten — und ich bin es für sie."
  },
  {
    "id": 11,
    "sphere": "MIT WEM DU REIST",
    "statement": "Ich begegne meinen Seelengeschwistern mit besonderer Achtsamkeit — auch wenn die Begegnung schwierig ist.",
    "detail": "Nicht alle Seelengeschwister begegnen mir als Freunde. Manche kommen als Herausforderung — als Konflikt, als Schmerz, als tiefe Reibung. Das ist kein Zufall und kein Fehler. Es ist ein bewusstes Arrangement: Diese Seele hat sich bereit erklärt, mir eine schwierige Lektion zu geben — aus Liebe, nicht aus Feindschaft. Ich begegne auch schwierigen Menschen mit dieser Möglichkeit im Hinterkopf.\n\nHinweis — Grenzen und Schutz: Dass ein schwieriger Mensch mein Lehrer sein kann, ist eine Einladung an mich selbst — nie eine Rechtfertigung für Gewalt, Missbrauch oder Demütigung und nie ein Grund, in einer Beziehung zu bleiben, die mich zerstört. Manchmal besteht die Lektion gerade darin, Nein zu sagen, zu gehen und mich zu schützen. Und nie sage ich einem leidenden Menschen, er habe sich sein Leid selbst ausgesucht. Diese Frage darf sich jeder nur selbst stellen, wenn er dafür bereit ist."
  },
  {
    "id": 12,
    "sphere": "MIT WEM DU REIST",
    "statement": "Ich verstehe, dass meine engsten Beziehungen oft die tiefsten Seelenlektionen tragen.",
    "detail": "Mein Partner, meine Kinder, meine Eltern, meine engsten Freunde — sie sind nicht zufällig in meinem Leben. Sie sind die Menschen, mit denen ich die intensivsten Lektionen vereinbart habe. Deshalb sind die engsten Beziehungen oft die schwierigsten. Deshalb treffen sie am tiefsten. Deshalb fordern sie am meisten. Ich begegne diesen Beziehungen nicht als Bürde, sondern als die wichtigsten Lernräume meines Lebens."
  },
  {
    "id": 13,
    "sphere": "MIT WEM DU REIST",
    "statement": "Ich trage bewusst zur Entwicklung unserer gemeinsamen Seelengruppe bei.",
    "detail": "Mein Wachstum ist nicht nur meins. Wenn ich mich entwickle, entwickle ich mich auch im Namen meiner Seelengruppe — denn wir sind miteinander verwoben. Wenn ich eine Lektion lerne, die wir gemeinsam als Gruppe vereinbart haben, entlaste ich auch die anderen. Ich trage diese Verantwortung bewusst: Meine Seelenmeisterschaft ist ein Geschenk nicht nur an mich, sondern an alle, mit denen ich durch die Zeiten reise."
  },
  {
    "id": 14,
    "sphere": "DIE GEGENWART UND DIE INNERE STIMME",
    "statement": "Ich erkenne, dass nur der gegenwärtige Moment wirklich real ist.",
    "detail": "Der Verstand lebt meist in der Erinnerung an Vergangenes oder der Sorge um Zukünftiges — beides existiert nur als Gedanke, nicht als Wirklichkeit. Leid entsteht selten durch das, was gerade geschieht, sondern durch den Widerstand gegen das, was ist. Ich übe, immer wieder in den gegenwärtigen Moment zurückzukehren — nicht als Flucht, sondern als der einzige Ort, an dem Leben, Freude und Klarheit tatsächlich stattfinden."
  },
  {
    "id": 15,
    "sphere": "DIE GEGENWART UND DIE INNERE STIMME",
    "statement": "Ich übe radikale Annahme dessen, was gerade ist, bevor ich handle.",
    "detail": "Widerstand gegen die Gegenwart verbraucht die Energie, die ich für Veränderung bräuchte. Annahme bedeutet nicht Resignation — sie bedeutet, zuerst anzuerkennen, was ist, um von dort aus klar und wirksam zu handeln, statt aus Kampf gegen die Realität selbst."
  },
  {
    "id": 16,
    "sphere": "DIE GEGENWART UND DIE INNERE STIMME",
    "statement": "Ich lerne die Sprache meiner Seele: Symbole, Träume, Intuition und innere Bilder.",
    "detail": "Die Seele spricht nicht in Worten. Sie spricht in Bildern, Gefühlen, Träumen, Synchronizitäten — in der plötzlichen Gewissheit, die keiner Erklärung bedarf. Diese Sprache ist real. Sie ist präzise. Aber sie muss gelernt werden — wie jede andere Sprache. Ich nehme mir Zeit, die Signale meiner Seele zu bemerken, aufzuzeichnen und zu verstehen. Ein Traumtagebuch, ein Symboljournal, stille Reflexion nach bedeutsamen Erlebnissen."
  },
  {
    "id": 17,
    "sphere": "DIE GEGENWART UND DIE INNERE STIMME",
    "statement": "Ich schaffe Stille, damit die leise Stimme der Seele gehört werden kann.",
    "detail": "Die Seele flüstert. Das Ego schreit. In einer Welt voller Lärm, Ablenkung und konstanter Stimulation ist Stille eine radikale Praxis. Ich schaffe sie täglich — nicht nur in der formalen Meditation, sondern in bewussten Momenten der Unterbrechung über den ganzen Tag verteilt: ein Atemzug vor einer Antwort, ein Moment ohne Telefon in der Warteschlange, ein bewusstes Innehalten zwischen zwei Aufgaben. In diesen kleinen Unterbrechungen entsteht oft mehr Klarheit als in einer einzelnen täglichen Sitzung allein. Nur ich und das, was in mir ist. In dieser Stille beginnt die Seele zu sprechen."
  },
  {
    "id": 18,
    "sphere": "DIE GEGENWART UND DIE INNERE STIMME",
    "statement": "Ich vertraue meiner Intuition als direktem Ausdruck meines Seelenwissens.",
    "detail": "Intuition ist kein irrationales Bauchgefühl — sie ist das Wissen der Seele, das durch den Körper spricht. Wenn ich eine tiefe, ruhige Gewissheit spüre — jenseits von Wunschdenken, jenseits von Angst — dann ist das die Stimme meiner Seele. Ich lerne, sie von den Stimmen des Egos zu unterscheiden. Und ich lerne, ihr zu vertrauen — auch wenn der Verstand Einwände hat."
  },
  {
    "id": 19,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich nehme Verantwortung für mein Leben als bewusst gewählte Lernreise.",
    "detail": "Mein Leben ist kein Zufall. Es ist keine Strafe. Es ist keine blinde Laune des Schicksals. Ich habe dieses Leben — mit all seinen Schwierigkeiten, seinen Gaben, seinen Menschen und seinen Wendungen — vor meiner Inkarnation bewusst gewählt. Das bedeutet nicht, dass alles leicht ist. Es bedeutet, dass alles einen Sinn hat. Und es bedeutet, dass ich die Verantwortung für mein Leben bei mir selbst suche — nicht zuerst außen."
  },
  {
    "id": 20,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich nehme den Körper, die Familie und die Lebensumstände, die ich gewählt habe, als sinnvolle Hülle meiner Seelenreise an.",
    "detail": "Dieser Körper — mit seinen Stärken und Grenzen. Diese Familie — mit ihrer Liebe und ihren Wunden. Dieses Land, diese Zeit, diese Umstände. Ich habe sie gewählt. Nicht willkürlich, sondern weil sie genau das Lernfeld enthalten, das meine Seele in dieser Inkarnation braucht. Annahme bedeutet nicht, alles gutzuheißen. Sie bedeutet, aufzuhören, gegen die Grundbedingungen meines Lebens zu kämpfen — und stattdessen zu fragen: Was will ich hier lernen?"
  },
  {
    "id": 21,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich weiß, dass jede Inkarnation eine bewusste Wahl war — und lebe sie entsprechend.",
    "detail": "Ich habe dieses Leben nicht zufällig bekommen. Ich habe es gewählt — mit dem Wissen um seine großen Themen und dem Willen, daran zu wachsen. Diese Erkenntnis ist keine Entschuldigung für Passivität — sie ist eine Einladung zur vollen Übernahme meines Lebens. Ich lebe diese Inkarnation so vollständig wie möglich: präsent, mutig, offen, engagiert."
  },
  {
    "id": 22,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich verstehe mein Leben als einen Prozess bewusster Mitgestaltung durch Gedanken, Worte und Handlungen.",
    "detail": "Meine innere Ausrichtung ist nicht folgenlos. Ich bin nicht nur Zuschauer meines Lebens, sondern wirke aktiv daran mit, was daraus wird — durch das, worauf ich meine Aufmerksamkeit richte, was ich ausspreche, und wie ich handle."
  },
  {
    "id": 23,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich betrachte meine Erfahrungen nicht als richtig oder falsch, sondern als Konsequenzen, aus denen ich lerne.",
    "detail": "Ein Leben ohne die Angst vor moralischem Scheitern ist ein Leben, das freier experimentieren, ehrlicher reflektieren und schneller wachsen kann. Ich frage nicht zuerst: War das gut oder schlecht? Ich frage: Was zeigt mir diese Konsequenz über meine Ausrichtung?"
  },
  {
    "id": 24,
    "sphere": "WIE DU DEIN LEBEN GESTALTEST",
    "statement": "Ich richte meine Gedanken und Worte bewusst auf das, was ich erschaffen möchte, statt auf das, was ich fürchte.",
    "detail": "Wohin meine Aufmerksamkeit über Zeit wandert, dorthin wächst meine Erfahrung. Ich übe, meine innere Sprache — die Gedanken, die ich mir selbst wiederhole — bewusst auf das auszurichten, was ich in meinem Leben wachsen lassen will."
  },
  {
    "id": 25,
    "sphere": "DAS GRÖSSERE BILD",
    "statement": "Ich nehme die Überprüfung meines Lebens nicht als Gericht, sondern als liebevolles Lernen wahr — im Tod wie im Leben.",
    "detail": "Nach dem Tod durchläuft jede Seele einen Life Review — eine vollständige, ungeschönte Betrachtung des gelebten Lebens. Newton beschreibt diesen Prozess nicht als Strafe, sondern als tiefes Lernen: Man erlebt nicht nur die eigenen Handlungen, sondern auch ihre Wirkung auf andere — von innen. Kein Richter urteilt. Die Seele selbst versteht. Ich praktiziere diesen Life Review bereits im Leben: regelmäßige, ehrliche, mitfühlende Selbstbetrachtung — nicht um zu verurteilen, sondern um zu verstehen."
  },
  {
    "id": 26,
    "sphere": "DAS GRÖSSERE BILD",
    "statement": "Ich erkenne, dass meine Seele eine Reife und eine Spezialisierung trägt, die mich zu bestimmten Beiträgen beruft.",
    "detail": "Seelen entwickeln im Laufe vieler Inkarnationen nicht nur allgemeine Reife — sie entwickeln auch Spezialisierungen: bestimmte Talente, Fähigkeiten und Rollen, die sie besonders gut erfüllen können. Heiler, Lehrer, Hüter, Schöpfer, Krieger des Lichts. Ich spüre in mir, wozu meine Seele berufen ist — und ich verfolge diesen Ruf, auch wenn der Weg ungewiss erscheint."
  },
  {
    "id": 27,
    "sphere": "DAS GRÖSSERE BILD",
    "statement": "Ich achte auf meine Energie, meine Schwingung und auf das, womit ich in Resonanz gehe.",
    "detail": "Newton beschreibt die Seele als Energie — als Licht, das klarer oder trüber sein kann, je nach Reife und innerem Zustand. Auch im Alltag spüre ich, dass ich nicht nur denke und handle, sondern schwinge: Manche Menschen, Orte und Tätigkeiten heben mich, andere ziehen mich hinunter. Was trübt meine Energie? Ungelöste Konflikte, Groll, Angst, Sucht, Unehrlichkeit. Was klärt sie? Vergebung, Stille, Liebe, Integrität, Dienst, Musik, Bewegung, Natur. Ich wähle bewusst, womit ich in Resonanz gehe: welche Menschen ich nah an mich lasse, welche Bilder und Worte ich in mich aufnehme, welchen Rhythmus mein Tag hat. Dabei verwechsle ich nicht Unbequemes mit Schädlichem. Die ehrliche Kritik eines Freundes kann mich im ersten Moment hinunterziehen — und doch ist sie ein Geschenk, wenn sie wahr ist. Was mich fordert, fühlt sich oft schwer an und lässt mich wachsen; was mir wirklich schadet, macht mich auf Dauer kleiner, ängstlicher und unfreier. Darum frage ich nicht nur: Wie fühlt sich das jetzt an? Sondern: Kommt es aus Wahrheit und Wohlwollen, und bin ich danach klarer als zuvor? Ich gehe Menschen, die mich ehrlich spiegeln, nicht aus dem Weg, nur weil ihr Spiegel unbequem ist. Und ich weiß, dass meine Schwingung auch auf andere wirkt. Ein ruhiger Mensch beruhigt einen Raum. Ich pflege meine Energie nicht als esoterisches Konzept, sondern als tägliche Hygiene der Seele.\n\nHinweis — Schwingung und Resonanz: Dem Erfinder Nikola Tesla wird der Satz zugeschrieben: „Wenn du die Geheimnisse des Universums verstehen willst, denke in Begriffen von Energie, Frequenz und Schwingung.“ Ob er ihn je so gesagt hat, ist nicht belegt — aber er trifft etwas. In der Physik ist Resonanz ein genau beschriebenes Phänomen: Ein schwingender Körper bringt einen anderen zum Mitschwingen, wenn beide aufeinander abgestimmt sind. Auch der Mensch lebt in messbaren Rhythmen — Herzschlag, Atem, Hirnwellen. Die Forschung zeigt, dass langsames, ruhiges Atmen den Herzrhythmus in einen gleichmäßigen, kohärenten Zustand bringt, dass Gefühle von Mensch zu Mensch überspringen und dass sich die Gehirnaktivität von Menschen, die einander wirklich zuhören, aneinander angleicht.\n\nWenn Alethemora von Schwingung spricht, meint es deshalb zweierlei: die messbaren Rhythmen von Körper und Beziehung — und darüber hinaus ein Bild für die Seele, deren Licht nach den Berichten aus der Geistwelt umso klarer wird, je reifer sie ist. Das Erste ist Wissenschaft, das Zweite Landkarte. Was Alethemora ausdrücklich nicht behauptet: dass man mit „hoher Schwingung“ Gesundheit, Glück oder Reichtum gezielt anzieht, oder dass jemand, dem Schweres widerfährt, „zu niedrig geschwungen“ habe. Solche Gedanken machen Leidende schuldig, und sie widersprechen dem Weg der Liebe."
  },
  {
    "id": 28,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich begegne Herausforderungen als bewusst gewählte Lektionen meiner Seele.",
    "detail": "Wenn das Leben mich bricht, wenn Schmerz kommt, wenn Verlust mich trifft — ich frage nicht zuerst: Warum passiert mir das? Ich frage: Was will ich hier lernen? Das ist keine naive Schönfärberei. Es ist die tiefste verfügbare Perspektive auf menschliches Leid. Nicht jeder Schmerz muss sofort verstanden werden. Aber jeder Schmerz trägt die Möglichkeit einer Lektion in sich — und ich bleibe offen für sie."
  },
  {
    "id": 29,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich kultiviere Mitgefühl — zuerst für mich selbst, dann für alle anderen.",
    "detail": "Mitgefühl beginnt innen. Wer sich selbst nicht mit Mitgefühl begegnet, kann anderen kein echtes Mitgefühl schenken — nur Pflicht, Mitleid oder Projektion. Ich übe, mit mir selbst so zu sprechen, wie ich mit einem guten Freund sprechen würde: ehrlich, aber warm. Klar, aber liebevoll. Von diesem inneren Fundament aus wächst echtes Mitgefühl für andere — nicht als Aufopferung, sondern als natürlicher Ausdruck von Fülle."
  },
  {
    "id": 30,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich transformiere Angst, Urteil und Ego in Verständnis und Liebe.",
    "detail": "Angst ist der häufigste Zustand des Egos. Urteil ist Angst, die nach außen projiziert wird. Das Ego — das Tier in mir — lebt in der Illusion, getrennt und allein zu sein. Ich bekämpfe diese Zustände nicht — Bekämpfung stärkt sie. Ich transformiere sie: indem ich die Angst anschaue, ihre Wurzel verstehe und ihr mit Mitgefühl begegne. Indem ich das Urteil über andere als Spiegel meiner eigenen ungelösten Themen erkenne. Indem ich das Ego als nützliches Werkzeug führe, statt von ihm geführt zu werden."
  },
  {
    "id": 31,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich löse ungelöste Muster und Karma aktiv auf — nicht durch Vermeidung, sondern durch bewusstes Durchleben.",
    "detail": "Karma ist keine Strafe — es ist ungelöste Energie, die nach Abschluss sucht. Diese Energie zeigt sich als Wiederholungsmuster: in Beziehungen, in Konflikten, in Selbstsabotage, in körperlichen Beschwerden. Das heißt nie, dass eine Krankheit selbst verschuldet ist. Ich umgehe diese Muster nicht — ich gehe hindurch. Bewusst, mutig, mit Unterstützung wo nötig. Jedes Muster, das ich auflöse, reinigt meine Seelenenergie und befreit mich für den nächsten Schritt.\n\nHinweis — Die Wandlung: „Was will ich hier lernen?“ ist eine Frage für später, nicht für den ersten Moment des Schmerzes. Bevor Trauma, Trauer oder Wut geistig umgedeutet werden können, müssen sie zuerst vollständig gefühlt und zugelassen werden — nicht überflogen, nicht schöngeredet, nicht vorschnell in eine Lektion verwandelt. Ein Schmerz, der noch nicht durchfühlt wurde, wird durch spirituelle Umdeutung nicht aufgelöst, sondern nur verdeckt, und meldet sich später umso stärker zurück. Seelisches Wachstum beginnt in der Gefühlsarbeit, nicht in der gedanklichen Umdeutung. Geduld mit dem eigenen Schmerz ist keine Umgehung dieses Weges — sie ist sein notwendiger erster Schritt.\n\nErst wenn dieses vollständige Fühlen geschehen ist, öffnet sich der zweite Schritt: nicht mehr die Frage, was mir widerfahren ist, sondern was ich daraus erschaffen will. Welche Gedanken, welche Worte, welche Taten will ich aus dem heraus in die Welt bringen, was ich gerade durchlebt und verstanden habe? Das ist kein Umgehen des Schmerzes, sondern seine Frucht — die Umwandlung von durchfühlter Erfahrung in bewusste Erschaffung, nicht ihr Ersatz."
  },
  {
    "id": 32,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich nutze psychologisches Wissen, um meine emotionalen Muster zu verstehen, statt sie nur zu erleiden.",
    "detail": "Angst, Wut, Rückzug — diese Reaktionen haben Ursachen, die sich erkennen und verändern lassen. Ich behandle meine eigene Psyche nicht als unveränderliches Schicksal, sondern als etwas, das ich mit Geduld und dem richtigen Wissen aktiv gestalten kann."
  },
  {
    "id": 33,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich handele mit Integrität, denn jede Handlung formt meinen Seelencharakter.",
    "detail": "Integrität bedeutet: Meine Handlungen stimmen mit meinen Werten überein — auch wenn niemand zuschaut. Auch wenn es unbequem ist. Auch wenn die Lüge einfacher wäre. Jede Handlung hinterlässt eine energetische Signatur in meiner Seele. Kleine Unehrlichkeiten summieren sich genauso wie kleine Akte der Integrität. Ich entscheide mich täglich — in kleinen Momenten — für den Weg der Seele."
  },
  {
    "id": 34,
    "sphere": "DIE ARBEIT AM CHARAKTER",
    "statement": "Ich kultiviere Freude und Leichtigkeit als echten Ausdruck meiner Seele — nicht als Ablenkung, sondern als spirituellen Zustand.",
    "detail": "Seelenmeisterschaft ist kein ernstes, graues Unterfangen. Newton beschreibt die Geistwelt als Ort tiefer Freude, Humor und Leichtigkeit — das ist der natürliche Zustand der Seele. Je mehr ich mich von Ego, Angst und Anhaftung befreie, desto mehr kehrt diese natürliche Freude zurück. Ich kultiviere sie aktiv: durch Spiel, durch Lachen, durch Genuss der einfachen Dinge — als spirituelle Praxis, nicht als Flucht."
  },
  {
    "id": 35,
    "sphere": "DIE EINHEIT UND DIE LIEBE",
    "statement": "Ich erkenne, dass alle Seelen aus derselben universellen Quelle entstammen — und dass es im tiefsten Sinn keine Trennung zwischen mir und dem Leben gibt, das mich umgibt.",
    "detail": "Am Ende aller Wege steht eine Wahrheit: Wir sind eins — verbunden in derselben Quelle, ohne dass eine Seele dabei ihre Einzigartigkeit verliert. Alle Seelen — ob jung oder alt, ob lichtvoll oder noch tief in Dunkelheit — entstammen derselben universellen Quelle und kehren zu ihr zurück. Die Grenze, die ich zwischen „ich“ und „die Welt“ ziehe, ist nützlich für den Alltag, aber nicht die letzte Wahrheit. Im Angesicht eines Sonnenuntergangs, eines neugeborenen Kindes, eines sterbenden Menschen verschwimmt diese Grenze von selbst — die Trennung, die wir erleben, ist real als Erfahrung, und eine Illusion als Wesenswahrheit. Ich suche diese Erfahrung bewusst, nicht nur als Zufall, und kehre täglich zu dieser Einheit zurück: in der Meditation, im Blick auf einen anderen Menschen, im Staunen vor dem Nachthimmel. Diese Rückkehr ist das Ziel — und der Weg selbst."
  },
  {
    "id": 36,
    "sphere": "DIE EINHEIT UND DIE LIEBE",
    "statement": "Ich wähle Liebe als höchsten Ausdruck meines wahren Selbst, in jeder Entscheidung, die ich treffe.",
    "detail": "Vor jeder wichtigen Entscheidung stelle ich mir die Frage: Was würde die liebevollste Version meiner selbst hier tun? Nicht die ängstlichste, nicht die stolzeste, nicht die bequemste — die liebevollste. Diese Frage allein verändert, wie ich lebe."
  },
  {
    "id": 37,
    "sphere": "DIE VERBINDUNG ZU ANDEREN",
    "statement": "Ich erkenne in jedem Menschen eine Seele auf ihrem eigenen Entwicklungsweg.",
    "detail": "Jeder Mensch, dem ich begegne — der Obdachlose auf der Straße, der aggressive Fremde, der schwierige Kollege, das weinende Kind — ist eine Seele. Eine unsterbliche, ewige Seele, die gerade eine menschliche Erfahrung macht. Diese Seele ist nicht weniger wert als meine. Sie ist nicht weiter von der Quelle entfernt als ich. Sie befindet sich an einem anderen Punkt ihrer Reise — das ist alles. Diese Erkenntnis verändert jeden Blick, jeden Satz, jede Begegnung."
  },
  {
    "id": 38,
    "sphere": "DIE VERBINDUNG ZU ANDEREN",
    "statement": "Ich diene anderen nicht aus Pflicht, sondern aus aufrichtigem Mitgefühl.",
    "detail": "Dienst, der aus Pflicht entsteht, erschöpft. Dienst, der aus Mitgefühl entsteht, nährt. Ich helfe nicht, um gut dazustehen, um Schuld zu vermeiden oder um Anerkennung zu erhalten. Ich helfe, weil ich verstanden habe, dass wir alle verbunden sind — und dass das Wohl des anderen mein Wohl ist. Dieser Dienst setzt voraus, dass mein eigenes Gefäß voll ist. Ich kann nicht aus dem Leeren schenken."
  },
  {
    "id": 39,
    "sphere": "DIE VERBINDUNG ZU ANDEREN",
    "statement": "Ich respektiere den freien Willen jeder Seele so tief, dass ich nicht helfe, wo keine Hilfe gefragt ist — auch wenn es schwerfällt.",
    "detail": "Das ist eines der schwierigsten Prinzipien. Ich sehe einen Menschen leiden und möchte eingreifen. Ich sehe einen Fehler und möchte korrigieren. Ich sehe einen Weg und möchte ihn zeigen. Aber jede Seele hat das Recht, ihren eigenen Weg zu gehen — auch wenn dieser Weg durch Schmerz führt. Newton beschreibt, dass selbst Geistführer nicht eingreifen, ohne gefragt zu werden. Ich respektiere dieses Prinzip: Ich biete an, ich öffne mich, ich bin verfügbar — aber ich dränge mich nicht auf. Eine Ausnahme kennt dieses Prinzip: Wo ein Mensch in Gefahr ist — wo ein Kind Schaden nimmt oder jemand sich selbst oder anderen etwas antun könnte —, warte ich nicht, bis ich gefragt werde. Dann handle ich und hole Hilfe."
  },
  {
    "id": 40,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich trage bewusst zur Entwicklung einer höheren kollektiven Bewusstseinsstufe bei.",
    "detail": "Meine persönliche Entwicklung ist nicht nur persönlich. Jede Seele, die in Klarheit, Liebe und Integrität lebt, verändert das Feld um sich herum. Ich bin ein Knotenpunkt in einem lebendigen Netz des Bewusstseins. Was ich in mir transformiere, wirkt nach außen — in meine Familie, meinen Freundeskreis, meine Gemeinschaft, die Welt. Ich nehme diese Verantwortung ernst: Meine innere Arbeit ist mein größter Beitrag zur Zivilisation."
  },
  {
    "id": 41,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich lebe als Beispiel dafür, dass Seelenmeisterschaft im Alltag möglich ist.",
    "detail": "Ich missioniere nicht. Ich predige nicht. Ich überzeuge nicht durch Worte. Ich lebe. Das ist die wirksamste Form des Zeugnisses: ein Leben, das die Prinzipien nicht beschreibt, sondern verkörpert. Wenn Menschen fragen, was mich trägt, was mich ruhig macht, was mir Kraft gibt — dann teile ich offen. Aber der erste und stärkste Beweis ist das Leben selbst."
  },
  {
    "id": 42,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich halte die Vision einer Zivilisation aufrecht, die auf Seelenwachstum gegründet ist.",
    "detail": "Ich halte eine Vision in mir, die größer ist als mein persönliches Leben: eine Menschheit, die sich erinnert, was sie ist. Eine Zivilisation, die nicht auf Konsum, Kontrolle und Konkurrenz gegründet ist, sondern auf Bewusstsein, Mitgefühl und Wahrheit. Diese Vision ist nicht naiv — sie ist die einzige, die dauerhaft trägt. Ich halte sie lebendig in mir — als inneres Bild, als Gebet, als Lebensrichtung."
  },
  {
    "id": 43,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich glaube, dass der Mensch zu weit mehr Bewusstsein, Intelligenz, Harmonie und Glück fähig ist, als die Geschichte bisher gezeigt hat.",
    "detail": "Die Vergangenheit der Menschheit ist nicht ihre Obergrenze. Konflikt, Angst und Getrenntheit waren bisher vorherrschend — sie sind aber nicht das letzte Wort darüber, wozu ein Bewusstsein fähig ist, das sich seiner selbst bewusst wird."
  },
  {
    "id": 44,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich verstehe meine persönliche Entwicklung als Beitrag zur nächsten Entwicklungsstufe der gesamten Menschheit.",
    "detail": "Jeder Mensch, der klarer, liebevoller und bewusster wird, verschiebt das, was insgesamt möglich ist. Ich nehme meinen eigenen Weg deshalb ernst — nicht aus Eitelkeit, sondern weil ich weiß, dass er Teil eines größeren, gemeinsamen Fortschritts ist."
  },
  {
    "id": 45,
    "sphere": "DIE GEMEINSCHAFT, DIE ZIVILISATION UND DAS POTENZIAL",
    "statement": "Ich entfalte mein volles Potenzial nicht aus Ehrgeiz, sondern aus der stillen Gewissheit, dass es bereits in mir angelegt ist.",
    "detail": "Ich muss mich nicht zu etwas zwingen, das mir fremd ist. Ich muss nur die Schichten aus Angst, Konditionierung und Ablenkung abtragen, die zwischen mir und dem liegen, was in mir bereits vollständig vorhanden ist."
  },
  {
    "id": 46,
    "sphere": "DIE WISSENSCHAFT DES WACHSTUMS",
    "statement": "Ich vertraue der Neuroplastizität meines Gehirns, tief eingefahrene Muster zu verändern.",
    "detail": "Was ich wiederholt denke, fühle und tue, verstärkt sich als neuronale Bahn — und was ich nicht mehr nähre, schwächt sich ab. Veränderung ist keine Frage der Willenskraft allein, sondern der bewussten, wiederholten Übung, die das Gehirn selbst umformt."
  },
  {
    "id": 47,
    "sphere": "DIE WISSENSCHAFT DES WACHSTUMS",
    "statement": "Ich pflege meinen Körper als biologische Grundlage meiner geistigen und seelischen Entwicklung.",
    "detail": "Ein erschöpfter, unterversorgter Körper begrenzt, wie klar mein Geist denken und wie tief meine Seele fühlen kann. Ich behandle Bewegung, Ernährung und Schlaf nicht als Nebensache, sondern als direkte Investition in meine Bewusstseinsentwicklung."
  },
  {
    "id": 48,
    "sphere": "DIE WISSENSCHAFT DES WACHSTUMS",
    "statement": "Ich kultiviere Zustände tiefer Konzentration und inneren Flusses als Weg zu Freude und Meisterschaft.",
    "detail": "Wenn ich vollständig in einer Tätigkeit aufgehe, die mich fordert, ohne mich zu überfordern, verschwindet die Grübelei des Verstandes von selbst. Ich suche diese Zustände bewusst — in Arbeit, Kunst, Bewegung — als eine der direktesten Quellen echten Glücks."
  },
  {
    "id": 49,
    "sphere": "DAS OFFENE WELTBILD",
    "statement": "Ich halte mein Weltbild lebendig — ich vertraue dem gegenwärtigen Wissen und bleibe offen für tiefere Wahrheit.",
    "detail": "Ich halte die Erkenntnisse, auf denen mein Weg gründet, nicht für das letzte Wort der Wahrheit — sondern für das tiefste bisher verfügbare Licht. Ich verfolge neue Forschung, neue Erfahrungen und neue Erkenntnisse mit Offenheit und Neugier. Was sich bewährt, bleibt. Was durch tiefere Wahrheit überholt wird, lasse ich los — ohne Angst, ohne Krampf. Mein Fundament ist nicht ein festes Wissensgebäude, sondern die lebendige Ausrichtung auf Wahrheit selbst."
  }
];
