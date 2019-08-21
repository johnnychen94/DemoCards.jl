var documenterSearchIndex = {"docs":
[{"location":"democards/gallery_of_packages/uses/documenter/#documenter-1-1","page":"Documenter","title":"Documenter","text":"","category":"section"},{"location":"democards/gallery_of_packages/uses/documenter/#","page":"Documenter","title":"Documenter","text":"(Image: juliadocs)","category":"page"},{"location":"democards/gallery_of_packages/uses/documenter/#","page":"Documenter","title":"Documenter","text":"DemoCards.jl is a plugin package to Documenter.jl","category":"page"},{"location":"references/#package_references-1","page":"Package References","title":"Package References","text":"","category":"section"},{"location":"references/#","page":"Package References","title":"Package References","text":"Modules = [DemoCards]\nOrder   = [:type, :function]","category":"page"},{"location":"references/#DemoCards.DemoPage","page":"Package References","title":"DemoCards.DemoPage","text":"struct DemoPage <: Any\nDemoPage(root::String)\n\nConstructs a demo page object.\n\nFields\n\nBesides the root path to the demo page folder root, this struct has some other fields:\n\ntitle: page title\ntemplate: template content of the demo page.\nsections: demo sections found in root\n\nConfiguration\n\nYou can manage an extra config.json file to customize rendering of a demo page. Supported items are:\n\norder: specify the sections order. By default, it's case-insensitive alphabetic order.\ntemplate: path to template filename. The content of the template file should has one and only one {{{democards}}}.\ntitle: specify the title of this demo page. By default, it's the folder name of root. Will be override by template.\n\nThe following is an example of config.json:\n\n{\n    \"template\": \"template.md\",\n    \"order\": [\n        \"basic\",\n        \"advanced\"\n    ]\n}\n\nExamples\n\nThe following is the simplest folder structure of a DemoPage:\n\ndemos\n└── basic\n    ├── demo_1.md\n    ├── demo_2.md\n    ├── demo_3.md\n    ├── demo_4.md\n    ├── demo_5.md\n    ├── demo_6.md\n    ├── demo_7.md\n    └── demo_8.md\n\nnote: Note\nA DemoPage doesn't manage demo files directly, so here you'll need a DemoSection basic to manage them.\n\nThe following is a typical folder structure of a DemoPage:\n\ndemos\n├── advanced\n│   ├── advanced_demo_1.md\n│   └── advanced_demo_2.md\n├── basic\n│   ├── part1\n│   │   ├── basic_demo_1_1.md\n│   │   └── basic_demo_1_2.md\n│   └── part2\n│       ├── config.json\n│       ├── basic_demo_2_1.md\n│       └── basic_demo_2_2.md\n├── config.json\n└── template.md\n\nwarning: Warning\nA section should only hold either subsections or demo files. A folder that has both subfolders and demo files (e.g., *.md) is invalid.\n\nSee also: MarkdownDemoCard, DemoSection\n\n\n\n\n\n","category":"type"},{"location":"references/#DemoCards.DemoSection","page":"Package References","title":"DemoCards.DemoSection","text":"struct DemoSection <: Any\nDemoSection(root::String)\n\nConstructs a demo section that holds either nested subsections or demo cards.\n\nFields\n\nBesides the root path to the demo section folder root, this struct has some other fields:\n\ncards: demo cards found in root\nsubsections: nested subsections found in root\n\nConfiguration\n\nYou can manage an extra config.json file to customize rendering of a demo section. Supported items are:\n\norder: specify the cards order or subsections order. By default, it's case-insensitive alphabetic order.\ntitle: specify the title of this demo section. By default, it's the folder name of root.\n\nThe following is an example of config.json:\n\n{\n    \"title\": \"learn by examples\"\n    \"order\": [\n        \"quickstart.md\",\n        \"array.md\"\n    ]\n}\n\nwarning: Warning\nYou can't specify files or foldernames in other folders.\n\nExamples\n\nThe following is the simplest folder structure of a DemoSection:\n\nsection\n├── demo_1.md\n├── demo_2.md\n├── demo_3.md\n├── demo_4.md\n├── demo_5.md\n├── demo_6.md\n├── demo_7.md\n└── demo_8.md\n\nThe following is a typical folder structure of a DemoSection:\n\nsection\n├── config.json\n├── part1\n│   ├── demo_21.md\n│   └── demo_22.md\n└── part2\n    ├── config.json\n    ├── demo_23.md\n    └── demo_24.md\n\nwarning: Warning\nA section should only hold either subsections or demo files. A folder that has both subfolders and demo files (e.g., *.md) is invalid.\n\nSee also: MarkdownDemoCard, DemoPage\n\n\n\n\n\n","category":"type"},{"location":"references/#DemoCards.MarkdownDemoCard","page":"Package References","title":"DemoCards.MarkdownDemoCard","text":"struct MarkdownDemoCard <: AbstractDemoCard\nMarkdownDemoCard(path::String)\n\nConstructs a markdown-format demo card from existing markdown file path.\n\nFields\n\nBesides path, this struct has some other fields:\n\npath: path to the source markdown file\ncover: path to the cover image\nid: cross-reference id\ntitle: one-line description of the demo card\ndescription: multi-line description of the demo card\n\nConfiguration\n\nYou can pass additional information by adding a YAML front matter to the markdown file. Supported items are:\n\ncover: relative path to the cover image. If not specified, it will use the first available image link, or all-white image if there's no image links.\ndescription: a multi-line description to this file, will be displayed when the demo card is hovered. By default it uses title.\nid: specify the id tag for cross-references. By default it's infered from the filename, e.g., simple_demo from simple demo.md.\ntitle: one-line description to this file, will be displayed under the cover image. By default, it's the name of the file (without extension).\n\nAn example of the front matter:\n\n---\ntitle: passing extra information\ncover: cover.png\nid: non_ambiguious_id\ndescription: this demo shows how you can pass extra demo information to DemoCards package.\n---\n\nSee also: DemoSection, DemoPage\n\n\n\n\n\n","category":"type"},{"location":"references/#DemoCards.cardtheme","page":"Package References","title":"DemoCards.cardtheme","text":"cardtheme(theme::AbstractString) -> path\n\nCurrently supported themes are:\n\nminimal\n\n\n\n\n\n","category":"function"},{"location":"references/#DemoCards.makedemos-Tuple{String}","page":"Package References","title":"DemoCards.makedemos","text":"makedemos(source::String) -> path\n\nMake a demo page file and return the path to it.\n\nsource is the root path to the demos folder, by default it's relative path to docs.\n\nProcessing pipeline:\n\nanalyze the folder structure source and loading all available configs.\ncopy assets\npreprocess demo files and save it\nsave/copy cover images\n\nnote: Note\nBy default, the source demo files are read, processed and save to docs/src/democards, so if you put all source demo files in docs/src, there will be a duplication of files and assets.\n\nKeywords\n\nroot::String: root path to the whole documentaion. By default docs.\ndestination::String: By default democards.\n\nExamples\n\nYou only need to call this function before Documenter.makedocs, and pass the result to it.\n\nformat = Documenter.HTML(edit_branch = \"master\",\n                         assets = [joinpath(\"assets\", \"style.css\")])\n\nexamples = makedemos(\"examples\")\n\nmakedocs(format = format,\n         pages = [\n            \"Home\" => \"index.md\",\n            \"Examples\" => examples,\n         ])\n\nwarning: Warning\nCurrently, there's no guarantee that this function works for unconventional documentation folder structure. By convention, it is:.\n├── Project.toml\n├── docs\n│   ├── make.jl\n│   └── src\n├── src\n└── test\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.democard-Tuple{String}","page":"Package References","title":"DemoCards.democard","text":"democard(path::String)::T\n\nConstructs a concrete AbstractDemoCard instance.\n\nThe return type T is determined by the extension of the path to your demofile. Currently supported types are:\n\nMarkdownDemoCard\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.get_default_order-Tuple{DemoSection}","page":"Package References","title":"DemoCards.get_default_order","text":"return case-insensitive alphabetic order\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.load_title-Tuple{DemoPage,Any}","page":"Package References","title":"DemoCards.load_title","text":"load_title(page::DemoPage, config)\n\nload title from config using the following priority rules:\n\nparse the title out from the template file\nuse config[\"title\"]\nfallback: use the folder name\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.parse_markdown-Tuple{String}","page":"Package References","title":"DemoCards.parse_markdown","text":"parse_markdown(path::String)\n\nparse the template file of page and return a configuration dict.\n\nCurrently supported items are: title, id.\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.save_cover-Tuple{String,DemoCards.AbstractDemoCard}","page":"Package References","title":"DemoCards.save_cover","text":"save_cover(path::String, card::AbstractDemoCard)\n\nprocess the cover image and save it.\n\n\n\n\n\n","category":"method"},{"location":"references/#DemoCards.save_markdown-Tuple{String,MarkdownDemoCard}","page":"Package References","title":"DemoCards.save_markdown","text":"save_markdown(root::String, card::MarkdownDemoCard)\n\nprocess the original markdown file and save it.\n\nThe processing pipeline is:\n\nstrip the front matter\ninsert a level-1 title and id\n\n\n\n\n\n","category":"method"},{"location":"democards/gallery_of_packages/uses/fileio/#fileio-1-1","page":"Fileio","title":"Fileio","text":"","category":"section"},{"location":"democards/gallery_of_packages/uses/fileio/#","page":"Fileio","title":"Fileio","text":"(Image: JuliaIO)","category":"page"},{"location":"democards/gallery_of_packages/uses/fileio/#","page":"Fileio","title":"Fileio","text":"FileIO is used to load existing covers images.","category":"page"},{"location":"democards/gallery_of_packages/uses/literate/#literate-1-1","page":"Literate","title":"Literate","text":"","category":"section"},{"location":"democards/gallery_of_packages/uses/literate/#","page":"Literate","title":"Literate","text":"(Image: Literate)","category":"page"},{"location":"democards/gallery_of_packages/uses/literate/#","page":"Literate","title":"Literate","text":"Literate.jl is used to translate your julia codes into markdown demo.","category":"page"},{"location":"democards/simplest_demopage/#simplest_demopage-1","page":"Simplest Demopage","title":"simplest_demopage","text":"","category":"section"},{"location":"democards/simplest_demopage/#dependencies-1","page":"Simplest Demopage","title":"dependencies","text":"","category":"section"},{"location":"democards/simplest_demopage/#part1-1","page":"Simplest Demopage","title":"part1","text":"","category":"section"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card-section\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"(Image: svd)","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"Simple_documenter","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n</div>","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"(Image: svd)","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"Simple_julia","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n</div>","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"(Image: svd)","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"Simple_literate","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n</div>","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>","category":"page"},{"location":"democards/simplest_demopage/#part2-1","page":"Simplest Demopage","title":"part2","text":"","category":"section"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card-section\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"(Image: svd)","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"Simple_fileio","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n</div>","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"(Image: svd)","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"Simple_images","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>\n</div>","category":"page"},{"location":"democards/simplest_demopage/#","page":"Simplest Demopage","title":"Simplest Demopage","text":"</div>","category":"page"},{"location":"democards/gallery_of_packages/uses/julia/#julia-1-1","page":"Julia","title":"Julia","text":"","category":"section"},{"location":"democards/gallery_of_packages/uses/julia/#","page":"Julia","title":"Julia","text":"(Image: julialang)","category":"page"},{"location":"democards/gallery_of_packages/uses/julia/#","page":"Julia","title":"Julia","text":"Julia language is a wonderful programming language! We all love it !","category":"page"},{"location":"concepts/#concepts-1","page":"Concepts","title":"Concepts","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"This page is a brief introduction on the core types provided by DemoCards.jl. Knowing them helps you configure your demo pages. For details description, please refer to the Package References.","category":"page"},{"location":"concepts/#concepts_page-1","page":"Concepts","title":"DemoPage","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"DemoPage is the root type in DemoCards.jl, everything else is contained in it directly or indirectly. It has following fields:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"root: root path of all your demos in this page.\nsections: holds a list of demo sections.\ntemplate: your gallery page is generated from the template.\ntitle: page title.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"You can configure your DemoPage by maintaining a config.json file, supported configuration keys are:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"order: specify the sections order. By default, it's case-insensitive alphabetic order.\ntitle: specify the title of this demo page.\ntemplate: path to template filename.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"A valid template should contain one and only one {{{democards}}}. For example,","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"# Examples\n\nThis page contains a set of examples for you to start with.\n\n{{{democards}}}\n\nContributions are welcomed at [DemoCards.jl](https://github.com/johnnychen94/DemoCards.jl) :D","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"Here's an example of config.json for DemoPage:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"{\n    \"template\": \"index.md\",\n    \"order\": [\n        \"basic\",\n        \"advanced\"\n    ]\n}","category":"page"},{"location":"concepts/#concepts_section-1","page":"Concepts","title":"DemoSection","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"DemoSection defines the structure of your demo page. It has following fields:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"root: root path to all the demos in this section.\ncards: holds a list of demo cards.\nsubsections: holds a list of demo subsections.\ntitle: section title.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"warning: Warning\nA DemoSection can't directly holds both cards and subsections; either of them should be empty vector.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"You can configure your DemoSection by maintaining a config.json file, supported configuration keys are:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"order: specify the cards order or subsections order. By default, it'scase-insensitive alphabetic order.\ntitle: specify the title of this demo section.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"The following is an example of config.json:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"{\n    \"title\": \"learn by examples\",\n    \"order\": [\n        \"quickstart.md\",\n        \"array.md\"\n    ]\n}","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"note: Note\nIf you've specified orders in config.json, then for every new demos, you need to add its filename to order. DemoCards.jl isn't smart enough to guess what you really want.","category":"page"},{"location":"concepts/#concepts_card-1","page":"Concepts","title":"DemoCard","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"In simple words, a demo card consists of a cover image, a one-line description, and a link to its content – just like a card.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"info: Info\n🚧 Currently, DemoCards.jl supports only markdown files. In the future it will support julia source codes using Literate.jl.","category":"page"},{"location":"concepts/#concepts_mdcard-1","page":"Concepts","title":"MarkdownDemoCard","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"MarkdownDemoCard is a demo card whose contents are written in the markdown format. The markdown files are almost directly passed to Documenter.jl, check the syntax of Documenter.jl for how to write the julia flavor markdown files.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"You can configure your markdown demos by adding a YAML format front matter.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"cover: path to the cover image. By default, it will use the first available image link.\ndescription: a multi-line description to this file, will be displayed when the demo card is hovered. By default it uses title.\nid: specify the id tag for cross-references.\ntitle: one-line description to this file, will be displayed under the cover image.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"An example of the front matter:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"---\ntitle: Configure your demo with front matter\ncover: cover.png\nid: non_ambiguious_id\ndescription: this demo shows how you can pass extra demo information to DemoCards package.\n---\n\nYou don't need to add a title in the body. DemoCards.jl fills it for you.","category":"page"},{"location":"concepts/#Remarks-1","page":"Concepts","title":"Remarks","text":"","category":"section"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"Currently, there're two special names used in DemoCards.jl:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"assets is a preserved name for DemoCards.jl to escape preprocessing\nconfig.json is used to tell DemoCards.jl more informations of current folder.","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"To free you from managing/re-organizing demo structure, there're two other decisions here:","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"each folder maintains a config.json\npath informations are always relative path","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"","category":"page"},{"location":"concepts/#","page":"Concepts","title":"Concepts","text":"Check Gallery of Packages for a more complicated usage of DemoCards.jl.","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_documenter/#simple_documenter-1-1","page":"Simple_documenter","title":"Simple_documenter","text":"","category":"section"},{"location":"democards/simplest_demopage/dependencies/part1/simple_documenter/#","page":"Simple_documenter","title":"Simple_documenter","text":"(Image: juliadocs)","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_documenter/#","page":"Simple_documenter","title":"Simple_documenter","text":"DemoCards.jl is a plugin package to Documenter.jl","category":"page"},{"location":"democards/gallery_of_packages/uses/images-1/#images-1-1-1","page":"Images","title":"Images","text":"","category":"section"},{"location":"democards/gallery_of_packages/uses/images-1/#","page":"Images","title":"Images","text":"(Image: JuliaImages)","category":"page"},{"location":"democards/gallery_of_packages/uses/images-1/#","page":"Images","title":"Images","text":"Images.jl is used to preprocess the cover images.","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_literate/#simple_literate-1-1","page":"Simple_literate","title":"Simple_literate","text":"","category":"section"},{"location":"democards/simplest_demopage/dependencies/part1/simple_literate/#","page":"Simple_literate","title":"Simple_literate","text":"(Image: Literate)","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_literate/#","page":"Simple_literate","title":"Simple_literate","text":"Literate.jl is used to translate your julia codes into markdown demo.","category":"page"},{"location":"democards/gallery_of_packages/used_by/images/#images-1-1","page":"Images","title":"Images","text":"","category":"section"},{"location":"democards/gallery_of_packages/used_by/images/#","page":"Images","title":"Images","text":"(Image: JuliaImages)","category":"page"},{"location":"democards/gallery_of_packages/used_by/images/#","page":"Images","title":"Images","text":"DemoCards.jl is developed to standardizing the demo page of Images.jl.","category":"page"},{"location":"democards/gallery_of_packages/#gallery_of_packages-1","page":"Gallery of Packages","title":"gallery of packages","text":"","category":"section"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"This page shows you a more complicated usage example of DemoCards.jl. Feel free to investiage the source codes of this page.","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Here's the folder structure of this demo page:","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"root = \"../../../demos/gallery_of_packages/\"","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"run(`tree $(root) -L 2`);","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"","category":"page"},{"location":"democards/gallery_of_packages/#depends-on-1","page":"Gallery of Packages","title":"depends on","text":"","category":"section"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card-section\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Julia","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Documenter","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Literate","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Images","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Fileio","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>","category":"page"},{"location":"democards/gallery_of_packages/#Used-by-1","page":"Gallery of Packages","title":"Used by","text":"","category":"section"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card-section\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"<div class=\"card\">\n<div class=\"card-img\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"(Image: svd)","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n<div class=\"card-text\">","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"Images","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>\n</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"</div>","category":"page"},{"location":"democards/gallery_of_packages/#","page":"Gallery of Packages","title":"Gallery of Packages","text":"","category":"page"},{"location":"quickstart/#quickstart-1","page":"QuickStart","title":"Quick Start","text":"","category":"section"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"This section describes how you can set up your demos easily.","category":"page"},{"location":"quickstart/#Manage-your-demo-files-1","page":"QuickStart","title":"Manage your demo files","text":"","category":"section"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"The rules are simple:","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"you need one demo page to hold all the demos\na demo page has several demo sections\na demo section either\nhas other demo sections as nested subsections, or,\nhas the demo files.","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"In the following example:","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"we have one demo page: \"simplest_demopage\"\n\"simplest_demopage\" has one demo sections: \"dependencies\"\n\"dependencies\" has two demo subsections: \"part1\" and \"part2\"\n\"part1\" and \"part2\" holds all the demo files","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"using DemoCards\nusing DemoCards: DemoPage\nroot = \"../demos/simplest_demopage\"","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"run(`tree $(root) -L 3`);\nDemoPage(root)","category":"page"},{"location":"quickstart/#Deploy-your-demo-page-1","page":"QuickStart","title":"Deploy your demo page","text":"","category":"section"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"Deployment is also very simple:","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"create a demopage using makedemos\nload a style sheet using cardtheme\npass the result to Documenter","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"theme = cardtheme()\ndemopage = makedemos(\"demos/simplest_demopage\") # relative path to docs/\n\nformat = Documenter.HTML(edit_branch = \"master\",\n                         assets = [theme, ])\nmakedocs(format = format,\n         pages = [\n            \"Home\" => \"index.md\",\n            \"Examples\" => demopage,\n         ],\n         sitename = \"Awesome demos\")","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"After it's set up, you can now focus on contributing more demos. For other works, you can leave it to DemoCards.jl :D","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"Check the Simplest Demopage to see how this page looks with the minimal configuration.","category":"page"},{"location":"quickstart/#What-DemoCards.jl-does-1","page":"QuickStart","title":"What DemoCards.jl does","text":"","category":"section"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"The pipeline of makedemos is:","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"analyze the structure of your demo folder and extracts configuration information\ncopy assets without processing\npreprocess demo files and save it\nprocess and save cover images","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"Since all files are generated to docs/src, the next step is to leave everything else to Documenter.jl 😃","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"tip: Tip\nBy default, makedemos generates all necessary files to docs/src/democards, so it's recommended to add it to the .gitignore of your project.","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"warning: Warning\nCurrently, there's no guarantee that this function works for untypical documentation folder structure. By typical, it is:.\n├── Project.toml\n├── docs\n│   ├── demos\n│   ├── make.jl\n│   ├── Project.toml\n│   └── src\n├── src\n└── test","category":"page"},{"location":"quickstart/#","page":"QuickStart","title":"QuickStart","text":"For advanced usage of DemoCards.jl, you need to understand the core concepts of it.","category":"page"},{"location":"democards/simplest_demopage/dependencies/part2/simple_images/#simple_images-1-1","page":"Simple_images","title":"Simple_images","text":"","category":"section"},{"location":"democards/simplest_demopage/dependencies/part2/simple_images/#","page":"Simple_images","title":"Simple_images","text":"(Image: JuliaImages)","category":"page"},{"location":"democards/simplest_demopage/dependencies/part2/simple_images/#","page":"Simple_images","title":"Simple_images","text":"DemoCards.jl is developed to standardizing the demo page of Images.jl.","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_julia/#simple_julia-1-1","page":"Simple_julia","title":"Simple_julia","text":"","category":"section"},{"location":"democards/simplest_demopage/dependencies/part1/simple_julia/#","page":"Simple_julia","title":"Simple_julia","text":"(Image: julialang)","category":"page"},{"location":"democards/simplest_demopage/dependencies/part1/simple_julia/#","page":"Simple_julia","title":"Simple_julia","text":"Julia language is a wonderful programming language! We all love it !","category":"page"},{"location":"democards/simplest_demopage/dependencies/part2/simple_fileio/#simple_fileio-1-1","page":"Simple_fileio","title":"Simple_fileio","text":"","category":"section"},{"location":"democards/simplest_demopage/dependencies/part2/simple_fileio/#","page":"Simple_fileio","title":"Simple_fileio","text":"(Image: JuliaIO)","category":"page"},{"location":"democards/simplest_demopage/dependencies/part2/simple_fileio/#","page":"Simple_fileio","title":"Simple_fileio","text":"FileIO is used to load existing covers images.","category":"page"},{"location":"#DemoCards.jl-1","page":"Home","title":"DemoCards.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Let's focus on writing good demos.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"A plugin package to Documenter.jl that dynamically generate a demo gallery for you.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"note: Note\nPlease read the Documenter.jl documentation first if you're unfamiliar with the julia documentation system.","category":"page"},{"location":"#Package-features-1","page":"Home","title":"Package features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"a plugin package to Documenter.jl.\nmagically generate an index page for all demos.\nminimal configuration.\n🚧 all demos are tested by CI.","category":"page"},{"location":"#Manual-Outline-1","page":"Home","title":"Manual Outline","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Quick Start helps you set up this package easily.\nConcepts explains the basic bulding block of this package.\nPackage References are detailed documentation of this package.","category":"page"}]
}
