// JQuery must be added before this script will work: https://code.jquery.com/jquery-3.4.1.min.js

// **************************************
// *            BEGIN PART 1            *
// **************************************

var walletList = document.getElementsByClassName("text-dark break-word")
var myAddress;
var addressOnly = [];
var myUFWURL = [];
var newText;
var myResponseJSON;
var URLResult;
var myDiscordJSONString;
var myDiscordJSONText = [];
var discordName;
var JSONStringList = [];
var myDiscordJSON = [];
var myTelegramJSON = [];
var userName = [];
var i;
var myTelegramURL = [];
var idType = [];

for (i = 0; i < walletList.length; i++) {

    try { myAddress = walletList[i].innerHTML; }
    catch (e) {

    }

    addressOnly[i] = myAddress.substr(29, 64);
    myUFWURL[i] = "https://bananobotapi.banano.cc/ufw/" + addressOnly[i];
    myTelegramURL[i] = "https://ba.nanotipbot.com/users/" + addressOnly[i];

    myDiscordJSON[i] = $.getJSON(myUFWURL[i], function () {
        console.log(i + ": Praying to BananoBot...");
    })
        .done(function () {
            console.log("Prayer has been answered! " + i);
        })
        .fail(function () {
            console.log("Prayer has failed! " + i);
        })
        .always(function () {
            console.log("End of prayer.");
        });

    myTelegramJSON[i] = $.getJSON(myTelegramURL[i], function () {
        console.log(i + ": Praying to BananoBot...");
    })
        .done(function () {
            console.log("Prayer has been answered! " + i);
        })
        .fail(function () {
            console.log("Prayer has failed! " + i);
        })
        .always(function () {
            console.log("End of prayer.");
        });
};



// **************************************
// *            BEGIN PART 2            *
// **************************************


