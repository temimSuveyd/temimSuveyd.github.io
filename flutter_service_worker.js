'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8d4f1702fdb6a6d6c775bc8d00835dd6",
".git/config": "9cf973fb0761f3add69138be1bf88c3a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c494a9f7daac3a8395a7697bf3f4f66e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e737b4aa7315293b21711aeaac5d063b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6c14dfcfdf9361aa0218fa66128d551",
".git/logs/refs/heads/main": "0e4c76372aaff5c294222fcddda7e290",
".git/logs/refs/remotes/origin/HEAD": "7411c302fc65eda1468f1376aeb303cb",
".git/logs/refs/remotes/origin/main": "7b7b606fabc9fb4216e9fbe6ee0af14f",
".git/objects/00/9417345ddc73ca462708df8869b9582faa92ca": "c30385b6bbeb38fd59f3136f3ec1b29c",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/0e/9fa3304853b0ec66dfd411eea69ce3a58af904": "928bd820fe366c48e5378cb24c360efb",
".git/objects/0e/b90481a9fa0e52f94c79b68ea68ada0f022dc3": "41cfd56d0abb97d5df001a2b263a6a2d",
".git/objects/12/7cb28c2c5edd799312395582b226ae49215e8e": "dbad1ad9f7f5bcfec6a1de09fa0198f7",
".git/objects/15/2d46d782d782bb41cfd5d494cda33b987cf665": "f487356afd7355272ebc6c99bf0f01d7",
".git/objects/16/aecc699422af1786ba9abc1a8fe16531120fa6": "3205b30a9675e4ec552c86b41165803c",
".git/objects/18/0f8b498ad4f8ea2b1455d8be08c0f9063795e7": "3be33939226f018fa54ba8455c50b190",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "4d4add3f0f2fd43f9a35096dc7329507",
".git/objects/1d/d09bb22132c45ed450ebca5351d88fcdf82d04": "5ce45d18204d0ead3b2d3fda97f99389",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/db8bd431b87e74b14dd64af09199bdfc39c92c": "6400a6cc0217bc9841f2c6681bc56b6c",
".git/objects/24/bf5db4e53265987c109fceb32489e97bd0887e": "98e135ab9c098fa7842ab36f97bab048",
".git/objects/28/cdeab358058af2f314af037a6c30b40605b704": "328afbc4b0c3b0607bd544ee49959cbc",
".git/objects/29/057034ba57e0527acd6253dd8734fdfa02c230": "90ba6a854917fe334188481caa90094f",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/34/9ce7efbf27942e0a501e0d18ab499e3727429a": "b8344c31ba22ee1420748d9e6923982e",
".git/objects/37/b362bc58d8125e75d529fd3d12f62486412fcb": "6289046016b19e502a8661822e4d78e6",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/3c/10566fe70baa84f41c3199bd0d966bb11717fc": "c8990d9d9ee9ac1456c6f5ecf82e7fa9",
".git/objects/43/646b1692d6f8c95eb8d32d232416be8183a74e": "ac8a4078cf2b096d0a26c270306b457e",
".git/objects/43/988d6dbacbf3d7120b4f21718ee79e5533e200": "a0c6db96605c99dc32dacd7a4c883bd3",
".git/objects/47/ae2eec9555f92956ea41f59d0047902461c3fb": "e7437c4d97322e03e9f9da30b1ae35d6",
".git/objects/4d/43d2163f68bf1cd2ec94f1dca2a6fa0b3c82bc": "b82d492302047968965a5904f418fc0f",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/b43e4fbc6033c16beb7472d4c7c3339f954485": "f7a23d39a8dca20691a7b4a6af58d645",
".git/objects/52/1f75569b2ef8cbbf0fbb171d841da0aa52f220": "7e1aee153ee93a3befba055a9645da06",
".git/objects/52/e9e46fbaa87af515d8c0b41d4c4ab59162c195": "35f3ff25078ef36f67c6f47c26fe1614",
".git/objects/53/d3328455c3ce0692eda017a0e34ef51e9b91b9": "cb131357e3ed2c564b9fdf09c62d5510",
".git/objects/55/4bb83169167d4afe7c3a5c0b8934e30fcf571b": "d70983187fa85d5f2357d5865ab3439d",
".git/objects/5c/505795826556d28e8768bf2252302a99651205": "51b979d6133da27420aac0ade0a06b80",
".git/objects/5d/8c07cda93177b8b23619c305327550a4cdf75a": "b12e5ea49e9c6efee565c6dc5b3f70f3",
".git/objects/5f/bf1c2745df34f8db0ea2c20d1852423940f917": "8b1b543fb26a8df8a6e448a4e45517fe",
".git/objects/64/2096e463bbfc70893c743c350b674dc1b3c65c": "91a70a3d3bb99a161f59ee6378387888",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/14ebc97857dbe8dff4474f13d6266bc851b2fe": "7ff54e59dabafb5fc315623fcd7e9963",
".git/objects/70/d747fb53e1c51a2cb2f31545f99a8ba0552b41": "9c8e4ff0907c4c5198cd1f691b7979ce",
".git/objects/71/0e4e0ad8b3ce31d01d87c0d0fd9b8818104952": "bdbad3b8d57c263f3c689436ba627037",
".git/objects/75/e648631ee4398ce74e9b1c88f92e1f44521fcb": "4b4e08a2973da82eb0664820c976835b",
".git/objects/76/4711beda95175afe52265903ff6e651ea74f91": "aacb36a2da0a699c5913178c7d1a2dfc",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/bdf0d27cbb79eb2ac01e5e9a387ab5aec3ad93": "15f1645ba1e99dfbc55cca6da8212538",
".git/objects/7f/d27f5109044e63c4312279caf4a326de739658": "9c7b396b53793ebfc6e25c68dfab0be9",
".git/objects/80/348b960d421dd790c3278fa2276256991ff90c": "33c3517ae1e905b4204f4574b52d9f55",
".git/objects/80/a1320a1e11699ed74b6bf346538fc96e3332a8": "71a63421854285792721a3bbf2ccd438",
".git/objects/86/13365f77aa2cca28f08b2c7b09714373e88e84": "398a1212c7c1776bab51c65b7ba94f83",
".git/objects/87/cfdeaab55909aee3d97be291016557ea5bc953": "d42dbc4b446ec271afa5113dac46c8b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/328d14685de4ea7c55ec897d24c4fad0c36855": "bbb9ea9bf31c771a7b63044f2dfa4f86",
".git/objects/89/87ca6aee78a9df5a78b400443ff91785908246": "87be92efa7380bc2a3df9fbe667d8dc1",
".git/objects/8a/8b6033f472a633337b2c67ca08a428adab8387": "11b41a36ab46816052366b12c47895ce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/84d4f4983037a692913da8a3448f1bef83a0bc": "4dddc501b5b9e839cb22f028e91e7ba5",
".git/objects/93/48dcc2c67fb7a9dd45c518dbbaead997c75db3": "2646310dcf195e1bfc2e78812d73b22b",
".git/objects/93/9f613cf645ffef7391c8e731abb56814ce2719": "096989e0fc8c2d6c9ba26aef56707944",
".git/objects/94/608b39818c3446f9854b4fbfa1ab438a20e2a3": "4272c9866393bcd26051f195c040efdf",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/469e35a7e4aa4740e575ee063d5f907a1a62f0": "86260b065832c5f708dc43eebb186aa8",
".git/objects/9c/c150f7d22e0cb7eff9cb761243771c721e5a6e": "6fffd87b8cf6385ae2d1239c25c6f4ed",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a7/a517d9cefea364fe0ac7b9f6553eac2f7adf91": "ab5bc9481cc50b6f6ce92c429ef48ebd",
".git/objects/ac/8793c83cd8d7be683db44bb584947d0f996c1d": "d2047e0eb6d428a987f5bf8f92e9486e",
".git/objects/ad/dfe9eebcbbced9cee2008ff0045e6aa2e71ba3": "ec51b1d4168842f4fb86fe8a8755e5da",
".git/objects/b1/fc51318029f47191c461213be277bd81430279": "ad31e39affb178b934fce6d6a0e4ca39",
".git/objects/b2/1e8285b5d28d94113b71bce43bfac1e6ec6b7c": "a2109023abc12d03571ecc899ba7f78a",
".git/objects/b4/f68cf3715d52444865857231e337afab80fcb8": "57c639c1f64fb038057975d91b625c83",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/4df26aa8c326a62ca8ddb8572776e31514d72f": "865fb23ccedb2847c3be457383856a99",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c8/6bf3e61cf8cd82c39154ffc8f4a6139388d1af": "46214b97ece7280089d4f7227a3eecda",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d3/b054808aff505ff9ffa60b4928a97975c222e8": "27d83d4d8328c1eff03adaebfedaa5c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/8c00edfa1107c62e5c85b1bb63af7effe03552": "141cbcb3c3957d13b9355363e5b7edda",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6e9e1f59b349c0d22568bfd69a2109ea4ddcae": "48541b206c2c8eec6520b6f91e49cbad",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/31f6012f85ed6327c81606a0bd9a9b5ec5b0ff": "20278bd3d7523e1c7a526ae7e09bfe11",
".git/objects/dd/21218fa0f0c86e6ece2738b176ec71692180cf": "9675dd7277f93f009745dd2141430067",
".git/objects/de/62e2e336102842dd2c9fa29ccf818b586552a0": "fc002719d92c04ad48ce99277cc10a4c",
".git/objects/e3/ab57b93cbad6637f82c196907fe2a8adba787d": "40beaa6fe33d2e920cb8f3298ab94e7c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/c9a75e7132d14c57fd0ae9a5a2f0b2ceb50686": "4bd1c9761c224c98567fb7fbec0fb79c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/cd6874c3f3c4f4fcb95f06187a9c8c56a587fb": "244700bb79700b5691ee6dadccd7ecb1",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f1/063d422e61d2cad45192fd86eb321abcecca3f": "cca9674ec1adaedc5ea7d4fb0a32762a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/ee4b7d68c904dc4c89a11b73dc9900f6d56366": "11bf1652bf95c53aefb8e08d466eeddb",
".git/objects/f4/a52606b0fa5690bbeb19734f3f82fccaa88635": "07c5123f895e3aef954b5b2359d3f215",
".git/objects/f4/a6f5854bccaa4e95d98b86576d06b05c615715": "13faf395cbd16e70e0a3c9f41c4c6360",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/b6dc5470f7dde3023ac294e440875e3e4e071d": "3d6736bfaedc9ee7a9cdfbd675d85587",
".git/objects/f9/2449f79dd520c9d2a1a779f4e003105bf73bac": "7c24b6fa348c9041c28245935b6b80e7",
".git/objects/fd/922dee00523f072dba8f58c0c48d59ee1dabbd": "35edcb2bc12d774cc062542fc9a0204d",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/ORIG_HEAD": "d60490fb79636ed01604c33eaded8138",
".git/rebase-merge/author-script": "e9f5437f6e3ebde4b6f7a1f3b1c317f2",
".git/rebase-merge/done": "349d17c0bf74fa85a9c01a7280c7cd60",
".git/rebase-merge/drop_redundant_commits": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/end": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/git-rebase-todo": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/git-rebase-todo.backup": "a79bfe23b43a96d6322dc963f6453ab2",
".git/rebase-merge/head-name": "360efc618fa1294192e18ee097c9fae4",
".git/rebase-merge/interactive": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/message": "42d0f732a3c4d3841524bfc1af8ee544",
".git/rebase-merge/msgnum": "b026324c6904b2a9cb4b88d6d61c81d1",
".git/rebase-merge/no-reschedule-failed-exec": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/onto": "c3c02c33fd675c35b669f6d5c22422b7",
".git/rebase-merge/orig-head": "d60490fb79636ed01604c33eaded8138",
".git/rebase-merge/patch": "d41d8cd98f00b204e9800998ecf8427e",
".git/rebase-merge/stopped-sha": "d60490fb79636ed01604c33eaded8138",
".git/REBASE_HEAD": "d60490fb79636ed01604c33eaded8138",
".git/refs/heads/main": "d60490fb79636ed01604c33eaded8138",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d60490fb79636ed01604c33eaded8138",
"assets/AssetManifest.bin": "e6909175d1f37ad44a6af8eb590d9f0c",
"assets/AssetManifest.bin.json": "6a2d34871e166e570dbe0e826d9c3df7",
"assets/AssetManifest.json": "4d2bfd28d934c6436a1847862a72a284",
"assets/assets/fonts/Cairo/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/images/exclamation.png": "460f088d242dfbf964adbd2b8e45f565",
"assets/assets/images/fuel.png": "cb8b180f3622abe4ac4585e9fda3390f",
"assets/assets/images/function.png": "bc340df1df689149501007573a80ae1e",
"assets/assets/images/invoice.png": "c3fd8f021b1788a1885b6691823c5bcc",
"assets/assets/images/liability.png": "5b1317300355c19ba281a59013c4a3df",
"assets/assets/images/logo.png": "df1bfba6cd127b9abda739e3c407deee",
"assets/assets/images/long-term-debt.png": "7c63e25f018b9e747795918a7bb99df0",
"assets/assets/images/market.png": "7ef89f7817f97a5c0171cef5d011f097",
"assets/assets/images/money.png": "3267badec77d7c7faa15295fc38863f6",
"assets/assets/images/paid.png": "22d49806ba3a034ec3136b964fa8d659",
"assets/assets/images/people.png": "1434ce1db4eafd6553e26b878d3f1a3c",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/ready-stock.png": "3d1fde8c0770da73f871fcba84edecf9",
"assets/assets/images/report.png": "18429c35698ad11c10a3240eb02f6816",
"assets/assets/images/wifi-exclamation.png": "7c83865d957b05aa9afe3be717f9913e",
"assets/assets/lottie/loading_animation.json": "3ccf705a61e9d86c868185fafc78fbdf",
"assets/assets/lottie/warning_animation.json": "57eb806ad38b89d7161829886e0543e9",
"assets/FontManifest.json": "38e434f23cb3e791ef58955c80624d23",
"assets/fonts/MaterialIcons-Regular.otf": "de03bd86a6b41be2236fde83fb66e2c4",
"assets/NOTICES": "bf73c5bf85c76c98d53a01406c39db48",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "d69804ce1ee58d559c1e4640b4a02975",
"icons/Icon-192.png": "df1bfba6cd127b9abda739e3c407deee",
"icons/Icon-512.png": "df1bfba6cd127b9abda739e3c407deee",
"icons/Icon-maskable-192.png": "df1bfba6cd127b9abda739e3c407deee",
"icons/Icon-maskable-512.png": "df1bfba6cd127b9abda739e3c407deee",
"index.html": "26a0550dc23828e6c5a73f079dda2711",
"/": "26a0550dc23828e6c5a73f079dda2711",
"main.dart.js": "147283ec3fc999460dec36cf023658ed",
"manifest.json": "2554549b33b512a301d143e0e75d791b",
"version.json": "54de6090f80c1e33509df2afde02020c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
