import { App, PluginSettingTab, Setting } from 'obsidian';
import YuquePublisher from './main';

export class YuquePublisherSettingTab extends PluginSettingTab {
    plugin: YuquePublisher;

    constructor(app: App, plugin: YuquePublisher) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const {containerEl} = this;

        containerEl.empty();

        containerEl.createEl('h2', {text: '语雀发布设置'});

        new Setting(containerEl)
            .setName('语雀 Token')
            .setDesc('在语雀个人设置页面获取 Token')
            .addText(text => text
                .setPlaceholder('输入你的语雀 Token')
                .setValue(this.plugin.settings.token)
                .onChange(async (value) => {
                    this.plugin.settings.token = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('知识库路径')
            .setDesc('格式：username/repo')
            .addText(text => text
                .setPlaceholder('例如：username/repo')
                .setValue(this.plugin.settings.namespace)
                .onChange(async (value) => {
                    this.plugin.settings.namespace = value;
                    await this.plugin.saveSettings();
                }));
    }
} 