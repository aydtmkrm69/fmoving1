import { FiInfo, FiAlertTriangle, FiCheckCircle } from 'react-icons/fi';

type CalloutType = 'info' | 'warning' | 'success';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
};

const styles = {
  info: {
    container: 'bg-blue-50 border-blue-200',
    icon: 'text-blue-600',
    title: 'text-blue-800',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200',
    icon: 'text-yellow-600',
    title: 'text-yellow-800',
  },
  success: {
    container: 'bg-green-50 border-green-200',
    icon: 'text-green-600',
    title: 'text-green-800',
  },
};

const icons = {
  info: FiInfo,
  warning: FiAlertTriangle,
  success: FiCheckCircle,
};

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const Icon = icons[type];
  const style = styles[type];

  return (
    <div className={`p-4 my-6 border rounded-lg ${style.container}`}>
      <div className="flex items-start">
        <div className={`${style.icon} mt-1 ml-3`}>
          <Icon size={20} />
        </div>
        <div>
          {title && (
            <h4 className={`font-bold mb-2 ${style.title}`}>
              {title}
            </h4>
          )}
          <div className="text-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 