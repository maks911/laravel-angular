import "core-js/features/reflect";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './app/sass/style.scss';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
