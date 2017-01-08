const monkeydownData = {
  title: 'Monkeydown',
  subTitle: 'Markdown note app for you',
  icon: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/73365933-file_1481626141410_85f9.png',
  appImg: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/84647200-file_1481622783926_a31f.png',
  description: ' is a Markdown note app for you, on Mac OS X. Features live preview, sync scroll, auto save, custom themes, export note as image.',
  features: [
    {
      title: 'Live Preview',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/59113925-file_1481622784384_105c2.png',
      description: 'Monkeydown features live preview.',
      side: 'l'
    },
    {
      title: 'Color Themes',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/25527635-file_1481622785079_13c1a.png',
      description: 'Monkeydown comes with multiple color themes for the editor and the previewer.',
      side: 'r'
    },
    {
      title: 'Light / Dark Color Scheme',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/9621781-file_1481622784876_9d38.png',
      description: 'Toggle light or dark color scheme as you like.',
      side: 'r'
    },
    {
      title: 'Vim / Emacs Keyboard Map',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/66351694-file_1481622784259_8b9c.png',
      description: 'A handy feature for vimers or emacers.',
      side: 'l'
    },
    {
      title: 'Search with books / tags',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/18793087-file_1481622784591_272d.png',
      description: 'Monkeydown orgnize notes with books and tags. You can search notes by title with `in a certain book\' and `tagged with some tags\'.',
      side: 'r'
    },
    {
      title: 'Export as Image',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/81771110-file_1481622784107_ba30.png',
      description: 'Maybe you want to share a note to your social media app as image. It is a good idea.',
      side: 'l'
    },
    {
      title: 'Sync to WebDav Server',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/49650617-file_1481622784746_a46e.png',
      description: 'Synchronizing data across multiple devices via WebDav service.',
      side: 'r'
    },
  ],
  price: {
    cn: 60,
    us: 10
  }
};


const ghstarsData = {
  title: 'GHstars',
  subTitle: 'Manage your GitHub starred repositories with groups and tags',
  icon: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/28974512-file_1481626407896_6e6b.png',
  appImg: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/69859106-file_1481626393901_350d.png',
  description: ' helps you to orgnize your starred repositories on Github with groups and tags. You can put repositories to group or tag them. The app provides a handy search bar so you can find a repository quickly.',
  features: [
    {
      title: 'View Starred Repositories',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/55142885-file_1481626394720_a1bc.png',
      description: `You can view all your starred repositories on GitHub very easy with GHstars. The app fetch and update your starred automatically. GHstars has a readme viewer for selected repository. With the navigation in the viewer, you can easily to jump any position of the readme page.`,
      side: 'l'
    },
    {
      title: 'Organize with Group/Tag',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/85930-file_1481626394244_132f4.png',
      description: `Oranizing the starred repositories with groups and tags, your mind will be freed from guessing what the repository is about and you can find a specific repository easily and quickly.
GHstars provides a very simple and convenient way to edit the groups and tags.`,
      side: 'r'
    },
    {
      title: 'Fuzzy Search',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/71100303-file_1481626394090_1219e.png',
      description: `GHstars has succinct searchbar witch will flowed on the window just after a slight press on a specific key (key / or key ?).
GHstars do not need you to type a exact-matched name of a repository, with making fuzzy searches by name or by name and description.`,
      side: 'l'
    },
    {
      title: 'Synchronize multiple devices',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/45132864-file_1481626394378_165f.png',
      description: `You may expect to use GHstars on multiple devices. GHstars provide a way to synchronize the groups and tags across multiple devices.
        To use this feature, you just need to setup a webdav service.
      `,
      side: 'r'
    },
    {
      title: 'Vim-Style Shortcuts',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/57381889-file_1481626394909_17640.png',
      description: `Inspired by Vim, GHstars provides a keyboard shortcut system to drive it's functions.
        So now you can organize your starred repositories without move your fingers out of your favorite keyboard.`,
      side: 'l'
    },
    {
      title: 'Color Themes',
      img: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-13/56178207-file_1481626394499_3e7d.png',
      descriptions: [
        'A light theme for day, a dark theme for night. ',
        'Of cause, you can use the dark or light theme at all times as you like.',
      ],
      side: 'r'
    },
  ],
  price: {
    cn: 12,
    us: 2
  }
};

const monkeydownPaymentTpl = {
	"transactions": [{
	  "item_list": {
		  "items": [{
		    "name": "Monkeydown",
		    "sku": "monkeysoft - MKD",
		    "price": "10.00",
		    "currency": "USD",
		    "quantity": 1
		  }]
		},
		"amount": {
		  "currency": "USD",
		  "total": "10.00"
		},
		"description": "Monkeydown - markdown note app for you."
	}],
  alipay: {
    subject: 'Monkeydown',
    body: "Monkeydown - markdown note app for you."
  },
  price: {
    cn: 60,
    us: 10
  }
};

const ghstarsPaymentTpl = {
	"transactions": [{
	  "item_list": {
		  "items": [{
		    "name": "GHstars",
		    "sku": "monkeysoft - GHS",
		    "price": "2.00",
		    "currency": "USD",
		    "quantity": 1
		  }]
		},
		"amount": {
		  "currency": "USD",
		  "total": "2.00"
		},
		"description": "GHstars - manage your GitHub starred repositories with groups and tags."
	}],
  alipay: {
    subject: 'GHstars',
		body: "GHstars - manage your GitHub starred repositories with groups and tags."
  },
  price: {
    cn: 12,
    us: 2
  }
};

module.exports = {
  monkeydownData: monkeydownData,
  ghstarsData: ghstarsData,
  paymentTpl: {
    monkeydown: monkeydownPaymentTpl,
    ghstars: ghstarsPaymentTpl
  },
  errorImg: 'http://oc0fp7t3p.bkt.clouddn.com/16-12-20/89536341-file_1482232400932_1695f.png'
};
