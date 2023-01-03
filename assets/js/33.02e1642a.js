(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{401:function(e,r,a){"use strict";a.r(r);var s=a(17),t=Object(s.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"venus-worker-任务管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker-任务管理"}},[e._v("#")]),e._v(" venus-worker 任务管理")]),e._v(" "),a("p",[e._v("之前的文档中，我们提到，在 venus-cluster 体系中，将扇区的流程管理放到了 worker 中。")]),e._v(" "),a("p",[e._v("因此，扇区任务的管理，尤其是异常处理，也就要通过扇区所处的 worker 实例来执行。")]),e._v(" "),a("p",[e._v("但是如果全部的状态查看、异常处理都需要登录到对应机器去操作，那么肯定非常不方便。")]),e._v(" "),a("p",[e._v("因此在 v0.2.0 及之后的版本中，增加了 worker 向 sector-manager 上报状态，sector-manager 远程管理 worker 的机制。")]),e._v(" "),a("p",[e._v("下面，我们会就 worker 自管理和 sector-manager 管理 worker 的方式分别进行说明。")]),e._v(" "),a("h2",{attrs:{id:"venus-worker-自管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-worker-自管理"}},[e._v("#")]),e._v(" venus-worker 自管理")]),e._v(" "),a("p",[e._v("venus-worker 的自管理主要通过")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-worker worker\n")])])]),a("p",[e._v("提供的一组工具，调用管理接口进行操作，其中包含的子命令是")]),e._v(" "),a("ul",[a("li",[e._v("list")]),e._v(" "),a("li",[e._v("pause")]),e._v(" "),a("li",[e._v("resume")])]),e._v(" "),a("h3",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[e._v("#")]),e._v(" list")]),e._v(" "),a("p",[a("code",[e._v("list")]),e._v(" 用于列出当前运行的 venus-worker 实例中的所有 "),a("code",[e._v("sealing_thread")]),e._v(" 的当前状态。他的使用方式是")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-worker worker -c <config file path> list\n")])])]),a("p",[e._v("我们以代码库中的 mock 配置为例：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ ./dist/bin/venus-worker worker -c ./venus-worker/assets/venus-worker.mock.toml list\n\n#0: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store1"; sector_id=Some(s-t010000-2), paused=true, paused_elapsed=Some(17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n#1: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store2"; sector_id=Some(s-t010000-3), paused=true, paused_elapsed=Some(17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n#2: "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store3"; sector_id=Some(s-t010000-1), paused=true, paused_elapsed=Some(17s), state=C1Done, last_err=Some("permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]")\n')])])]),a("p",[e._v("可以看到，针对每一个 "),a("code",[e._v("sealing_thread")]),e._v(" ，会列出")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("序号")])]),e._v(" "),a("li",[a("p",[e._v("本地存储位置信息")])]),e._v(" "),a("li",[a("p",[e._v("扇区标识（如果有正在处理的扇区任务）")])]),e._v(" "),a("li",[a("p",[e._v("是否已暂停")])]),e._v(" "),a("li",[a("p",[e._v("已暂停的时间（如果有已暂停的扇区任务）")])]),e._v(" "),a("li",[a("p",[e._v("当前状态")])]),e._v(" "),a("li",[a("p",[e._v("最近一次异常信息（如果有因异常而暂停的扇区任务）")])])]),e._v(" "),a("h3",{attrs:{id:"pause"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause"}},[e._v("#")]),e._v(" pause")]),e._v(" "),a("p",[a("code",[e._v("pause")]),e._v(" 用于暂停指定序号的 "),a("code",[e._v("sealing_thread")]),e._v("。它的使用方式是")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ venus-worker worker -c <config file path> pause --index <index>\n")])])]),a("p",[e._v("其中：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("index")]),e._v(" 需要和 "),a("code",[e._v("list")]),e._v(" 中的序号匹配。")])]),e._v(" "),a("h3",{attrs:{id:"resume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resume"}},[e._v("#")]),e._v(" resume")]),e._v(" "),a("p",[a("code",[e._v("resume")]),e._v(" 用于恢复处于暂停状态的 "),a("code",[e._v("sealing_thread")]),e._v("。它的使用方式是")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-worker worker -c <config file path> resume [--state <state>] --index <index>\n")])])]),a("p",[e._v("其中：")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("index")]),e._v(" 需要和 "),a("code",[e._v("list")]),e._v(" 中的序号匹配。")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("state")]),e._v(" 是选填项。")]),e._v(" "),a("p",[e._v("不填写时，扇区会尝试以当前状态重启；如果填写了正确的 "),a("code",[e._v("state")]),e._v(" 值，将会以指定状态重启")]),e._v(" "),a("p",[e._v("对于不同的 "),a("code",[e._v("sealing_thread")]),e._v(" 任务类型，可选的状态值在 "),a("RouterLink",{attrs:{to:"/zh/intro/11.任务状态流转.html"}},[e._v("11.任务状态流转")])],1)])]),e._v(" "),a("h2",{attrs:{id:"venus-sector-manager-管理-venus-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-sector-manager-管理-venus-worker"}},[e._v("#")]),e._v(" venus-sector-manager 管理 venus-worker")]),e._v(" "),a("p",[e._v("venus-sector-manager 对 venus-worker 的管理主要是两方面：")]),e._v(" "),a("ol",[a("li",[e._v("接收 worker 实例的定时上报信息")]),e._v(" "),a("li",[e._v("调用指定 venus-worker 实例上的管理接口")])]),e._v(" "),a("p",[e._v("使用者通过")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./dist/bin/venus-sector-manager util worker\n")])])]),a("p",[e._v("提供的一组工具，调用 venus-sector-manager 的管理接口，或代理调用指定 venus-worker 的管理接口，完成操作。")]),e._v(" "),a("p",[e._v("包含的子命令是：")]),e._v(" "),a("ul",[a("li",[e._v("list")]),e._v(" "),a("li",[e._v("info")]),e._v(" "),a("li",[e._v("pause")]),e._v(" "),a("li",[e._v("resume")])]),e._v(" "),a("h3",{attrs:{id:"list-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list-2"}},[e._v("#")]),e._v(" list")]),e._v(" "),a("p",[e._v("这里的 "),a("code",[e._v("list")]),e._v(" 用于列出所向本 venus-secotr-manager 实例上报过信息的 worker 概况，例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./dist/bin/venus-sector-manager util worker list\nName       Dest             Threads  Empty  Paused  Errors  LastPing(with ! if expired)\n127.0.0.1  127.0.0.1:17890  3        0      3       3       2.756922465s\n")])])]),a("p",[e._v("可以看到，针对每一个实例，会列出：")]),e._v(" "),a("ul",[a("li",[e._v("实例名（如果没有指定实例名，则会以连接 venus-sector-manager 使用的 ip）")]),e._v(" "),a("li",[e._v("实例连接信息")]),e._v(" "),a("li",[a("code",[e._v("sealing_thread")]),e._v(" 数量")]),e._v(" "),a("li",[e._v("空载的 "),a("code",[e._v("sealing_thread")]),e._v(" 数量")]),e._v(" "),a("li",[e._v("暂停的 "),a("code",[e._v("sealing_thread")]),e._v(" 数量")]),e._v(" "),a("li",[e._v("报错的 "),a("code",[e._v("sealing_thread")]),e._v(" 数量")]),e._v(" "),a("li",[e._v("上一次上报距离当前时间的间隔")])]),e._v(" "),a("h3",{attrs:{id:"info-pause-resume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info-pause-resume"}},[e._v("#")]),e._v(" info / pause / resume")]),e._v(" "),a("p",[e._v("这一组命令都是针对指定的 venus-worker 实例执行的。")]),e._v(" "),a("p",[e._v("他们的效果等效于 venus-worker 自己的 "),a("code",[e._v("list")]),e._v(" / "),a("code",[e._v("pause")]),e._v(" / "),a("code",[e._v("resume")]),e._v("，使用方式分别为")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("venus-sector-manager util worker info <worker instance name or address>")])]),e._v(" "),a("li",[a("code",[e._v("venus-sector-manager util worker pause <worker instance name or address> <thread index>")])]),e._v(" "),a("li",[a("code",[e._v("venus-sector-manager util worker resume <worker instance name or address> <thread index> [<next state>]")])])]),e._v(" "),a("p",[e._v("具体信息可以通过 "),a("code",[e._v("help")]),e._v(" 来查看，而参数的定义和效果则和 venus-worker 管理工具保持一致。")]),e._v(" "),a("p",[e._v("举例来说：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ ./dist/bin/venus-sector-manager util worker info 127.0.0.1\n\nIndex  Loc                                                                             SectorID     Paused  PausedElapsed  State   LastErr\n0      /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store1  s-t010000-2  true    13m42s         C1Done  permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n1      /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store2  s-t010000-3  true    13m42s         C1Done  permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n2      /home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/store3  s-t010000-1  true    13m42s         C1Done  permanent: No cached parameters found for stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f [failure finding /var/tmp/filecoin-proof-parameters/v28-stacked-proof-of-replication-merkletree-poseidon_hasher-8-0-0-sha256_hasher-032d3138d22506ec0082ed72b2dcba18df18477904e35bafee82b3793b06832f.params]\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);