import { App, Editor, MarkdownView, Notice, Plugin } from 'obsidian';
import { YuquePublisherSettings, DEFAULT_SETTINGS } from './types';
import { YuquePublisherSettingTab } from './settings';

export default class YuquePublisher extends Plugin {
    settings: YuquePublisherSettings;

    async onload() {
        await this.loadSettings();

        // 添加发布命令
        this.addCommand({
            id: 'publish-to-yuque',
            name: '发布到语雀',
            editorCallback: (editor: Editor, view: MarkdownView) => {
                this.publishToYuque(editor.getValue());
            }
        });

        // 添加设置选项卡
        this.addSettingTab(new YuquePublisherSettingTab(this.app, this));
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }

    async publishToYuque(content: string) {
        if (!this.settings.token || !this.settings.namespace) {
            new Notice('请先在设置中配置语雀 Token 和知识库路径');
            return;
        }

        try {
            const response = await fetch(`https://www.yuque.com/api/v2/repos/${this.settings.namespace}/docs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Auth-Token': this.settings.token
                },
                body: JSON.stringify({
                    title: this.getCurrentFileName(),
                    body: content,
                    format: 'markdown'
                })
            });

            const responseData = await response.json();

            if (response.ok) {
                new Notice(`发布成功！文档地址：${responseData.data.url}`);
            } else {
                new Notice(`发布失败：${responseData.message}`);
            }
        } catch (error) {
            new Notice(`发布失败：${error.message}`);
        }
    }

    getCurrentFileName(): string {
        const file = this.app.workspace.getActiveFile();
        return file ? file.basename : '未命名文档';
    }
} 