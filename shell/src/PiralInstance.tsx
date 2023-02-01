import { SlCard, SlIconButton } from './lib/design/shoelace';
import {
  ComponentsState,
  ErrorComponentsState,
  Piral,
  SwitchErrorInfo,
  createInstance,
} from 'piral-core';
import { Dashboard, createDashboardApi } from 'piral-dashboard';
import { Notifications, createNotificationsApi } from 'piral-notifications';
import { Link } from 'react-router-dom';

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="error">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to="/">to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  Layout: ({ children }) => (
    <div>
      <>
        <div id="header">
          <div className="flex items-center flex-row">
            <h1>Shoelace MWE</h1>
            <a className="footer-item" href="/">
              <SlIconButton name="box-arrow-up-right" />
            </a>
          </div>
        </div>
      </>
      <Notifications />
      <div id="body">{children}</div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <SlCard className={`tile cols-${columns} rows-${rows}`}>{children}</SlCard>
  ),
  DashboardContainer: ({ children }) => <div className="tiles">{children}</div>,
  LoadingIndicator: () => <></>,
  NotificationsHost: ({ children }) => (
    <div className="notifications">{children}</div>
  ),
  NotificationsToast: ({ options, onClose, children }) => (
    <div className={`notification-toast ${options.type}`}>
      <div className="notification-toast-details">
        {options.title && (
          <div className="notification-toast-title">{options.title}</div>
        )}
        <div className="notification-toast-description">{children}</div>
      </div>
      <div className="notification-toast-close" onClick={onClose} />
    </div>
  ),
};

export interface InstanceProps {
  diamond: string;
}

export const PiralInstance = () => {
  const instance = createInstance({
    id: 'shoelace-mwe',
    state: {
      components: layout,
      errorComponents: errors,
      routes: {
        '/': Dashboard,
      },
    },
    plugins: [createDashboardApi(), createNotificationsApi()],
    async: true,
    async requestPilets() {
      const pilets: any[] = [];
      return Promise.resolve(pilets);
    },
  });

  return <Piral instance={instance} />;
};

export default PiralInstance;