for (i = 0; i < walletList.length; i++) {
    //myDiscordJSONString = JSON.stringify(myDiscordJSON[i]);
    try {
        userName[i] = myDiscordJSON[i].responseJSON[0].user_last_known_name;
        idType[i] = "Discord";
    }
    catch (e) {
        userName[i] = "Not Found";
    }

    if (userName[i] == "Not Found") {

        try {
            userName[i] = myTelegramJSON[i].responseJSON.user_name;
            if (myTelegramJSON[i].responseJSON.system == "telegram") {
                idType[i] = "Telegram";
            }
            else if (myTelegramJSON[i].responseJSON.system == "twitter") {
                idType[i] = "Twitter";
            }
            else {
                idType[i] = "Error: Unknown ID type from ba.nanotipbot: " + i + ": " + myTelegramJSON[i].responseJSON;
            }
        }
        catch (e) {
            userName[i] = "Not Found";
        }
    }

    if (userName[i] == "Not Found") {
        switch (addressOnly[i]) {
            case 'ban_31dhbgirwzd3ce7naor6o94woefws9hpxu4q8uxm1bz98w89zqpfks5rk3ad':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "Mercatox";
                break;

            case 'ban_3k76rawffjm79qedoc54nhk3edkq5makoyp73b1t6q6j9yjeq633q1xck9g8':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "Mercatox Withdraw";
                break;

            case 'ban_1gtkt1ekpazojhxwnym9ur61cz4w7n8yez5yq81id6cb8k63bhwx7axhtsxx':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "Bitmesh";
                break;

            case 'ban_3x1o69xsppjb1d9owsn8x6uqr8a1ttpitsu3yya7iyimaboqhb9urb8x61y8':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "Txbit";
                break;

            case 'ban_3wwd51yoxeafubpn84gy7tje7yw6ccqcach9m4yfn46sf15itnysap9dd1xc':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "QBTC";
                break;

            case 'ban_3yafcjcq79cjfm4wio5db6drffmf61jh8cosoijmg3eppzmbxb4kej8t3dze':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Exchange";
                userName[i] = "QTrade";
                break;

            case 'ban_3he11oi45zcfe3i65wogyikf1569mu1jcf9kj4o7jojpebmmkbhrpf38qrqx':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "WeChat and Reddit";
                break;

            case 'ban_1wha1enz8k8r65k6nb89cxqh6cq534zpixmuzqwbifpnqrsycuegbmh54au6':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Banano Jumper";
                break;

            case 'ban_1crane864e1cn1g3p9mrduf49hp86gfgfosp8rib43smxxuqp3phq1yiu58k':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Crane";
                break;

            case 'ban_1mine1fnjzz84gwapyqhfw1d115zst859pf1u5rzge8hehzjg9ztchokmghb':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Miner";
                break;

            case 'ban_3pp1antnfudas6ad44kwpad4jb376cihftskq9ne76hazosi654gjdohriai':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "MinerV2";
                break;

            case 'ban_3fo1d1ng6mfqumfoojqby13nahaugqbe5n6n3trof4q8kg5amo9mribg4muo':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Folding";
                break;

            case 'ban_3faucb1o9ifundznqw6xn1xkybztz4zfbn4fw95ujfy48ds1ebayzycfsspk':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Meme Faucet";
                break;

            case 'ban_3k76rawffjm79qedoc54nhk3edkq5makoyp73b1t6q6j9yjeq633q1xck9g8':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Mercatox Withdraw";
                break;

            case 'ban_3temho9bnim1acqzwwa673yeggeudzo6y857y4t38pmu6jx79amtku8szp3s':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Black Monkey 1";
                break;

            case 'ban_1b1ack1188caohzjdj65uarnk4kobzrnr3q3oc3bew5rfkyqxzu81zhjgp1e':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Black Monkey 2";
                break;

            case 'ban_3runnerrxm74165sfmystpktzsyp7eurixwpk59tejnn8xamn8zog18abrda':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Banano Runner";
                break;

            case 'ban_3matchhw9ksc9xfqdhedfn34n8kw6woxr36gnyoop7jc14j7unw9uknhjk8h':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match 1";
                break;

            case 'ban_1no4g7k51giqnhscpqm153hamoe956958yrr79sggzgy8wriiemx7owh89ka':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match Nov1";
                break;

            case 'ban_1no3g6ho99zjfgujgkyqmmedi4k9u46yxwnf8bchxs4sof1yg334u8yrt4h5':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match Nov2";
                break;

            case 'ban_1no1g31yq9ne9b1uhzge7co6af34qot37ydifagy13cb53ki7dor1yeceg8f':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match Nov3";
                break;

            case 'ban_3jan54btk13gsutxw6brj1i7e31zip4zj43u4jde7qad3hchx8u1gc6jwxd9':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match Jan";
                break;

            case 'ban_1mar4j94wjqnkourdfw1jwqzsn4a9p6fqfjzrjsyjiym4zixm1ek3bkqk1r7':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Match Mar";
                break;

            case 'ban_3craftbqpyfbr4gdjhdwnrsd4zwr73wg6xojnr61nres8mnbz5x1o6563qxc':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "BananoCraft";
                break;

            case 'ban_1monkeyt1x77a1rp9bwtthajb8odapbmnzpyt8357ac8a1bcron34i3r9y66':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Monkey Talks";
                break;

            case 'ban_1boompow14irck1yauquqypt7afqrh8b6bbu5r93pc6hgbqs7z6o99frcuym':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "BoomPoW";
                break;

            case 'ban_1ce1ery6hqwyqqyh15m4atcoaywd8rycyapjjooqeg7gi149kmatjbb3wiwx':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "Banano Celery";
                break;

            case 'ban_1nice4sy9fgcb8qxbx7nkj9ajc79aapqnayrfk4gow184mgnfm49ncstg36w':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Distribution Address";
                userName[i] = "NiceBanano";
                break;

            case 'ban_3iejwmk1n3fqdntwcgudhmddo9bpwa8jzx6g361iq6rzbsrzonekmdus9yj5':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Gambling Site";
                userName[i] = "Banano Royale";
                break;

            case 'ban_1w5q77ocgfrjn6sqwudfuygtomwyij8ijes3y5g8kaydxsf8f4jpz4n9q9a3':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Gambling Site";
                userName[i] = "Nanogames.io";
                break;

            case 'ban_1banbet955hwemgsqrb8afycd3nykaqaxsn7iaydcctfrwi3rbb36y17fbcb':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Gambling Site";
                userName[i] = "BananoBet";
                break;

            case 'ban_1kwin96znfqopi7be3shxcxn8qeruirob885oaya4ix5pkrnpsou4u5qbeaa':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Gambling Site";
                userName[i] = "BanSlots";
                break;

            case 'ban_16tduo1cu9ydp8ris3o5w4rm96myqics5o8tjw8s13ja8owba6xfpwc8399r':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Gambling Site";
                userName[i] = "BanRoulette";
                break;

            case 'ban_19i3rxxmdtxa7zsxoroygx38xpcad4gp7ouwf9bn5raum1d3mc4b5w7proxy':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Suspicious Address";
                userName[i] = "Banano Runner botter";
                break;

            case 'ban_14bbb43paw4gtkc69j445e6ogxytns35ks9qk8pe7g37qyc7as63tipfz6gp':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Suspicious Address";
                userName[i] = "Seed wiper";
                break;

            case 'ban_3ri6hkmndz8aehqjhuru1s5ozcb14ifzyqbax8p8arm9u7pykz6qoaj8rimz':
                console.log("Found external address: " + addressOnly[i]);
                idType[i] = "Suspicious Address";
                userName[i] = "Bonus-program phish";
                break;
        }
    }

    if (userName[i] == "Not Found") {
        idType[i] = ""
    }
    newText = addressOnly[i] + " - " + "<span class=\"text-monospace\"> " + idType[i] + " ID: " + userName[i] + "</span>";
    walletList[i].innerHTML = "<span class=\"text-monospace\">" + newText + "</span>";
    console.log(userName[i]);
};
