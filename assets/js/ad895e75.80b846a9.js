"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3581:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const i={},r="Frequently Asked Questions",s={unversionedId:"FAQ",id:"FAQ",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"Set your API endpoints",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/autogen/docs/FAQ",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/FAQ.md",tags:[],version:"current",frontMatter:{}},l=[{value:"Set your API endpoints",id:"set-your-api-endpoints",children:[{value:"Use the constructed configuration list in agents",id:"use-the-constructed-configuration-list-in-agents",children:[],level:3},{value:"Unexpected keyword argument &#39;base_url&#39;",id:"unexpected-keyword-argument-base_url",children:[],level:3},{value:"Can I use non-OpenAI models?",id:"can-i-use-non-openai-models",children:[],level:3}],level:2},{value:"Handle Rate Limit Error and Timeout Error",id:"handle-rate-limit-error-and-timeout-error",children:[],level:2},{value:"How to continue a finished conversation",id:"how-to-continue-a-finished-conversation",children:[],level:2},{value:"How do we decide what LLM is used for each agent? How many agents can be used? How do we decide how many agents in the group?",id:"how-do-we-decide-what-llm-is-used-for-each-agent-how-many-agents-can-be-used-how-do-we-decide-how-many-agents-in-the-group",children:[],level:2},{value:"Why is code not saved as file?",id:"why-is-code-not-saved-as-file",children:[],level:2},{value:"Code execution",id:"code-execution",children:[{value:"Enable Python 3 docker image",id:"enable-python-3-docker-image",children:[],level:3},{value:"Agents keep thanking each other when using <code>gpt-3.5-turbo</code>",id:"agents-keep-thanking-each-other-when-using-gpt-35-turbo",children:[],level:3}],level:2},{value:"ChromaDB fails in codespaces because of old version of sqlite3",id:"chromadb-fails-in-codespaces-because-of-old-version-of-sqlite3",children:[],level:2},{value:"How to register a reply function",id:"how-to-register-a-reply-function",children:[],level:2},{value:"How to get last message ?",id:"how-to-get-last-message-",children:[],level:2},{value:"How to get each agent message ?",id:"how-to-get-each-agent-message-",children:[],level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h2",{id:"set-your-api-endpoints"},"Set your API endpoints"),(0,a.kt)("p",null,"There are multiple ways to construct configurations for LLM inference in the ",(0,a.kt)("inlineCode",{parentName:"p"},"oai")," utilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"get_config_list"),": Generates configurations for API calls, primarily from provided API keys."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list_openai_aoai"),": Constructs a list of configurations using both Azure OpenAI and OpenAI endpoints, sourcing API keys from environment variables or local files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list_from_json"),": Loads configurations from a JSON structure, either from an environment variable or a local JSON file, with the flexibility of filtering configurations based on given criteria."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list_from_models"),": Creates configurations based on a provided list of models, useful when targeting specific models without manually specifying each configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config_list_from_dotenv"),": Constructs a configuration list from a ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file, offering a consolidated way to manage multiple API configurations and keys from a single file.")),(0,a.kt)("p",null,"We suggest that you take a look at this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_openai_utils.ipynb"},"notebook")," for full code examples of the different methods to configure your model endpoints."),(0,a.kt)("h3",{id:"use-the-constructed-configuration-list-in-agents"},"Use the constructed configuration list in agents"),(0,a.kt)("p",null,'Make sure the "config_list" is included in the ',(0,a.kt)("inlineCode",{parentName:"p"},"llm_config")," in the constructor of the LLM-based agent. For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'assistant = autogen.AssistantAgent(\n    name="assistant",\n    llm_config={"config_list": config_list}\n)\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"llm_config")," is used in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/oai/client#create"},(0,a.kt)("inlineCode",{parentName:"a"},"create"))," function for LLM inference.\nWhen ",(0,a.kt)("inlineCode",{parentName:"p"},"llm_config")," is not provided, the agent will rely on other openai settings such as ",(0,a.kt)("inlineCode",{parentName:"p"},"openai.api_key")," or the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY"),", which can also work when you'd like to use a single endpoint.\nYou can also explicitly specify that by:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'assistant = autogen.AssistantAgent(name="assistant", llm_config={"api_key": ...})\n')),(0,a.kt)("h3",{id:"unexpected-keyword-argument-base_url"},"Unexpected keyword argument 'base_url'"),(0,a.kt)("p",null,"In version >=1, OpenAI renamed their ",(0,a.kt)("inlineCode",{parentName:"p"},"api_base")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"base_url"),". So for older versions, use ",(0,a.kt)("inlineCode",{parentName:"p"},"api_base")," but for newer versions use ",(0,a.kt)("inlineCode",{parentName:"p"},"base_url"),"."),(0,a.kt)("h3",{id:"can-i-use-non-openai-models"},"Can I use non-OpenAI models?"),(0,a.kt)("p",null,"Yes. Please check ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/blog/2023/07/14/Local-LLMs"},"https://microsoft.github.io/autogen/blog/2023/07/14/Local-LLMs")," for an example."),(0,a.kt)("h2",{id:"handle-rate-limit-error-and-timeout-error"},"Handle Rate Limit Error and Timeout Error"),(0,a.kt)("p",null,"You can set ",(0,a.kt)("inlineCode",{parentName:"p"},"max_retries")," to handle rate limit error. And you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," to handle timeout error. They can all be specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"llm_config")," for an agent, which will be used in the OpenAI client for LLM inference. They can be set differently for different clients if they are set in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config_list"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_retries")," (int): the total number of times allowed for retrying failed requests for a single client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timeout")," (int): the timeout (in seconds) for a single client.")),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Use-Cases/enhanced_inference#runtime-error"},"documentation")," for more info."),(0,a.kt)("h2",{id:"how-to-continue-a-finished-conversation"},"How to continue a finished conversation"),(0,a.kt)("p",null,"When you call ",(0,a.kt)("inlineCode",{parentName:"p"},"initiate_chat")," the conversation restarts by default. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"initiate_chat(clear_history=False)")," to continue the conversation."),(0,a.kt)("h2",{id:"how-do-we-decide-what-llm-is-used-for-each-agent-how-many-agents-can-be-used-how-do-we-decide-how-many-agents-in-the-group"},"How do we decide what LLM is used for each agent? How many agents can be used? How do we decide how many agents in the group?"),(0,a.kt)("p",null,"Each agent can be customized. You can use LLMs, tools or human behind each agent. If you use an LLM for an agent, use the one best suited for its role. There is no limit of the number of agents, but start from a small number like 2, 3. The more capable is the LLM and the fewer roles you need, the fewer agents you need."),(0,a.kt)("p",null,"The default user proxy agent doesn't use LLM. If you'd like to use an LLM in UserProxyAgent, the use case could be to simulate user's behavior."),(0,a.kt)("p",null,"The default assistant agent is instructed to use both coding and language skills. It doesn't have to do coding, depending on the tasks. And you can customize the system message. So if you want to use it for coding, use a model that's good at coding."),(0,a.kt)("h2",{id:"why-is-code-not-saved-as-file"},"Why is code not saved as file?"),(0,a.kt)("p",null,"If you are using a custom system message for the coding agent, please include something like:\n",(0,a.kt)("inlineCode",{parentName:"p"},"If you want the user to save the code in a file before executing it, put # filename: <filename> inside the code block as the first line."),"\nin the system message. This line is in the default system message of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AssistantAgent"),"."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"# filename"),' doesn\'t appear in the suggested code still, consider adding explicit instructions such as "save the code to disk" in the initial user message in ',(0,a.kt)("inlineCode",{parentName:"p"},"initiate_chat"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"AssistantAgent")," doesn't save all the code by default, because there are cases in which one would just like to finish a task without saving the code."),(0,a.kt)("h2",{id:"code-execution"},"Code execution"),(0,a.kt)("p",null,"We strongly recommend using docker to execute code. There are two ways to use docker:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run autogen in a docker container. For example, when developing in GitHub codespace, the autogen runs in a docker container."),(0,a.kt)("li",{parentName:"ol"},"Run autogen outside of a docker, while perform code execution with a docker container. For this option, make sure the python package ",(0,a.kt)("inlineCode",{parentName:"li"},"docker")," is installed. When it is not installed and ",(0,a.kt)("inlineCode",{parentName:"li"},"use_docker")," is omitted in ",(0,a.kt)("inlineCode",{parentName:"li"},"code_execution_config"),", the code will be executed locally (this behavior is subject to change in future).")),(0,a.kt)("h3",{id:"enable-python-3-docker-image"},"Enable Python 3 docker image"),(0,a.kt)("p",null,"You might want to override the default docker image used for code execution. To do that set ",(0,a.kt)("inlineCode",{parentName:"p"},"use_docker")," key of ",(0,a.kt)("inlineCode",{parentName:"p"},"code_execution_config")," property to the name of the image. E.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'user_proxy = autogen.UserProxyAgent(\n    name="agent",\n    human_input_mode="TERMINATE",\n    max_consecutive_auto_reply=10,\n    code_execution_config={"work_dir":"_output", "use_docker":"python:3"},\n    llm_config=llm_config,\n    system_message=""""Reply TERMINATE if the task has been solved at full satisfaction.\nOtherwise, reply CONTINUE, or the reason why the task is not solved yet."""\n)\n')),(0,a.kt)("p",null,"If you have problems with agents running ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install")," or get errors similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"Error while fetching server API version: ('Connection aborted.', FileNotFoundError(2, 'No such file or directory')"),", you can choose ",(0,a.kt)("strong",{parentName:"p"},"'python:3'")," as image as shown in the code example above and that should solve the problem."),(0,a.kt)("h3",{id:"agents-keep-thanking-each-other-when-using-gpt-35-turbo"},"Agents keep thanking each other when using ",(0,a.kt)("inlineCode",{parentName:"h3"},"gpt-3.5-turbo")),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo"),' you may often encounter agents going into a "gratitude loop", meaning when they complete a task they will begin congratulating and thanking eachother in a continuous loop. This is a limitation in the performance of ',(0,a.kt)("inlineCode",{parentName:"p"},"gpt-3.5-turbo"),", in contrast to ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-4")," which has no problem remembering instructions. This can hinder the experimentation experience when trying to test out your own use case with cheaper models."),(0,a.kt)("p",null,'A workaround is to add an additional termination notice to the prompt. This acts a "little nudge" for the LLM to remember that they need to terminate the conversation when their task is complete. You can do this by appending a string such as the following to your user input string:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"prompt = \"Some user query\"\n\ntermination_notice = (\n    '\\n\\nDo not show appreciation in your responses, say only what is necessary. '\n    'if \"Thank you\" or \"You\\'re welcome\" are said in the conversation, then say TERMINATE '\n    'to indicate the conversation is finished and this is your last message.'\n)\n\nprompt += termination_notice\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": This workaround gets the job done around 90% of the time, but there are occurrences where the LLM still forgets to terminate the conversation."),(0,a.kt)("h2",{id:"chromadb-fails-in-codespaces-because-of-old-version-of-sqlite3"},"ChromaDB fails in codespaces because of old version of sqlite3"),(0,a.kt)("p",null,"(from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/issues/251"},"issue #251"),")"),(0,a.kt)("p",null,"Code examples that use chromadb (like retrieval) fail in codespaces due to a sqlite3 requirement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'>>> import chromadb\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\n  File "/home/vscode/.local/lib/python3.10/site-packages/chromadb/__init__.py", line 69, in <module>\n    raise RuntimeError(\nRuntimeError: Your system has an unsupported version of sqlite3. Chroma requires sqlite3 >= 3.35.0.\nPlease visit https://docs.trychroma.com/troubleshooting#sqlite to learn how to upgrade.\n')),(0,a.kt)("p",null,"Workaround:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install pysqlite3-binary")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir /home/vscode/.local/lib/python3.10/site-packages/google/colab"))),(0,a.kt)("p",null,"Explanation: Per ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/defulmere/8b9695e415a44271061cc8e272f3c300?permalink_comment_id=4711478#gistcomment-4711478"},"this gist"),", linked from the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.trychroma.com/troubleshooting#sqlite"},"chromadb docs"),", adding this folder triggers chromadb to use pysqlite3 instead of the default."),(0,a.kt)("h2",{id:"how-to-register-a-reply-function"},"How to register a reply function"),(0,a.kt)("p",null,"(from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/issues/478"},"issue #478"),")"),(0,a.kt)("p",null,"See here ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#register_reply"},"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#register_reply")),(0,a.kt)("p",null," For example, you can register a reply function that gets called when ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_reply")," is called for an agent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def print_messages(recipient, messages, sender, config):\n    if "callback" in config and  config["callback"] is not None:\n        callback = config["callback"]\n        callback(sender, recipient, messages[-1])\n    print(f"Messages sent to: {recipient.name} | num messages: {len(messages)}")\n    return False, None  # required to ensure the agent communication flow continues\n\nuser_proxy.register_reply(\n    [autogen.Agent, None],\n    reply_func=print_messages,\n    config={"callback": None},\n)\n\nassistant.register_reply(\n    [autogen.Agent, None],\n    reply_func=print_messages,\n    config={"callback": None},\n)\n')),(0,a.kt)("p",null,"In the above, we register a ",(0,a.kt)("inlineCode",{parentName:"p"},"print_messages")," function that is called each time the agent's ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_reply")," is triggered after receiving a message."),(0,a.kt)("h2",{id:"how-to-get-last-message-"},"How to get last message ?"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#last_message"},"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent/#last_message")),(0,a.kt)("h2",{id:"how-to-get-each-agent-message-"},"How to get each agent message ?"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#chat_messages"},"https://microsoft.github.io/autogen/docs/reference/agentchat/conversable_agent#chat_messages")))}u.isMDXComponent=!0}}]);