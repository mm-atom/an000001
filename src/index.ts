import anylogger from 'anylogger';

const logger = anylogger('userlog');

/**
 * 日志
 * @param message 消息内容
 * @param args 参数
 */
export default function an7(message: string, ...args: string[]) {
	logger.debug(message, ...args);
}
