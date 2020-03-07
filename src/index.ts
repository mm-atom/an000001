import logger from 'log4js';

const log = logger.getLogger();

/**
 * 日志
 * @param message 消息内容
 * @param args 参数
 */
export default function an7(message: string, ...args: string[]) {
	log.debug(message, ...args);
}
