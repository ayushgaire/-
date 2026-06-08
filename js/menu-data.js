/* ===================================================================
   ナマステ カリカ — メニューデータ
   全メニュー（ランチ / グランド）バイリンガル + 価格 + 辛さレベル
   spice: 0〜5 （0=辛さなし）
   img: 画像ファイル名（images/menu-items/ 内）
   =================================================================== */

const MENU_DATA = {

  /* ===== 注目の人気メニュー（メニューページ上部の大型カード） ===== */
  featured: [
    { ja:"チーズナン", en:"Cheese Naan", price:600, tag:"tag.bestseller", img:"featured1.jpg" },
    { ja:"チキンビリヤニ", en:"Chicken Biryani", price:1300, tag:"tag.favorite", img:"featured2.jpg" },
    { ja:"タンドリーチキン", en:"Tandoori Chicken", price:1200, tag:"tag.chef", img:"featured3.jpg" },
    { ja:"ナンセット", en:"Nan Set", price:1300, tag:"tag.value", img:"featured4.jpg" },
    { ja:"チキンティッカ", en:"Chicken Tikka", price:1000, tag:"tag.mostordered", img:"featured5.jpg" },
    { ja:"バターチキンカレー", en:"Butter Chicken", price:980, tag:"tag.signature", img:"featured6.jpg" }
  ],

  /* ===== セクションA: ランチメニュー（ランチタイム限定） ===== */
  lunch: [
    {
      id: "l-choice-curry-set",
      ja: "選べるカレーセット", en: "Choice Curry Set",
      descJa: "カレー1種 + ナンまたはライス + サラダ + ソフトドリンク付き。",
      descEn: "1 curry + naan or rice + salad + a soft drink.",
      price: 890, spice: 2, popular: true, img:"1.jpg"
    },
    {
      id: "l-g-set",
      ja: "Gセット", en: "G Set",
      descJa: "ボリューム満点の人気ランチセット。",
      descEn: "A satisfying, hearty lunch set that's a local favorite.",
      price: 1020, spice: 2, popular: true, img:"2.jpg"
    },
    {
      id: "l-namaste-set",
      ja: "ナマステセット", en: "Namaste Set",
      descJa: "当店自慢の品々を盛り込んだ贅沢なセット。",
      descEn: "A luxurious set featuring the best of our specialties.",
      price: 1510, spice: 2, popular: false, img:"3.jpg"
    },
    {
      id: "l-cheese-nan-set",
      ja: "チーズナンセット", en: "Cheese Naan Set",
      descJa: "とろけるチーズナンとカレーの大満足セット。",
      descEn: "A delightful set with our melted cheese naan and curry.",
      price: 1500, spice: 2, popular: true, img:"4.jpg"
    },
    {
      id: "l-barbecue-set",
      ja: "バーベキューセット", en: "Barbecue Set",
      descJa: "タンドール窯で焼いた香ばしいグリルが楽しめるセット。",
      descEn: "Fragrant tandoor-grilled items in one generous set.",
      price: 1700, spice: 2, popular: false, img:"5.jpg"
    },
    {
      id: "l-kids-set",
      ja: "お子様セット", en: "Kids Set",
      descJa: "小さなお子様向けのやさしい味のセット。",
      descEn: "A gentle, kid-friendly set made for little ones.",
      price: 550, spice: 0, popular: false, img:"6.jpg"
    },
    {
      id: "l-single-curry-rice-set",
      ja: "シングルカレーライスセット", en: "Single Curry Rice Set",
      descJa: "お好みのカレー1種とライスのシンプルセット。",
      descEn: "A simple set with your choice of one curry and rice.",
      price: 950, spice: 2, popular: false, img:"7.jpg"
    },
    {
      id: "l-student-set",
      ja: "学生セット", en: "Student Set",
      descJa: "プレーンナン ¥890 / チーズナン ¥1,090。学生さんにうれしい価格。",
      descEn: "Plain naan ¥890 / cheese naan ¥1,090. A student-friendly price.",
      price: 890, priceNote: "／チーズナン ¥1,090", priceNoteEn: "/ Cheese Naan ¥1,090",
      spice: 2, popular: true, img:"8.jpg"
    },
    {
      id: "l-gapao-rice-set",
      ja: "ガパオライスセット", en: "Gapao Rice Set",
      descJa: "スパイス香るガパオライスのセット。",
      descEn: "An aromatic, spice-infused gapao rice set.",
      price: 1020, spice: 3, popular: false, img:"9.jpg"
    },
    {
      id: "l-dinner-version-set",
      ja: "ディナーセット（ランチ版）", en: "Dinner Set (Lunch Version)",
      descJa: "ディナーセットをランチタイムにお得にお楽しみいただけます。",
      descEn: "Enjoy our dinner set at a special price during lunch hours.",
      price: 1200, priceNote: "〜", priceNoteEn: "+",
      spice: 2, popular: false, img:"10.jpg"
    }
  ],

  /* ===== セクションB: グランドメニュー（終日提供） ===== */
  grand: {
    chicken: {
      catJa: "チキンカレー", catEn: "Chicken Curry", catKey: "chicken",
      items: [
        { id:"c-butter", ja:"バターチキンカレー", en:"Butter Chicken Curry", descJa:"濃厚なトマトとバターで仕上げた、やわらかチキンのまろやかカレー。", descEn:"A mild, creamy tomato-and-butter curry with tender chicken and aromatic spices.", price:980, spice:1, img:"11.jpg" },
        { id:"c-masala", ja:"チキンマサラ", en:"Chicken Masala", descJa:"数種のスパイスを効かせた本格チキンマサラ。", descEn:"Authentic chicken masala rich with a blend of spices.", price:950, spice:3, img:"12.jpg" },
        { id:"c-tikka-masala", ja:"チキンティッカマサラ", en:"Chicken Tikka Masala", descJa:"炭火で焼いたチキンを濃厚マサラソースで。", descEn:"Charcoal-grilled chicken simmered in a rich masala sauce.", price:950, spice:2, img:"13.jpg" },
        { id:"c-sag", ja:"サグチキン", en:"Sag Chicken", descJa:"ほうれん草の旨みたっぷりのグリーンカレー。", descEn:"A vibrant green curry packed with the goodness of spinach.", price:900, spice:2, img:"14.jpg" },
        { id:"c-dopyaza", ja:"チキンドピアザ", en:"Chicken Do Pyaza", descJa:"玉ねぎをたっぷり使った甘みのあるカレー。", descEn:"A sweet, savory curry made with plenty of onions.", price:900, spice:2, img:"15.jpg" },
        { id:"c-keema", ja:"キーマカレー", en:"Keema Curry", descJa:"ひき肉とスパイスを炒め煮にした人気カレー。", descEn:"A popular curry of minced meat sautéed with spices.", price:900, spice:3, img:"16.jpg" },
        { id:"c-keema-methi", ja:"キーマ カスリメティ", en:"Keema Kasturi Methi", descJa:"フェヌグリークの香り豊かなキーマカレー。", descEn:"Keema curry fragrant with aromatic fenugreek leaves.", price:900, spice:3, img:"17.jpg" },
        { id:"c-sag-keema", ja:"サグキーマ", en:"Sag Keema", descJa:"ほうれん草とひき肉の栄養満点カレー。", descEn:"A nourishing curry of spinach and minced meat.", price:900, spice:2, img:"18.jpg" },
        { id:"c-keema-matar", ja:"キーママタル", en:"Keema Matar", descJa:"ひき肉とグリーンピースの彩りカレー。", descEn:"A colorful curry of minced meat and green peas.", price:900, spice:2, img:"19.jpg" },
        { id:"c-soup", ja:"チキンスープカレー", en:"Chicken Soup Curry", descJa:"さらりと飲める、スパイス香るスープカレー。", descEn:"A light, sippable soup curry full of spice aroma.", price:900, spice:2, img:"20.jpg" }
      ]
    },
    mutton: {
      catJa: "マトンカレー", catEn: "Mutton Curry", catKey: "mutton",
      items: [
        { id:"m-masala", ja:"マトンマサラ", en:"Mutton Masala", descJa:"やわらかく煮込んだマトンの本格マサラ。", descEn:"Authentic masala with slow-cooked, tender mutton.", price:950, spice:3, img:"21.jpg" },
        { id:"m-dopyaza", ja:"マトンドピアザ", en:"Mutton Do Pyaza", descJa:"玉ねぎの甘みとマトンの旨みが絶妙。", descEn:"The sweetness of onion and the richness of mutton in harmony.", price:950, spice:2, img:"22.jpg" },
        { id:"m-sag", ja:"マトンサグ", en:"Mutton Sag", descJa:"ほうれん草とマトンのヘルシーカレー。", descEn:"A healthy curry of spinach and mutton.", price:950, spice:2, img:"23.jpg" },
        { id:"m-tawa", ja:"マトンタワ", en:"Mutton Tawa", descJa:"鉄板で香ばしく仕上げたスパイシーマトン。", descEn:"Spicy mutton seared fragrantly on the tawa griddle.", price:950, spice:3, img:"24.jpg" },
        { id:"m-rogan", ja:"マトンローガンジョシュ", en:"Mutton Rogan Josh", descJa:"カシミール伝統の深紅のスパイスカレー。", descEn:"A deep-red, traditional Kashmiri spiced curry.", price:900, spice:3, img:"25.jpg" },
        { id:"m-seekh", ja:"マトンシークカバブマサラ", en:"Mutton Seekh Kabab Masala", descJa:"シークカバブをマサラソースで煮込んだ一品。", descEn:"Seekh kabab simmered in a savory masala sauce.", price:900, spice:3, img:"26.jpg" }
      ]
    },
    vegetable: {
      catJa: "野菜カレー", catEn: "Vegetable Curry", catKey: "vegetable",
      items: [
        { id:"v-mix", ja:"ミックスベジタブルカレー", en:"Mix Vegetable Curry", descJa:"彩り野菜をたっぷり使ったヘルシーカレー。", descEn:"A healthy curry loaded with colorful mixed vegetables.", price:900, spice:2, img:"27.jpg" },
        { id:"v-paneer-sag", ja:"パニールサグ", en:"Paneer Sag", descJa:"自家製チーズとほうれん草のまろやかカレー。", descEn:"A mellow curry of homemade paneer cheese and spinach.", price:900, spice:1, img:"28.jpg" },
        { id:"v-paneer-butter", ja:"パニールバターマサラ", en:"Paneer Butter Masala", descJa:"バター香るリッチなチーズカレー。", descEn:"A rich, buttery paneer cheese curry.", price:900, spice:1, img:"29.jpg" },
        { id:"v-mutter-paneer", ja:"マタルパニール", en:"Mutter Paneer", descJa:"チーズとグリーンピースの優しい味わい。", descEn:"A gentle curry of paneer cheese and green peas.", price:900, spice:1, img:"30.jpg" },
        { id:"v-chana", ja:"チャナマサラ", en:"Chana Masala", descJa:"ひよこ豆をスパイスで煮込んだベジカレー。", descEn:"Chickpeas simmered with spices — a hearty veggie curry.", price:880, spice:2, img:"31.jpg" },
        { id:"v-dal", ja:"ミックスダルカレー", en:"Mix Dal Curry", descJa:"数種の豆を使った優しい味の定番カレー。", descEn:"A comforting classic curry made with a mix of lentils.", price:880, spice:1, img:"32.jpg" },
        { id:"v-baigan-bharta", ja:"バイガンバルタ", en:"Baigan Bharta", descJa:"焼きナスを潰して仕上げる香ばしいカレー。", descEn:"A smoky curry made from roasted, mashed eggplant.", price:880, spice:2, img:"33.jpg" },
        { id:"v-alu-baigan", ja:"アルバイガン", en:"Alu Baigan", descJa:"じゃがいもとナスのほっこりカレー。", descEn:"A comforting curry of potato and eggplant.", price:880, spice:2, img:"34.jpg" },
        { id:"v-mutter-mushroom", ja:"マタルマッシュルームカレー", en:"Mutter Mushroom Curry", descJa:"きのことグリーンピースの旨みカレー。", descEn:"A savory curry of mushrooms and green peas.", price:880, spice:2, img:"35.jpg" },
        { id:"v-alu-bhindi", ja:"アルビンディマサラ", en:"Alu Bhindi Masala", descJa:"じゃがいもとオクラのスパイス炒めカレー。", descEn:"A spiced curry of potato and okra.", price:880, spice:2, img:"36.jpg" }
      ]
    },
    seafood: {
      catJa: "シーフードカレー", catEn: "Seafood Curry", catKey: "seafood",
      items: [
        { id:"s-mix", ja:"ミックスシーフードカレー", en:"Mix Seafood Curry", descJa:"魚介の旨みを凝縮した贅沢カレー。", descEn:"A luxurious curry rich with the flavor of mixed seafood.", price:950, spice:2, img:"37.jpg" },
        { id:"s-prawn", ja:"プラウンカレー", en:"Prawn Curry", descJa:"プリプリの海老を使った人気カレー。", descEn:"A popular curry featuring plump, juicy prawns.", price:950, spice:2, img:"38.jpg" },
        { id:"s-fish", ja:"フィッシュカレー", en:"Fish Curry", descJa:"白身魚とスパイスの相性抜群のカレー。", descEn:"White fish and spices in a beautifully balanced curry.", price:950, spice:2, img:"39.jpg" },
        { id:"s-fish-masala", ja:"フィッシュマサラ", en:"Fish Masala", descJa:"スパイス香る濃厚フィッシュマサラ。", descEn:"A rich, aromatic fish masala.", price:950, spice:3, img:"40.jpg" },
        { id:"s-seafood-masala", ja:"シーフードマサラ", en:"Seafood Masala", descJa:"魚介をマサラソースで煮込んだ一品。", descEn:"Mixed seafood simmered in a flavorful masala sauce.", price:950, spice:3, img:"41.jpg" },
        { id:"s-sag-prawn", ja:"サグプラウン", en:"Sag Prawn", descJa:"海老とほうれん草の彩りカレー。", descEn:"A colorful curry of prawns and spinach.", price:950, spice:2, img:"42.jpg" },
        { id:"s-sag-seafood", ja:"サグシーフード", en:"Sag Seafood", descJa:"魚介とほうれん草のヘルシーカレー。", descEn:"A healthy curry of seafood and spinach.", price:950, spice:2, img:"43.jpg" },
        { id:"s-prawn-masala", ja:"プラウンマサラ", en:"Prawn Masala", descJa:"海老の旨みを引き出したスパイシーマサラ。", descEn:"A spicy masala that brings out the rich flavor of prawns.", price:950, spice:3, img:"44.jpg" }
      ]
    },
    nan: {
      catJa: "ナン・パン", catEn: "Naan & Bread", catKey: "nan",
      items: [
        { id:"n-plain", ja:"プレーンナン", en:"Plain Naan", descJa:"焼きたて、もちもちの定番ナン。", descEn:"Our freshly baked, classic fluffy naan.", price:280, spice:0, img:"45.jpg" },
        { id:"n-garlic", ja:"ガーリックナン", en:"Garlic Naan", descJa:"香ばしいにんにく風味のナン。", descEn:"Naan with a fragrant garlic topping.", price:300, spice:0, img:"46.jpg" },
        { id:"n-onion", ja:"オニオンナン", en:"Onion Naan", descJa:"玉ねぎの甘みが広がるナン。", descEn:"Naan filled with the gentle sweetness of onion.", price:300, spice:0, img:"47.jpg" },
        { id:"n-cheese", ja:"チーズナン", en:"Cheese Naan", descJa:"とろけるチーズをたっぷり包んだ人気ナン。", descEn:"Our popular naan, generously stuffed with melted cheese.", price:550, spice:0, img:"48.jpg" },
        { id:"n-alu", ja:"アルナン", en:"Alu Naan", descJa:"スパイスポテト入りの食べ応えナン。", descEn:"A filling naan stuffed with spiced potato.", price:400, spice:1, img:"49.jpg" },
        { id:"n-kabuli", ja:"カブリナン", en:"Kabuli Naan", descJa:"ナッツやドライフルーツ入りの甘いナン。", descEn:"A sweet naan filled with nuts and dried fruit.", price:450, spice:0, img:"50.jpg" },
        { id:"n-goma", ja:"ゴマナン", en:"Goma (Sesame) Naan", descJa:"香ばしいごまをまぶした風味豊かなナン。", descEn:"Naan topped with fragrant toasted sesame.", price:380, spice:0, img:"51.jpg" },
        { id:"n-keema", ja:"キーマナン", en:"Keema Naan", descJa:"スパイシーなひき肉を包んだ満足ナン。", descEn:"A satisfying naan stuffed with spiced minced meat.", price:500, spice:2, img:"52.jpg" },
        { id:"n-anko", ja:"あんこナン", en:"Anko (Red Bean) Naan", descJa:"あんこを包んだ和風デザートナン。", descEn:"A Japanese-style dessert naan filled with sweet red bean.", price:380, spice:0, img:"53.jpg" },
        { id:"n-roti", ja:"ロティ", en:"Roti", descJa:"全粒粉を使った素朴な味わいのパン。", descEn:"A rustic whole-wheat flatbread.", price:300, spice:0, img:"54.jpg" },
        { id:"n-bhatura", ja:"バトゥーラ", en:"Bhatura", descJa:"ふっくら揚げ焼きにした香ばしいパン。", descEn:"A fluffy, deep-fried bread with a savory aroma.", price:380, spice:0, img:"55.jpg" },
        { id:"n-parota", ja:"パロタ", en:"Parota", descJa:"層が美しいサクサク食感のパン。", descEn:"A flaky, layered flatbread with a crisp texture.", price:300, spice:0, img:"56.jpg" },
        { id:"n-pizza", ja:"ピザ", en:"Pizza", descJa:"ナン生地で焼き上げたオリジナルピザ。", descEn:"Our original pizza baked on naan dough.", price:550, spice:0, img:"57.jpg" }
      ]
    },
    snacks: {
      catJa: "スナック", catEn: "Snacks", catKey: "snacks",
      items: [
        { id:"sn-papad", ja:"パパド", en:"Papad", descJa:"豆粉のパリパリせんべい。", descEn:"A crispy lentil-flour cracker.", price:200, spice:1, img:"58.jpg" },
        { id:"sn-masala-papad", ja:"マサラパパド", en:"Masala Papad", descJa:"スパイスと野菜をのせたパパド。", descEn:"Papad topped with spices and chopped vegetables.", price:300, spice:2, img:"59.jpg" },
        { id:"sn-samosa", ja:"サモサ", en:"Samosa", descJa:"スパイスポテトを包んだ三角揚げ。", descEn:"Crispy fried pastry filled with spiced potato.", price:500, spice:2, img:"60.jpg" },
        { id:"sn-chicken-pakoda", ja:"チキンパコダ", en:"Chicken Pakoda", descJa:"スパイス衣のチキン唐揚げ。", descEn:"Indian-style fried chicken in a spiced batter.", price:550, spice:2, img:"61.jpg" },
        { id:"sn-alu-pakoda", ja:"アルパコダ", en:"Alu Pakoda", descJa:"じゃがいものスパイス天ぷら。", descEn:"Spiced potato fritters.", price:480, spice:2, img:"62.jpg" },
        { id:"sn-onion-pakoda", ja:"オニオンパコダ", en:"Onion Pakoda", descJa:"玉ねぎの甘みが効いたサクサク天ぷら。", descEn:"Crispy onion fritters with a sweet note.", price:480, spice:2, img:"63.jpg" },
        { id:"sn-nas-pakoda", ja:"ナスパコダ", en:"Nas (Eggplant) Pakoda", descJa:"ナスのジューシーなスパイス天ぷら。", descEn:"Juicy spiced eggplant fritters.", price:400, spice:2, img:"64.jpg" },
        { id:"sn-momo", ja:"モモ", en:"Momo", descJa:"ネパール風の蒸し餃子。", descEn:"Nepali-style steamed dumplings.", price:600, spice:1, img:"65.jpg" },
        { id:"sn-edamame", ja:"枝豆", en:"Edamame", descJa:"塩茹での枝豆。", descEn:"Lightly salted boiled edamame.", price:380, spice:0, img:"66.jpg" },
        { id:"sn-ebi-toast", ja:"エビトースト", en:"Ebi (Shrimp) Toast", descJa:"海老のすり身をのせた揚げトースト。", descEn:"Fried toast topped with minced shrimp.", price:600, spice:1, img:"67.jpg" },
        { id:"sn-shimeji-sausage", ja:"しめじとソーセージ炒め", en:"Shimeji & Sausage Itame", descJa:"しめじとソーセージのスパイス炒め。", descEn:"Shimeji mushrooms and sausage stir-fried with spices.", price:600, spice:2, img:"68.jpg" },
        { id:"sn-potato-chips", ja:"ポテトチップス", en:"Potato Chips", descJa:"揚げたてのポテトチップス。", descEn:"Freshly fried potato chips.", price:300, spice:1, img:"69.jpg" },
        { id:"sn-seafood-cashew", ja:"シーフードとカシューナッツ炒め", en:"Seafood & Cashew Itame", descJa:"魚介とカシューナッツの香ばしい炒め物。", descEn:"Seafood and cashew nuts in a fragrant stir-fry.", price:600, spice:2, img:"70.jpg" },
        { id:"sn-tomato-itame", ja:"トマト炒め", en:"Tomato Itame", descJa:"トマトのさっぱりスパイス炒め。", descEn:"A refreshing spiced tomato stir-fry.", price:300, spice:1, img:"71.jpg" }
      ]
    },
    dinnerset: {
      catJa: "ディナーセット", catEn: "Dinner Sets", catKey: "dinnerset",
      items: [
        { id:"d-single", ja:"シングルカレーセット", en:"Single Curry Set", descJa:"カレー1種にナンまたはライスが付く基本セット。", descEn:"Our basic set: one curry with naan or rice.", price:1100, spice:2, img:"72.jpg" },
        { id:"d-double", ja:"ダブルカレーセット", en:"Double Curry Set", descJa:"2種のカレーが選べる満足セット。", descEn:"A satisfying set with your choice of two curries.", price:1200, spice:2, img:"73.jpg" },
        { id:"d-cheese", ja:"チーズナンセット", en:"Cheese Naan Set", descJa:"人気のチーズナンが付くセット。", descEn:"A set that comes with our popular cheese naan.", price:1400, spice:2, img:"74.jpg" },
        { id:"d-garlic", ja:"ガーリックナンセット", en:"Garlic Naan Set", descJa:"香ばしいガーリックナンのセット。", descEn:"A set featuring fragrant garlic naan.", price:1300, spice:2, img:"75.jpg" },
        { id:"d-couple", ja:"カップルセット", en:"Couple Set", descJa:"2人で楽しめる豪華シェアセット。", descEn:"A generous sharing set perfect for two.", price:3400, spice:2, popular:true, img:"76.jpg" },
        { id:"d-bbq", ja:"バーベキューセット", en:"Barbecue Set", descJa:"タンドール窯のグリルを堪能できるセット。", descEn:"A set to savor our tandoor-grilled specialties.", price:1600, spice:2, img:"77.jpg" }
      ]
    },
    dessert: {
      catJa: "デザート", catEn: "Desserts", catKey: "dessert",
      items: [
        { id:"de-mango", ja:"マンゴープリン", en:"Mango Pudding", descJa:"濃厚マンゴーのなめらかプリン。", descEn:"A smooth pudding rich with mango flavor.", price:300, spice:0, img:"78.jpg" },
        { id:"de-matcha", ja:"抹茶アイスクリーム", en:"Matcha Ice Cream", descJa:"ほろ苦い抹茶の和風アイス。シングル ¥280／ダブル ¥350。", descEn:"Japanese-style ice cream with subtly bitter matcha. Single ¥280 / Double ¥350.", price:280, priceNote:"／ダブル ¥350", priceNoteEn:"/ Double ¥350", spice:0, img:"79.jpg" },
        { id:"de-vanilla", ja:"バニラアイスクリーム", en:"Vanilla Ice Cream", descJa:"濃厚でなめらかなバニラアイス。シングル ¥280／ダブル ¥350。", descEn:"Rich, smooth vanilla ice cream. Single ¥280 / Double ¥350.", price:280, priceNote:"／ダブル ¥350", priceNoteEn:"/ Double ¥350", spice:0, img:"80.jpg" }
      ]
    }
  }
};
